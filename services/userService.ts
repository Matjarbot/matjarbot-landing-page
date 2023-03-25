import cookies from "next-cookies";
import API from "../lib/axios";
import axios from "axios";
const login = async (email: string, password: string) => {
  const res = await API.post("api/login", { email, password });
  return res.data;
};

const logout = async () => {
  const res = await API.post("api/logout", {});
  return res.data;
};

const getStoreInfo = async () => {
  const res = await API.get("api/get_store_info");
  return res.data;
};
const addCoverage = async (id: string, regions: Array<object>) => {
  const res = await API.post(`api/regions/store/${id}`, { regions });
  return res;
};
const unusedAreas = async () => {
  const res = await API.get("api/get_cities_without_regions");
  return res;
};
export const UserService = {
  login,
  logout,
  getStoreInfo,
  addCoverage,
  unusedAreas,
};
