import React from 'react';
import { Link } from 'react-router';
import Banner from '../Components/Banner';
import useCards from '../hooks/useCards';
import TrandingApps from '../Components/TrandingApps';
// import AppCategories from '../Components/AppCategories';


const Home = () => {


    const {cards} = useCards()
    console.log(cards)
    const appData =  cards.slice(0,8)
    return (
       <section>
        <Banner></Banner>
        <TrandingApps appData={appData}></TrandingApps>
       {/* <AppCategories allApps={cards}></AppCategories> */}
    </section>
    );
};


export default Home;



