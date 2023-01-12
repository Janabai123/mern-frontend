import React, { useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import janaprofile from '../Images/janaprofile.jpeg'
import defaultpic from '../Images/defaultpic.jpeg'
const About = () => {

  const[userData,setUserData]=useState({});
const navigate=useNavigate();

  const callAboutPage=async ()=>{
try{
  const res= await fetch("/about",{
    method:"GET",
    headers:{
        Accept:"application/json",
        "Content-Type":"application/json"
    },
    credentials:"include"
  })

  const data=await res.json();
  console.log(data);

  setUserData(data);

  if(!data.status===200){
const error=new Error(res.error);
throw error;
  }
}
catch(err){
  console.log(err);
  navigate("/login");
}
  }

  useEffect(()=>{
callAboutPage();

  },[])

  return (
    <>
    
      <div className='container  about-content shadow mt-5 mb-5 px-5 py-5'>
        <form mathod="GET">
        
          <div className='row '>
         
            <div className='col-md-4  d-flex align-items-center justify-content-center '>
            
            <div className='profile-img'>
               <img src={userData.name==="Janabai Namdev Shinde" ? janaprofile:defaultpic} className='img'></img>
            </div>
            
            </div>

            <div className='col-md-6'>
            <div className='profile-head '>
              <h5>{userData.name} </h5>
              <h6>{userData.work}</h6>
              <p className='profile-rating mt-3 mb-5'>RANKING<p>1/10</p></p>

              <ul className='nav nav-tab' role='tablist'>
                <li className='nav-item'>
                  <a className='nav-link-active pr-3' id='home-tab' data-toggle='tab' href='#home' role='tab'>About</a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link-active' id='profile-tab' data-toggle='tab' href='#profile' role='tab'>Timeline</a>
                </li>

              </ul>
              </div>
            </div>

            
          </div>

          <div className='row'>
            {/* left side url */}
            <div className='col-md-4  d-flex align-items-center justify-content-center'>
              <div className='profile-work ml-5 mr-4'>
              <h5>Work Link</h5>
              <a className='worklink' href='' target='_blank'>Linkdin</a><br></br><br></br>
              <a className='worklink' href='' target='_blank'>Instagram</a><br></br><br></br>
              <a className='worklink' href='' target='_blank'>Facebook</a><br></br><br></br>
              <a className='worklink' href='' target='_blank'>Github</a><br></br><br></br>
              
              </div>
            </div>

            <div className='col-md-8 pl-5 about_info  '>
              <div className='tab-content profile-tab' id='myTabContent'>
                <div className='tab-pane fade show active' id='home1' role='tabpanel' aria-labelledby='home-tab'></div>
              <div className='row'>
                <div className='col-md-4'>
                  <label>User ID</label>
                </div>

                <div className='col-md-4'>
               <p>27272727</p>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-4'>
                  <label>Name</label>
                </div>

                <div className='col-md-4'>
               <p>{userData.name}</p>
                </div>
              </div>
              </div>

              <div className='row'>
                <div className='col-md-4'>
                  <label>Email</label>
                </div>

                <div className='col-md-4'>
               <p>{userData.email}</p>
                </div>
              </div>

              <div className='row'>
                <div className='col-md-4'>
                  <label>Phone</label>
                </div>

                <div className='col-md-4'>
               <p>{userData.phone}</p>
                </div>
              </div>

              <div className='row'>
                <div className='col-md-4'>
                  <label>Profession</label>
                </div>

                <div className='col-md-4'>
               <p>{userData.work}</p>
                </div>
              </div>

            </div>
            <input type='submit' className='btn title  btn-secondary ml-5' name='btnAddMore' value='Edit Profile'
              ></input>
          </div>
        </form>
       
      </div>
    
    </>
  )
}

export default About