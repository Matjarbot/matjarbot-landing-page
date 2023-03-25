import { createSlice, isAnyOf, isFulfilled, isPending, isRejected } from "@reduxjs/toolkit";
import { CategoriesThunkActions } from "./thunkFunctions"

interface CategoryState {
    data: any,
    current_page: number,
    last_page: number,
    total: number,
    per_page: number,
    isLoading: boolean,
};

interface Category {
    id: number,
    name_ar: string,
    name_en: string,
    created_at: Date,
    subcategories: any,
}

interface Subcategory {
    id: number,
    name_ar: string,
    name_en: string,
    created_at: Date,

}

const initialState: CategoryState = {
    data: {},
    current_page: 1,
    last_page: 1,
    total: 12,
    per_page: 12,
    isLoading: true
}

export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder.addCase(CategoriesThunkActions.fetchCategories.fulfilled,
            (state: any, action: any) => {
                const { current_page, last_page, per_page, total, data } = action.payload
                state.data = data.reduce((acc: any, cur: any) => {
                    acc[cur.id] = cur.name
                    return { ...acc, [cur.id]: cur }
                  }, {})
                state.current_page = current_page;
                state.last_page = last_page
                state.per_page = per_page
                state.total = total
            })

        builder.addMatcher(isPending, (state: any, action: any) => {
            state.isLoading = true;
        })

        builder.addMatcher(isAnyOf(isFulfilled, isRejected),
            (state: any, payload: any) => {
                state.isLoading = false
            })
    },
})

export default categorySlice.reducer