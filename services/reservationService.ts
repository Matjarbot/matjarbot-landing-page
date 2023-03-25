import API from "../lib/axios";
const findAll = async ({ filter }: { filter: any }) => {
  console.log(filter);
  const reservations = await API.get(`api/reservations/all`, {
    params: { ...filter },
  });
  return reservations.data;
};

const findAllItems = async ({
  page,
  status,
  paid,
  employee_id,
  phone_reservation,
  day,
}: {
  page?: Number;
  status?: Number;
  paid?: Number;
  employee_id?: Number;
  phone_reservation?: string;
  day?: string;
}) => {
  status = status != undefined && status > -1 ? status : undefined;
  paid = paid != undefined && paid > -1 ? paid : undefined;
  const reservations = await API.get(`api/reservations`, {
    params: { page, status, paid, employee_id, phone_reservation, day },
  });
  return reservations;
};
const findItem = async (id: number) => {
  const res = await API.get(`api/reservations/reservation/${id}`);
  return res.data;
};
const findReservation = async ({ id }: { id: number }) => {
  const res = await API.get(`api/reservations/reservation/${id}`);
  return res.data;
};

const acceptReserve = async ({ id }: { id: number }) => {
  const res = await API.post(`api/reservations/item/accept/${id}`);
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

const cancelReserve = async ({ id }: { id: number }) => {
  const res = await API.post(`api/reservations/item/reject/${id}`);
  return res.data;
};

const delayReserve = async ({ id }: { id: number }) => {
  const res = await API.post(`api/reservations/item/delay/${id}`);
  return res.data;
};
const getEmployees = async () => {
  const res = await API.get(`api/employees`);
  return res.data;
};
const getAvailableEmployees = async ({ item_id }: { item_id: number }) => {
  const res = await API.get(`api/reservations/employees/${item_id}`);
  return res.data;
};
const updateEmployee = async ({
  item_id,
  employee_id,
}: {
  item_id: number;
  employee_id: string;
}) => {
  const res = await API.post(`api/reservations/item/employee/${item_id}`, {
    employee_id,
  });

  return res.data;
};
const addNotes = async ({ id, notes }: { id: number; notes: string }) => {
  const res = await API.post(`api/reservations/item/add_notes/${id}`, {
    notes,
  });
  return res.data;
};

const addReservation = async ({
  lang,
  phone,
  full_name,
}: {
  lang: string;
  phone: string;
  full_name: string;
}) => {
  const res = await API.post("api/reservations/store_step_one", {
    lang,
    phone,
    full_name,
  });
  return res.data;
};

const addItemReservation = async (
  data: {
    product_id: string;
    features: Array<string>;
    quantity?: number;
    employee_id?: number;
    start_time: string;
    status: number;
    is_paid?: number;
  },
  id: any
) => {
  await API.post(`api/reservations/item_reservation/add/${id}`, data);
};

const deleteItemReservation = async (id: string) => {
  await API.post(`api/reservations/item/delete/${id}`);
};

const addReservationAddress = async (
  data: {
    state: string;
    city_id: string;
    street: string;
    block: string;
    num_home: string;
    is_delivery: number;
  },
  id: any
) => {
  const res = await API.post(`api/reservations/store_step_two/${id}`, data);
  return res.data;
};

const getStates = async () => {
  const res = await API.get("api/reservations/get_states");
  return res.data;
};

const getReservationItems = async (id: number) => {
  const res = await API.get(`api/reservations/get_items/${id}`);
  return res.data;
};

const getEmployeesForDay = async ({ date }: { date: string }) => {
  const res = await API.post(`api/reservations/get_employees_for_day`, {
    date_employee: date,
  });
  return res.data;
};

const getTimesForEmployee = async ({
  employee_id,
  product_id,
  date,
}: {
  employee_id: number;
  product_id: number;
  date: string;
}) => {
  const res = await API.post(`api/reservations/get_times_for_employee`, {
    employee_id,
    product_id,
    date,
  });

  return res.data;
};

const storeReservation = async ({ id }: { id: number }) => {
  const res = await API.post(`api/reservations/store_step_three/${id}`, {
    is_paid: 0,
  });
};

export const ReservationService = {
  findAll,
  findAllItems,
  findReservation,
  acceptReserve,
  completeOrder,
  payOrder,
  cancelReserve,
  delayReserve,
  getEmployees,
  findItem,
  updateEmployee,
  addNotes,
  getAvailableEmployees,
  addReservationAddress,
  addReservation,
  addItemReservation,
  deleteItemReservation,
  getStates,
  getReservationItems,
  getEmployeesForDay,
  getTimesForEmployee,
  storeReservation,
};
