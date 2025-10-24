import React, { useEffect, useState } from 'react';
import useCards from '../hooks/useCards';
import HomeCard from '../Components/HomeCard';
import { Search } from 'lucide-react';
import ErrorApp from '../Components/ErrorApp';
import LoadingSpinner from '../Components/LoadingSpinner';

const Apps = () => {
  const { cards, loading } = useCards();
  const [showSpinner, setShowSpinner] = useState(true);
  const [search, setSearch] = useState('');
  const [searching, setSearching] = useState(false);

  const term = search.trim().toLowerCase();
  const searchedCard = term
    ? cards.filter(card => card.title.toLowerCase().includes(term))
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
    }, 500);
  };

  if (loading || showSpinner) return <LoadingSpinner />;

  return (
    <div className="flex flex-col justify-center items-center my-10 text-center">
      <h1 className="text-3xl font-bold">Our All Applications</h1>
      <p className="text-sm font-light my-3">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>

      <div className="md:flex justify-between items-center w-full max-w-6xl">
        <div className="lg:text-xl font-bold">({searchedCard.length}) Apps Found</div>
        <div>
          <label className="input lg:w-70 m-2">
            <Search />
            <input
              value={search}
              onChange={handleSearch}
              type="search"
              placeholder="Search Apps"
            />
          </label>
        </div>
      </div>

      {searching ? (
        <LoadingSpinner />
      ) : searchedCard.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 my-4">
          {searchedCard.map(card => (
            <HomeCard key={card.id} card={card} />
          ))}
        </div>
      ) : (
        <ErrorApp />
      )}
    </div>
  );
};

export default Apps;
