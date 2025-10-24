import React from 'react';
import { Link } from 'react-router';
import PlayLogo from '../assets/download.jpg';
import AppLogo from '../assets/App-Store.png';
import HeroImg from '../assets/hero.png';

const Banner = () => {
    return (
      <section className="my-10">
        <div className="text-center ">
            <h1 className="font-bold lg:text-5xl text-4xl mb-4">We Build <br></br> <span className="text-[#632EE3]">Productive</span> Apps</h1>
            <p className="text-center lg:mx-65 mx-10">At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
        <div className="flex justify-center gap-4 my-5 mb-10">
  <a href="https://play.google.com/store" target="_blank" rel="" className="flex items-center gap-2 border-1 px-4 py-2 rounded-lg shadow-amber-50 transition-transform duration-300 hover:scale-105">
    <img src={PlayLogo} alt="Play Store" className="h-6 w-6" />
    <span>Google Play</span>
  </a>

  <a href="https://apps.apple.com" target="_blank" rel="" className="flex items-center gap-2 border-1 px-4 py-2 rounded-lg shadow-amber-50 transition-transform duration-300 hover:scale-105">
    <img src={AppLogo} alt="App Store" className="h-6 w-10" />
    <span>App Store</span>
  </a>
</div>
        </div>
        <div className="flex justify-center items-center mx-10 ">
          <img src={HeroImg} alt="" />
        </div>
        <div className="text-center bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white lg:p-15 p-5">
          <h1 className="lg:text-3xl text-xl font-bold">Trusted by Millions, Built for You</h1>
          <div className="flex justify-around my-5">
            <div className="text-center">
              <h4 className="text-xs">Total Downloads</h4>
              <p className="lg:text-5xl text-xl font-bold lg:my-2">29.6M</p>
              <h4 className="text-xs">21% more than last month</h4>
            </div>
            <div className="text-center">
              <h4 className="text-xs">Total Reviews</h4>
              <p className="lg:text-5xl text-xl font-bold lg:my-2">906K</p>
              <h4 className="text-xs">46% more than last month</h4>
            </div>
            <div className="text-center">
              <h4 className="text-xs">Active Apps</h4>
              <p className="lg:text-5xl text-xl font-bold lg:my-2">132+</p>
              <h4 className="text-xs">31 more will Launch</h4>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Banner;