import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./protectRoutes/LoginProtectedRoute";
import AdminRoute from "./protectRoutes/AdminProtectRoute";

/* USER PAGES */
import { Home } from "./pages/user/home/Home";
import { Product } from "./pages/user/product/Product";
import { AddToCart } from "./pages/user/cart/AddToCart";
import { Wishlist } from "./pages/user/wishlist/Wishlist";
import Singleproduct from "./pages/user/singleproduct/Singleproduct";
import ProfilePage from "./pages/user/Profile/ProfilePage";
import { Checkout } from "./pages/user/checkout/Checkout";
import { SignUp } from "./pages/user/signUp/SignUp";
import { Login } from "./pages/user/login/Login";

/* ADMIN PAGES */
import Dashboard from "./pages/admin/dashboard/Dashboard";
import Orders from "./pages/admin/dashboard/Orders";
import Products from "./pages/admin/dashboard/Products";
import Inventory from "./pages/admin/dashboard/Inventory";
import Reviews from "./pages/admin/dashboard/Reviews";
import Coupons from "./pages/admin/dashboard/Coupons";
import Payments from "./pages/admin/dashboard/Payments";
import Settings from "./pages/admin/dashboard/Settings";
import AddProduct from "./pages/admin/dashboard/AddProduct";
import Addcategory from "./pages/admin/dashboard/AddCategory";
import { Category } from "./pages/admin/dashboard/Catogory";
import Users from "./pages/admin/dashboard/Users";
import AdminProtectRoute from "./protectRoutes/AdminProtectRoute";
import LoginProtectedRoute from "./protectRoutes/LoginProtectedRoute";
import { Success } from "./pages/user/checkout/Success";
import { MyOrders } from "./pages/user/checkout/MyOrders";






function App() {
  return (
    <Routes>

      {/*PUBLIC ROUTES*/}
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/singleproduct/:id" element={<Singleproduct />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />

      {/*PROTECTED USER ROUTES*/}
      <Route element={<LoginProtectedRoute />}>
        <Route path="/cart" element={<AddToCart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/order" element={<Checkout />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/success" element={<Success/>} />
        <Route path="/myorders" element={<MyOrders />} />

      </Route>

      {/*ADMIN ROUTES*/}
      <Route element={<AdminProtectRoute />}>
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/orders" element={<Orders />} />
        <Route path="/admin/products" element={<Products />} />
        <Route path="/admin/inventory" element={<Inventory />} />
        <Route path="/admin/reviews" element={<Reviews />} />
        <Route path="/admin/coupons" element={<Coupons />} />
        <Route path="/admin/payments" element={<Payments />} />
        <Route path="/admin/settings" element={<Settings />} />
        <Route path="/admin/add-product" element={<AddProduct />} />
        <Route path="/admin/add-category" element={<Addcategory />} />
        <Route path="/admin/category" element={<Category />} />
        <Route path="/admin/Users" element={<Users/>} />
      </Route>

    </Routes>
  );
}

export default App;