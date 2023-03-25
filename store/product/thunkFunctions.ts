import { createAsyncThunk } from "@reduxjs/toolkit";

import { ProductsService } from "../../services/productsService";

const fetchProducts = createAsyncThunk(
  "product/fetch",
  async (arg: { page: number; filter?: any }) => {
    const page = arg.page || 1;
    const filter = arg.filter || {};
    const res = await ProductsService.fetchProducts({ page, ...filter });
    const newData = { ...res.data, done: false };
    return newData;
  }
);

const deleteProducts = createAsyncThunk("product/delete", async (arg: any) => {
  const { id } = arg;
  const res = await ProductsService.deleteProduct({ id });
  return res.data;
});

const createProduct = createAsyncThunk(
  "product/create",
  async (arg: any, { rejectWithValue }) => {
    try {
      const { product } = arg;
      const res = await ProductsService.createProduct({ product });
      return res.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

const updateProductQuantity = createAsyncThunk(
  "product/quantity/update",
  async (
    arg: { quantity: number; product_id: number },
    { rejectWithValue, getState, dispatch }
  ) => {
    try {
      const state: any = getState();
      const storeId = state.user.storeInfo.id;
      const { quantity, product_id } = arg;
      await ProductsService.updateProductQuantity({
        quantity,
        product_id,
        storeId,
      });
      return {
        id: product_id,
        quantity,
      };
    } catch (err: any) {
      console.log(err);
      return rejectWithValue(err.response.data);
    }
  }
);

export const ProductThunkActions = {
  fetchProducts,
  deleteProducts,
  createProduct,
  updateProductQuantity,
};
