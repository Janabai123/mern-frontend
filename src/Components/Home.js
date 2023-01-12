import React from 'react'
import { useState,useEffect } from 'react';

const Home = () => {

    const[userName,setUserName]=useState('');
    const[show ,setShow]=useState(false);
  
    
      const userHomePage=async ()=>{
    try{
      const res= await fetch("/getdata",{
        method:"GET",
        headers:{
           
            "Content-Type":"application/json"
        }
       
      })
    
      const data=await res.json();
      console.log(data);
    
      setUserName(data.name);
    setShow(true);
      
    }
    catch(err){
      console.log(err);
      
    }
      }
    
      useEffect(()=>{
        userHomePage();
    
      },[])
     
  return (
    <>
    <div className='container-fluid d-flex align-items-center justify-content-center bg-blue px-5 py-5 shadow' id='home'>
    <div className='home-div d-flex flex-column   align-items-center justify-content-center '>
        <h5 className='pt-5'>WELCOME</h5>
        <h1>{userName}</h1>
        <h4>{ show ? "Happy to see you back":"We are the MERN Developer"}</h4>
    </div>
    </div>
    </>
  )
}

export default Home