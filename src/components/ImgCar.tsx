import { useState } from "react";
import { Image } from "../types";

const ImgCar = ({ images, link }: { images: Image[]; link?: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previous = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const forward = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full max-w-screen-lg mx-auto mb-8">
      <div className="object-fill w-4/5 h-full md:min-h-[450px] mx-auto">
        <img
          src={images[currentIndex].img}
          alt="carousel"
          className="w-auto h-auto m-auto"
        />
      </div>
      {/* <p className="w-full text-sm text-center">
        Image {currentIndex}: "{images[currentIndex].title}"
      </p> */}
      {images[0].title !== "Default" && (
        <>
          <button
            onClick={previous}
            className="absolute px-4 py-2 text-white transform -translate-y-1/2 bg-gray-700 rounded-full top-1/2 left-4 hover:bg-gray-800 focus:outline-none"
          >
            &lt;
          </button>
          <button
            onClick={forward}
            className="absolute px-4 py-2 text-white transform -translate-y-1/2 bg-gray-700 rounded-full top-1/2 right-4 hover:bg-gray-800 focus:outline-none"
          >
            &gt;
          </button>
        </>
      )}
    </div>
  );
};

export default ImgCar;
