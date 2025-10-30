import React from "react";
import { Link } from "react-router";
import AppCard from "./AppCard";


const TrandingApps = ({ appData }) => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#faf7ff] to-white">
      <div className="text-center max-w-2xl mx-auto px-6 mb-10">
        <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 relative inline-block">
          <span className="relative z-10">🔥 Trending <span className="text-[#632EE3]">Apps</span></span>
          <span className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] rounded-full"></span>
        </h1>
        <p className="text-gray-600 text-base lg:text-lg mt-5">
          Explore our most downloaded and top-rated apps that are making waves in the market.
        </p>
      </div>


      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {appData.map((card) => (
          <AppCard key={card.id} card={card} />
        ))}
      </div>


      <div className="flex justify-center mt-14">
        <Link
          to="/apps"
          className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300"
        >
          Show All
        </Link>
      </div>
    </section>
  );
};


export default TrandingApps;





