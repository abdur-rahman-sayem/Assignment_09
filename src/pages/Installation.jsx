import React, { useEffect, useState } from 'react';
import DownloadImg from '../assets/icon-downloads.png';
import StarImg from '../assets/icon-ratings.png';


const Installation = () => {
    const [installation,setInstallation]= useState([])
    const [sortOrder, setSortOrder] = useState('none')
    useEffect(()=>{
        const installedApp =JSON.parse(localStorage.getItem('install'))
        if(installedApp){
            setInstallation(installedApp)
        }

    },[])

const parseDownloads = (str) => {
  if (!str) return 0;
  str = str.toUpperCase().trim();
  if (str.endsWith('K')) return parseFloat(str) * 1_000;
  if (str.endsWith('M')) return parseFloat(str) * 1_000_000;
  return parseFloat(str);
};





const sortedApp = (() => {
  if (sortOrder === 'size-asc') {
    return [...installation].sort((a, b) => parseDownloads(a.downloads) - parseDownloads(b.downloads));
  } else if (sortOrder === 'size-dsc') {
    return [...installation].sort((a, b) => parseDownloads(b.downloads) - parseDownloads(a.downloads));
  } else {
    return installation;
  }
})();


// ----------


const handleUninstall =(id)=>{
    const existingApp = JSON.parse(localStorage.getItem('install'))
    let updatedApps = existingApp.filter(c=> c.id !== id)
  
setInstallation(updatedApps)
    localStorage.setItem('install',JSON.stringify(updatedApps))
}


    return (
        <div className="flex flex-col justify-center text-center m-5 lg:mx-15 my-8">
            <h1 className="text-3xl font-bold">Your Installed Apps</h1>
            <p className="text-sm font-light my-3">Explore All Trending Apps on the Market developed by us</p>
            <div className='flex justify-between items-center my-3'>
                <h1 className='text-xl font-bold'>{sortedApp.length} Apps Found</h1>
                <label className="fieldset w-35">
  <select value={sortOrder} onChange={e=>setSortOrder(e.target.value)}  className="select">
    <option value="none">Sort by size </option>
    <option value="size-asc">Low-High </option>
    <option value="size-dsc">High-Low</option>
  </select>
</label>
            </div>
    <div className='space-y-3'>
        {
            sortedApp.map(c=>(<div key={c.id} className='lg:flex justify-between items-center bg-white lg:p-3 py-3 text-left border-1 rounded-xl border-amber-300'>
            <div className='flex '>
                <img className="w-18 h-20 mx-2 bg-base-200 p-1" src={c.image} alt="" />
             
                     <div className='flex flex-col m-1'>
                     <h1 className='lg:text-xl font-bold'>{c.title}</h1>
               <div className='flex gap-3 lg:m-2'>
                <div className='flex items-center'>
                        <img className="w-5 h-5 m-1" src={DownloadImg} alt="" />
                        <h2 className="text-xl font-semibold">{c.downloads}</h2>
                    </div>
                    <div className='flex items-center'>
                        <img className="w-5 h-5 m-1" src={StarImg} alt="" />
                        <h2 className="text-xl font-semibold">{c.ratingAvg}</h2>
                    </div>
                     <div className='flex flex-col justify-center lg:text-xl'>
                            <h1>{c.size}</h1>
                        </div>
               </div>
                    
                </div>
                
            </div>
  <button onClick={()=>handleUninstall(c.id)} className="btn text-center m-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] transition-transform duration-300 hover:scale-105 text-white font-bold">Uninstall </button>
        </div>))
        }

    </div>
        </div>
    );
};

export default Installation;