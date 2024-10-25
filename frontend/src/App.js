import './App.css';
import Home from './components/Home';
import Footer from './components/layouts/Footer';
import Header from './components/layouts/Header';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductDetail from './components/product/productDetail';
import ProductSearch from './components/product/ProductSearch';
import Login from './components/user/login';
import Register from './components/user/register';
import { useEffect } from 'react';
import store from './store';
import { loadUser } from './actions/userActions';
import Profile from './components/user/profile';
import ProtectedRoute from './components/route/protectedRoute';
import UpdateProfile from './components/user/updateProfile';
import UpdatePassword from './components/user/updatePassword';
import ForgotPassword from './components/user/forgotPassword';
import ResetPassword from './components/user/resetPassword';
import Cart from './components/cart/cart';
import Shipping from './components/cart/shipping';
import ConfirmOrder from './components/cart/confirmOrder';
import Payment from './components/cart/payment';
import OrderSuccess from './components/cart/orderSuccess';
import UserOrders from './components/order/userOrders';
import OrderDetail from './components/order/orderDetail';
import Dashboard from './components/admin/dashboard';
import ProductList from './components/admin/productList';
import NewProduct from './components/admin/newProduct';
import AboutUs from './components/layouts/aboutUs';
import Disclaimer from './components/layouts/disclaimer';
import PrivacyPolicy from './components/layouts/privacy_policy';
import TermsConditions from './components/layouts/terms_conditions';
import UpdateProduct from './components/admin/updateProduct';
import OrderList from './components/admin/orderList';
import UpdateOrder from './components/admin/updateOrder';
import UserList from './components/admin/userList';
import UpdateUser from './components/admin/updateUser';
import ReviewList from './components/admin/reviewList';
import CategoryProducts from './components/product/categoryProducts';
import ScrollToTop from './components/ScrollToTop';
function App() {
  useEffect(()=>{
    store.dispatch(loadUser)
  })
  return (
    <Router>
    <ScrollToTop />
      <div className="App">
        <HelmetProvider>
          <Header />
          <div className='container container-fluid'>
          <ToastContainer theme='dark' />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/myprofile' element={<ProtectedRoute><Profile /></ProtectedRoute>} />
              <Route path='/myprofile/update' element={<ProtectedRoute><UpdateProfile /></ProtectedRoute>} />
              <Route path='/myprofile/update/password' element={<ProtectedRoute><UpdatePassword /></ProtectedRoute>} />
              <Route path='/password/forgot' element={<ForgotPassword />} />
              <Route path='/password/reset/:token' element={<ResetPassword />} />
              <Route path='/register' element={<Register />} />
              <Route path='/login' element={<Login />} />
              <Route path='/aboutus' element={<AboutUs />} />
              <Route path='/disclaimer' element={<Disclaimer />} />
              <Route path='/privacypolicy' element={<PrivacyPolicy />} />
              <Route path='/termsconditions' element={<TermsConditions />} />
              <Route path='/search/:keyword' element={<ProductSearch />} />
              <Route path='/category/:category' element={<CategoryProducts />} />
              <Route path='/product/:id' element={<ProductDetail/>} />
              <Route path='/cart' element={<Cart/>} />
              <Route path='/shipping' element={<ProtectedRoute><Shipping/></ProtectedRoute>} />
              <Route path='/order/confirm' element={<ProtectedRoute><ConfirmOrder/></ProtectedRoute>} />
              <Route path='/payment' element={<ProtectedRoute><Payment/></ProtectedRoute>} />
              <Route path='/order/success' element={<ProtectedRoute><OrderSuccess/></ProtectedRoute>} />
              <Route path='/orders' element={<ProtectedRoute><UserOrders/></ProtectedRoute>} />
              <Route path='/order/:id' element={<ProtectedRoute><OrderDetail/></ProtectedRoute>} />
            </Routes>
          </div>
          <Routes>
            <Route path="/admin/dashboard" element={<ProtectedRoute isAdmin={true}><Dashboard /></ProtectedRoute>} />
            <Route path="/admin/products" element={<ProtectedRoute isAdmin={true}><ProductList /></ProtectedRoute>} />
            <Route path="/admin/products/create" element={<ProtectedRoute isAdmin={true}><NewProduct /></ProtectedRoute>} />
            <Route path="/admin/product/:id" element={<ProtectedRoute isAdmin={true}><UpdateProduct /></ProtectedRoute>} />
            <Route path="/admin/orders" element={<ProtectedRoute isAdmin={true}><OrderList /></ProtectedRoute>} />
            <Route path="/admin/order/:id" element={<ProtectedRoute isAdmin={true}><UpdateOrder /></ProtectedRoute>} />
            <Route path="/admin/users" element={<ProtectedRoute isAdmin={true}><UserList /></ProtectedRoute>} />
            <Route path="/admin/user/:id" element={<ProtectedRoute isAdmin={true}><UpdateUser /></ProtectedRoute>} />
            <Route path="/admin/reviews" element={<ProtectedRoute isAdmin={true}><ReviewList /></ProtectedRoute>} />
          </Routes>
          <Footer />
        </HelmetProvider>
      </div>
    </Router>
  );
}
export default App;
