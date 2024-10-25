import { Fragment, useEffect, useState } from "react";
import Sidebar from "./sidebar";
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { updateOrders, orderDetail as orderDetailAction } from "../../actions/orderActions";
import { clearError, clearOrderUpdated } from "../../slices/orderSlice";

export default function UpdateOrder() {

    const { loading, isOrderUpdated, error, orderDetail } = useSelector(state => state.orderState);
    const { user = {}, orderItems = [], shippingInfo = {}, totalPrice = 0 } = orderDetail;
    const [orderStatus, setOrderStatus] = useState("Processing");

    const dispatch = useDispatch();
    const { id: orderId } = useParams();

    const submitHandler = (e) => {
        e.preventDefault();
        const orderData = {};
        orderData.orderStatus = orderStatus;
        dispatch(updateOrders(orderId, orderData));
    };

    useEffect(() => {
        if (isOrderUpdated) {
            toast('Order Updated Successfully!', {
                type: 'success',
                position: 'bottom-center',
                onOpen: () => dispatch(clearOrderUpdated())
            });
            return;
        }

        if (error) {
            toast(error, {
                position: 'bottom-center',
                type: 'error',
                onOpen: () => { dispatch(clearError()) }
            });
            return;
        }
        dispatch(orderDetailAction(orderId));
    }, [isOrderUpdated, error, dispatch, orderId]);

    useEffect(() => {
        if (orderDetail._id) {
            setOrderStatus(orderDetail.orderStatus);
        }
    }, [orderDetail]);

    return (
        <div className="row">
            <div className="col-12 col-md-2">
                <Sidebar />
            </div>
            <div className="col-12 col-md-10">
                <Fragment>
                    <div className="row d-flex justify-content-around">
                        <div className="col-12 col-lg-8 mt-5 order-details">

                            <h1 className="my-5">Order # {orderDetail._id}</h1>

                            <h4 className="mb-4">Shipping Info</h4>
                            <p><b>Name:</b> {user.name}</p>
                            <p><b>Phone:</b> {shippingInfo.phoneNo}</p>
                            <p ><b>Address:</b>{shippingInfo.address}, {shippingInfo.city}, {shippingInfo.postalCode}, {shippingInfo.state}, {shippingInfo.country}</p>
                            <p className="mb-4"><b>Near by Place:</b> {shippingInfo.nearbyPlace}</p>
                            
                            {/* Display the location */}
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
                            
                            <p><b>Amount:</b> ₹ {totalPrice}</p>

                            <hr />

                            <h4 className="my-4">Order Status:</h4>
                            <p className={orderStatus && orderStatus.includes('Delivered') ? 'greenColor' : 'redColor'} ><b>{orderStatus}</b></p>

                            <h4 className="my-4">Order Items:</h4>

                            <hr />
                            <div className="cart-item my-1">
                                {orderItems && orderItems.map(item => (
                                    <div className="row my-5" key={item.product}>
                                        <div className="col-4 col-lg-2">
                                            <img src={item.image} alt={item.name} height="45" width="65" />
                                        </div>

                                        <div className="col-5 col-lg-5">
                                            <Link to={`/product/${item.product}`}>{item.name}</Link>
                                        </div>

                                        <div className="col-4 col-lg-2 mt-4 mt-lg-0">
                                            <p>₹ {item.price}</p>
                                        </div>

                                        <div className="col-4 col-lg-3 mt-4 mt-lg-0">
                                            <p>{item.quantity} Piece(s)</p>
                                        </div>
                                    </div>
                                ))}

                            </div>
                            <hr />
                        </div>
                        <div className="col-12 col-lg-3 mt-5">
                            <h4 className="my-4">Order Status</h4>
                            <div className="form-group">
                                <select className="form-control"
                                    onChange={e => setOrderStatus(e.target.value)}
                                    value={orderStatus}
                                    name="status">
                                    <option value="Processing">Processing</option>
                                    <option value="Delivered">Delivered</option>
                                    <option value="Cancelled">Cancelled</option>
                                </select>
                            </div>
                            <button disabled={loading} onClick={submitHandler} className="btn btn-primary btn-block">Update Status</button>

                        </div>
                    </div>
                </Fragment>
            </div>
        </div>
    );
}
