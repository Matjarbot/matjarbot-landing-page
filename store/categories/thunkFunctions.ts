import { createAsyncThunk } from "@reduxjs/toolkit";
import { CategoriesService } from "../../services/categoriesSerice";
import API from '../../lib/axios';

const fetchCategories = createAsyncThunk('categories/get_categories', async (args:{filter?:any }) => {
    try {
        const {filter} = args;
        const response = await CategoriesService.getCategories({filter});
        return response?.data
    }
    catch (err) {
        throw ("test");
    }
})

export const CategoriesThunkActions = {
    fetchCategories,
}