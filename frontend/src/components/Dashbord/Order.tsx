import React from 'react'
import phoneimg from "../../assets/mozer2.jpg";

function Order() {
  return (
    <div className="w-full p-4 border rounded-lg shadow-sm">
    <h2 className="text-right text-lg font-bold mb-4 border-b pb-4 bor ">سفارشات در جریان</h2>

    {
      [...Array(4)].map((item,k)=>(
    <div key={k} className="flex flex-col items-start border rounded-lg p-4 space-y-4">
      <div className="flex items-center space-x-2 rtl:space-x-reverse">
        <span className="text-sm text-gray-600"> خروج از انبار</span>
      </div>

      <div className="text-sm text-gray-600 space-x-2 rtl:space-x-reverse">
        <span>2 اردیبهشت 1402</span>
        <span>|</span>
        <span>کد سفارش 2598584</span>
        <span>|</span>
        <span>تخفیف 250,000 تومان</span>
        <span>|</span>
        <span>مجموع سبد 585,000 تومان</span>
      </div>

      <div className="flex items-center space-x-1 rtl:space-x-reverse">
        <span className="text-sm text-gray-600">15 امتیاز مسای‌کلاب 🎁</span>
      </div>

      <div className="flex justify-center space-x-6 rtl:space-x-reverse mt-4">
        <img src={phoneimg} alt="Watch" className="w-20 h-20 rounded-lg" />
        <img src={phoneimg} alt="Headphones" className="w-20 h-20 rounded-lg" />
        <img src={phoneimg} alt="Earbuds" className="w-20 h-20 rounded-lg" />
      </div>

      <button className="mt-4 bg-red-500 text-white py-2 px-4 rounded-lg">
        لغو سبد
      </button>
    </div>
      ))
    }
  </div>
  )
}

export default Order