import React from 'react';
import { Link } from 'react-router';
import HomeCard from '../Components/HomeCard';
import Banner from '../Components/Banner';
import useCards from '../hooks/useCards';

const Home = () => {

    const {cards} = useCards()
    
    const HomeData =  cards.slice(0,8)
    return (
       <section>
        <Banner></Banner>
        <div className="flex flex-col justify-center items-center">
             <h1 className="text-3xl font-bold">Trending Apps</h1>
            <p className="text-sm font-light my-3">Explore All Trending Apps on the Market developed by us</p>
         <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 my-4">
           
               {
                HomeData.map(card=>(
                   <HomeCard key={card.id} card={card}></HomeCard>
                ))
            }
         </div>
        <Link
  to="/apps"
  className="btn w-28 text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2] flex items-center transition-transform duration-300 hover:scale-105 my-10" >
  <span>Show All</span>
</Link>
        </div>
    </section>
    );
};

export default Home;