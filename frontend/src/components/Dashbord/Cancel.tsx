import React from 'react'
import phoneimg from "../../assets/mozer2.jpg";

function Cancel() {
  return (
    <div className=' w-full mx-auto px-2'>
    <h2 className="text-2xl font-semibold mb-6 border-b pb-4 bor ">سفارشات لغو شده</h2>
    <div className=" w-full flex flex-col md:grid md:grid-cols-2 gap-4 p-2 rounded-lg  shadow-lg">
    {
        [...Array(4)].map((item,k)=>(
      <div key={k} className="flex flex-col items-start border rounded-lg p-4 space-y-4">
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <span className="text-gray-50 bg-gray-500 p-0.5 px-2 rounded-full">X</span>
          <span className="text-sm text-gray-600">لغو شده</span>
        </div>

        <div className="text-sm text-gray-600 space-x-2 rtl:space-x-reverse">
          <span>2 اردیبهشت 1402</span>
          <span>|</span>
          <span>کد سفارش 2598584</span>
          <span>|</span>
          <span>تخفیف 0 تومان</span>
          <span>|</span>
          <span>مجموع سبد 0 تومان</span>
        </div>

        <div className="flex justify-center space-x-6 rtl:space-x-reverse mt-4">
          <img src={phoneimg} alt="Watch" className="w-20 h-20 rounded-lg" />
          <img src={phoneimg} alt="Headphones" className="w-20 h-20 rounded-lg" />
          <img src={phoneimg} alt="Earbuds" className="w-20 h-20 rounded-lg" />
        </div>

        <button className="mt-4 bg text-white py-2 px-4 rounded-lg">
          مشاهده جزئیات
        </button>
      </div>
        ))
      }
    </div>
</div>
  )
}

export default Cancel