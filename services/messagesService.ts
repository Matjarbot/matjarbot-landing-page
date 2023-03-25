import API from "../lib/bot";
import Cookies from "js-cookie";
async function getConversations() {
  const data = await API.get("/conversation");
  return data;
}
async function sendMessage({ message, id }: { message: string; id: string }) {
  const res = await API.put(`/conversation/${id}`, { message });
  return res;
}
async function getMessages(id: string, page: number) {
  const res = await API.get(`/conversation/${id}`, { params: { page } });
  return res.data.data;
}
async function changeName({ name, id }: { name: string; id: string }) {
  try {
    const res = await API.post(`/renameConversation/`, {
      newName: name,
      conversation_id: id,
    });
  } catch {}
}

const endConversation = async ({
  id,
  username,
}: {
  id: number;
  username: string;
}) => {
  const res = await API.post(`/conversation/endConversation/${id}`, {
    username,
  });
  return res.data;
};
async function makeRead(id: string) {
  console.log("whiadls;fl;");
  const res = await API.post(`/conversation/${id}/setIsRead`);
  return res.data;
}
export const MessagesService = {
  getMessages,
  getConversations,
  sendMessage,
  changeName,
  endConversation,
  makeRead,
};
