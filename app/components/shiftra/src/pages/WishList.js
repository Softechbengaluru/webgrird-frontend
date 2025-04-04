import React from "react";
import StarRating from "../components/StarRating";
import ListCard from "../components/ListCard";
import ProductCard from "../components/ProductCard";
import CommonButton from "../components/CommonButton";
export default function WishlistPage() {

  const wishlistItems = [
    { name: "Gucci duffle bag", price: 960, oldPrice: 1160, discount: 35, image: "/assets/icons/bag.svg" },
    { name: "RGB liquid CPU Cooler", price: 1960, image: "/assets/icons/bag.svg" },
    { name: "GP11 Shooter USB Gamepad", price: 550, image: "/assets/icons/bag.svg" },
    { name: "Quilted Satin Jacket", price: 750, image: "/assets/icons/bag.svg" },
  ];

  const recommendedItems = [
    { name: "ASUS FHD Gaming Laptop", price: 960, oldPrice: 1160, discount: 35, rating: 5, totalPurchased: 30, image: "/assets/icons/laptop.svg"},
    { name: "IPS LCD Gaming Monitor", price: 1160, rating: 5, totalPurchased: 18, image: "/assets/icons/laptop.svg" },
    { name: "HAVIT HV-G92 Gamepad", price: 560, rating: 5, new: true, totalPurchased: 45, image: "/assets/icons/laptop.svg" },
    { name: "AK-900 Wired Keyboard", price: 200, rating: 5, totalPurchased: 12, image: "/assets/icons/laptop.svg" },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 mt-28">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-md mb-12">Wishlist ({wishlistItems.length})</h2>
        <CommonButton text="Move All To Bag" />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {wishlistItems.map((item, index) => (
         <div key={index} className="flex flex-col w-full">
         <ProductCard product={item} showRemove />
         <div className="text-left w-full mt-3">
           <h3 className="text-sm font-semibold">{item.name}</h3>
           <p className="text-red-500 text-sm">
             ${item.price}{" "}
             {item.oldPrice && <span className="line-through text-gray-500">${item.oldPrice}</span>}
           </p>
         </div>
       </div>       
        ))}
      </div>

      <div className="flex justify-between items-center mt-10 mb-12">
        <ListCard title="Just For You" />
        <CommonButton text="See All" />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
      {recommendedItems.map((item, index) => (
         <div key={index} className="flex flex-col w-full">
         <ProductCard product={item} showEye />
         <div className="text-left w-full mt-3">
          <h3 className="text-sm font-semibold">{item.name}</h3>
          <p className="text-red-500 text-sm">
            ${item.price}{" "}
            {item.oldPrice && <span className="line-through text-gray-500">${item.oldPrice}</span>}
          </p>
          <StarRating rating={item.rating} totalPurchased={item.totalPurchased} />
        </div>
       </div>       
        ))}
      </div>
    </div>
  );
}
