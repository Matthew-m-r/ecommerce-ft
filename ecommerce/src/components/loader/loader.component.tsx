import React from "react";
import AmazonLoader from "@assets/gif/amazonLoader.gif";
import "./loader.styles.scss";

const Loader = () => {
  return (
    <div className="main-loader-container">
      <img src={AmazonLoader} alt="Loading..." />
    </div>
  );
};

export default Loader;
