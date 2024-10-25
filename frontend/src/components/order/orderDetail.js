import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom";
import { orderDetail as orderDetailAction } from "../../actions/orderActions";
import Loader from "../layouts/Loader";

export default function OrderDetail() {
    const { orderDetail, loading } = useSelector(state => state.orderState);
    const { shippingInfo = {}, user = {}, orderStatus = "Processing", orderItems = [], totalPrice = 0, } = orderDetail;
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(orderDetailAction(id))
    }, [id, dispatch])

    const getStatusClass = (status) => {
        switch (status) {
            case 'Cancelled':
                return 'red';
            case 'Delivered':
                return 'green';
            case 'Processing':
                return 'orange';
            default:
                return '';
        }
    };
    return (
        <Fragment>
            {loading ? <Loader /> :
                <Fragment>
                    <div className="row d-flex justify-content-between">
                        <div className="col-12 col-lg-8 mt-5 order-details">

                            <h1 className="my-5">Order # {orderDetail._id}</h1>

                            <h4 className="mb-4">Shipping Info</h4>
                            <p><b>Name:</b> {user.name}</p>
                            <p><b>Phone:</b> {shippingInfo.phoneNo}</p>
                            <p className="mb-4"><b>Address:</b>{shippingInfo.address}, {shippingInfo.city}, {shippingInfo.postalCode}, {shippingInfo.state}, {shippingInfo.country}</p>
                            <p><b>Amount:</b> ₹ {totalPrice}</p>

                            <hr />

                            <h4 className="my-4">Order Status:</h4>
                            <p className={getStatusClass(orderStatus)}><b>{orderStatus}</b></p>

                            <h4 className="my-4">Order Items:</h4>

                            <hr />
                            <div className="cart-item my-1">
                                {orderItems &&  orderItems.map(item=>(
                                    <div className="row my-5">
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
                    </div>
                </Fragment>
            }
        </Fragment>
    )
}