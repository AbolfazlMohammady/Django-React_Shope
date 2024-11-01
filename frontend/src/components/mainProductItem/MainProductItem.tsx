import React from "react";
import Container from "../container/Container";

function Main() {
  return (
    <div className="my-4">
      <Container>
        <div className="flex flex-col justify-center items-center gap-2 sm:flex-row ">
          <div className="flex flex-col items-center gap-2">
            <Information />
            <Inputs />
            <AddProduct />
          </div>
          <ImgProduct />
        </div>
      </Container>
    </div>
  );
}

export default Main;

function ImgProduct() {
  return (
    <div className="flex justify-center items-center border w-[80%] sm:w-[50%]">
      <img src="https://cdnfa.com/businesses/982e/files/normal/8924374.jpg" />
    </div>
  );
}
function Information() {
  return (
    <div className="flex flex-col items-center gap-2 pb-4 border-b ">
      <h1 className="text-xl font-bold w-[70%] text-right mb-3">
        یخچال و فریزر ساید بای ساید 35فوت اسنوا مدل SN8-3035SS
      </h1>
      <div className="flex flex-col items-center gap-2 pb-4 sm:flex-row">
        {/* stars and more...*/}
        <div className="px-5 py-2 rounded-md bg-[#888da8] text-white">
          موجود در انبار
          <span className="m-1">✅</span>
        </div>
        <h3>دیدگاه کاربران</h3>
        <div>⭐⭐⭐⭐⭐</div>
      </div>
      {/* many$ */}
      <div className="text-[#fb3449] text-2xl flex gap-2">
        <h1>تومان</h1>
        <span>77,970,000</span>
      </div>
    </div>
  );
}

function Inputs() {
  return (
    <div className="flex flex-col w-[80%] gap-2 pb-4 border-b ">
      {/* inputs */}
      <label>رنگ</label>
      <select className="bg-slate-300 w-[80%] ">
        <option value="">استیل</option>
      </select>
      <label>گارانتی</label>
      <select className="bg-slate-300 w-[80%] ">
        <option value="">گارانتی 24 ماهه</option>
      </select>
    </div>
  );
}

function AddProduct() {
  return (
    <div className="w-[80%] ">
      {/* add product in sabad */}
      <div className="flex flex-col items-center gap-2 pb-4 border-b w-[100%]">
        <input type="range" />
        <div className="flex items-center justify-center py-3 bg-[#606683] text-white w-[70%]">
          افزودن به سبد
          <span className="m-1">🛒</span>
        </div>
        <h5 className="w-[70%] text-right">
          آیا این محصول را دوست داشتید؟ اکنون به موارد دلخواه اضافه کنید و محصول
          را دنبال کنید.
          <span className="m-1 p-1 bg-slate-300">❤</span>
        </h5>
        <div className="flex flex-col items-center gap-2 sm:flex-row">
          {/*  */}
          <div className="flex flex-col items-center gap-2">
            <h6 className="w-[70%] text-center">
              سوالی دارید؟ از کارشناسان زنبیل بپرسید
            </h6>
            <h2 className="w-[70%] text-center text-sky-700">گفتگوی آنلاین</h2>
          </div>
          {/*  */}
          {/* img */}
          <div className="w-40 h-40">
            <img src="https://cdnfa.com/businesses/982e/files/normal/8924374.jpg" />
          </div>
        </div>
      </div>
      <div className="flex justify-center flex-row-reverse gap-3 text-center">
        <h3>دسته بندی: یخچال فریزر</h3>
        <h3>برند: اسنوا</h3>
        <h3> کدکالا: 5593958</h3>
      </div>
    </div>
  );
}
