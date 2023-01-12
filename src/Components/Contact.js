import React from 'react'
import { useEffect ,useState} from 'react';
import { useNavigate } from 'react-router-dom';
const Contact = () => {

  const[userData,setUserData]=useState({name:"",email:"",phone:"",message:""});
  const navigate=useNavigate();
  
    const userContact=async ()=>{
  try{
    const res= await fetch("/getdata",{
      method:"GET",
      headers:{
         
          "Content-Type":"application/json"
      }
     
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
  userContact();
  
    },[])
    //storing data in state

    const handleInputs=(e)=>{
      const name=e.target.name;
      const value=e.target.value;

      setUserData({...userData,[name]:value})

    }
  
//send data to backend
const contactForm=async(e)=>{
e.preventDefault();
  const{name,email,phone,message}=userData;

  const res=await fetch("/contact",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({name,email,phone,message})
  })

  const data= await res.json();

  if(!data){
    console.log("Message not send...")
  }
  else{
    alert("Message send..!!")
    setUserData({...userData, message:" "})
  }

}

  return (
<>
<div className='contact-info '>
  <div className='container-fluid  '>
    <div className='row '>
    <div className='col-lg-10  offset-lg-1 d-flex justify-content-around mt-4 '>
      
    
    <div className='contact_info_item '>
    {/* <img src={} alt='phone'></img> */}
    <p className='px-3'><i class="zmdi zmdi-phone"></i></p>
    <div className='contact_info_content  '>
      <div className='contact_info_title'>
        Phone
      </div>
      <div className='contact_info_text'>
      +91 9527201483
      </div>
    </div>
    </div>

    <div className='contact_info_item  '>

    <p className='px-3'><i class="zmdi zmdi-email"></i></p>

    <div className='contact_info_content'>
      <div className='contact_info_title'>
        Email
      </div>
      <div className='contact_info_text'>
      jana@gmail.com
      </div>
    </div>
    </div>

    <div className='contact_info_item '>
  
    <p className='px-3'><i class="zmdi zmdi-pin"></i></p>
    <div className='contact_info_content'>
      <div className='contact_info_title'>
        Address
      </div>
      <div className='contact_info_text'>
      Pune,Maharashtra
      </div>
    </div>
    </div>
    
  </div>
  </div>
  </div>
  </div>
{/* contact-us -form */}
<div className='contact-form '>
  <div className='container  '>
    <div className='row'>
      <div className='col-lg-10 offset-lg-1 py-5 '>
        <div className='contact_form_container1 '>
          <div className='contact_form_title ' id="contact-title">Get in Touch
          </div>
          <form id='contact_form my-5'  method='POST'>
            <div className='contact_form_name d-flex justify-content-around align-items-between'>
             
              <input type='text' onChange={handleInputs} id='contact_form_name' className='contact_form input-field'
         name="name"      placeholder="Youe Name.."  value={userData.name} required='true'></input>

<input type='email' onChange={handleInputs} id='contact_form_email' className='contact_form input-field'
          name="email"     placeholder="Youe Email.."  value={userData.email} required='true'></input>

<input type='number' onChange={handleInputs}  id='contact_form_phone' className='contact_form input-field'
             name="phone"  placeholder="Youe Phone no.."  value={userData.phone} required='true'></input>
            </div>
            <div className='contact_form_text mt-5  '>
              <textarea className='text_field contact_form_message' id='textarea'  onChange={handleInputs} value={userData.message} name="message" placeholder='Message' rows='10' cols='30'></textarea>
            </div>
            <div className='contact_form_button'>
              <button type='submit' onClick={contactForm} id="submit" className='form-submit px-2  b-none btn btn-primary '>Send Message</button>
            </div>
          </form>
         
        </div>
      </div>
    </div>
  </div>
</div>



</>
  )
}

export default Contact