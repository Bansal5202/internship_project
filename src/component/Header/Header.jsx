import React from "react";
import "./Header.css";
import Navbar from "../../containers/Navbar/Navbar";
import Searchbar from "../../containers/Searchbar/Searchbar";

function Header() {
  return (
    <>
      <div>
        <Navbar />
      </div>

      <div className="mt-20">
        <Searchbar />
      </div>
    </>
  );
}

export default Header;
