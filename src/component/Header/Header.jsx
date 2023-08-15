import Navbar from "../../containers/Navbar/Navbar";
import SearchBar from "../../containers/Searchbar/Searchbar";

import React from 'react'

function Header() {
  return (
   <>
   <div>
    <Navbar/>
   </div>
   <div>
    <SearchBar/>
   </div>
   </>
   
  )
}

export default Header

