import {orderSlice} from './orderSlice'
import { OrderActions as OrderThunkActions } from './thunkFunctions'
export const OrderActions = {
    ...OrderThunkActions,
    ...orderSlice.actions
}
