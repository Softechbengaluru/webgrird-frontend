import React from "react";

const ResponsiveContainer = ({ children, className = "" }) => {
  return (
    <div className={`w-full md:w-auto p-4 md:p-6 shadow-md ${className}`}>
      {children}
    </div>
  );
};

export default ResponsiveContainer;
