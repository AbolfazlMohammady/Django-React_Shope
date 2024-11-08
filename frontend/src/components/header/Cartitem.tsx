import { NavLink } from "react-router-dom";

const CartItem = () => {
  return (
    <div className="w-full mx-auto  rounded-lg overflow-hidden">
      <div className="">
        {/* Product */}
        {[...Array(3)].map((item, k) => (
          <div key={k} className="flex items-center border-b pb-4 mt-4">
            <img
              className="w-16 h-16 object-cover"
              src={"phoneimg"}
              alt="phone"
            />
            <div className="ml-4 flex-grow">
              <h3 className="text-lg font-semibold">شیائومی مدل Poco X4</h3>
              <p className="text-sm text-gray-500">تعداد: 1 | رنگ: مشکی</p>
            </div>
            <button className="ml-4 text-red-500">❌</button>
          </div>
        ))}

        {/* Total Price */}
        <div className="mt-4 bg-teal-500 text-white p-4 rounded-lg flex justify-between items-center">
          <span className="text-lg font-semibold">مجموع سبد:</span>
          <span className="text-lg font-bold">۳۵,۲۵۵,۵۰۰ تومان</span>
        </div>

        {/* Buttons */}
        <div className="mt-4 flex justify-between">
          <NavLink to={'/cart'}  className="bg-gray-200 text-gray-700 rounded-full px-4 py-2">
            مشاهده سبد
          </NavLink>
          <button className="bg-teal-500 text-white rounded-full px-4 py-2">
            پرداخت
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
