import { ConfigProvider } from "antd";
import en from "../langs/en/en.json";
import ar from "../langs/ar/ar.json";
import { initReactI18next } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../store/hooks";

import Cookies from "js-cookie";
import i18n from "i18next";
import { MessagesActions } from "../store/messages/messagesActions";
import { message } from "antd";
import { OrderActions } from "../store/orders/orderActions";
import { addOrder } from "../store/orders/orderSlice";
import { useLayoutEffect } from "react";
import {
  fetchOrdersBar,
  revalidateOrders,
} from "../store/orders/thunkFunctions";
import { UserActions } from "../store/user/UserActions";
import SocketService from "../services/socketService";
import { NextPage } from "next";

const AppWrapper = (props: any) => {
  const dispatch = useAppDispatch();
  const notifications = useAppSelector((state) => state.notification);
  const isLoading = useAppSelector((state) => state.user.isLoading);
  const lang = useAppSelector((state) => state.language.type);
  useLayoutEffect(() => {
    if (notifications.isShown && notifications.message)
      message.open(notifications.message);
  }, [notifications.isShown]);

  useLayoutEffect(() => {
    initialize();
  }, [Cookies.get("storeToken")]);

  const initialize = async () => {
    if (Cookies.get("storeToken")) {
      await dispatch(UserActions.setToken());
      dispatch(fetchOrdersBar({ pageNumber: 1 }));
      listenToSocket();
      dispatch(UserActions.fetchUserData());
      dispatch(UserActions.unusedAreas());
      dispatch(MessagesActions.fetchConversations());
    } else {
      dispatch(UserActions.show());
    }
  };

  const listenToSocket = async () => {
    try {
      const socket = await SocketService.Instance();
      socket.listenForOrders((data: any) => {
        dispatch(revalidateOrders({}));
        dispatch(addOrder(data.order));
      });
      socket.listenForOrdersUpdate((data: any) => {});
      socket.listenForMessages((data: any) => {
        dispatch(MessagesActions.addMessage(data));
        dispatch(MessagesActions.revalidateConversations({}));
      });
      socket.listenForOnlineChat((data: any) => {});

      socket.listenForReadOrder((data: any) => {
        dispatch(OrderActions.markAsRead({ notify: false }));
      });
      socket.listenForReadMessages((data: any) => {
        dispatch(MessagesActions.makeRead({ notify: false }));
      });
    } catch (err) {}
  };
  const locales = {
    en: {
      translation: en,
    },
    ar: {
      translation: ar,
    },
  };
  useLayoutEffect(() => {
    if (!lang) {
      Cookies.set("lang", "ar");
    }
  }, []);
  i18n.use(initReactI18next).init({
    resources: locales,
    lng: lang,

    fallbackLng: "ar",
    interpolation: {
      escapeValue: false,
    },
  });
  return (
    <ConfigProvider direction={lang === "ar" ? "rtl" : "ltr"}>
      {!isLoading && props.children}
    </ConfigProvider>
  );
};
export default AppWrapper;
