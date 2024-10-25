import { Fragment, useEffect, useState } from "react";
import Sidebar from "./sidebar";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { createNewProduct } from "../../actions/productActions";
import { clearError, clearProductCreated } from "../../slices/productSlice";
import { toast } from "react-toastify";

export default function NewProduct() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [mrp, setMrp] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [stock, setStock] = useState(0);
    const [seller, setSeller] = useState("");
    const [images, setImages] = useState([]);
    const [imagesPreview, setImagesPreview] = useState([]);
    const [formErrors, setFormErrors] = useState({});

    const { loading, isProductCreated, error } = useSelector(state => state.productState);

    const categories = [
        'Groceries',
        'Ghee Oils',
        'Meats',
        'Spices Masalas',
        'House Holds',
        'Dals Nuts'
    ];

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const validateForm = () => {
        const errors = {};
        if (!name) errors.name = "Name is required";
        if (!price) errors.price = "Price is required";
        if (!mrp) errors.mrp = "MRP is required";
        if (!description) errors.description = "Description is required";
        if (!category) errors.category = "Category is required";
        if (stock <= 0) errors.stock = "Stock must be greater than zero";
        if (!seller) errors.seller = "Seller name is required";
        return errors;
    };

    const onImagesChange = (e) => {
        const files = Array.from(e.target.files);

        setImagesPreview([]);
        setImages([]);

        files.forEach(file => {
            const reader = new FileReader();
            reader.onload = () => {
                if (reader.readyState === 2) {
                    setImagesPreview(oldArray => [...oldArray, reader.result]);
                    setImages(oldArray => [...oldArray, file]);
                }
            };
            reader.readAsDataURL(file);
        });
    };

    const submitHandler = (e) => {
        e.preventDefault();
        const errors = validateForm();
        if (Object.keys(errors).length) {
            setFormErrors(errors);
            return;
        }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', price);
        formData.append('mrp', mrp);
        formData.append('stock', stock);
        formData.append('description', description);
        formData.append('seller', seller);
        formData.append('category', category);
        images.forEach(image => {
            formData.append('images', image);
        });
        dispatch(createNewProduct(formData));
    };

    useEffect(() => {
        if (isProductCreated) {
            toast('Product Created Successfully!', {
                type: 'success',
                position: 'bottom-center',
                onOpen: () => dispatch(clearProductCreated())
            });
            navigate('/admin/products');
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
    }, [isProductCreated, error, dispatch, navigate]);

    return (
        <div className="row">
            <div className="col-12 col-md-2">
                <Sidebar />
            </div>
            <div className="col-12 col-md-10">
                <Fragment>
                    <div className="wrapper my-5">
                        <form onSubmit={submitHandler} className="shadow-lg" encType='multipart/form-data'>
                            <h1 className="mb-4">New Product</h1>

                            <div className="form-group">
                                <label htmlFor="name_field">Name</label>
                                <input
                                    type="text"
                                    id="name_field"
                                    className="form-control"
                                    onChange={e => setName(e.target.value)}
                                    value={name}
                                />
                                {formErrors.name && <p className="text-danger">{formErrors.name}</p>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="price_field">Price</label>
                                <input
                                    type="text"
                                    id="price_field"
                                    className="form-control"
                                    onChange={e => setPrice(e.target.value)}
                                    value={price}
                                />
                                {formErrors.price && <p className="text-danger">{formErrors.price}</p>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="mrp_field">MRP</label>
                                <input
                                    type="text"
                                    id="mrp_field"
                                    className="form-control"
                                    onChange={e => setMrp(e.target.value)}
                                    value={mrp}
                                />
                                {formErrors.mrp && <p className="text-danger">{formErrors.mrp}</p>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="description_field">Description</label>
                                <textarea
                                    className="form-control"
                                    id="description_field"
                                    rows="8"
                                    onChange={e => setDescription(e.target.value)}
                                    value={description}
                                ></textarea>
                                {formErrors.description && <p className="text-danger">{formErrors.description}</p>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="category_field">Category</label>
                                <select
                                    onChange={e => setCategory(e.target.value)}
                                    className="form-control"
                                    id="category_field"
                                    value={category}
                                >
                                    <option value="">Select</option>
                                    {categories.map(category => (
                                        <option key={category} value={category}>{category}</option>
                                    ))}
                                </select>
                                {formErrors.category && <p className="text-danger">{formErrors.category}</p>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="stock_field">Stock</label>
                                <input
                                    type="number"
                                    id="stock_field"
                                    className="form-control"
                                    onChange={e => setStock(e.target.value)}
                                    value={stock}
                                />
                                {formErrors.stock && <p className="text-danger">{formErrors.stock}</p>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="seller_field">Seller Name</label>
                                <input
                                    type="text"
                                    id="seller_field"
                                    className="form-control"
                                    onChange={e => setSeller(e.target.value)}
                                    value={seller}
                                />
                                {formErrors.seller && <p className="text-danger">{formErrors.seller}</p>}
                            </div>

                            <div className='form-group'>
                                <label>Images</label>

                                <div className='custom-file'>
                                    <input
                                        type='file'
                                        name='product_images'
                                        className='custom-file-input'
                                        id='customFile'
                                        multiple
                                        onChange={onImagesChange}
                                    />
                                    <label className='custom-file-label' htmlFor='customFile'>
                                        Choose Images
                                    </label>
                                </div>
                                {imagesPreview.map(image => (
                                    <img
                                        className="mt-3 mr-2"
                                        key={image}
                                        src={image}
                                        alt="Preview"
                                        width="55"
                                        height="52"
                                    />
                                ))}
                            </div>

                            <button
                                id="create_button"
                                type="submit"
                                disabled={loading}
                                className="btn btn-block py-3"
                            >
                                {loading ? 'Creating...' : 'CREATE'}
                            </button>
                        </form>
                    </div>
                </Fragment>
            </div>
        </div>
    );
}
