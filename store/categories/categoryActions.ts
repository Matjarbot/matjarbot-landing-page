import {categorySlice} from "./categorySlice";
import { CategoriesThunkActions } from "./thunkFunctions";

export const CategoryActions={
    ...CategoriesThunkActions,
    ...categorySlice.actions
}