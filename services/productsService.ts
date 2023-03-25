import API from "../lib/axios";

const fetchProducts = async ({
  page,
  token,
  type,
  category_id,
  subcategory_id,
}: {
  page: number;
  type?: number;
  category_id?: number;
  subcategory_id?: number;
  token?: string;
}) => {
  const res = await API.get(`api/products`, {
    params: {
      page,
      category_id,
      subcategory_id,
      type,
    },
  });
  return res.data;
};
const fetchAllProducts = async ({
  category_id,
  type,
}: {
  type?: number;
  category_id?: string;
}) => {
  const res = await API.get(`api/products/all`, {
    params: category_id
      ? {
          category_id,
          type,
        }
      : { type },
  });
  return res.data;
};
const fetchSubProducts = async ({
  subcategory_id,
}: {
  subcategory_id: string;
}) => {
  const res = await API.get(`api/products/all`, {
    params: {
      subcategory_id,
    },
  });
  return res.data;
};
const fetchByName = async ({ text }: { text: string }) => {
  const res = await API.get(`api/products?search=${text}`);
  return res.data;
};

const deleteProduct = async ({ id }: { id: number }) => {
  const res = await API.post(`api/products/delete/${id}`);
  return res.data;
};

const createProduct = async ({ product }: { product: any }) => {
  const res = await API.post(`api/products/store`, product);
  return res.data;
};
const updateProductQuantity = async ({
  quantity,
  product_id,
  storeId,
}: {
  quantity: number;
  product_id: number;
  storeId: number;
}) => {
  const res = await API.post(`api/product/quantity/update/${storeId}`, {
    product_id,
    quantity,
  });
  return res.data;
};

export const ProductsService = {
  fetchProducts,
  deleteProduct,
  createProduct,
  updateProductQuantity,
  fetchAllProducts,
  fetchSubProducts,
  fetchByName,
};
