import API from "../lib/axios";
const findAll = async ({
  pageNumber,
  status,
  paid,
}: { pageNumber?: Number; status?: Number; paid?: Number } = {}) => {
  status = status != undefined && status > -1 ? status : undefined;
  paid = paid != undefined && paid > -1 ? paid : undefined;
  const orders = await API.get(`api/orders`, {
    params: { page: pageNumber, status, paid },
  });
  return orders;
};

const findOrder = async ({ id }: { id: number }) => {
  const res = await API.get(`api/orders/${id}`);
  return res.data;
};

const acceptOrder = async ({ id }: { id: number }) => {
  const res = await API.post(`api/orders/accept/${id}`);
  return res.data;
};

const completeOrder = async ({ id }: { id: number }) => {
  const res = await API.post(`api/orders/complete/${id}`);
  return res.data;
};

const payOrder = async ({ id }: { id: number }) => {
  const res = await API.post(`api/orders/paid/${id}`);
  return res.data;
};

const rejectOrder = async ({ id }: { id: number }) => {
  const res = await API.post(`api/orders/reject/${id}`);
  return res.data;
};

const delayOrder = async ({ id, body }: { id: number; body: any }) => {
  const res = await API.post(`api/orders/delay/${id}`, body);
  return res.data;
};
const addOrder = async ({
  lang,
  phone,
  full_name,
  
}: {
  lang: string;
  phone: string;
  full_name: string;
}) => {
  const res = await API.post("api/orders/store_step_one", {
    lang,
    phone,
    full_name,
  });
  return res.data;
};
const addOrderAddress = async (
  data: {
    state: string;
    city_id: string;
    street: string;
    block: string;
    num_home: string;
    is_delivery:number;
  },
  id: any
) => {
  const res = await API.post(`api/orders/store_step_two/${id}`, data);
  return res.data;
};
const getManualOrder = async (id: string) => {
  const res = await API.get(`api/orders/get_items/${id}`);
  return res.data;
};
const manualOrdersStatus = async (
  data: { is_paid: string; status: string },
  id: any
) => {
  const res = await API.post(`api/orders/store_step_three/${id}`, data);
  return res.data;
};
const addItemOrder = async (
  data: {
    product_id: string;
    features: Array<string>;
    quantity: number;
  },
  id: any
) => {
  await API.post(`api/orders/item/add/${id}`, data);
};
const updateItemOrder = async (
  data: {
    product_id: string;
    features: Array<string>;
    quantity: number;
  },
  id: any
) => {
  await API.post(`api/orders/item/update/${id}`, data);
};

const deleteItemOrder = async (id: string) => {
  await API.post(`api/orders/item/delete/${id}`);
};

const getCartItems = async (id: number) => {
  const res = await API.get(`api/orders/get_items/${id}`);
  return res.data;
};

const storeCart = async ({id, status, is_paid}:{id: number, status:number, is_paid:number}) => {
  const res = await API.post(`api/orders/store_step_three/${id}`, {
    status,
    is_paid,
  });
  return res.data;
};

const updateItemQuantity = async (id: number, quantity: number) => {
  await API.post(`api/orders/item/update_quantity/${id}`, {
    quantity,
  });
};
export const OrderService = {
  findAll,
  findOrder,
  getCartItems,
  acceptOrder,
  completeOrder,
  payOrder,
  rejectOrder,
  delayOrder,
  addOrder,
  addOrderAddress,
  getManualOrder,
  manualOrdersStatus,
  addItemOrder,
  deleteItemOrder,
  updateItemOrder,
  storeCart,
  updateItemQuantity,
};
