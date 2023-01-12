import React ,{useState,useContext}from 'react'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import login from "../Images/login.jpg"
import { UserContext } from '../App';


const Login = () => {

  const {state,dispatch}=useContext(UserContext);

  
  const navigate=useNavigate();
const[email, setEmail]=useState('');
const[password ,setPassword]=useState('');

const loginUser=async(e)=>{
e.preventDefault();

 const res= await fetch("/signin",{
  method:"POST",
  headers:{
    "Content-Type":"application/json"
  },
  body:JSON.stringify({
    email,password
  })
})

const data=await res.json();
if(res.status===400 || !data){
window.alert("Invalid credentials...!!")
console.log("Invalid credentials...!!")
}
else{
  dispatch({type:"USER",paylaod:true})

  window.alert("Login successfull...!!")
  console.log("Login successfull...!!")
  navigate("/");
}
}

  return (
    <>
         <section className='sign-in  ' >
        <div className='container '>
          <div className='signin-content '>

          <div className='signin-image '>
              <figure>
                <img src={login} alt='registration' width={500} height={500}></img>
              </figure>
              <Link to='/signup' className='login-image-link mb-5'>Create an account</Link>
            </div>

            <div className='sign-in '>
              <h2 className='form-title '>Login</h2>
              <form method='POST' className='register-form'>

                

                <div className='form-group'>
                  <label htmlFor='email'>
                    <i class="zmdi zmdi-email"></i>
                  </label>
                  <input type='email' autoComplete='off'  className='input' name='email' id='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Your Email.."></input>
                </div>

                <div className='form-group'>
                  <label htmlFor='password'>
                    <i class="zmdi zmdi-lock"></i>
                  </label>
                  <input type='password' autoComplete='off'  className='input' name='password' id='password' value={password}  onChange={(e)=>setPassword(e.target.value)} placeholder="Your Password.."></input>
                </div>

                <div className='form-group px-5 py-5 '>

                  <input type='submit' name='submit' id='signup' className='form-submit px-5 b-none btn btn-primary ' value='Login' onClick={loginUser}></input>
                </div>


              </form>
            </div>

           

          </div>

        </div>

      </section>
    </>
  )
}

export default Login