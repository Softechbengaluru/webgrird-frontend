"use client";
import React, { useState } from "react";
import ListCard from "../../components/ListCard";
import { BestSellersApi } from "../ProductsApi";
import ProductCard from "../ProductCard";
import StarRating from "../StarRating";
import CommonButton from "../../components/CommonButton";

const BestSellersSection = () => {
  const [products, setProducts] = useState([]);

  return (
    <div className="mt-10 md:mt-16">
      <BestSellersApi setProducts={setProducts} />
      <hr className="border-t border-gray-300 mb-10 md:mb-16" />
      <div className="mb-8">
        <ListCard title="This Month" textColor="red-500"/>
      </div>
      <div className="flex items-center justify-between mb-12">
        <div className="flex items-center space-x-6">
          <h2 className="text-3xl font-bold">Best Selling Products</h2>
        </div>
        <div className="flex justify-center">
          <CommonButton text="View All" filled />
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
        {products.length > 0 ? (
            products.slice(0, 4).map((product, index) => 
              <div key={index} className="w-full flex flex-col items-center justify-center">
                <div className="w-[250px] h-[270px] flex items-center justify-center overflow-hidden">
                  <ProductCard product={product} hoverEffect={true} width="250px" showFav/>
                </div>
                <div className="text-left w-full mt-3 ml-12 md:ml-0">
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
    </div>
  );
};

export default BestSellersSection;