import { createAsyncThunk } from "@reduxjs/toolkit";
import { OrderService } from "../../services/orderService";
import { EOrderPaidStatus, EOrderStatus } from "../../Enums/EOrderStatus";
import { OrderState } from "./orderSlice";
export const fetchOrdersBar = createAsyncThunk(
  "orders/fetchedOrdersBar",
  async (arg?: any) => {
    try {
      const response = await OrderService.findAll({ pageNumber: 1 });
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const fetchAllOrders = createAsyncThunk(
  "orders/fetchAllOrders",
  async (arg?: any) => {
    try {
      const response = await OrderService.findAll({
        pageNumber: arg.pageNumber || 1,
      });
      return { ...response.data, status: EOrderStatus.ALL };
    } catch (err) {
      console.log(err);
    }
  }
);

export const fetchPendingOrders = createAsyncThunk(
  "orders/fetchPendingOrders",
  async (arg: any, { getState }) => {
    try {
      const state: OrderState = (getState() as any).order;
      const response = await OrderService.findAll({
        ...state.ordersPage.params,
        pageNumber: arg.pageNumber || 1,
        status: EOrderStatus.PENDING,
      });
      return { ...response.data, status: EOrderStatus.PENDING };
    } catch (err) {
      console.log(err);
    }
  }
);

export const fetchProcessingOrders = createAsyncThunk(
  "orders/fetchedProcessingOrders",
  async (arg: any, { getState }) => {
    try {
      const state: OrderState = (getState() as any).order;
      const response = await OrderService.findAll({
        ...state.ordersPage.params,
        pageNumber: arg.pageNumber || 1,
        status: EOrderStatus.PROCESSING,
      });
      return { ...response.data, status: EOrderStatus.PROCESSING };
    } catch (err) {
      console.log(err);
    }
  }
);

export const fetchCancelledOrders = createAsyncThunk(
  "orders/fetchCancelledOrders",
  async (arg: any, { getState }) => {
    try {
      const state: OrderState = (getState() as any).order;
      const response = await OrderService.findAll({
        ...state.ordersPage.params,
        pageNumber: arg.pageNumber || 1,
        status: EOrderStatus.CANCELLED,
      });
      return { ...response.data, status: EOrderStatus.CANCELLED };
    } catch (err) {
      console.log(err);
    }
  }
);

export const fetchDelayedOrders = createAsyncThunk(
  "orders/fetchDelayedOrders",
  async (arg: any, { getState }) => {
    try {
      const state: OrderState = (getState() as any).order;
      const response = await OrderService.findAll({
        ...state.ordersPage.params,
        pageNumber: arg.pageNumber || 1,
        status: EOrderStatus.DELAYED,
      });
      return { ...response.data, status: EOrderStatus.DELAYED };
    } catch (err) {
      console.log(err);
    }
  }
);

export const fetchCompletedOrders = createAsyncThunk(
  "orders/fetchCompletedOrders",
  async (arg: any, { getState }) => {
    try {
      const state: OrderState = (getState() as any).order;
      const response = await OrderService.findAll({
        ...state.ordersPage.params,
        pageNumber: arg.pageNumber || 1,
        status: EOrderStatus.COMPLETED,
      });
      return { ...response.data, status: EOrderStatus.COMPLETED };
    } catch (err) {
      console.log(err);
    }
  }
);

export const paginateOrders = createAsyncThunk(
  `orders/paginateOrders`,
  async (arg: any, { getState }) => {
    try {
      const state: OrderState = (getState() as any).order;
      const response = await OrderService.findAll({
        pageNumber: arg.pageNumber || 1,
        ...state.ordersPage.params,
      });
      return { ...response.data, ...state.ordersPage.params };
    } catch (err) {
      return err;
    }
  }
);

const fetchOrder = createAsyncThunk(
  "orders/:id",
  async (args: any, { rejectWithValue }) => {
    try {
      const { id } = args;
      const res = await OrderService.findOrder({ id });
      return res.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const revalidateOrders = createAsyncThunk(
  `orders/revalidateOrders`,
  async (arg: any, { getState }) => {
    try {
      const state: OrderState = (getState() as any).order;
      const response = await OrderService.findAll({
        pageNumber: state.ordersPage.current_page,
        ...state.ordersPage.params,
      });
      return { data: response.data.data, ...state.ordersPage.params };
    } catch (err) {
      console.log(err);
      return err;
    }
  }
);

const acceptOrder = createAsyncThunk(
  `orders/accept`,
  async (args: any, { dispatch, rejectWithValue }) => {
    try {
      const { id } = args;
      const res = await OrderService.acceptOrder({ id });
      return res.data;
    } catch (err: any) {
      console.log(err);
      return rejectWithValue(err.response.data);
    }
  }
);

const completeOrder = createAsyncThunk(
  `orders/complete`,
  async (args: any, { dispatch, rejectWithValue }) => {
    try {
      const { id } = args;
      const res = await OrderService.completeOrder({ id });
      return res.data;
    } catch (err: any) {
      console.log(err);
      return rejectWithValue(err.response.data);
    }
  }
);

const payOrder = createAsyncThunk(
  `orders/pay`,
  async (args: any, { dispatch, rejectWithValue }) => {
    try {
      const { id } = args;
      const res = await OrderService.payOrder({ id });
      return res.data;
    } catch (err: any) {
      console.log(err);
      return rejectWithValue(err.response.data);
    }
  }
);

const rejectOrder = createAsyncThunk(
  `orders/reject`,
  async (args: any, { dispatch, rejectWithValue }) => {
    try {
      const { id } = args;
      const res = await OrderService.rejectOrder({ id });
      return res.data;
    } catch (err: any) {
      console.log(err);
      return rejectWithValue(err.response.data);
    }
  }
);

const delayOrder = createAsyncThunk(
  `orders/delay`,
  async (args: any, { dispatch, rejectWithValue }) => {
    try {
      const { id, body } = args;
      const res = await OrderService.delayOrder({ id, body });
      return res.data;
    } catch (err: any) {
      console.log(err);
      return rejectWithValue(err.response.data);
    }
  }
);
const getManualOrders = createAsyncThunk(
  `orders/getManualOrders`,
  async (args: { id: string }) => {
    const { id } = args;
    try {
      const orders = await OrderService.getManualOrder(id);

      return orders.data;
    } catch (error) {}
  }
);
const addItemOrder = createAsyncThunk(
  `orders/addItemOrder`,
  async (
    args: {
      data: { product_id: string; features: Array<string>; quantity: number };
      id: any;
    },
    { rejectWithValue, dispatch }
  ) => {
    const { data, id } = args;
    try {
      await OrderService.addItemOrder(data, id);
      dispatch(getManualOrders({ id }));
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);
const updateItemOrder = createAsyncThunk(
  `orders/addItemOrder`,
  async (
    args: {
      data: { product_id: string; features: Array<string>; quantity: number };
      id: any;
    },
    { rejectWithValue, dispatch }
  ) => {
    const { data, id } = args;
    try {
      await OrderService.updateItemOrder(data, id);
      dispatch(getManualOrders({ id }));
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);
const deleteItemOrder = createAsyncThunk(
  "ordersItem/delete",
  async (args: { id: string }, { dispatch, rejectWithValue }) => {
    const { id } = args;
    try {
      await OrderService.deleteItemOrder(id);
      dispatch(getManualOrders({ id }));
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

const getCartItems = createAsyncThunk(
  "cart/items/{id}",
  async (args: { id: number }, { dispatch, rejectWithValue }) => {
    const { id } = args;
    try {
      console.log("items cart");
      const res = await OrderService.getCartItems(id);
      return res.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const OrderActions = {
  fetchOrdersBar,
  fetchAllOrders,
  fetchPendingOrders,
  fetchProcessingOrders,
  fetchCancelledOrders,
  fetchCompletedOrders,
  fetchDelayedOrders,
  fetchOrder,
  paginateOrders,
  revalidateOrders,
  deleteItemOrder,
  acceptOrder,
  completeOrder,
  payOrder,
  rejectOrder,
  delayOrder,
  getManualOrders,
  addItemOrder,
  updateItemOrder,
  getCartItems,
};
