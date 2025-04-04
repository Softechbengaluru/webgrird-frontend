import React, { useState, useEffect } from "react";
import { getCategories } from "../../utils/api";

function Categories() {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const response = await getCategories();
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="w-[180px] bg-white pr-6 mr-20 mt-10 hidden sm:block">
      <ul className="space-y-2">
        {categories.length > 0 ? (
          categories.map((category, index) => (
            <li key={index} className="group flex justify-between items-center px-4 py-1 cursor-pointer hover:bg-gray-100 rounded-lg transition-all duration-200">
              <span className="text-gray-800 text-base font-normal">{category.name}</span>
            </li>
          ))
        ) : (
          <p className="text-gray-500">Loading categories...</p>
        )}
      </ul>
    </div>
  );
}

export default Categories;
