import React,{useState} from 'react'
import {  useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import registration from "../Images/registration.jpg"

const Signup = () => {
  const navigate=useNavigate();
  const[user,setUser]=useState({
    name:"",email:"",phone:"",work:"",password:"",cpassword:""});

  let name,value;
  const handleInputs=(e)=>{
   name=e.target.name;
   value=e.target.value;
    setUser({...user,[name]:value});
  }

  const PostData=async (e)=>{
    e.preventDefault();
    const{name,email,phone,work,password,cpassword}=user;

    const res= await fetch("/register",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name,email,phone,work,password,cpassword
      })
    })

    const data= await res.json();
    if(data.status=== 422 || !data){
  window.alert("Invalid Registration");
  console.log("Invalid Registration")
    }
    else{
      window.alert("Registration Successfull..!!")
      console.log("Registration Successfull..!!");
      navigate("/login")
    }
  }

  return (
    <div>
      <section className='signup '>
        <div className='container  '>
          <div className='signup-content'>
            <div className='signup-form '>
              <h1 className='form-title '>Signup</h1>
              <form className='register-form' method='POST'>

                <div className='form-group'>
                  <label htmlFor='name'>
                    <i class="zmdi zmdi-assignment-account"></i>
                  </label>
                  <input type='text' autoComplete='off' value={user.name}  onChange={handleInputs} name='name' className='input'   placeholder="Your Name.."></input>
                </div>

                <div className='form-group'>
                  <label htmlFor='email'>
                    <i class="zmdi zmdi-email"></i>
                  </label>
                  <input type='email' autoComplete='off' value={user.email}  onChange={handleInputs} name='email' className='input' placeholder="Your Email.."></input>
                </div>

                <div className='form-group'>
                  <label htmlFor='phone'>
                    <i class="zmdi zmdi-phone"></i>
                  </label>
                  <input type='number' autoComplete='off' value={user.phone}  onChange={handleInputs} name='phone' className='input' placeholder="Your Phone.."></input>
                </div>

                <div className='form-group'>
                  <label htmlFor='work'>
                    <i class="zmdi zmdi-slideshow"></i>
                  </label>
                  <input type='text' autoComplete='off' value={user.work}  onChange={handleInputs} name='work' className='input' placeholder="Your work.."></input>
                </div>

                <div className='form-group'>
                  <label htmlFor='password'>
                    <i class="zmdi zmdi-lock"></i>
                  </label>
                  <input type='password' autoComplete='off' value={user.password}  onChange={handleInputs} name='password' className='input' placeholder="Your Password.."></input>
                </div>

                <div className='form-group'>
                  <label htmlFor='cpassword'>
                    <i class="zmdi zmdi-lock"></i>
                  </label>
                  <input type='password' autoComplete='off' value={user.cpassword}  onChange={handleInputs} name='cpassword' className='input' placeholder=" Confirm Your cpassword.."></input>
                </div>


                <div className='form-group  '>

                  <input type='submit' name='submit' id='signup' className='form-submit px-5 b-none btn btn-primary ' onClick={PostData}  value='Register'></input>
                </div>


              </form>
            </div>

            <div className='signup-image'>
              <figure>
                <img src={registration} alt='registration' width={500} height={500}></img>
              </figure>
              <Link to='/login' className='signup-image-link'>I am already register ?</Link>
            </div>


          </div>

        </div>

      </section>
    </div>
  )
}

export default Signup