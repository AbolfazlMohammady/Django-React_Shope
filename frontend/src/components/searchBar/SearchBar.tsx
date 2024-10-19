import { FaSearch } from "react-icons/fa";
import React from "react";
function SearchBar() {
  return (
    <>
      <div className="hidden  justify-between items-center h-8  rounded-sm bg-slate-200 mr-5 py-1 px-1 md:flex">
        <div className="px-2 py-1 border-slate-400 border-r-2 ">
          <FaSearch />
        </div>
        <div>
          <input
            className="text-right bg-slate-200 outline-none sm:px-2 md:px-4 lg:px-6 xl:px-8"
            type="text"
            placeholder=".....جستجو"
          />
        </div>
      </div>
      <div className="flex items-center justify-center rounded-md border-slate-400 w-20 h-10 bg-emerald-400 md:hidden">
        <FaSearch className="text-xl" />
      </div>
    </>
  );
}

export default SearchBar;
