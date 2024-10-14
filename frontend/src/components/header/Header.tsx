import React from "react";
import Container from "../container/Container";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import SearchBar from "../searchBar/SearchBar";
import Navbar from "../navbar/Navbar";
function Header() {
  return (
    <>
      {/* header */}
      <div className=" h-16  flex items-center ">
        <Container>
          <div className="flex justify-between flex-row-reverse items-center">
            <div className="flex justify-between items-center flex-row-reverse w-2/4">
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
            <div className="flex justify-around items-center flex-row-reverse w-1/4">
              {/* login or sing in */}
              <div className="ml-4">ورود / ثبت نام</div>
              {/* Shopping Cart */}
              <div className=" w-8 h-8">
                <FaShoppingCart className=" w-full h-full" />
              </div>
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
