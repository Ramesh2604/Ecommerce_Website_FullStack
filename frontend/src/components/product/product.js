import { Link } from "react-router-dom";

export default function Product({product,col}){
    return(
        <div className={`col-sm-12 col-md-6 col-lg-${col} my-3 product`}>
                        <div className="card p-3 rounded">
                            <img
                                className="card-img-top mx-auto"
                                src={product.images[0].image}
                                alt="product"
                            />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">
                                    <Link to={`/product/${product._id}`}>{product.name}</Link>
                                </h5>
                                 <p > MRP: <s>₹ {product.mrp}</s></p>
                                <p className="card-text">₹ {product.price}</p>
                                <Link to={`/product/${product._id}`} id="view_btn" className="btn btn-block">View Details</Link>
                            </div>
                        </div>
                    </div>
    )
}
