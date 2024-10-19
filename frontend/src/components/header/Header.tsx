import React from "react";
import Container from "../container/Container";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import SearchBar from "../searchBar/SearchBar";
import Navbar from "../navbar/Navbar";
function Header() {
  return (
    <>
      {/* header */}
      <div className=" flex items-center p-1">
        <Container>
          <div className=" w-full px-2 flex justify-between flex-col md:items-center md:justify-between md:flex-row-reverse md:gap-3 ">
            <div className="w-full flex  items-center flex-row-reverse ">
              {/* logo */}
              <div>
                <img
                  src="https://cdnfa.com/businesses/982e/uploads/logo.png"
                  alt="فروشگاه اینترنتی زنبیل | تضمین بهترین خرید اینترنتی"
                  width="70"
                  height="48"
                />
              </div>
              {/* Search bar */}
              <SearchBar />
            </div>
            <div className="w-max flex items-center ">
              {/* login or sing in */}
              {/* Shopping Cart */}
              <div className=" w-max h-max ">
                <FaShoppingCart className=" w-8 h-8 " />
              </div>
              <div className="ml-4 text-nowrap">ورود / ثبت نام</div>
            </div>
          </div>
        </Container>
      </div>
      {/* navbar items */}
      <Navbar />
    </>
  );
}

export default Header;
