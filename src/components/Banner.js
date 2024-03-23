import React from 'react';
import { useState, useEffect } from 'react';
import banner from "../assets/banner-img.png";


const Banner = ({isLoggedIn}) => {
    
  return (
    <div className='flex flex-row justify-center items-center text-white text-3xl h-full banner'>

     <div className="flex flex-col w-8/12 m-auto p-32 mr-28">
      <span className="tagline w-6/12">Welcome to my Website</span>

      <h1>{`Hi! I'm your`} <span className="text-cyan-600">Github Feature</span></h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        
      <button className="px-5 py-2 outline-cyan-500 rounded-lg hover:bg-cyan-900 w-4/12"
      onClick={() => console.log('connect')}>
            Let’s Connect
      </button>
     </div>

      <div className="flex-col w-7/12 m-auto b-img">
        <img src={banner} alt="Banner img"/>
      </div>
    </div>
  )
}

export default Banner;
