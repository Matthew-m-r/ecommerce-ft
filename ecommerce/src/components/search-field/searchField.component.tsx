import React from "react";
import { BsSearch } from "react-icons/bs";
import { IoSearchSharp } from "react-icons/io5";
import "./searchField.styles.scss";

const SearchField = () => {
  return (
    <div className="search-main-container">
      <div className="left-search-side"></div>
      <div className="fill-search-side"></div>
      <div className="right-search-side">
        <IoSearchSharp />
      </div>
    </div>
  );
};

export default SearchField;
