import React from 'react'
import {useState, useEffect} from 'react';
import axios from 'axios';
import website from "../assets/images/website-icon.svg"
import company from "../assets/images/company-icon.svg"
import location from "../assets/images/location-icon.svg"
import twitter from "../assets/images/twitter-icon.svg"

const Dashboard = () => {

  const [message, setMessage] = useState('');
  const [updated, setUpdated] = useState(message);

  const [user, setUser] = useState([]);

  const [initial, setInitial]=useState('thepranaygupta');

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  useEffect(()=>{
    axios.get(`https://api.github.com/users/${initial}`)
    .then((res)=>{
        setUser(res.data);
        console.log(res.data)
    })
    .catch(err=>{
      console.log(err);
    })
      
  },[])

  useEffect(()=>{
    axios.get(`https://api.github.com/users/${message}`)
    .then((res)=>{
        setUser(res.data);
        console.log(res.data)
    })
    .catch(err=>{
      console.log(err);
    })
      
  },[message])

  

  const dataparts = user.created_at!==undefined?user.created_at.split("T").shift().split("-"): "Data Not Available";

  
  const changeHandler = (event) => {
    setMessage(event.target.value);
    
  };

  const handleClick = (event) => {
    setUpdated(message);
  };


  return (
    <div className='flex flex-col justify-center items-center text-white text-3xl h-full'>

<p className="font-mono text-4xl pt-12 w-4/12 m-auto font-bold">Welcome to this Awesome <span className='text-cyan-600 ml-20'>Github Feature!</span></p>

     


<div className="flex flex-row my-16 py-6 font-mono text-base gap-5 w-7/12 m-auto justify-around outline 
    outline-offset-2 outline-cyan-500 rounded-xl">

  <input type="search" name="user-input" id="input" placeholder="Enter a GitHub username..." 
  className="w-6/12 rounded-lg px-2 text-cyan-600" onChange={changeHandler} value={message} required/>
      <div className="">
          
      </div>
  <button className="px-6 py-3 bg-cyan-600 rounded-lg hover:bg-cyan-900" id="submit" onClick={handleClick}>Search</button>
  
</div>




<div className="flex flex-col w-6/12 m-auto bg-cyan-900 opacity-80 rounded-2xl mb-24">
<div className="flex flex-col">
  <div className="flex flex-row  mx-2 my-3 mb-0">
    <img src={user.avatar_url} className="w-32 h-32 rounded-full m-8 mb-0"/>
      <div className="flex flex-row mx-8 my-14 justify-around">
        <div className="font-bold font-mono text-3xl">
          <h2 id="name" className="text-cyan-400 ml-4">{user.login}</h2>
          <a href="#" target="_blank" rel="noopener noreferrer" id="user" className="mx-3 py-3 text-base">@{user.login}</a>
        </div>
        <div className="flex flex-row justify-around">
        <p id="date"className="text-sm mx-16  flex flex-col">
        Joined {dataparts[2]} {months[dataparts[1] - 1]} {dataparts[0]}</p></div>
      </div>
  </div>
                  
  <p id="bio" className="text-xl font-mono font-semibold w-7/12 ml-56">
    {user.bio == null ? "This profile has no bio" : `${user.bio}`}</p>





  <div className="bg-black opacity-60 mx-56 my-6 w-7/12 rounded-xl font-semibold font-mono 
  text-xl flex flex-row justify-evenly p-4 shadow-2xl">
    <div className="flex flex-col">
      <p className="stat-title">Repos</p>
      <p id="repos" className="stat-value">{user.public_repos}</p>
    </div>
    <div className="flex flex-col">
      <p className="stat-title">Followers</p>
      <p id="followers" className="stat-value">{user.followers}</p>
    </div>
    <div className="flex flex-col">
      <p className="stat-title">Following</p>
      <p id="following" className="stat-value">{user.following}</p>
    </div>
  </div>




  <div className="bg-black opacity-60 mx-56 my-6 w-7/12 rounded-xl font-semibold font-mono 
  text-xl grid grid-rows-2 grid-flow-col gap-6 justify-around p-4 shadow-2xl mb-10">
    <div className="flex flex-row gap-3">
      <div className="">
        <img src={location} alt=""/>
      </div>
      <p id="location">{user.location? user.location : "Not Available"}</p>
    </div>
    <div className="flex flex-row gap-3">
      <div className="">
        <img src={website} alt=""/>
      </div>
      <a href="#" id="page">{user.login? user.login : "Not Available"}</a>
    </div>
    <div className="flex flex-row gap-3">
      <div className="">
        <img src={twitter}alt=""/>
      </div>
      <a href="#" id="twitter">{user.twitter_username? user.twitter_username : "Not Available"}</a>
    </div>
    <div className="flex flex-row gap-3">
      <div className="">
        <img src={company} alt=""/>
      </div>
      <p id="company">{user.company? user.company : "Not Available"}</p>
    </div>
    
    
  </div>
  

</div>
</div>

    </div>
  )
}

export default Dashboard