import React, { useEffect, useState } from "react";
import axios from "axios";

const EditProduct = ({ id, onUpdate }) => {
  const [product, setProduct] = useState("");

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3000/products/${id}`, product)
      .then(() => onUpdate())
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3000/products/${id}`)

      .then((response) => setProduct(response.data))

      .catch((error) => console.error(error));
  }, [id]);

  return (
    <form onSubmit={handleSubmit}>
      <input name="price" value={product.price} onChange={handleChange} />
      <button type="submit">Save</button>
    </form>
  );
};

export default EditProduct;
