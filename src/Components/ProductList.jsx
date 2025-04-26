import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DeleteProduct from "./DeleteProduct";
import EditProduct from "./EditProduct";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [editid, seteditid] = useState();

  function getProducts() {
    axios
      .get("http://localhost:3000/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const handledelete = (id) => {
    setProducts((prev) => prev.filter((e) => e.id !== id));
  };

  const handleUpdate = () => {
    seteditid();
    getProducts();
  };

  useEffect(() => {
    getProducts();
  }, []);

  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center",
    padding: "2rem",
    backgroundColor: "#f5f5f5",
  };

  const cardStyle = {
    backgroundColor: "#fff",
    borderRadius: "10px",
    padding: "1rem",
    width: "250px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    transition: "transform 0.2s ease",
  };

  const imageStyle = {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "8px",
    marginBottom: "10px",
  };

  const buttonStyle = {
    padding: "0.5rem 1rem",
    backgroundColor: "#4a90e2",
    color: "white",
    border: "none",
    borderRadius: "5px",
    marginTop: "10px",
    cursor: "pointer",
    fontWeight: "bold",
  };

  return (
    <div style={containerStyle}>
      {products.map((ele) => (
        <div key={ele.id} style={cardStyle}>
          <Link to={`/productdetails/${ele.id}`}>
            <img src={ele.image} alt={ele.title} style={imageStyle} />
          </Link>

          <h2>{ele.title}</h2>
          <h3>{ele.price}</h3>
          <p style={{ color: "#777" }}>{ele.category}</p>

          <DeleteProduct id={ele.id} setdelete={handledelete} />
          <br></br>
          {/* This code conditionally shows either an edit form or an Edit button for each item. */}

          {editid === ele.id ? (
            <EditProduct id={ele.id} onUpdate={handleUpdate} />
          ) : (
            <button style={buttonStyle} onClick={() => seteditid(ele.id)}>
              Edit
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductList;
