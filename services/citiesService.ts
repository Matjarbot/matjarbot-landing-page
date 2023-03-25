import API from "../lib/axios";
async function findAll() {
  const cities = await API.get("api/get_cities");
  return cities.data.data;
}
async function getStates() {
  const states = await API.get("api/orders/get_states");
  return states.data;
}
const citiesService = { findAll, getStates };
export default citiesService;
