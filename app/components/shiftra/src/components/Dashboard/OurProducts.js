"use client";
import React, { useState, useRef } from "react";
import ListCard from "../../components/ListCard";
import { RelatedItemsApi } from "../ProductsApi";
import ProductCard from "../ProductCard";
import StarRating from "../StarRating";
import SVGIcon from "../SvgIcon";
import CommonButton from "../CommonButton";

const OurProducts = () => {
  const [products, setProducts] = useState([]);
  const scrollRef = useRef(null);

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
    <div className="mt-12">
      <RelatedItemsApi setProducts={setProducts} />
      <div className="mb-8">
        <ListCard title="Our Products" textColor="red-500"/>
      </div>
      <div className="flex items-center justify-between mb-12">
        <div className="flex items-center space-x-6">
          <h2 className="text-3xl font-bold">Explore Our Products</h2>
        </div>
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
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
        {products.length > 0 ? (
            products.slice(0, 8).map((product, index) => 
              <div key={index} className="w-full flex flex-col items-center justify-center">
                <div className="w-[250px] h-[270px] flex items-center justify-center overflow-hidden">
                  <ProductCard product={product} hoverEffect={true}  width="250px" showFav/>
                </div>
                <div className="text-left w-full mt-3 ml-12 md:ml-12">
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
        <div className="flex justify-center mt-10 md:mt-16">
            <CommonButton text="View All Products" filled />
        </div>
    </div>
  );
};

export default OurProducts;