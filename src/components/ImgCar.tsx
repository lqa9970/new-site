import { useState } from "react";
import { Image } from "../types";

const ImgCar = ({ images }: { images: Image[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previous = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const forward = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <div className="relative h-[500px] w-full max-w-screen-lg mx-auto">
      <button
        onClick={previous}
        className="absolute px-4 py-2 text-white transform -translate-y-1/2 bg-gray-700 rounded-full top-1/2 left-4 hover:bg-gray-800 focus:outline-none"
      >
        &lt;
      </button>
      <div className="object-fill w-4/5 mx-auto h-600px">
        <img
          src={images[currentIndex].img}
          alt="carousel"
          className="w-full h-auto"
        />
        <p className="w-full text-center">{images[currentIndex].title}</p>
      </div>
      <button
        onClick={forward}
        className="absolute px-4 py-2 text-white transform -translate-y-1/2 bg-gray-700 rounded-full top-1/2 right-4 hover:bg-gray-800 focus:outline-none"
      >
        &gt;
      </button>
    </div>
  );
};

export default ImgCar;
