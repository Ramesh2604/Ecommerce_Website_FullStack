import { Link } from "react-router-dom";

export default function CheckOutSteps({ shipping, confirmOrder, payment }) {
    return (
        <div className="checkout-progress d-flex justify-content-center mt-5">
            <div className="row w-100">
                <div className="col-4 d-flex justify-content-center">
                    {shipping ? (
                        <Link to="/shipping" className="text-center">
                            <div className="triangle2-active"></div>
                            <div className="step active-step">Shipping Info</div>
                            <div className="triangle-active"></div>
                        </Link>
                    ) : (
                        <Link to="/shipping" className="text-center">
                            <div className="triangle2-incomplete"></div>
                            <div className="step incomplete">Shipping Info</div>
                            <div className="triangle-incomplete"></div>
                        </Link>
                    )}
                </div>

                <div className="col-4 d-flex justify-content-center">
                    {confirmOrder ? (
                        <Link to="/order/confirm" className="text-center">
                            <div className="triangle2-active"></div>
                            <div className="step active-step">Confirm Order</div>
                            <div className="triangle-active"></div>
                        </Link>
                    ) : (
                        <Link to="/order/confirm" className="text-center">
                            <div className="triangle2-incomplete"></div>
                            <div className="step incomplete">Confirm Order</div>
                            <div className="triangle-incomplete"></div>
                        </Link>
                    )}
                </div>

                <div className="col-4 d-flex justify-content-center">
                    {payment ? (
                        <Link to="/payment" className="text-center">
                            <div className="triangle2-active"></div>
                            <div className="step active-step">Payment</div>
                            <div className="triangle-active"></div>
                        </Link>
                    ) : (
                        <Link to="/payment" className="text-center">
                            <div className="triangle2-incomplete"></div>
                            <div className="step incomplete">Payment</div>
                            <div className="triangle-incomplete"></div>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}
