import React, { useState } from "react";
import { FaShoppingCart, FaTimes, FaUndo, FaList, FaMapMarkerAlt, FaEnvelope, FaUser, FaPencilAlt, FaLock } from "react-icons/fa";
import DeliveryProducts from "../components/Dashbord/DeliveryProducts";
import Order from "../components/Dashbord/Order";
import Cancel from "../components/Dashbord/Cancel";
import ProductReturn from "../components/Dashbord/ProductReturn";
import MyLists from "../components/Dashbord/MyLists";
import Addresses from "../components/Dashbord/Addresses";
import Messages from "../components/Dashbord/Messages";
import Profile from "../components/Dashbord/Profile";
import EditInformation from "../components/Dashbord/EditInformation";
import SecurityAndPassword from "../components/Dashbord/SecurityAndPassword";
import imgperson from '../assets/react.svg'

function Dashbord() {
 const [activeTab, setActiveTab] = useState("Addresses");
 return (
  <div className=" w-full h-full max-w-[1440px] pt-24 lg:pt-0 mx-auto flex flex-col justify-between items-center" dir="rtl">

   <div className=" w-full">
    <div className=" w-full flex gap-2 flex-col items-start justify-center lg:flex-row mt-5 p-2">
     <div className=" w-[90%] lg:w-[400px] mx-auto">
      <ShowProf />
      <ButtensItem activeTab={activeTab} setActiveTab={setActiveTab} />
     </div>
     <div className="w-[90%] mx-auto">
      {activeTab === "DeliveryProducts" && <DeliveryProducts />}
      {activeTab === "Order" && <Order />}
      {activeTab === "Cancel" && <Cancel />}
      {activeTab === "ProductReturn" && <ProductReturn />}
      {activeTab === "MyLists" && <MyLists />}
      {activeTab === "Addresses" && <Addresses />}
      {activeTab === "Messages" && <Messages />}
      {activeTab === "Profile" && <Profile />}
      {activeTab === "EditInformation" && <EditInformation />}
      {activeTab === "SecurityAndPassword" && <SecurityAndPassword />}
     </div>
    </div>
   </div>

  </div>
 );
}

export default Dashbord;

const ShowProf = () => {
 return (
  <div className=" max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
   {/* Header */}
   <div className=" bg h-24"></div>

   {/* Profile Image */}
   <div className="flex justify-center -mt-16">
    <img
     className="w-32 h-32 object-cover rounded-full border-4 border-white"
     src={imgperson}
     alt="User"
    />
   </div>

   {/* User Info */}
   <div className="text-center px-6 py-4">
    <h2 className="text-xl font-bold">ابوالفضل ملاشاهی</h2>
    <div className="mt-4">
     <button className="bg text-white px-4 py-2 rounded-full">افزایش موجودی</button>
     <button className="ml-4 bg-gray-100 text-gray-700 px-4 py-2 rounded-full">مسای کلاب</button>
    </div>
   </div>

   {/* User Stats */}
   <div className="flex justify-around border-t px-6 py-4 text-sm text-gray-600">
    <div className="text-center">
     <p className="font-bold text-lg">2</p>
     <p>سفارش جاری</p>
    </div>
    <div className="text-center">
     <p className="font-bold text-lg">68</p>
     <p>تحویل داده</p>
    </div>
    <div className="text-center">
     <p className="font-bold text-lg">15</p>
     <p>مرجوع شده</p>
    </div>
   </div>
  </div>
 );
};

const ButtensItem = ({ activeTab, setActiveTab }:any) => {
 return (
  <div className="max-w-sm mx-auto mt-3 bg-white shadow-lg rounded-lg overflow-hidden">
   <ul className="flex flex-col text-right p-4 space-y-2 text-gray-600">
    <li
     onClick={() => setActiveTab("DeliveryProducts")}
     className={` flex flex-row-reverse gap-2 items-center justify-end p-2 rounded-lg cursor-pointer ${
      activeTab === "DeliveryProducts" ? "bg" : "hover:bg-gray-100"
     } `}
    >
     <span>تحویل داده شده</span>
     <FaShoppingCart className="text" />
    </li>
    <li
     onClick={() => setActiveTab("Order")}
     className={` flex flex-row-reverse gap-2 items-center justify-end p-2 rounded-lg cursor-pointer ${
      activeTab === "Order" ? "bg" : "hover:bg-gray-100"
     } `}
    >
     <span>سفارش جاری</span>
     <FaShoppingCart className="text" />
    </li>
    <li
     onClick={() => setActiveTab("Cancel")}
     className={` flex flex-row-reverse gap-2 items-center justify-end p-2 rounded-lg cursor-pointer ${
      activeTab === "Cancel" ? "bg" : "hover:bg-gray-100"
     } `}
    >
     <span>لغو شده</span>
     <FaTimes className="text" />
    </li>
    <li
     onClick={() => setActiveTab("ProductReturn")}
     className={` flex flex-row-reverse gap-2 items-center justify-end p-2 rounded-lg cursor-pointer ${
      activeTab === "ProductReturn" ? "bg" : "hover:bg-gray-100"
     } `}
    >
     <span>مرجوع محصول</span>
     <FaUndo className="text" />
    </li>
    <li
     onClick={() => setActiveTab("MyLists")}
     className={` flex flex-row-reverse gap-2 items-center justify-end p-2 rounded-lg cursor-pointer ${
      activeTab === "MyLists" ? "bg" : "hover:bg-gray-100"
     } `}
    >
     <span>لیست های من</span>
     <FaList className="text" />
    </li>
    <li
     onClick={() => setActiveTab("Addresses")}
     className={` flex flex-row-reverse gap-2 items-center justify-end p-2 rounded-lg cursor-pointer ${
      activeTab === "Addresses" ? "bg" : "hover:bg-gray-100"
     } `}
    >
     <span>آدرس ها</span>
     <FaMapMarkerAlt className="text" />
    </li>
    <li
     onClick={() => setActiveTab("Messages")}
     className={` flex flex-row-reverse gap-2 items-center justify-end p-2 rounded-lg cursor-pointer ${
      activeTab === "Messages" ? "bg" : "hover:bg-gray-100"
     } `}
    >
     <span>پیغام ها</span>
     <FaEnvelope className="text" />
    </li>
    <li
     onClick={() => setActiveTab("Profile")}
     className={` flex flex-row-reverse gap-2 items-center justify-end p-2 rounded-lg cursor-pointer ${
      activeTab === "Profile" ? "bg" : "hover:bg-gray-100"
     } `}
    >
     <span>پروفایل</span>
     <FaUser className="text" />
    </li>
    <li
     onClick={() => setActiveTab("EditInformation")}
     className={` flex flex-row-reverse gap-2 items-center justify-end  p-2 rounded-lg cursor-pointer ${
      activeTab === "EditInformation" ? "bg" : "hover:bg-gray-100"
     } `}
    >
     <span>ویرایش اطلاعات</span>
     <FaPencilAlt className="text" />
    </li>
    <li
     onClick={() => setActiveTab("SecurityAndPassword")}
     className={` flex flex-row-reverse gap-2 items-center justify-end p-2 rounded-lg cursor-pointer ${
      activeTab === "SecurityAndPassword" ? "bg" : "hover:bg-gray-100"
     } `}
    >
     <span>امنیت و تغییر رمز</span>
     <FaLock className="text" />
    </li>
   </ul>
  </div>
 );
};
