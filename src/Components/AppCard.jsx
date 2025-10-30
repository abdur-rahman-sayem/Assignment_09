import React from "react";
import { Star, Download, Database } from "lucide-react";


const AppCard = ({ card }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 group">
      {/* App Icon */}
      <div className="flex justify-center pt-6">
        <div className="bg-gray-50 p-4 rounded-2xl">
          <img
            src={card.image}
            alt={card.title}
            className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300"
          />
        </div>
      </div>


      {/* App Info */}
      <div className="p-6 text-center">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">
          {card.title}
        </h3>
        <p className="text-sm text-gray-500 mb-3">{card.companyName}</p>


        {/* Rating + Reviews */}
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="flex items-center gap-1">
            <Star size={16} className="text-yellow-400 fill-yellow-400" />
            <span className="font-semibold text-gray-800">
              {card.ratingAvg}
            </span>
          </div>
          <span className="text-gray-400 text-sm">
            ({card.reviews} Reviews)
          </span>
        </div>


        {/* Downloads + Size */}
        <div className="flex justify-center gap-6 text-sm text-gray-600 mb-4">
          <div className="flex items-center gap-1">
            <Download size={16} />
            <span>{card.downloads}+</span>
          </div>
          <div className="flex items-center gap-1">
            <Database size={16} />
            <span>{card.size}</span>
          </div>
        </div>


        {/* Button */}
        <button className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-5 py-2 rounded-full font-medium hover:scale-105 hover:shadow-lg transition-all duration-300">
          View Details
        </button>
      </div>
    </div>
  );
};


export default AppCard;





