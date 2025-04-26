import React from "react";

const About = () => {
  const containerStyle = {
    minHeight: "100vh",
    background: "linear-gradient(to right, #141e30, #243b55)",
    color: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem",
  };

  const contentStyle = {
    maxWidth: "800px",
    textAlign: "center",
    lineHeight: "1.6",
  };

  const headingStyle = {
    fontSize: "3rem",
    fontWeight: "bold",
    marginBottom: "1rem",
  };

  const paragraphStyle = {
    fontSize: "1.2rem",
    color: "#d1d1d1",
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <h1 style={headingStyle}>About Us</h1>
        <p style={paragraphStyle}>
          Welcome to our application! We're passionate about delivering
          high-quality experiences through modern web technologies. Whether
          you're exploring our products or learning more about us, we aim to
          provide value at every step.
          <br />
          <br />
          This about page gives insight into our goals, values, and the mission
          that drives our work. Thanks for being part of our journey!
        </p>
      </div>
    </div>
  );
};

export default About;
