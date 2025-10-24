import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import useCards from '../hooks/useCards';
import DownloadImg from '../assets/icon-downloads.png';
import StarImg from '../assets/icon-ratings.png';
import ReviewImg from '../assets/icon-review.png';
import { toast } from 'react-toastify';
import Chart from '../Components/Chart';
import ErrorApp from '../Components/ErrorApp';
import LoadingSpinner from '../Components/LoadingSpinner';

const CardDetails = () => {
  const { id } = useParams();
  const { cards, loading } = useCards();
  const [showSpinner, setShowSpinner] = useState(true);
  const [isInstalled, setIsInstalled] = useState(false);
  const card = cards.find(c => String(c.id) === id);

  useEffect(() => {
    const installedApps = JSON.parse(localStorage.getItem('install')) || [];
    if (card && installedApps.some(c => c.id === card.id)) setIsInstalled(true);
  }, [card]);

  useEffect(() => {
    if (!loading) {
      const timer = setTimeout(() => setShowSpinner(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  if (loading || showSpinner) return <LoadingSpinner />;
  if (!card) return <ErrorApp />;

  const { image, title, companyName, size, description, reviews, ratingAvg, downloads } = card;

  const handleAddToInstall = () => {
    const existingApp = JSON.parse(localStorage.getItem('install')) || [];
    if (existingApp.some(c => c.id === card.id)) {
      toast.warning("Already Installed!");
      return;
    }
    localStorage.setItem('install', JSON.stringify([...existingApp, card]));
    setIsInstalled(true);
    toast.success("App Installed Successfully!");
  };

  return (
    <div className="lg:mx-10 m-5 my-10  items-center">
      <div className="lg:flex justify-start items-center gap-10 lg:bg-white lg:p-8 lg:border-b-1 lg:border-gray-300">
        <img src={image} alt="" className="w-65 h-65 bg-amber-50 p-3 mr-10" />
        <div>
          <h1 className="lg:text-3xl text-2xl font-bold my-2">{title}</h1>
          <p className="text-sm">
            Developed by <span className="text-violet-500 font-bold">{companyName}</span>
          </p>
          <div className="flex justify-between items-center my-5 border-t-1">
            <div className="m-1">
              <img className="w-8 h-8" src={DownloadImg} alt="" />
              <p className="text-sm my-1">Downloads</p>
              <h1 className="text-3xl font-bold">{downloads}</h1>
            </div>
            <div className="m-1">
              <img className="w-8 h-8" src={StarImg} alt="" />
              <p className="text-sm my-1">Average Ratings</p>
              <h1 className="text-3xl font-bold">{ratingAvg}</h1>
            </div>
            <div className="m-1">
              <img className="w-8 h-9" src={ReviewImg} alt="" />
              <p className="text-sm my-1">Total Reviews</p>
              <h1 className="text-3xl font-bold">{reviews}</h1>
            </div>
          </div>
          <button
            onClick={handleAddToInstall}
            className="btn btn-wide text-center bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-bold hover:scale-105 transition-transform duration-300"
          >
            {isInstalled ? 'Installed' : `Install Now (${size})`}
          </button>
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-bold my-5">Ratings</h1>
        <div className="p-2 flex justify-center items-center">
          <Chart data={card} />
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-bold my-5">Description</h1>
        <p className="text-gray-600">{description}</p>
        <p className="text-gray-600">
          Hero IO is a smart productivity and focus companion app designed to help users stay organized, motivated, and efficient in their daily lives. Whether you are a student preparing for exams, a professional handling multiple projects, or someone trying to improve daily habits, Hero IO provides all the essential tools to help you achieve your goals smoothly.
          One of the core features of Hero IO is its Smart Focus Timer, inspired by the Pomodoro technique. It allows users to work in focused sessions followed by short, meaningful breaks. This method not only improves concentration but also helps maintain long-term productivity without feeling overwhelmed.
          The app also includes a Task and Goal Management system where you can add, organize, and prioritize your daily to-do lists. It helps break down big goals into smaller, manageable steps, giving you a clear sense of progress. You’ll always know what’s next and what’s already accomplished.
          To help reduce distractions, Hero IO comes with a Distraction Blocker. This feature temporarily blocks unnecessary apps or notifications, allowing you to stay focused on what truly matters. Combined with this, the app offers Progress Insights, providing detailed charts and analytics so you can visualize how much time you’ve spent being productive and where you can improve.
          Another great feature is Cloud Sync and Backup, which ensures that your tasks and goals are securely stored and accessible across multiple devices. You never have to worry about losing your data again. The app also includes Motivational Reminders, sending encouraging quotes and gentle notifications to keep you inspired throughout your day.
        </p>
      </div>
    </div>
  );
};

export default CardDetails;
