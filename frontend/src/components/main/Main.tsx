import React, { useEffect, useState } from "react";
import Container from "../container/Container";
const images = [
  "https://cdnfa.com/businesses/982e/files/normal/8970316.jpg",
  "https://cdnfa.com/businesses/982e/files/normal/8982031.jpg",
  "https://cdnfa.com/businesses/982e/files/normal/8970317.jpg",
  "https://cdnfa.com/businesses/982e/files/normal/8970311.jpg",
  "https://cdnfa.com/businesses/982e/files/normal/8970308.jpg",
];

function Main() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <div className="mt-10 relative overflow-hidden">
        <div
          className="flex transition-transform duration-1000 ease-in-out "
          style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              className="min-w-full rounded-2xl  object-cover"
              src={image}
              alt={`img-banner-${index}`}
            />
          ))}
        </div>
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-lg hover:bg-gray-200"
        >
          &#9664;
        </button>
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-lg hover:bg-gray-200"
        >
          &#9654;
        </button>
      </div>
    </Container>
  );
}

export default Main;
