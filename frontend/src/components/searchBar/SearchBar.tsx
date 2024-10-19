import { FaSearch } from "react-icons/fa";
import React from "react";
function SearchBar() {
  return (
    <div className="w-full md:max-w-[70%] flex justify-between items-center h-8 rounded-md bg-slate-200 mr-5 py-1 px-1">
      <div className="px-2 py-1 border-slate-400 border-r-2  ">
        <FaSearch />
      </div>
      <div>
        <input
        dir="rtl"
          className=" w-full bg-transparent outline-none px-2"
          type="text"
          placeholder=".....جستجو"
        />
      </div>
    </div>
  );
}

export default SearchBar;
