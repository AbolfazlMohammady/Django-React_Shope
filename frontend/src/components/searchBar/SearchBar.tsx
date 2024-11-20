import { FaSearch } from "react-icons/fa";
import React from "react";
function SearchBar() {
 return (
  <>
   <div className=" flex justify-betweene items-center h-10 w-[95%] max-w-lg rounded-sm bg-slate-200 mr-5 py-1 px-1 ">
    <div className="px-2 py-1 border-slate-400 border-r-2 ">
     <FaSearch className=" dark:text-black" />
    </div>
    <input className="w-full text-right bg-slate-200 dark:text-black outline-none px-2" type="text" placeholder=".....جستجو" />
   </div>
  </>
 );
}

export default SearchBar;
