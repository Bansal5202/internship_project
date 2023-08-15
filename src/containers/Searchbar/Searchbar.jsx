import React from "react";
import { useState } from "react";
import "./Searchbar.css";

function Searchbar() {
    const [text, setText] = useState("");

    const handleChange = (e) => setText(e.target.value);

    const clearSearch=()=>{
        setText("")
    }

  return (
    <>
      <div className="searchbar">
        <div className="searchbar_input">
          <input type="text" value={text} onChange={handleChange} placeholder="What are you looking for?.." />
        </div>
        <div className="searchbar_button">
          <button className="search">search</button>
          <button className="cancle" onClick={clearSearch}>cancel</button>
        </div>
      </div>
    </>
  );
}

export default Searchbar;