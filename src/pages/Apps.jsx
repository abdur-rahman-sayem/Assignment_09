import React, { useEffect, useState } from "react";
import useCards from "../hooks/useCards";
import AppCard from "../Components/AppCard";
import { Search } from "lucide-react";
import ErrorApp from "../Components/ErrorApp";
import LoadingSpinner from "../Components/LoadingSpinner";


const Apps = () => {
  const { cards, loading } = useCards();
  const [showSpinner, setShowSpinner] = useState(true);
  const [search, setSearch] = useState("");
  const [searching, setSearching] = useState(false);


  const term = search.trim().toLowerCase();
  const searchedCard = term
    ? cards.filter((card) => card.title.toLowerCase().includes(term))
    : cards;


  useEffect(() => {
    if (!loading) {
      const timer = setTimeout(() => setShowSpinner(false), 800);
      return () => clearTimeout(timer);
    }
  }, [loading]);


  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    setSearching(true);
    setTimeout(() => {
      setSearching(false);
    }, 400);
  };


  if (loading || showSpinner) return <LoadingSpinner />;


  return (
    <section className="min-h-screen bg-gradient-to-b from-[#faf7ff] to-white py-16 px-6">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 tracking-tight">
          Explore All Applications
        </h1>
        <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto">
          Discover innovative, secure, and high-performing apps built with love
          and precision for millions of users worldwide.
        </p>
      </div>


      {/* Search & Result Info */}
      <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto mb-10 gap-4">
        <div className="text-gray-700 font-medium">
          <span className="font-bold text-[#632EE3]">
            {searchedCard.length}
          </span>{" "}
          Apps Found
        </div>


        <div className="relative w-full md:w-80">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />
          <input
            value={search}
            onChange={handleSearch}
            type="search"
            placeholder="Search your favorite app..."
            className="w-full pl-10 pr-4 py-2.5 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#632EE3] bg-white shadow-sm transition-all duration-300"
          />
        </div>
      </div>


      {/* Grid Section */}
      {searching ? (
        <div className="flex justify-center py-10">
          <LoadingSpinner />
        </div>
      ) : searchedCard.length > 0 ? (
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {searchedCard.map((card) => (
            <AppCard key={card.id} card={card} />
          ))}
        </div>
      ) : (
        <div className="py-20">
          <ErrorApp />
        </div>
      )}
    </section>
  );
};


export default Apps;





