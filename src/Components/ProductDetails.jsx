import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const ProductDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/products/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch(() => {
        console.log("Error fetching product");
      });
  }, [id]);

  if (!data) {
    return (
      <div style={{ textAlign: "center", padding: "50px", color: "#777" }}>
        Loading product details...
      </div>
    );
  }

  const containerStyle = {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "2rem",
    backgroundColor: "#f0f2f5",
  };

  const cardStyle = {
    display: "flex",
    gap: "2rem",
    backgroundColor: "#fff",
    borderRadius: "12px",
    padding: "2rem",
    boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
    maxWidth: "900px",
    width: "100%",
  };

  const imageStyle = {
    width: "300px",
    height: "auto",
    objectFit: "contain",
    borderRadius: "10px",
  };

  const contentStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "left",
  };

  const titleStyle = {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "1rem",
  };

  const priceStyle = {
    fontSize: "1.5rem",
    color: "#27ae60",
    marginBottom: "1rem",
  };

  const categoryStyle = {
    fontSize: "1rem",
    color: "#999",
    marginBottom: "1rem",
  };

  const descriptionStyle = {
    fontSize: "1.1rem",
    lineHeight: "1.6",
    color: "#333",
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <img src={data.image} alt={data.title} style={imageStyle} />
        <div style={contentStyle}>
          <h2 style={titleStyle}>{data.title}</h2>
          <h3 style={priceStyle}>{data.price}</h3>
          <p style={categoryStyle}>{data.category}</p>
          <p style={descriptionStyle}>{data.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
