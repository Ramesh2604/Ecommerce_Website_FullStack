    import { Fragment, useEffect } from "react";
    import { useDispatch, useSelector } from "react-redux";
    import { useNavigate } from "react-router-dom";
    import { validateShipping } from "./shipping";
    import { orderCompleted } from "../../slices/cartSlice";
    import MetaData from "../layouts/MetaData";
    import CheckOutSteps from "./checkOutSteps";
    import { createOrder } from "../../actions/orderActions";
    import { clearError as clearOrderError } from "../../slices/orderSlice";
    import {toast} from 'react-toastify';

    export default function Payment() {
        const dispatch = useDispatch();
        const navigate = useNavigate();
        const orderInfo = JSON.parse(sessionStorage.getItem('orderInfo'));
        const { items: cartItems, shippingInfo } = useSelector(state => state.cartState);
        const {error: orderError} = useSelector(state => state.orderState);

        const order = {
            orderItems: cartItems,
            shippingInfo
        };

        if (orderInfo) {
            order.itemsPrice = orderInfo.itemsPrice;
            order.shippingPrice = orderInfo.shippingPrice;
            order.totalPrice = orderInfo.totalPrice;
        }

        useEffect(() => {
            validateShipping(shippingInfo, navigate);
            if(orderError){
                toast(orderError, {
                    position: 'bottom-center',
                    type: 'error',
                    onOpen: () => {dispatch(clearOrderError())}
                })
                return
            }
        }, [shippingInfo, navigate, dispatch, orderError]);

        const submitHandler = async (e) => {
            e.preventDefault();
            try {
                dispatch(orderCompleted());
                dispatch(createOrder(order));
                navigate('/order/success');
            } catch (error) {
                console.error("Order processing failed", error);
            }
        };

        return (
            <Fragment>
                <MetaData title={'payment'} />
                <CheckOutSteps shipping confirmOrder payment />
                <div className="row wrapper">
    
                <form onSubmit={submitHandler} className="shadow-lg">
                <h1 className="mb-4">Payment</h1>
                    <div className="form-group">
                        <label>
                            <input 
                                type="radio" 
                                name="paymentMethod" 
                                value="cod" 
                                checked 
                                readOnly 
                                
                            />
                            Cash on Delivery
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Submit</button>
                </form>
                </div>
            </Fragment>
        );
    }
