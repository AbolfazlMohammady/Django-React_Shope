import { FaSearch } from "react-icons/fa";
import React from "react";
function SearchBar() {
  return (
    <>
      <div className="  justify-between items-center h-8  rounded-sm bg-slate-200 mr-5 py-1 px-1 ">
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
    </>
  );
}

export default SearchBar;
