import React from "react";

const ListCard = ({ title, textColor = "inherit" }) => {
  return (
    <div className="flex items-center space-x-3">
      <div className="w-4 h-8 bg-[#DB4444] rounded"></div>
      <h2 className={`text-md font-sm ${textColor !== "inherit" ? `text-${textColor}` : ""}`}>
        {title}
      </h2>
    </div>
  );
};

export default ListCard;
