import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaUser } from "react-icons/fa";
import { MdOutlinePlace } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";

function Addresses() {
 return (
  <div className=" w-full mx-auto px-2">
   <h2 className="text-2xl font-semibold mb-6 border-b pb-4 bor ">آدرس ها</h2>
   <div className=" w-full flex  flex-col gap-4 p-2 rounded-lg  shadow-lg">
    {[...Array(5)].map((item, k) => (
     <Showaddress />
    ))}
   </div>
  </div>
 );
}

export default Addresses;

function Showaddress() {
 return (
  <div className=" w-full border shadow-lg rounded-lg p-2">
   <p className=" flex items-center gap-1">
    <MdOutlinePlace className="text w-5 h-5 mr-2" />
    <span> خیابان امام، بعد میدان حشمت، نرسید به چهارراه میکائیل</span>
   </p>
   <p className=" flex items-center gap-1">
    <span>ایران , گلستان</span>
   </p>
   <p className=" flex items-center gap-1">
    <FaEnvelope className="text-red-600" />
    <span>55345245465</span>
   </p>
   <p className=" flex items-center gap-1">
    {" "}
    <FaPhone className="text-green-600" />
    <span>090000000</span>
   </p>
   <p className=" flex items-center gap-1">
    <IoPersonOutline />
    <span> ابوالفضل ملاشاهی</span>
   </p>
  </div>
 );
}
