"use client";
import React, { useRef } from "react";
import ListCard from "../../components/ListCard";
import SVGIcon from "../SvgIcon";

const TopCategories = () => {
  const scrollRef = useRef(null);

  const categories =[
    {
        name: "Phones",
        image: "/assets/icons/phone.png",
    },
    {
        name: "Computers",
        image: "/assets/icons/computer.png",
    },
    {
        name: "SmartWatch",
        image: "/assets/icons/smartwatch.png",
    },
    {
        name: "Camera",
        image: "/assets/icons/camera.png",
    },
    {
        name: "HeadPhones",
        image: "/assets/icons/headphones.png",
    },
    {
        name: "Gamepad",
        image: "/assets/icons/gamepad.png",
    },
]

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 180 * 3;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="mt-10 md:mt-16">
      <hr className="border-t border-gray-300 mb-6" />
      <div className="mb-8">
        <ListCard title="Categories" textColor="red-500"/>
      </div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold">Browse By Category</h2>
        <div className="flex space-x-2 hidden sm:block">
          <button
            onClick={() => scroll("left")}
            className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition"
          >
            <SVGIcon src="/assets/icons/left.png" alt="Left" className="w-6 h-6" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition"
          >
            <SVGIcon src="/assets/icons/right.png" alt="Right" className="w-6 h-6" />
          </button>
        </div>
      </div>
      <div className="relative overflow-hidden">
        <div
          ref={scrollRef}
          className="flex space-x-4 overflow-x-auto gap-6 scrollbar-hide px-2"
          style={{
            display: "flex",
            flexWrap: "nowrap",
            overflowX: "auto",
            scrollBehavior: "smooth",
            whiteSpace: "nowrap",
            width: "100%",
          }}
        >
          {categories.map((category, index) => (
            <div
              key={index}
              className="w-[102px] md:w-[170px] h-[87px] md:h-[145px] flex flex-col items-center justify-center border border-gray-300 text-gray-800 text-base font-normal rounded-lg shadow-md hover:bg-red-500 hover:text-white transition cursor-pointer flex-shrink-0 group"
            >
              <SVGIcon src={category.image} alt={category.name} className="mb-2 filter invert-0 group-hover:invert"  />
              {category.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopCategories;
