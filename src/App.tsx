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

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />

        <Route path="/products" element={<Product />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/Post" element={<Post />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App