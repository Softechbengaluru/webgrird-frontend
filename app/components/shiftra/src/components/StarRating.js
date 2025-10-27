import React from "react";

const StarRating = ({ rating, totalPurchased }) => (
    <div className="flex items-center space-x-2 text-yellow-400">
      <div className="flex space-x-1">
        {Array.from({ length: 5 }, (_, i) => (
          <span key={i}>{i < rating ? "★" : "☆"}</span>
        ))}
      </div>
      <span className="text-gray-500 text-sm">({totalPurchased})</span>
    </div>
  );

export default StarRating;