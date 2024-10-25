import { createSlice } from "@reduxjs/toolkit";


const orderSlice = createSlice({
    name: 'order',
    initialState: {
        orderDetail: {},
        userOrders: [],
        loading: false,
        adminOrders: [],
        isOrderdDeleted: false,
        isOrderdUpdated: false
    },
    reducers: {
        createOrderRequest(state, action) {
            return {
                ...state,
                loading: true,
            }
        },
        createOrderSuccess(state, action) {
            return {
                ...state,
                loading: false,
                orderDetail: action.payload.order
            }
        },
        createOrderFail(state, action){
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        },
        clearError(state, action){
            return {
                ...state,
                error: null
            }
        },
        userOrdersRequest(state, action) {
            return {
                ...state,
                loading: true,
            }
        },
        userOrdersSuccess(state, action) {
            return {
                ...state,
                loading: false,
                userOrders: action.payload.orders
            }
        },
        userOrdersFail(state, action){
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        },
        orderDetailsRequest(state, action) {
            return {
                ...state,
                loading: true,
            }
        },
        orderDetailsSuccess(state, action) {
            return {
                ...state,
                loading: false,
                orderDetail: action.payload.order
            }
        },
        orderDetailsFail(state, action){
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        },
        adminOrdersRequest(state, action) {
            return {
                ...state,
                loading: true,
            }
        },
        adminOrdersSuccess(state, action) {
            return {
                ...state,
                loading: false,
                adminOrders: action.payload.orders
            }
        },
        adminOrdersFail(state, action){
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        },
        deleteOrdersRequest(state, action) {
            return {
                ...state,
                loading: true,
            }
        },
        deleteOrdersSuccess(state, action) {
            return {
                ...state,
                loading: false,
                isOrderdDeleted: true
            }
        },
        deleteOrdersFail(state, action){
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        },
        updateOrdersRequest(state, action) {
            return {
                ...state,
                loading: true,
            }
        },
        updateOrdersSuccess(state, action) {
            return {
                ...state,
                loading: false,
                isOrderdUpdated: true
            }
        },
        updateOrdersFail(state, action){
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        },
        clearOrderDeleted(state, action){
            return {
                ...state,
                isOrderdDeleted: false
            }
        },
        clearOrderUpdated(state, action){
            return {
                ...state,
                isOrderdUpdated: false
            }
        },

    }
})

const { actions, reducer } = orderSlice;
export const { createOrderRequest,
                createOrderSuccess, 
                createOrderFail, 
                clearError,
                userOrdersRequest,
                userOrdersSuccess,
                userOrdersFail,
                orderDetailsRequest,
                orderDetailsSuccess,
                orderDetailsFail,
                adminOrdersRequest,
                adminOrdersSuccess,
                adminOrdersFail,
                deleteOrdersRequest,
                deleteOrdersSuccess,
                deleteOrdersFail,
                updateOrdersRequest,
                updateOrdersSuccess,
                updateOrdersFail,
                clearOrderDeleted,
                clearOrderUpdated } = actions;
export default reducer;