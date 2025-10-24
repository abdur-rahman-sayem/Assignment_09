import React from 'react';
import PageError from '../assets/error-404.png'
import { useNavigate } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
const Error = () => {
    let navigate = useNavigate();
    return (
        <div>
        <Navbar></Navbar>
        <div className="w-full flex flex-col justify-center items-center my-16">
                  <img src={PageError} alt="" />
                  <h1 className='lg:text-4xl m-3 font-semibold'>Oops, page not found!</h1>
                  <p className='mb-3 text-center'>The page you are looking for is not available.</p>
                     <button  onClick={() => navigate(-1)} className="btn px-7 text-center bg-gradient-to-r from-[#632EE3] to-[#9F62F2] transition-transform duration-300 hover:scale-105 text-white font-bold">Go Back</button>
                </div>
                <Footer></Footer>
                </div>
    );
};

export default Error;