import React from "react";

function EditInformation() {
  return (
    <div className="flex flex-col items-center justify-center min-h-max pb-4 shadow-lg rounded-lg">
      <div className=" w-full flex flex-col justify-center lg:flex-row gap-8 p-8 bg-white  ">
        {/* Personal Account Information */}
        <div className="w-[80%] mx-auto lg:w-full p-4">
          <h2 className="text-lg font-semibold text-gray-700 border-b-2 bor pb-2 mb-4">
            اطلاعات حساب شخصی
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-600 mb-1">* نام کاربری</label>
              <input
                type="text"
                placeholder="مثال: mollashahi"
                className="w-full px-4 py-2 rounded-full bg2  border bor focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-1">
                (اختیاری) نام و نام خانوادگی
              </label>
              <input
                type="text"
                placeholder="مثال: ابوالفضل ملاشاهی"
                className="w-full px-4 py-2 rounded-full bg2 border bor focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-1">* شماره همراه</label>
              <input
                type="text"
                placeholder="مثال: 0911"
                className="w-full px-4 py-2 rounded-full bg2 border bor focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-1">
                (اختیاری) ایمیل
              </label>
              <input
                type="email"
                placeholder="info@test.com"
                className="w-full px-4 py-2 rounded-full bg2 border bor focus:outline-none"
              />
            </div>
            <div className="">
              <label
                htmlFor="receiveSms"
                className=" flex items-center gap-2 text-gray-600"
              >
                <input
                  type="checkbox"
                  id="receiveSms"
                  className="appearance-none h-5 w-5 border bor rounded-sm checked:bg-violet-600 checked:border-transparent focus:outline-none checked:after:content-['✓'] checked:after:text-white checked:after:block checked:after:-translate-y-1 checked:after:text-center "
                />
                تمایل به دریافت پیامک دارم
              </label>
            </div>
          </div>
        </div>

        {/* Bank Account Information */}
        <div className="w-[80%] mx-auto lg:w-full p-4">
          <h2 className="text-lg font-semibold text-gray-700 border-b-2 bor pb-2 mb-4">
            اطلاعات حساب بانکی
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-600 mb-1">
                (اختیاری) شماره کارت
              </label>
              <input
                type="text"
                placeholder="شماره کارت شما"
                className="w-full px-4 py-2 rounded-full bg2 border bor focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-1">
                (اختیاری) شماره شبا
              </label>
              <input
                type="text"
                placeholder="شماره شبا شما"
                className="w-full px-4 py-2 rounded-full bg2 border bor focus:outline-none"
              />
            </div>
          </div>
        </div>
      </div>
      <button className="mt-8 px-6 py-2 bg2 hover:bg-violet-600 transition-all text-white rounded-full focus:outline-none">
        ثبت اطلاعات کاربری
      </button>
    </div>
  );
}

export default EditInformation;
