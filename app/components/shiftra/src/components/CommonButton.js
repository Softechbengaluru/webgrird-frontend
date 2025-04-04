import React from "react";

export const CommonButton = ({ text, filled = false, onClick, px = "px-8" }) => {
  return (
    <button
      onClick={onClick}
      className={`py-3 rounded-md border font-normal text-sm transition-all ${px}
        ${filled 
          ? "bg-[#DB4444] text-white border-red-600 hover:bg-[#DB4444]" 
          : "border-black text-black hover:bg-gray-100"
        }`}
    >
      {text}
    </button>
  );
};

export default CommonButton;
