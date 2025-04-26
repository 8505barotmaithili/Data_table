import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const containerStyle = {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(to bottom right, #1f1c2c, #243b55)",
    color: "white",
    padding: "2rem",
    textAlign: "center",
  };

  const headingStyle = {
    fontSize: "3rem",
    fontWeight: "bold",
    marginBottom: "1rem",
  };

  const paragraphStyle = {
    fontSize: "1.2rem",
    maxWidth: "600px",
    margin: "0 auto 2rem",
    color: "#e0e0e0",
  };

  const buttonStyle = {
    padding: "0.75rem 2rem",
    backgroundColor: "#7f5af0",
    border: "none",
    borderRadius: "10px",
    color: "white",
    fontSize: "1rem",
    cursor: "pointer",
    fontWeight: "600",
    boxShadow: "0 5px 15px rgba(72, 50, 137, 0.4)",
    transition: "background-color 0.3s ease",
  };

  return (
    <div style={containerStyle}>
      <div>
        <h1 style={headingStyle}>Welcome to Our Store</h1>
        <p style={paragraphStyle}>
          Discover amazing products, great deals, and a smooth shopping
          experience. This is the home page of the application where your
          journey begins.
        </p>
        <Link to="/ProductList">
          <button style={buttonStyle}>Explore Products</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
