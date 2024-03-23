import React from 'react'
import Banner from '../components/Banner';
import About from '../components/About';


const Home = ({isLoggedIn}) => {

  return (
    <div className='flex flex-col justify-center items-center text-white text-3xl h-full'>
      <Banner/>
      <About/>
      
    </div>
  )
}

export default Home
