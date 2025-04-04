"use client"; 
import React, {useState} from "react";
import { FaSearch } from "react-icons/fa";
import SVGIcon from "./SvgIcon";
// import { useRouter } from "next/router";
import routes from "../utils/routes";

function Navbar() {
  // const router = useRouter();
  const [activeTab, setActiveTab] = useState("/home");
  
  const handleNavigation = (path) => {
    setActiveTab(path);
    // router.push(path);
  };

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white border-b border-gray-300">
      <nav className="max-w-7xl mx-auto px-8 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <SVGIcon 
            src="https://i.ibb.co/drMw6Ks/11zon-cropped.png" 
            alt="Shiftra Logo" 
            className="w-8 h-8 object-contain cursor-pointer"
            onClick={() => handleNavigation("/home")}
          />
          <h1 
          className="text-2xl font-bold font-poppins cursor-pointer" 
          onClick={() => handleNavigation("/home")}
          >
            SHIFTRA
          </h1>
        </div>

        <ul className="hidden md:flex items-center space-x-6 text-base font-normal font-poppins">
          {[
            { name: "Home", path: "/home" },
            { name: "Contact", path: "/home/contact" },
            { name: "About", path: "/home/about" },
            { name: "Sign Up", path: "/home/signup" }
          ].map((item) => (
            <li
              key={item.path}
              className={`cursor-pointer hover:text-gray-600 ${
                activeTab === item.path ? "border-b-2 border-black" : ""
              }`}
              onClick={() => handleNavigation(item.path)}
            >
              {item.name}
            </li>
          ))}
        </ul>

        <div className="flex items-center space-x-6">
          <div className="relative">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-60 p-2 pl-4 pr-10 text-gray-600 bg-gray-100 rounded-lg outline-none placeholder:text-sm"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-700">
              <FaSearch />
            </button>
          </div>
          <SVGIcon 
            src="/assets/icons/wish.svg" 
            className="w-6 h-6 cursor-pointer hover:text-gray-600" 
            title="Favorites" 
            onClick={() => handleNavigation(routes.wishlist)} 
          />
          <SVGIcon 
          src="/assets/icons/cart.svg" 
          className="w-6 h-6 cursor-pointer hover:text-gray-600" 
          title="Cart" 
          onClick={() => handleNavigation(routes.cart)} 
          />
          <SVGIcon src="/assets/icons/user.svg" className="w-6 h-6 cursor-pointer hover:text-gray-600" title="Profile" />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;