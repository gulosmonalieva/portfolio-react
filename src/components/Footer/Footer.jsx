import React from "react";

const Footer = () => {
  const date = new Date();

  return (
    <footer
      style={{
        marginTop: "30px",
        padding: "20px 0",
        backgroundColor: " rgb(37, 88, 170)",
        color: "white",
        textAlign: "center",
      }}
    >
      <div className="container">
        <p>Copyright. &copy;{date.getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
