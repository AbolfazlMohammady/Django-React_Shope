import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
// import "swiper/css/pagination";

import { Autoplay, Navigation } from "swiper/modules";
import { NavLink } from "react-router-dom";

interface Category {
 linkcategory: string;
 titlecategory: string;
 imgcategory: string;
}
interface Categorys {
 categorys: Category[];
}
interface Brand {
 linkbrand: string;
 imgbrand: string;
}
interface Brands {
 brands: Brand[];
}
interface Product {
 idproduct: string;
 imgproduct: string;
 nameproduct: string;
 reateproduct: number;
 priceproduct: number;
}
interface Products {
 products: Product[];
}

const SliderProducts: React.FC<Categorys & Brands & Products> = ({ categorys, brands, products }) => {
 // category
 const breakpointsconfig =
  categorys.length > 0
   ? {
      320: {
       slidesPerView: 3,
      },
      640: {
       slidesPerView: 3,
      },
      768: {
       slidesPerView: 4,
      },
      1024: {
       slidesPerView: 5,
      },
      1280: {
       slidesPerView: 6,
      },
     }
   : brands.length > 0
   ? {
      320: {
       slidesPerView: 3,
      },
      640: {
       slidesPerView: 4,
      },
      768: {
       slidesPerView: 6,
      },
      1024: {
       slidesPerView: 7,
      },
      1280: {
       slidesPerView: 10,
      },
     }
   : products.length > 0
   ? {
      320: {
       slidesPerView: 2,
      },
      640: {
       slidesPerView: 3,
      },
      768: {
       slidesPerView: 4,
      },
      1024: {
       slidesPerView: 5,
      },
      1280: {
       slidesPerView: 6,
      },
     }
   : undefined;

 const slidesPerViewconfig = categorys.length > 0 ? 2 : brands.length > 0 ? 3 : 2;

 return (
  <div className={` w-[95%] mx-auto h-max p-2 mt-4 flex items-center justify-center rounded-xl overflow-hidden `}>
   <Swiper
    slidesPerView={slidesPerViewconfig}
    spaceBetween={10}
    breakpoints={breakpointsconfig}
    navigation={categorys.length > 0 || (products.length > 0 && true)}
    autoplay={
     brands.length > 0 && {
      delay: 2000,
     }
    }
    loop={brands.length > 0 && true}
    pagination={{
     clickable: true,
    }}
    modules={[Navigation, Autoplay]}
    className="w-full px-2 h-full flex items-center justify-center"
   >
    {/* category-slide */}
    {categorys &&
     categorys.map((item, k) => (
      <SwiperSlide key={k} className=" w-full h-full flex items-center justify-center">
       <NavLink to={`/${item.linkcategory}`} className={` w-full h-full flex gap-2 flex-col items-center justify-center `}>
        <img className=" w-full h-[120px] sm:h-[160px] filter hover:backdrop-brightness-125 object-cover rounded-xl" src={item.imgcategory} alt="" />
        {item.titlecategory}
       </NavLink>
      </SwiperSlide>
     ))}

    {/* brand-slide */}
    {brands &&
     brands.map((item, k) => (
      <SwiperSlide key={k} className=" w-full h-full my-2 flex items-center justify-center shadow-sm shadow-black rounded-xl">
       <NavLink to={`/${item.linkbrand}`} className={`w-full h-full flex gap-2 flex-col items-center justify-center  `}>
        <img className=" w-[90%] h-[40px] object-cover rounded-xl" src={item.imgbrand} alt="brand img" />
       </NavLink>
      </SwiperSlide>
     ))}

    {/* products-slide */}
    {products &&
     products.map((item, k) => (
      <SwiperSlide key={k} className=" w-full h-[350px]d bg-red-500d p-2 my-1 flex flex-col items-end justify-center rounded-xl shadow-sm shadow-black">
       <NavLink to={item.idproduct} className={` w-full h-full flex gap-4 flex-col items-end justify-center `}>
        <img className=" w-full h-[210px] sm:h-[160px]s object-fill rounded-xl" src={item.imgproduct} alt="product img" />
        <p className="w-full text-center text-nowrap">{item.nameproduct}</p>
        <p className=" text-nowrap text-[14px] flex  items-center">
         ( امتیاز این محصول ) ( {item.reateproduct} ){" "}
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-yellow-500">
          <path
           strokeLinecap="round"
           strokeLinejoin="round"
           d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
          />
         </svg>
        </p>
        <p className=" flex gap-1 flex-row-reverse items-center text-nowrap text-red-600 text-[16px]">
         {item.priceproduct.toLocaleString()}
         <span>تومان</span>
        </p>
       </NavLink>
       <NavLink
        to={item.idproduct}
        className={` block h-[40px] mt-2 w-[100px] text-center p-2 rounded-lg hover:bg-red-500 hover:text-white transition-transform `}
       >
        مشاهده
       </NavLink>
      </SwiperSlide>
     ))}
   </Swiper>
  </div>
 );
};

export default SliderProducts;
