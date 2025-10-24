import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';
import Banner from '../Components/Banner';
const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen bg-[#fcf9f6] ">
            <Navbar></Navbar>
          

            <div className="flex-1">
                 <Outlet></Outlet>
            </div>

           <Footer></Footer>
        </div>
    );
};

export default MainLayout;