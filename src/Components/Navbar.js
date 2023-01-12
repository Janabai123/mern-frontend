//import React, { useContext } from 'react'
//import "bootstrap/dist/css/bootstrap.css";
import {Link} from "react-router-dom"
//import { UserContext } from '../App';

const Navbar = () => {

  //const{state,dispatch}=useContext(UserContext);

 // const RenderMenu=()=>{
//     if(state){
//       return (
//         <>
// <li className="nav-item">
//           <Link className="nav-link active" aria-current="page" to="/">Home</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to="/about">About</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to="/contact">Contact</Link>
//         </li>
//         {/* <li className="nav-item">
//           <Link className="nav-link" to="/login">Login</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to="/signup">Registration</Link>
//         </li> */}

//         <li className="nav-item">
//           <Link className="nav-link" to="/logout">Logout</Link>
//         </li>
        
       
//         </>
//       )
//     }
//     else{
//       return(
//         <>
//           <li className="nav-item">
//           <Link className="nav-link active" aria-current="page" to="/">Home</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to="/about">About</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to="/contact">Contact</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to="/login">Login</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to="/signup">Registration</Link>
//         </li>

//         </>
//       )
//     }

 //}
  return (
    <>
<nav className="navbar-navbar ">
  {/* <div className="container-fluid">
    <Link className="navbar-brand" to="#">Navbar</Link>
    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to ="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to ="/contact">Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to ="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/signup">Registration</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/logout">Logout</Link>
        </li>
        
       

        {/* <RenderMenu /> */}
       
      {/* </ul>
      
    </div>
  </div> */} 
  <div classname="navbar-container">
  <ul className="navbar">
    <li className="navbar-item">
    <Link className="nav-link active"  to="/">Home</Link>
    </li>
    <li>
    <Link className="nav-link active"  to="/about">About</Link>
    </li>
    <li>
    <Link className="nav-link active"  to="/contact">Contact</Link>
    </li>
    <li>
    <Link className="nav-link active"  to="/login">Login</Link>
    </li>
    <li>
    <Link className="nav-link active" aria-current="page" to="/signup">Registration</Link>
    </li>
    <li>
    <Link className="nav-link active" aria-current="page" to="/logout">Logout</Link>
    </li>
  </ul>
  </div>
</nav>

    </>
  )
}

export default Navbar