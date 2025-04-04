import React from "react";

const CommonInput = ({ type, placeholder, className }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`w-full px-4 py-3 bg-[#F5F5F5] placeholder-black/30 placeholder:text-base placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-red-500 rounded-sm ${className}`}
    />
  );
};


export default CommonInput;
