import { ArrowDownToLine, Star } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

const HomeCard = ({card}) => {
    const {image, title,downloads, ratingAvg, id}= card
    return (
     <Link to= {`/card/${id}`}>
       <div  className="card text-center bg-base-100 w-68 h-73 shadow-sm p-3 transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 border-1 border-amber-500">
  <figure className='bg-amber-50'>
    <img
      src={image}
      alt="" className="w-43 p-3 rounded-xl"/>
  </figure>
  <div className="">
    <h1 className="font-bold text-sm m-2 text-center">
     {title}
    </h1>
   
    <div className="card-actions justify-between my-4 ">
      <div className="badge badge-outline text-green-700 py-4 font-bold"><ArrowDownToLine></ArrowDownToLine>{downloads}</div>
      <div className="badge badge-outline text-red-500  py-4 font-bold"><Star className= "fill-red-500"></Star>{ratingAvg}</div>
    </div>
  </div>
</div></Link>
    );
};

export default HomeCard;