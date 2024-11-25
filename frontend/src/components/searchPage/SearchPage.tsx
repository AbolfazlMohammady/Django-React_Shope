import React from "react";
import Container from "../container/Container";

function SearchPage() {
  return (
    <div className="">
      <Container>
        <div className="w-[100%] flex flex-row-reverse   mt-9">
          {/* fillter */}
          <div className="flex flex-col text-right w-[25%]  border-l border-gray-300">
            <h1 className="text-[1.50rem] font-bold  pr-3 ">فیلتر</h1>
            <ul className="mt-2 text-[0.80rem] text-slate-500 font-semibold w-[95%] mx-auto bg-slate-100 border border-slate-300 flex flex-col p-2 pr-3 text-right">
              <li className="text-[1.30rem] mb-2 text-slate-800 font-bold">
                دسته بندی
              </li>
              <li>لوازم خانگی </li>
              <li>صوتی تصویری</li>
              <li>تهویه مطبوع </li>
              <li>لوازم دیجیتال</li>
              <li>لوازم پزشکی</li>
              <li>لوازم آرایشی و بهداشتی</li>
            </ul>
            <h1 className="text-[1.50rem] font-bold  pr-3 mt-3">
              جستجو در نتایج
            </h1>
            <input
              type="text"
              className="border-2 border-gray-700 w-[95%] mx-auto mt-2 text-right px-2 py-1 rounded-sm"
              placeholder="...جستجو"
            />
            <h1 className="text-[1.50rem] font-bold  pr-3 mt-3">برند</h1>
          </div>
          {/* product */}
          <div className="flex flex-col text-right w-[75%] mr-3">
            <h1 className="text-[1.50rem] font-bold  pr-3 ">جستجو</h1>
            <div className="flex flex-row-reverse justify-between border-2 border-gray-700 w-[98%] mx-auto mt-2 text-right px-3 py-2 rounded-sm">
              <ul className="flex gap-3 flex-row-reverse">
                <li className="border-l pl-3 ">بیشترین ها</li>
                <li className="border-l pl-3">پربازدید ترین ها</li>
                <li className="border-l pl-3">محبوب ترین ها</li>
                <li className="border-l pl-3">پرفروش ترین ها</li>
                <li className="border-l pl-3">ارزان ترین ها</li>
                <li className="">گران ترین ها</li>
              </ul>
              <ul className="flex gap-3 flex-row-reverse">
                <li>اعداد نمایش</li>
                <li>12</li>
                <li>26</li>
                <li>68</li>
              </ul>
            </div>
            <div className="w-[100%] flex justify-center items-center mt-10">
              <ul className="flex flex-row-reverse mt-auto gap-5">
                <li className="px-3 py-2 bg-slate-400 rounded-sm">1</li>
                <li className="px-3 py-2 bg-slate-400 rounded-sm">2</li>
                <li className="px-3 py-2 bg-slate-400 rounded-sm">3</li>
                <li className="py-1 rounded-sm">...</li>
                <li className="px-3 py-2 bg-slate-400 rounded-sm">4</li>
                <li className="px-3 py-2 bg-slate-400 rounded-sm">5</li>
                <li className="px-3 py-2 bg-slate-400 rounded-sm">6</li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default SearchPage;
