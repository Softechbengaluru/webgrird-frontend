import React, { useState } from "react";
import ListCard from "../../components/ListCard";
import { RelatedItemsApi } from "../ProductsApi";
import ProductCard from "../ProductCard";
import StarRating from "../StarRating";

const RelatedItems = () => {
  const [products, setProducts] = useState([]);

  return (
    <div className="mt-28">
      <RelatedItemsApi setProducts={setProducts} />
      <div className="mb-16">
        <ListCard title="Related Item" textColor="red-500"/>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.length > 0 ? (
            [...products]
            .sort(() => Math.random() - 0.5)
            .slice(0, 4)
            .map((product, index) => 
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

export default RelatedItems;