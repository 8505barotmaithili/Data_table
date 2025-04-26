import React from "react";
import axios from "axios";

const DeleteProduct = ({ id, setdelete }) => {
  const handledelete = () => {
    axios
      .delete(`http://localhost:3000/products/${id}`)
      .then(() => setdelete(id))
      .catch((error) => console.error(error));
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
    <button style={buttonStyle} onClick={handledelete}>
      Delete
    </button>
  );
};

export default DeleteProduct;
