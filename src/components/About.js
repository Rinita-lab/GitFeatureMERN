import React from 'react';
import aboutimg from "../assets/about/aboutImage.png";
import cursor from "../assets/about/cursorIcon.png";
import server from "../assets/about/serverIcon.png";
import ui from "../assets/about/uiIcon.png";




const About = ({isLoggedIn}) => {
    
  return (
    <div className='flex flex-col justify-center items-start text-white text-3xl 
    h-full font-mono bg-slate-900 w-8/12 m-auto mt-36 p-10 rounded-3xl mb-28'>
        <h2 className=" font-mono font-bold text-3xl m-8">ABOUT ME</h2>
        <div className="flex flex-row">
            <img src={aboutimg} className="h-64 w-64 justify-center items-center m-12 about-img"/>
            <div className="flex flew-col font-mono font-semibold text-xl">
               <ul className=" p-4 w-11/12 m-auto mb-10">
                 <li className="flex flex-row gap-3 my-4">
                  <img src={cursor} alt="Cursor icon" className="w-10 h-10"/>
                  <div className="">
                      <h3>Account Finder</h3>
                      <p className="font-mono text-base">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum
                      </p>
                  </div>
                 </li>
                 <li className="flex flex-row gap-3 my-4 py-6">
                  <img src={server} alt="Server icon" className="w-10 h-10"/>
                  <div className="">
                      <h3>User Existence</h3>
                      <p className="font-mono text-base">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum
                      </p>
                  </div>
                 </li>
                 <li className="flex flex-row gap-3 my-4">
                   <img src={ui} alt="UI icon" className="w-10 h-10"/>
                   <div className="">
                      <h3>Fetching Details</h3>
                      <p className="font-mono text-base">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum 
                      </p>
                  </div>
                 </li>
              </ul>
            </div>
            
        </div>


    </div>
  )
}

export default About;
