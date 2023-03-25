import { createSlice, isAnyOf, PayloadAction } from "@reduxjs/toolkit";
import { EOrderPaidStatus, EOrderStatus } from "../../Enums/EOrderStatus";
import SocketService from "../../services/socketService";
import { customOrderMatchers } from "./matchers";
import { OrderActions } from "./thunkFunctions";

const {
  isOrderActionFullfied,
  isCurrOrderActionFulifilled,
  isOrderActionPending,
  isOrderActionRejected,
} = customOrderMatchers;

let effect = typeof Audio != "undefined" ? new Audio("/mixk.wav") : undefined;
export interface OrderState {
  ordersBar: {
    data: any[];
  };
  ordersPage: {
    data: [];
    current_page: number;
    last_page: number;
    total: number;
    per_page: number;
    params: {
      status: number;
      paid: number;
    };
    isLoading: boolean;
  };
  currOrder: {
    data: any;
    isAcceptLoading: boolean;
    isRejectLoading: boolean;
    isDelayLoading: boolean;
    isCompleteLoading: boolean;
    isPayLoading: boolean;
    isErr: boolean;
    err: any;
  };
  manualOrders: { data: Array<any>; isLoading: boolean };
  cart: { data: Array<any>; isLoading: boolean };
  isLoading: boolean;
  isRead: boolean;
  isErr: boolean;
  errMsg: string;
}
const initialState: OrderState = {
  ordersBar: {
    data: [],
  },
  ordersPage: {
    data: [],
    current_page: 1,
    last_page: 1,
    total: 12,
    per_page: 12,
    params: {
      status: EOrderStatus.ALL,
      paid: EOrderPaidStatus.ALL,
    },
    isLoading: true,
  },
  manualOrders: { data: [], isLoading: false },
  cart: { data: [], isLoading: false },
  currOrder: {
    data: null,
    isAcceptLoading: false,
    isDelayLoading: false,
    isPayLoading: false,
    isRejectLoading: false,
    isCompleteLoading: false,
    isErr: false,
    err: "",
  },
  isLoading: false,
  isRead: true,
  isErr: false,
  errMsg: "",
};

//const isOrderAction: AsyncThunk<any, any, {}>[] = Object.keys(OrderActions).map((order: any) => OrderActions[order].fulfilled);
const {
  fetchOrdersBar,
  fetchDelayedOrders,
  fetchAllOrders,
  fetchPendingOrders,
  fetchProcessingOrders,
  fetchCancelledOrders,
  fetchCompletedOrders,
  paginateOrders,
  revalidateOrders,
}: any = OrderActions;

const assignState = (state: OrderState, action: PayloadAction<any>) => {
  state.ordersPage.data = action.payload?.data.data;
  state.ordersPage.current_page = action.payload?.data.current_page;
  state.ordersPage.last_page = action.payload?.data.last_page;
  state.ordersPage.per_page = action.payload?.data.per_page;
  state.ordersPage.total = action.payload?.data.total;
  state.ordersPage.isLoading = false;
  state.ordersPage.params.status =
    action.payload?.status != undefined
      ? action.payload?.status
      : EOrderStatus.ALL;
  state.isErr = false;
  state.errMsg = "";
};

export const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    setOrders: (state: OrderState, action: PayloadAction<Array<any>>) => {
      state.ordersBar.data = action.payload.slice();
    },
    addOrder: (state: OrderState, action: PayloadAction<Object>) => {
      if (!effect) effect = new Audio("/mixk.wav");
      effect.play();
      effect.loop = true;
      state.isRead = false;
      state.ordersBar.data = [action.payload].concat(state.ordersBar.data);
      state.ordersBar.data.pop();
    },
    setPaid: (state: OrderState, action: PayloadAction<EOrderPaidStatus>) => {
      state.ordersPage.params.paid = action.payload;
    },
    removeOrder: (state: OrderState, action: PayloadAction<any>) => {
      state.ordersBar?.data?.filter((order) => order.id != action.payload.id);
    },
    setIsOrderLoading: (state: OrderState) => {
      state.ordersPage.isLoading = true;
    },
    markAsRead: (state: OrderState, action?: any) => {
      state.isRead = true;
      if (effect) {
        effect.pause();
      }
      if (action?.payload?.notify)
        SocketService.Instance().then((socket) => socket.dispatchReadOrder());
    },
    setCurrOrder: (state: OrderState, action: any) => {
      state.currOrder.data = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(OrderActions.fetchOrder.fulfilled, (state, action) => {
      state.currOrder.data = action.payload;
    });

    builder.addCase(OrderActions.acceptOrder.pending, (state, action) => {
      state.currOrder.isAcceptLoading = true;
    });

    builder.addCase(OrderActions.rejectOrder.pending, (state, action) => {
      state.currOrder.isRejectLoading = true;
    });

    builder.addCase(OrderActions.delayOrder.pending, (state, action) => {
      state.currOrder.isDelayLoading = true;
    });
    builder.addCase(OrderActions.payOrder.pending, (state, action) => {
      state.currOrder.isPayLoading = true;
    });
    builder.addCase(OrderActions.getManualOrders.pending, (state, action) => {
      state.manualOrders.isLoading = true;
    });

    builder.addCase(OrderActions.fetchOrder.rejected, (state, action) => {
      state.currOrder.isErr = true;
      state.currOrder.err = action.payload;
    });
    builder.addCase(OrderActions.getManualOrders.fulfilled, (state, action) => {
      state.manualOrders.data = action.payload;
      state.manualOrders.isLoading = false;
    });

    builder.addCase(OrderActions.getCartItems.pending, (state, action) => {
      state.cart.isLoading = true;
    });
    builder.addCase(OrderActions.getCartItems.fulfilled, (state, action) => {
      state.cart.data = action.payload;
      state.cart.isLoading = false;
    });
    builder.addMatcher(isOrderActionPending, (state, action) => {
      if (action.type.split("/")[0] == "orders") {
        state.ordersPage.isLoading = true;
        state.isLoading = true;
      }
    });

    builder.addMatcher(
      isAnyOf(isOrderActionFullfied, isOrderActionRejected),
      (state) => {
        state.ordersPage.isLoading = false;
        state.isLoading = false;
      }
    );
    builder.addMatcher(isOrderActionFullfied, (state, action: any) => {
      assignState(state, action);
    });
    builder.addMatcher(
      isOrderActionRejected,
      (state: OrderState, action: any) => {
        state.isErr = true;
        state.errMsg = action.payload.msg;
      }
    );
    builder.addMatcher(
      isAnyOf(
        OrderActions.acceptOrder.fulfilled,
        OrderActions.completeOrder.fulfilled,
        OrderActions.delayOrder.fulfilled,
        OrderActions.rejectOrder.fulfilled,
        OrderActions.payOrder.fulfilled
      ),
      (state, action) => {
        state.currOrder.data = { ...state.currOrder.data, ...action.payload };
      }
    );

    builder.addMatcher(
      isCurrOrderActionFulifilled,
      (state: OrderState, action: any) => {
        state.currOrder.data = { ...state.currOrder.data, ...action.payload };
      }
    );

    builder.addMatcher(
      isAnyOf(
        OrderActions.acceptOrder.rejected,
        OrderActions.acceptOrder.fulfilled
      ),
      (state) => {
        state.currOrder.isAcceptLoading = false;
      }
    );

    builder.addMatcher(
      isAnyOf(
        OrderActions.completeOrder.rejected,
        OrderActions.completeOrder.fulfilled
      ),
      (state) => {
        state.currOrder.isCompleteLoading = false;
      }
    );

    builder.addMatcher(
      isAnyOf(
        OrderActions.delayOrder.rejected,
        OrderActions.delayOrder.fulfilled
      ),
      (state) => {
        state.currOrder.isDelayLoading = false;
      }
    );

    builder.addMatcher(
      isAnyOf(
        OrderActions.rejectOrder.rejected,
        OrderActions.rejectOrder.fulfilled
      ),
      (state) => {
        state.currOrder.isRejectLoading = false;
      }
    );

    builder.addMatcher(
      isAnyOf(OrderActions.payOrder.rejected, OrderActions.payOrder.fulfilled),
      (state) => {
        state.currOrder.isPayLoading = false;
      }
    );
  },
});
// Action creators are generated for each case reducer function
export const {
  setOrders,
  setIsOrderLoading,
  addOrder,
  removeOrder,
  markAsRead,
} = orderSlice.actions;
export default orderSlice.reducer;
