import { isAllOf, isAsyncThunkAction, isFulfilled, isPending, isRejected } from "@reduxjs/toolkit";
import { OrderActions } from "./thunkFunctions";
const { fetchAllOrders,
    fetchCancelledOrders,
    fetchCompletedOrders,
    fetchDelayedOrders,
    fetchPendingOrders,
    fetchProcessingOrders,
    fetchOrdersBar,
    acceptOrder,
    completeOrder,
    delayOrder,
    rejectOrder,
    payOrder,
    revalidateOrders,
    paginateOrders
} = OrderActions

const isOrderAction = isAsyncThunkAction(fetchAllOrders,
    fetchCancelledOrders,
    fetchCompletedOrders,
    fetchDelayedOrders,
    fetchPendingOrders,
    fetchProcessingOrders,
    fetchOrdersBar,
    paginateOrders,
    revalidateOrders
)

const isCurrOrderAction = isAsyncThunkAction(
    acceptOrder,
    completeOrder,
    delayOrder,
    rejectOrder,
    payOrder
)

const isCurrOrderActionFulifilled = isAllOf(isCurrOrderAction, isFulfilled);

const isOrderActionPending = isAllOf(isOrderAction, isPending)

const isOrderActionFullfied = isAllOf(isOrderAction, isFulfilled)

const isOrderActionRejected = isAllOf(isOrderAction, isRejected)

export const customOrderMatchers = {
    isOrderActionPending,
    isOrderActionFullfied,
    isOrderActionRejected,
    isOrderAction,
    isCurrOrderActionFulifilled
}