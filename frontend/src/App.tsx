import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import Product from "./pages/products/Product";
import Contact from "./pages/contact/Contact";
import Pricing from "./pages/pricing/Pricing";
import SingleProduct from "./pages/products/product-detail";
import Post from "./pages/Post/Post";
import Signin from "./pages/Signin/signin";
import Register from "./pages/Register/register";
import NotFound from "./pages/not-found/notfound";
import Dashboard from "./pages/dashboard/dashboard";
import AuthLayout from "./layout/auth-layout/auth";
import DefaultLayout from "./layout/default/default";
import AddProductForm from "./pages/dashboard/product/add-products";
import AddCategoryForm from "./pages/dashboard/category/add-category";
import GetProduct from "./pages/dashboard/product/get-product";
import GetOrder from "./pages/dashboard/orders/get-order";
import UserPage from "./pages/dashboard/user/get-user";
import GetCategory from "./pages/dashboard/category/get-category";
import UpdateProductPage from "./pages/dashboard/product/update-prouct/update-product";
import UpdateCategoryPage from "./pages/dashboard/category/update-category/update-category";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<NotFound />} />

        {/* Default Layout */}
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />

          <Route path="/products" element={<Product />} />
          <Route path="/products/:id" element={<SingleProduct />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/pricing" element={<Pricing />} />

          <Route path="/Post" element={<Post />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* Authentication layout */}
        <Route element={<AuthLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />

          {/* Products */}
          <Route path="/dashboard/products" element={<GetProduct />} />
          <Route path="/dashboard/add-product" element={<AddProductForm />} />
          <Route path="/dashboard/update-product/:id" element={<UpdateProductPage/>} />


          {/* Category */}
          <Route path="/dashboard/add-category" element={<AddCategoryForm />} />
          <Route path="/dashboard/category" element={<GetCategory />} />
          <Route path="/dashboard/update-category/:id" element={<UpdateCategoryPage/>} />


          {/* Orders */}
          <Route path="/dashboard/orders" element={<GetOrder />} />

          {/* Customers */}
          <Route path="/dashboard/customers" element={<UserPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App