import API from '../lib/axios'
const sendMessage = async ({ phone, msg }: { phone: number, msg: string }) => {
    const body = { phone, msg };
    const res = await API.post('', body);
    return res.data;
}

const getAllMessages = async ({ phone, page = 1 }: { phone: number, page: number }) => {
    const params = { phone, page };
    const res = await API.get('', {
        params
    })
    return res.data;
}

const getAllConversation = async ({ page = 1 }: { page: number }) => {
    const params = { page };
    const res = await API.get('', {
        params
    })
    return res.data;
}

export const MessageService = {
    sendMessage,
    getAllConversation,
    getAllMessages
}