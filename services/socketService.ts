import { io, Socket } from "socket.io-client";
import API from "../lib/axios";
import Cookies from "js-cookie";

interface ServerToClientEvents {
  noArg: () => void;
  basicEmit: (a: number, b: string, c: Buffer) => void;
  withAck: (d: string, callback: (e: number) => void) => void;
}

interface ClientToServerEvents {
  hello: () => void;
}

export default class SocketService {
  private static readonly ENDPOINT: String = "https://socket.matjarbot.app";
  private static instance: SocketService;
  private socket;
  private userData: any;
  private constructor(userData: any) {
    console.log("constructing socket service ");
    this.userData = userData;
    this.socket = io(`${SocketService.ENDPOINT}`, {
      query: {
        token: Cookies.get("storeToken"),
        store_id: userData.id,
      },
    });
  }

  public static async Instance() {
    if (!this.instance) {
      const token = Cookies.get("storeToken");
      //.then(res => this.userData = res?.data?.data)
      const res = await API.get("api/get_store_info", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      this.instance = new this(res?.data?.data);
    }
    return this.instance;
  }

  listenForOrders(callback: any) {
    console.log(`stores.${this.userData.id}.orders`);
    this.socket.on(`stores.${this.userData.id}.orders`, callback);
  }

  listenForOrdersUpdate(callback: any) {
    this.socket.on(`stores.${this.userData.id}.order`, callback);
  }

  listenForMessages(callback: any) {
    this.socket.on(`stores.${this.userData.id}.message`, callback);
  }

  listenForOnlineChat(callback: any) {
    this.socket.on(`stores.${this.userData.id}.online`, callback);
  }

  listenForReadOrder(callback: any) {
    this.socket.on(
      `stores.${this.userData.id}.read_order_notification`,
      callback
    );
  }

  listenForReadMessages(callback: any) {
    this.socket.on(
      `stores.${this.userData.id}.read_messages_notification`,
      callback
    );
  }

  dispatchReadOrder() {
    this.socket.emit(`read_order_notification`, { store_id: this.userData.id });
  }
  dispatchReadMessages() {
    this.socket.emit(`read_messages_notification`, {
      store_id: this.userData.id,
    });
  }

  disconnect() {
    this.socket.disconnect();
  }
}
