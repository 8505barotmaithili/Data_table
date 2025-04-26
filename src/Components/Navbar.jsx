import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div
        style={{
          height: "70px",
          width: "100%",
          backgroundColor: "black",
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 style={{ paddingLeft: "4%" }}>logo</h1>

        <ul
          style={{
            marginRight: "6%",
            width: "70%",
            height: "40px",
            lineHeight: "40px",
            fontSize: "20px",
          }}
        >
          <li style={{ listStyle: "none" }}>
            <Link
              to="/"
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              Home
            </Link>
            <Link
              to="/about"
              style={{
                color: "white",
                textDecoration: "none",
                paddingLeft: "10%",
              }}
            >
              About
            </Link>
            <Link
              to="/productlist"
              style={{
                color: "white",
                textDecoration: "none",
                paddingLeft: "10%",
              }}
            >
              Product
            </Link>

            <Link
              to="/addproduct"
              style={{
                color: "white",
                textDecoration: "none",
                paddingLeft: "10%",
              }}
            >
              add Product
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
