import axios from 'axios';
import { 
    createReviewFail, createReviewRequest, createReviewSuccess, 
    deleteProductFail, deleteProductRequest, deleteProductSuccess, 
    deleteReviewFail, deleteReviewSuccess, deleteReviewtRequest, 
    newProductFail, newProductRequest, newProductSuccess, 
    productFail, productRequest, productSuccess, 
    reviewsFail, reviewsRequest, reviewsSuccess, 
    updateProductFail, updateProductRequest, updateProductSuccess 
} from '../slices/productSlice';
import { 
    adminProductsFail, adminProductsRequest, adminProductsSuccess, 
    productsFail, productsRequest, productsSuccess 
} from '../slices/productsSlice';

// Fetch products with optional filters
export const getProducts = (keyword, category, currentPage) => async (dispatch) => {
    try {
        dispatch(productsRequest());
        let link = `/api/v1/products?page=${currentPage}`;
        if (keyword) link += `&keyword=${keyword}`;
        if (category) link += `&category=${category}`;
        const { data } = await axios.get(link);
        dispatch(productsSuccess(data));
    } catch (error) {
        dispatch(productsFail(error.response.data.message));
    }
};

// Fetch a single product by ID
export const getProduct = id => async (dispatch) => {
    try {
        dispatch(productRequest());
        const { data } = await axios.get(`/api/v1/product/${id}`);
        dispatch(productSuccess(data));
    } catch (error) {
        dispatch(productFail(error.response.data.message));
    }
};

// Create a new review
export const createReview = reviewData => async (dispatch) => {
    try {
        dispatch(createReviewRequest());
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        const { data } = await axios.put(`/api/v1/review`, reviewData, config);
        dispatch(createReviewSuccess(data));
    } catch (error) {
        dispatch(createReviewFail(error.response.data.message));
    }
};

// Fetch all products for admin
export const getAdminProducts = async (dispatch) => {
    try {
        dispatch(adminProductsRequest());
        const { data } = await axios.get(`/api/v1/admin/products`);
        dispatch(adminProductsSuccess(data));
    } catch (error) {
        dispatch(adminProductsFail(error.response.data.message));
    }
};

// Create a new product
export const createNewProduct = productData => async (dispatch) => {
    try {
        dispatch(newProductRequest());
        const { data } = await axios.post(`/api/v1/admin/product/new`, productData);
        dispatch(newProductSuccess(data));
    } catch (error) {
        dispatch(newProductFail(error.response.data.message));
    }
};

// Delete a product by ID
export const deleteProduct = id => async (dispatch) => {
    try {
        dispatch(deleteProductRequest());
        await axios.delete(`/api/v1/admin/product/${id}`);
        dispatch(deleteProductSuccess());
    } catch (error) {
        dispatch(deleteProductFail(error.response.data.message));
    }
};

// Update an existing product by ID
export const updateProduct = (id, productData) => async (dispatch) => {
    try {
        dispatch(updateProductRequest());
        const { data } = await axios.put(`/api/v1/admin/product/${id}`, productData);
        dispatch(updateProductSuccess(data));
    } catch (error) {
        dispatch(updateProductFail(error.response.data.message));
    }
};

// Fetch reviews for a product
export const getReviews = id => async (dispatch) => {
    try {
        dispatch(reviewsRequest());
        const { data } = await axios.get(`/api/v1/admin/reviews`, { params: { id } });
        dispatch(reviewsSuccess(data));
    } catch (error) {
        dispatch(reviewsFail(error.response.data.message));
    }
};

// Delete a review by product ID and review ID
export const deleteReview = (productId, id) => async (dispatch) => {
    try {
        dispatch(deleteReviewtRequest());
        await axios.delete(`/api/v1/admin/review`, { params: { productId, id } });
        dispatch(deleteReviewSuccess());
    } catch (error) {
        dispatch(deleteReviewFail(error.response.data.message));
    }
};
