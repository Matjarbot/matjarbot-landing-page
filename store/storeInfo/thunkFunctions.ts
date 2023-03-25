import { createAsyncThunk } from "@reduxjs/toolkit";
import API from '../../lib/axios';
import Cookies from 'js-cookie';
export const fetchOrders = createAsyncThunk(
    'orders/fetchUsers',
    async (arg?: any) => {
        try {
            const token = Cookies.get('storeToken');
            const response = await API.get(`api/orders?page=${arg.pageNumber}${arg.filter}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return response.data
        }
        catch (err) {
            console.log(err)
        }
    }
)

