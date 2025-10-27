"use client"; 
import React from "react";
// import { useRouter } from "next/router";
import SVGIcon from "../components/SvgIcon";
import routes from "../utils/routes";

const ProductCard = ({ product, showRemove, showEye, showFav, hoverEffect = false, height = "auto", width = "auto" }) => {
  // const router = useRouter();

  return (
      <div 
        className={`relative border rounded-lg shadow p-4 bg-gray-100 hover:shadow-lg flex flex-col justify-between ${hoverEffect ? "group" : ""}`}
        style={{ width, height }}
      >
      {product.discount && (
        <span className="absolute top-4 left-4 bg-[#DB4444] text-white text-xs px-3 py-2 rounded">
          -{product.discount}%
        </span>
      )}
      {product.new && (
        <span className="absolute top-2 left-2 bg-[#00FF66] text-white text-xs px-2 py-1 rounded">
          NEW
        </span>
      )}
      <div className="p-4 rounded-lg">
        <SVGIcon src={product.image} alt={product.name} product={product} header={true} className="w-full h-full object-center cursor-pointer" 
        onClick={() => {
          if (product?.documentId) {
            // router.push(routes.product.replace(":productId", product.documentId));
          } else {
            console.error("Navigation failed: Product documentId is missing");
          }
        }}        
        />
      </div>

      <button
        className={`absolute bottom-0 left-0 w-full bg-black text-white flex items-center justify-center py-2 rounded-b-lg transition-opacity duration-300 ${hoverEffect ? "opacity-0 hover:opacity-100" : "opacity-100"}`}
      >
        <SVGIcon src="/assets/icons/cart-white.svg" className="mr-2"/> Add To Cart
      </button>

      {showRemove && (
        <div className="absolute top-2 right-2 bg-white rounded-full p-1 shadow cursor-pointer hover:bg-red-500">
          <SVGIcon src="/assets/icons/trash.svg" className="text-gray-500 hover:text-white" zoomOut={0.8}/>
        </div>
      )}
      {showEye && (
        <div className="absolute top-2 right-2 bg-white rounded-full p-1 shadow cursor-pointer hover:bg-red-500">
          <SVGIcon src="/assets/icons/eye.svg" className="text-gray-500 hover:text-white" zoomOut={0.8}/>
        </div>
      )}
      {showFav && (
        <>
          <div className="absolute top-2 right-2 bg-white rounded-full p-1 shadow cursor-pointer hover:bg-red-500">
            <SVGIcon src="/assets/icons/wish.svg" className="text-gray-500 hover:text-white" zoomOut={0.8} />
          </div>
          <div className="absolute top-12 right-2 bg-white rounded-full p-1 shadow cursor-pointer hover:bg-red-500">
            <SVGIcon src="/assets/icons/eye.svg" className="text-gray-500 hover:text-white" zoomOut={0.8} />
          </div>
        </>
      )}
    </div>
  );
};  

export default ProductCard;