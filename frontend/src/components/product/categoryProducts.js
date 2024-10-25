import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MetaData from "../layouts/MetaData";
import { getProducts } from "../../actions/productActions";
import Loader from "../layouts/Loader";
import Product from "./product";
import { toast } from "react-toastify";
import Pagination from "react-js-pagination";
import { useParams } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";
export default function CategoryProducts() {
    const { category } = useParams();
    const { products, loading, error, productsCount, resPerPage } = useSelector((state) => state.productsState);
    const [currentPage, setCurrentPage] = useState(1);
    const dispatch = useDispatch();


    const setCurrentPageNo = (pageNo) => {
        setCurrentPage(pageNo);
    };

    useEffect(() => {
        if (error) {
            toast.error(error, {
                position: "bottom-center"
            });
        }

        dispatch(getProducts(null, category, currentPage));
    }, [error, dispatch, category, currentPage]);

    return (
        <Fragment>
            {loading ? <Loader /> : 
            <Fragment>
                <MetaData title={`${category.charAt(0).toUpperCase() + category.slice(1)} Products`} />
                <section id="products" className="container mt-5">
                <h1 id="products_heading">{`${category.charAt(0).toUpperCase() + category.slice(1)} Products`}</h1>
                    <ScrollToTop/>
                    <div className="row">
                        {products && products.map(product => (
                            <Product col={3} key={product._id} product={product} />
                        ))}
                    </div>
                </section>
                {productsCount > resPerPage &&
                    <div className="d-flex justify-content-center mt-5">
                        <Pagination 
                            activePage={currentPage}
                            onChange={setCurrentPageNo}
                            totalItemsCount={productsCount}
                            itemsCountPerPage={resPerPage}
                            nextPageText={'Next'}
                            firstPageText={'First'}
                            lastPageText={'Last'}
                            itemClass={"page-item"}
                            linkClass={"page-link"}
                        />
                    </div>
                }
            </Fragment>
            }
        </Fragment>
    );
}
