import Axios from "axios";
import Cookies from "js-cookie";
const token = Cookies.get("storeToken");
const axios = Axios.create({
  baseURL: "https://api.snapbot.app/",
  // headers: {
  //   "X-Requested-With": "XMLHttpRequest",
  // },
  // withCredentials: true,
});
export default axios;
