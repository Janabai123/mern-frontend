import React,{createContext, useReducer} from 'react';
import "./App.css";
import {Routes} from "react-router-dom";
import Navbar from './Components/Navbar';
import {Route} from 'react-router-dom';
 import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Login from './Components/Login';
import Signup from './Components/Signup';
import ErrorPage from './Components/ErrorPage';
import Logout from './Components/Logout';

import { initialState,reducer } from './Reducer/UseReducer';



export const UserContext=createContext();

const Routing=()=>{
 
  
    return (

      
      <Routes>
    
      <Route   exact path="/"  element={ <Home />}>
      
      </Route>
      
      <Route  exact path="/about" element={  <About />} >
      
      </Route>
      
      <Route path="/contact" element={  <Contact />}  >
      
      </Route>
      
      <Route path="/login" element={  <Login />} >
      
      </Route>
      
      <Route path="/signup"  element={  <Signup />}>
       
      </Route>
      
      <Route path="/logout"  element={  <Logout />}>
       
      </Route>
      
      <Route path="*"  element={  <ErrorPage/>}>
      </Route>
      
      </Routes> 
      
    )
   }



const App=()=> {
const[state,dispatch]=useReducer(reducer,initialState)
  return (

    <>
    <UserContext.Provider value={{state,dispatch}}>
   
      <Navbar />
     
     <Routing />
     
      </UserContext.Provider>
    </>
    
  );
}

export default App;
