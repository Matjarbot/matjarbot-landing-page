import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { ProductThunkActions } from "./thunkFunctions";

interface ProductState {
  data: any[];
  current_page: number;
  last_page: number;
  done: boolean;
  total_items: number;
  per_page: number;
  isLoading: boolean;
  isUpdateQuantityLoading: boolean;
  isShowCreateModal: boolean;
  err: {
    createErrs: {
      isErr: boolean;
      err: {
        errors: {
          description_ar: string[];
          description_en: string[];
          duration: string[];
          mainCategory_id: string[];
          name_ar: string[];
          name_en: string[];
          price: string[];
          image: string[];
          category_id: string[];
        };
        message: string;
      };
    };
  };
}

const initialState: ProductState = {
  data: [],
  current_page: 1,
  last_page: 1,
  per_page: 1,
  total_items: 1,
  isLoading: false,
  done: true,
  isUpdateQuantityLoading: false,
  isShowCreateModal: false,
  err: {
    createErrs: {
      isErr: false,
      err: {
        errors: {
          description_ar: [""],
          description_en: [""],
          duration: [""],
          mainCategory_id: [""],
          name_ar: [""],
          name_en: [""],
          price: [""],
          image: [""],
          category_id: [""],
        },
        message: "",
      },
    },
  },
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    showCreateModal: (state: ProductState) => {
      state.isShowCreateModal = true;
    },

    hideCreateModal: (state: ProductState) => {
      state.isShowCreateModal = false;
    },

    toggleCreateModal: (state: ProductState) => {
      state.isShowCreateModal = !state.isShowCreateModal;
    },
  },
  extraReducers(builder) {
    builder.addCase(
      ProductThunkActions.fetchProducts.fulfilled,
      (state: ProductState, action: any) => {
        state.last_page = action.payload.last_page;
        state.current_page = action.payload.current_page;
        state.per_page = action.payload.per_page;
        state.total_items = state.last_page * state.per_page;
        state.data = action.payload.data;
        state.done = action.payload.done;
      }
    );
    builder.addCase(
      ProductThunkActions.deleteProducts.fulfilled,
      (state: ProductState, action: any) => {
        console.log(action.payload);
        state.data = state.data.filter(
          (product) => product.id != action.payload.id
        );
      }
    );
    builder.addCase(
      ProductThunkActions.createProduct.fulfilled,
      (state: ProductState, action: any) => {
        state.data.pop();
        state.data = [
          {
            ...action.payload,
            quantities: [
              {
                quantities: { quantity: 1 },
              },
            ],
          },
          ...state.data,
        ];
        (state.err = initialState.err), (state.isShowCreateModal = false);
      }
    );
    builder.addCase(
      ProductThunkActions.createProduct.rejected,
      (state: ProductState, action: any) => {
        state.err.createErrs.isErr = true;
        state.err.createErrs.err.errors = {
          ...state.err.createErrs.err.errors,
          ...action.payload.errors,
        };
        state.err.createErrs.err.message = action.payload.message;
      }
    );
    builder.addCase(
      ProductThunkActions.updateProductQuantity.pending,
      (state: ProductState, action: any) => {
        state.isUpdateQuantityLoading = true;
      }
    );
    builder.addMatcher(
      isAnyOf(
        ProductThunkActions.updateProductQuantity.rejected,
        ProductThunkActions.updateProductQuantity.fulfilled
      ),
      (state: ProductState, action: any) => {
        state.isUpdateQuantityLoading = false;
        /* const { id, quantity } = action.payload
                state.data = state.data.map(product => product.id == id ? { ...product, quantity } : product); */
      }
    );
  },
});

export default productSlice.reducer;
