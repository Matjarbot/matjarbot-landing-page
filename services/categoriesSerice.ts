import API from '../lib/axios';

// Get all categories
const getCategories = async ({ filter }: {
    filter: {
        type?: number 
    }
}) => {
    const { type } = filter
    const res = await API.get('api/categories', {
        params: {
            type
        }
    });
    return res.data;
}

// get all subc categories by category_id
const getSubCategories = async ({ category_id }: { category_id: number }) => {
    const res = await API.get(`api/categories/${category_id}`);
    return res.data
}

export const CategoriesService = {
    getCategories,
    getSubCategories
}
