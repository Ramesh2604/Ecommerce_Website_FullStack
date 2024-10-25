import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MetaData from "./layouts/MetaData";
import { getProducts } from "../actions/productActions";
import Loader from "./layouts/Loader";
import Product from "./product/product";
import { toast } from "react-toastify";
import Pagination from "react-js-pagination";
import { useNavigate } from "react-router-dom";
import { Carousel } from 'react-bootstrap';
import AboutUs from "./layouts/aboutUs";
import ScrollToTop from "./ScrollToTop";
export default function Home() {
    const dispatch = useDispatch();
    const { products, loading, error, productsCount, resPerPage } = useSelector((state) => state.productsState);
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();

    const setCurrentPageNo = (pageNo) => {
        setCurrentPage(pageNo);
    };

    const handleCategoryClick = (category) => {
        navigate(`/category/${category}`);
    };

    useEffect(() => {
        if (error) {
            toast.error(error, {
                position: "bottom-center"
            });
        }

        dispatch(getProducts(null, null, currentPage));
    }, [error, dispatch, currentPage]);

    return (
        <Fragment >
            {loading ? <Loader /> :
                <Fragment>
                    <MetaData title={'Home'} />
                    <Fragment>
                        <Carousel pause='hover'>
                            <Carousel.Item >
                                <img className="carouselimg d-block w-100" src="/images/slider/img3.avif" alt='slider img' height="550" width="500" />
                            </Carousel.Item>
                            <Carousel.Item >
                                <img className="carouselimg d-block w-100" src="/images/slider/img2.png" alt='slider img' height="550" width="500" />
                            </Carousel.Item>
                        </Carousel>
                    </Fragment>
                    <Fragment >
                        <section id="products" className="container mt-4">
                        <h1 id="products_heading" >Latest Products</h1>
                            <ScrollToTop/>
                            <div className="row">
                                {products && products.map(product => (
                                    <Product col={3} key={product._id} product={product} />
                                ))}
                            </div>
                        </section>
                        {productsCount > resPerPage &&
                            <div className="pagination d-flex justify-content-center ">
                                <Pagination
                                    activePage={currentPage}
                                    onChange={setCurrentPageNo}
                                    totalItemsCount={productsCount}
                                    itemsCountPerPage={resPerPage}
                                    nextPageText={'Next'}
                                    itemClass={"page-item"}
                                    linkClass={"page-link"}
                                />
                            </div>
                        }
                    </Fragment>
                    <img className="banner" src="/images/banner.png" alt="Groceries" width="1110" height="200" />
                    <Fragment >
                        
                    <h1 id="products_heading" className="pl-2">Shop by Categories</h1>
                        <div className="category-container">
                            <div className="category-box">
                                <img src="/images/categories/grocery.avif" alt="Groceries" width="200" height="200"/>
                                <h3 >Groceries</h3>
                                <button onClick={() => handleCategoryClick('Groceries')} >View All</button>
                            </div>
                            <div className="category-box">
                            <img src="/images/categories/spices.jpg" alt="Spices Masalas" width="200" height="200"/>
                                <h3>Spices&Masalas</h3>
                                <button onClick={() => handleCategoryClick('Spices Masalas')}>View All</button>
                            </div>
                            <div className="category-box">
                            <img src="/images/categories/Ghee-Oil.jpg" alt="Ghee Oils" width="200" height="200"/>
                                <h3>Ghee & Oils</h3>
                                <button onClick={() => handleCategoryClick('Ghee Oils')}>View All</button>
                            </div>
                            <div className="category-box">
                            <img src="/images/categories/dal.webp" alt="Dals Nuts" width="200" height="200"/>
                                <h3>Dals & Nuts</h3>
                                <button onClick={() => handleCategoryClick('Dals Nuts')}>View All</button>
                            </div>
                            
                            
                        </div>
                        
                    </Fragment>
                        <img className="banner" src="/images/banner1.png" alt="Groceries" width="1110" height="200" />

                    <Fragment>
                        <AboutUs />
                    </Fragment>

                </Fragment>
            }
        </Fragment>
    );
}
