import React from 'react'

function Profile() {
  return (
    <div className=" mx-auto p-6 bg-white border rounded-md shadow-md">
      <div className="border-b pb-4 mb-4">
        <h2 className="text-xl font-semibold mb-4 border-b pb-4 bor ">اطلاعات حساب کاربری</h2>
        <div className="space-y-2 md:grid md:grid-cols-2 items-center">
          <p><span className="font-bold">نام:</span> ابوالفضل</p>
          <p><span className="font-bold">نام خانوادگی:</span> ملاشاهی</p>
          <p><span className="font-bold">شماره تلفن همراه:</span> 0900000000000</p>
          <p><span className="font-bold">پست الکترونیک:</span> چرتوپرت</p>
          <p><span className="font-bold">کد پستی:</span> (نامشخص)</p>
          <p><span className="font-bold">شغل:</span> برنامه نویس</p>
          <p><span className="font-bold">کد ملی:</span> 000000000</p>
          <p><span className="font-bold">روش بازگرداندن پول من:</span> شماره شبا</p>
          <p><span className="font-bold">تاریخ تولد:</span> 1000/00/00</p>
        </div>
        <button className="mt-4 px-4 py-2 bg text-white rounded ">
          ویرایش
        </button>
      </div>

      <div className="pt-4">
        <h2 className="text-xl font-semibold mb-4">اطلاعات حقوقی</h2>
        <p className="text-sm mb-4">
          این گزینه برای کسانی است که نیاز به خرید سازمانی (با فاکتور رسمی و گواهی ارزش افزوده) دارند.
        </p>
        <button className="px-4 py-2 bg text-white rounded">
          ویرایش اطلاعات حقوقی
        </button>
      </div>
    </div>
  )
}

export default Profile