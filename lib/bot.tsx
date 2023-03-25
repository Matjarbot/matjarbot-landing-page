import Axios from "axios";
import Cookies from "js-cookie";
const token = Cookies.get("storeToken");

const bot = Axios.create({
  baseURL: "https://bot.matjarbot.app/",
});
export default bot;
