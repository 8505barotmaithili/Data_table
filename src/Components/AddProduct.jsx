import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { toast } from "react-toastify";

const Addproduct = () => {
  const formik = useFormik({
    initialValues: {
      title: "",
      image: "",
      description: "",
      price: "",
      category: "",
    },
    onSubmit: (values) => {
      axios
        .post("http://localhost:3000/products", values)
        .then((res) => {
          toast.success("Product successfully added");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  });

  const containerStyle = {
    maxWidth: "500px",
    margin: "50px auto",
    padding: "2rem",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
    fontFamily: "Arial, sans-serif",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "5px",
    fontWeight: "bold",
    marginTop: "1rem",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  };

  const selectStyle = {
    ...inputStyle,
  };

  const buttonStyle = {
    width: "100%",
    padding: "10px",
    backgroundColor: "#4caf50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "1rem",
  };

  const headingStyle = {
    textAlign: "center",
    marginBottom: "1.5rem",
    color: "#333",
  };

  return (
    <div style={containerStyle}>
      <form onSubmit={formik.handleSubmit}>
        <h1 style={headingStyle}>Add New Product</h1>

        <label style={labelStyle} htmlFor="title">
          Title:
        </label>
        <input
          style={inputStyle}
          type="text"
          name="title"
          id="title"
          value={formik.values.title}
          onChange={formik.handleChange}
        />

        <label style={labelStyle} htmlFor="image">
          Image URL:
        </label>
        <input
          style={inputStyle}
          type="text"
          name="image"
          id="image"
          value={formik.values.image}
          onChange={formik.handleChange}
        />

        <label style={labelStyle} htmlFor="description">
          Description:
        </label>
        <input
          style={inputStyle}
          type="text"
          name="description"
          id="description"
          value={formik.values.description}
          onChange={formik.handleChange}
        />

        <label style={labelStyle} htmlFor="price">
          Price:
        </label>
        <input
          style={inputStyle}
          type="text"
          name="price"
          id="price"
          value={formik.values.price}
          onChange={formik.handleChange}
        />

        <label style={labelStyle} htmlFor="category">
          Category:
        </label>
        <select
          style={selectStyle}
          name="category"
          value={formik.values.category}
          onChange={formik.handleChange}
        >
          <option value="">Select Category</option>
          <option value="women's clothing">Women's Clothing</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="jewelery">Jewelery</option>
          <option value="electronics">Electronics</option>
        </select>

        <button style={buttonStyle} type="submit">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default Addproduct;
