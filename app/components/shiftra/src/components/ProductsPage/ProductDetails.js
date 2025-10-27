"use client"; 
import React, { useState, useEffect } from "react";
// import { useRouter } from "next/router";
import { useParams } from "react-router-dom";
import { STRAPI_BASE_URL } from "../../utils/url";
import { getProduct } from "../../utils/api";
import Breadcrumb from "../../components/Breadcrumb";
import routes from "../../utils/routes";
import SVGIcon from "../SvgIcon";

const ProductDetails = () => {
  // const router = useRouter();
  const { productId } = useParams(); 
  const [selectedImage, setSelectedImage] = useState("");
  const [products, setProduct] = useState("");
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const colors = ["#7EA7D9", "#D97E7E"];
  const [quantity, setQuantity] = useState(2);
  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await getProduct(productId);
        if (response.data) {
          setProduct(response.data);
          if (response.data.image?.length > 0) {
            const firstImageUrl = `${STRAPI_BASE_URL}${response.data.image[0].url}`;
            setSelectedImage(firstImageUrl);
          }
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
  
    fetchProduct();
  }, [productId]);

  useEffect(() => {
    // window.scrollTo(0, 0);
    if (products.image) {
      const firstImageUrl = `${STRAPI_BASE_URL}${products.image[0].url}`;
      setSelectedImage(firstImageUrl);
    }
  }, [products.image]);

  if (!products) {
    return <p>Loading product details...</p>;
  }

  if (!products) {
    return <p>Product not found.</p>;
  }

  const handleBuyNow = async () => {
    if (!localStorage.getItem("jwt_token")) {
      localStorage.setItem("redirectAfterLogin"); 
      // router.push(routes.signin);
      return;
    }
    // router.push(routes.checkout);
  };  

  return (
    <div className="mt-10">
      <Breadcrumb paths={[products.name]} />
      <div className="flex flex-col md:flex-row items-start">
        <div className="flex flex-col space-y-4">
          {products.image?.map((img, index) => (
            <img
              key={index}
              src={`${STRAPI_BASE_URL}${img.url}`}
              alt={`Thumbnail ${index}`}
              className={`w-20 h-20 object-contain border rounded-lg cursor-pointer ${
                selectedImage === `${STRAPI_BASE_URL}${img.url}` ? "border-red-500" : "border-gray-300"
              }`}
              onClick={() => setSelectedImage(`${STRAPI_BASE_URL}${img.url}`)}
            />
          ))}
        </div>
        <div className="w-full md:w-1/2 mt-5 md:mt-0 flex justify-center">
          <div className="border rounded-lg p-4">
            <img
              src={selectedImage}
              alt={products.name}
              className="rounded-lg object-contain w-full h-full w-[375px] h-[400px] md:w-[500px] md:h-[600px]"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2">
        <h1 className="text-2xl font-semibold text-left">{products?.name || "Loading..."}</h1>
          <div className="flex items-center mt-2">
            <span className="text-yellow-500 text-lg">★★★★☆</span>
            <span className="text-gray-500 text-sm font-normal ml-2">(150 Reviews)</span>
            <span className="text-green-500 text-sm font-normal ml-4">In Stock</span>
          </div>
          <p className="text-2xl font-normal mt-4 text-left">₹{products?.price || "Loading..."}</p>
          <p className="text-gray-700 mt-4 text-sm font-normal text-left">{products.description}</p>
          <div className="w-full sm:w-[400px] h-[1px] bg-black"></div>
          <div className="mt-4 flex items-center space-x-4">
            <p className="text-[20px] font-normal">Colours:</p>
            <div className="flex space-x-3">
              {colors.map((color, index) => (
                <div
                  key={index}
                  className={`w-5 h-5 flex items-center justify-center rounded-full cursor-pointer transition-all ${
                    selectedColor === color ? "border-2 border-black" : ""
                  }`}
                  onClick={() => setSelectedColor(color)}
                >
                  <div
                    className={`w-4 h-4 rounded-full`}
                    style={{
                      backgroundColor: color,
                      border: selectedColor === color ? "2px solid white" : "none",
                    }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4 flex items-center space-x-4">
            <p className="text-[20px] font-normal">Size:</p>
            <div className="flex space-x-2">
              {["XS", "S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  className={`w-8 h-8 flex items-center justify-center border rounded-[4px] text-[14px] font-medium cursor-pointer transition-all
                    ${
                      selectedSize === size
                        ? "bg-[#DB4444] text-white border-[#DB4444]"
                        : "border-gray-400 text-black hover:bg-gray-200"
                    }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-6 flex items-center space-x-4">
          <div className="flex w-[159px] h-[44px] border border-gray-400 rounded-[4px] overflow-hidden">
            <button
              className="w-[70px] h-full flex items-center justify-center border-r border-gray-400 text-xl hover:bg-gray-200"
              onClick={handleDecrease}
            >
              -
            </button>
            <input
              type="text"
              className="w-full text-center text-lg font-medium border-0 outline-none"
              value={quantity}
              readOnly
            />
            <button
              className="w-[70px] h-full flex items-center justify-center bg-[#DB4444] text-white text-xl"
              onClick={handleIncrease}
            >
              +
            </button>
          </div>
            <button className="w-[159px] h-[44px] bg-[#DB4444] text-white text-base font-medium rounded-[4px] hover:bg-red-600" onClick={handleBuyNow}>
              Buy Now
            </button>
            <div className="w-[40px] h-[40px] border border-black rounded-[4px] flex items-center justify-center">
              <SVGIcon src="/assets/icons/like.png" alt="Favorite" className="w-[20px] h-[20px]" />
            </div>
          </div>
          <div className="w-full sm:w-[399px] border border-gray-500 rounded-lg flex flex-col mt-10">
            <div className="flex items-center p-4 flex-1 border-b border-gray-500">
              <SVGIcon src="/assets/icons/truck.png" alt="Free Delivery" className="w-[30px] sm:w-[40px] h-[30px] sm:h-[40px] mr-3 sm:mr-4" />
              <div>
                <p className="text-sm sm:text-base font-medium text-left">Free Delivery</p>
                <p className="text-xs sm:text-xs font-medium text-gray-500 text-left">
                  <span className="text-black underline cursor-pointer">Enter your postal code</span> for Delivery Availability
                </p>
              </div>
            </div>
            <div className="flex items-center p-4 flex-1">
              <SVGIcon src="/assets/icons/return.png" alt="Return Delivery" className="w-[30px] sm:w-[40px] h-[30px] sm:h-[40px] mr-3 sm:mr-4" />
              <div>
                <p className="text-sm sm:text-base font-medium text-left">Return Delivery</p>
                <p className="text-xs sm:text-xs font-medium text-gray-500 text-left">
                  Free 30 Days Delivery Returns.{" "}
                  <span className="text-black underline cursor-pointer">Details</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
