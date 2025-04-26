import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductList from "./ProductList";
import About from "./About";
import Home from "./Home";
import ProductDetails from "./ProductDetails";
import AddProduct from "./AddProduct";

const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ProductList" element={<ProductList />} />
        <Route path="/addproduct" element={<AddProduct />} />

        <Route path="/productdetails/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
};

export default Allroutes;
