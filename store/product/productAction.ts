import { ProductThunkActions } from "./thunkFunctions";
import { productSlice } from "./productSlice";

export const ProductActions = {
    ...ProductThunkActions,
    ...productSlice.actions
}