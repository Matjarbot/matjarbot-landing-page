import {
  configureStore,
  createListenerMiddleware,
  isAnyOf,
} from "@reduxjs/toolkit";
import categorySlice from "./categories/categorySlice";
import orderSlice from "./orders/orderSlice";
import citiesSlice from "./cities/citiesSlice";
import productSlice from "./product/productSlice";
import messagesSlice from "./messages/messagesSlice";
import userSlice from "./user/userSclice";
import languageSlice from "./languages/languagesSlice";
import themeSlice from "./theme/themesSlice";
import { OrderActions } from "./orders/orderActions";
import notificationSlice, {
  reset,
  showMessage,
} from "./notification/notificationSlice";
import { notificationsMessageCreator } from "./notification/messagesCreator";
import { ProductActions } from "./product/productAction";
import reservationSlice from "./reservation/reservationSlice";
const { acceptOrder, completeOrder, payOrder, rejectOrder, delayOrder } =
  OrderActions;
const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  actionCreator: showMessage,
  effect: async (action, listenerApi) => {
    await listenerApi.delay(3);
    listenerApi.dispatch(reset);
  },
});

listenerMiddleware.startListening({
  matcher: isAnyOf(
    acceptOrder.fulfilled,
    completeOrder.fulfilled,
    payOrder.fulfilled,
    rejectOrder.fulfilled,
    delayOrder.fulfilled,
    ProductActions.updateProductQuantity.fulfilled
  ),
  effect: async (action, listenerApi) => {
    const message = notificationsMessageCreator[action.type];
    listenerApi.dispatch(showMessage(message));
  },
});

listenerMiddleware.startListening({
  actionCreator: OrderActions.setPaid,
  effect: async (action, listenerApi) => {
    listenerApi.dispatch(OrderActions.revalidateOrders({}));
  },
});

export const store = configureStore({
  reducer: {
    user: userSlice,
    order: orderSlice,
    product: productSlice,
    category: categorySlice,
    notification: notificationSlice,
    reservation: reservationSlice,
    cities: citiesSlice,
    chats: messagesSlice,
    language: languageSlice,
    theme: themeSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listenerMiddleware.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
