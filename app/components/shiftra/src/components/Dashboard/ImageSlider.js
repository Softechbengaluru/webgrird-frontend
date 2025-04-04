"use client";
import React, { useState, useEffect } from "react";
import Categories from "./Categories";
import SVGIcon from "../SvgIcon";

const images = [
  "/assets/images/banner.png",
  "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex">
      <Categories />
      <div className="w-[1px] bg-gray-300 hidden sm:block"></div>
      <div className="ml-0 md:ml-16 w-[892px] h-[164px] md:h-[344px] relative overflow-hidden mt-5 md:mt-10">
        <SVGIcon
          src={images[currentIndex]}
          alt="Slider"
          className="w-full h-full  object-cover transition-opacity duration-500"
        />
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${currentIndex === index ? "bg-white scale-125" : "bg-gray-500 opacity-50"} transition-all duration-300`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
