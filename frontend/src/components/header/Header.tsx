import React from "react";
import Container from "../container/Container";
import { FaRegUser, FaSearch, FaShoppingCart } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import SearchBar from "../searchBar/SearchBar";
import Navbar from "../navbar/Navbar";
import { NavLink } from "react-router-dom";
import CartItem from "./Cartitem";
function Header() {
 return (
  <>
   {/* header */}
   <div className=" flex items-center p-2">
    <Container>
     <div className=" w-full px-2 flex justify-between flex-col md:items-center md:justify-between md:flex-row-reverse md:gap-3 ">
      <div className="w-full flex  items-center flex-row-reverse ">
       {/* logo */}
       <div>
        <img src="https://cdnfa.com/businesses/982e/uploads/logo.png" alt="فروشگاه اینترنتی زنبیل | تضمین بهترین خرید اینترنتی" width="70" height="48" />
       </div>
       {/* Search bar */}
       <SearchBar />
      </div>
      <div className=" w-max  md:w-[200px] flex gap-2 justify-center md:justify-around items-center">
       <div dir="rtl" className=" dropdown dropdown-bottom dropdown-end">
        <div tabIndex={0} role="button" className="btns w-[40px] h-[40px] rounded-xl shadow-md flex justify-center items-center">
         <SlBasket size={25} />
        </div>
        <ul tabIndex={0} className="dropdown-content menu w-[350px]  bg-blue-50 rounded-box z-[100] shadow">
         <CartItem />
        </ul>
       </div>

       <NavLink to={"/login"} className={`w-[40px] h-[40px] rounded-xl shadow-md flex justify-center items-center`}>
        <FaRegUser />
       </NavLink>
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
