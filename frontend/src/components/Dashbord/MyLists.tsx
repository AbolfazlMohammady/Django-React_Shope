import phoneimg from "../../assets/mozer2.jpg";

function MyLists() {
  const products = [
    {
      image: phoneimg,
      title: "ساعت هوشمند",
      price: "ارسال امروز",
      specialOffer: "هدیه نقدی ۷۵,۰۰۰ تومان",
      delivery: "ارسال امروز",
    },
    {
      image: phoneimg,
      title: "هدفون بلوتوث انکر",
      price: "۷۵۰,۰۰۰",
      specialOffer: "هدیه نقدی ۷۵,۰۰۰ تومان",
    },
    {
      image: phoneimg,
      title: "ساعت هوشمند",
      price: "ارسال امروز",
      specialOffer: "هدیه نقدی ۷۵,۰۰۰ تومان",
      delivery: "ارسال امروز",
    },
    {
      image: phoneimg,
      title: "هدفون بلوتوث انکر",
      price: "۷۵۰,۰۰۰",
      specialOffer: "هدیه نقدی ۷۵,۰۰۰ تومان",
    },
  ];

  return (
    <div className="w-full mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-6 border-b pb-4 border-teal-500 ">محصولات مورد علاقه</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            title={product.title}
            price={product.price}
            specialOffer={product.specialOffer}
            delivery={product.delivery}
          />
        ))}
      </div>
    </div>
  );
}

export default MyLists;

function ProductCard({ image, title, price, specialOffer, delivery }:any) {
  return (
    <div className="border rounded-md shadow-md p-4 flex flex-col items-center">
      <img src={image} alt={title} className="w-32 h-32 object-cover mb-4" />
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      {delivery && (
        <p className="text-sm text-gray-500 mb-2 flex items-center">
          {delivery} <span className="ml-1">🚚</span>
        </p>
      )}
      <p className="text-sm text-gray-600 mb-4 flex items-center">
        <span className="ml-1">🎁</span> هدیه نقدی {price} تومان
      </p>
      <div className="flex justify-around w-full">
        <button className="px-4 py-2 bg text-white rounded flex items-center">
          افزودن به سبد <span className="ml-1">🛒</span>
        </button>
        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded flex items-center">
          حذف از لیست <span className="ml-1">🗑️</span>
        </button>
      </div>
    </div>
  );
}
