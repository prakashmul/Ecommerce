import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./layout/Header";

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
import Category from "./pages/category/category";
import Product_form from "./pages/products/product-form";

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
          <Route path="/productform" element={<Product_form />} />

          <Route path="/categoryform" element={<Category />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pricing" element={<Pricing />} />

          <Route path="/Post" element={<Post />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* Authentication layout */}
        <Route element={<AuthLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App