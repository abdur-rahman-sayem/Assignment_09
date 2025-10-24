import React from 'react';
import ErrorAppImg from '../assets/App-Error.png';
import { useNavigate } from 'react-router';

const ErrorApp = () => {
    let navigate = useNavigate();


    return (
        <div className="w-full flex flex-col justify-center items-center my-16">
          <img src={ErrorAppImg} alt="" />
          <h1 className='lg:text-4xl m-3 font-semibold'>OPPS!! APP NOT FOUND</h1>
          <p className='mb-3 text-center'>The App you are requesting is not found on our system.  please try another apps</p>
             <button  onClick={() => navigate(-1)} className="btn px-7 text-center bg-gradient-to-r from-[#632EE3] to-[#9F62F2] transition-transform duration-300 hover:scale-105 text-white font-bold">Go Back</button>
        </div>
    );
};

export default ErrorApp;