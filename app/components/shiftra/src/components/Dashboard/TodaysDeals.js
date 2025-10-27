"use client";
import React, { useEffect, useState, useRef } from "react";
import { TodaysDealsApi } from "../ProductsApi";
import ListCard from "../../components/ListCard";
import StarRating from "../../components/StarRating";
import ProductCard from "../../components/ProductCard";
import CommonButton from "../../components/CommonButton"; 
import SVGIcon from "../SvgIcon";

const TodaysDealsSection = () => {
  const [products, setProducts] = useState([]);
  const scrollRef = useRef(null);

  const calculateTimeLeft = () => {
    const now = new Date();
    const midnight = new Date();
    midnight.setHours(23, 59, 59, 999);
    const diff = midnight - now;
  
    if (diff <= 0) return null; 
  
    return {
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };
  
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  
  useEffect(() => {
    if (!timeLeft) return;
  
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  
    return () => clearInterval(interval);
  }, [products]);
  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({ 
        left: direction === "left" ? -scrollAmount : scrollAmount, 
        behavior: "smooth" 
      });
    }
  };

  return (
    <div className="mt-20">
      <TodaysDealsApi setProducts={setProducts} />
      <ListCard title="Today's" textColor="red-500"/>
      <div className="flex items-center justify-between mb-0 md:mb-6">
        <div className="flex items-center space-x-6">
          <h2 className="text-4xl font-semibold mr-10 md:mr-20 -mt-2 md:mt-0">Flash Sales</h2>
          {products.length > 0 && timeLeft && (
            <div className="flex items-center space-x-3 mb-8">
              {["Hours", "Minutes", "Seconds"].map((label, index) => (
                <div key={index} className="flex flex-col items-start ml-10">
                  <p className="text-black text-xs font-black timer-lable">{label}</p>
                  <div className="flex items-center space-x-1">
                    <p className="text-5xl font-bold text-gray-900 timer">
                      {index === 0
                        ? timeLeft.hours.toString().padStart(2, "0")
                        : index === 1
                        ? timeLeft.minutes.toString().padStart(2, "0")
                        : timeLeft.seconds.toString().padStart(2, "0")}
                    </p>
                    {index !== 2 && <span className="text-red-500 text-4xl font-bold">:</span>}
                  </div>
                </div>
              ))}
            </div>          
          )}
        </div>
        <div className="flex space-x-2 hidden sm:block">
          <button 
            onClick={() => scroll("left")} 
            className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition"
          >
            <SVGIcon src="/assets/icons/left.png" alt="Left"/>
          </button>
          <button 
            onClick={() => scroll("right")} 
            className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition"
          >
            <SVGIcon src="/assets/icons/right.png" alt="Right"/>
          </button>
        </div>
      </div>
      <div ref={scrollRef} className="overflow-x-auto scrollbar-hide flex space-x-8 scroll-smooth">
        {products.length > 0 ? (
          products.map((product, index) => 
            <div key={index} className="w-full flex flex-col">
              <div className="w-[250px] h-[270px] flex items-center justify-center overflow-hidden">
                <ProductCard product={product} hoverEffect={true} width="250px" showFav/>
              </div>
              <div className="text-left w-full mt-3">
                <h3 className="text-base font-medium">{product.name}</h3>
                <p className="text-red-500 text-base font-medium">
                  ₹{product.price}{" "}
                  {product.oldPrice && <span className="line-through text-gray-500">${product.oldPrice}</span>}
                </p>
                <StarRating rating={product.rating} totalPurchased={product.totalPurchased} />
              </div>
            </div>
            )
        ) : (
          <p>No products available</p>
        )}
      </div>
      <div className="flex justify-center mt-6">
        <CommonButton text="View All Products" filled />
      </div>
    </div>
  );
};

export default TodaysDealsSection;
