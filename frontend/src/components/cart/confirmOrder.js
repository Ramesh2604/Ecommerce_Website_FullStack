import { Fragment, useEffect } from "react";
import MetaData from "../layouts/MetaData";
import { validateShipping } from "./shipping";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import CheckOutSteps from "./checkOutSteps";

export default function ConfirmOrder() {
    const { shippingInfo, items: cartItems } = useSelector(state => state.cartState);
    const { user } = useSelector(state => state.authState);
    const navigate = useNavigate();
    const itemsPrice = cartItems.reduce((acc, item) => (acc + item.price * item.quantity), 0);
    const shippingPrice = itemsPrice > 1000 ? 0 : 29;
    const totalPrice = Number(itemsPrice + shippingPrice).toFixed(2);

    const processPayment = () => {
        const data = {
            itemsPrice,
            shippingPrice,
            totalPrice
        }
        sessionStorage.setItem('orderInfo', JSON.stringify(data))
        navigate('/payment')
    }

    useEffect(() => {
        validateShipping(shippingInfo, navigate)
    }, [navigate, shippingInfo])

    return (
        <Fragment>
            <MetaData title={'Confirm Order'} />
            <CheckOutSteps shipping confirmOrder />
            <div className="row d-flex justify-content-between">
                <div className="col-12 col-lg-8 mt-5 order-confirm">

                    <h4 className="mb-3">Shipping Info</h4>
                    <p><b>Name:</b> {user.name}</p>
                    <p><b>Phone:</b> {shippingInfo.phoneNo}</p>
                    <p ><b>Address:</b> {`${shippingInfo.address}, ${shippingInfo.postalCode}, ${shippingInfo.state}, ${shippingInfo.country}`}</p>
                    <p className="mb-4"><b>Near by Place:</b> {shippingInfo.nearbyPlace}</p>
                    {shippingInfo.location && (
                        <p className="mb-4">
                            <b>Location:</b> 
                            <span>{`Lat: ${shippingInfo.location.lat}, Lng: ${shippingInfo.location.lng}`}</span>
                            <br />
                            <a 
                                href={`https://www.google.com/maps?q=${shippingInfo.location.lat},${shippingInfo.location.lng}`} 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                View on Google Maps
                            </a>
                        </p>
                    )}
                    <hr />
                    <h4 className="mt-4">Your Cart Items:</h4>
                    {cartItems.map(item => (
                        <Fragment key={item.product}>
                            <hr />
                            <div className="cart-item my-1">
                                <div className="row">
                                    <div className="col-4 col-lg-2">
                                        <img src={item.image} alt={item.name} height="45" width="65" className="img-fluid" />
                                    </div>

                                    <div className="col-8 col-lg-6">
                                        <Link to={`/product/${item.product}`}>{item.name}</Link>
                                    </div>

                                    <div className="col-12 col-lg-4 mt-4 mt-lg-0">
                                        <p>{item.quantity} x ₹ {item.price} = <b>₹{item.quantity * item.price}</b></p>
                                    </div>
                                </div>
                            </div>
                        </Fragment>
                    ))}

                    <hr />

                </div>

                <div className="col-12 col-lg-3 my-4">
                    <div id="order_summary">
                        <h4>Order Summary</h4>
                        <hr />
                        <p>Subtotal:  <span className="order-summary-values">₹ {itemsPrice}</span></p>
                        <p>Shipping: <span className="order-summary-values">₹ {shippingPrice}</span></p>

                        <hr />

                        <p>Total: <span className="order-summary-values">₹ {totalPrice}</span></p>

                        <hr />
                        <button id="checkout_btn" onClick={processPayment} className="btn btn-primary btn-block">Proceed to Payment</button>
                    </div>
                </div>

            </div>
        </Fragment>
    )
}
