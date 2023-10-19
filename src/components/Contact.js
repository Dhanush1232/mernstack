import React,{useEffect,useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css';

const Contact = () => {

    const [userData, setUserData]=useState({name:"", email:"", phone:"", message:""});

    const userContact = async ()=>{
      try{
        const res=await fetch('/getdata',{
          method:"GET",
          headers:{
            Accept:"application/json",
            "Content-Type" : "application/json"
          },
        });

        const data = await res.json();
        console.log(data);
        setUserData({...data, name:data.name, email:data.email, phone:data.phone});

        if(!res.status === 200){
          const error=new Error(res.error);
          throw error;
        }
      }catch(err){
        console.log(err);
      }
    }

    useEffect(()=>{
          userContact();
    },[]);
    const handleInputs=(e)=>{
      const name=e.target.name;
      const value=e.target.value;

      setUserData({...userData, [name]:value });
    }


    const contactForm=async (e)=>{
      e.preventDefault();

      const {name,email,phone,message}=userData;

      const res=await fetch('/contact',{
        method:'POST',
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
          name,email,phone,message
        })
      });

      const data = await res.json();

      if(!data){
        console.log("message not send");
      }
      else{
        alert("message sent");
      }
    }
  return(
    <div className='top'>
    <br></br>
            <div className="col-lg-10 offset-lg-1 d-flex justify-content-between" >
              <div className="contact_info_item d-flex justify-content-start align-items-center" id="box">
                <img src="https://cdn.iconscout.com/icon/free/png-128/phone-2015-1100768.png?f=webp" alt="phone" width={30} height={30}/>
                <div className="contact_info_content">
                  <div className="contact_info_title" id="in">
                    <strong>Phone</strong>
                  </div>
                  <div className="contact_info_text">
                    +91 1111 543 2198
                  </div>
                </div>
              </div>
  
              <div className="contact_info_item d-flex justify-content-start align-items-center" id="box">
                <img src="https://cdn.iconscout.com/icon/premium/png-128-thumb/mail-email-message-inbox-letter-envelope-6-16294.png?f=webp" alt="phone" width={30} height={30}/>
                <div className="contact_info_content">
                  <div className="contact_info_title">
                    <strong>Email</strong>
                  </div>
                  <div className="contact_info_text">
                    dhanush10578@gmail.com
                  </div>
                </div>
              </div>
 
              <div className="contact_info_item d-flex justify-content-start align-items-center" id="box">
                <img src="https://cdn.iconscout.com/icon/premium/png-128-thumb/address-152-425522.png?f=webp" alt="phone" width={30} height={30}/>
                <div className="contact_info_content">
                  <div className="contact_info_title">
                    <strong>Address</strong>
                  </div>
                  <div className="contact_info_text">
                    2/445 East pondy main Road Koliyanur Post Villupuram
                  </div>
                </div>
              </div>
            </div>

      {/*contact us form*/}
            <br></br>
         
            <div className="col-lg-10 offset-lg-1" id="baby">
              <div className="contact_form_title" id="mar">
                <br></br>
                  <strong><h3>Get In Touch</h3></strong>
              </div>
              <br></br>
              <form method="POST" id="mar">
                <div className='contact_form_name d-flex justify-content-between align-items-between'>
                  <input type="text" id="box1"
                    className='contact_form_name input_field' 
                    name="name"
                    value={userData.name}
                    onChange={handleInputs}
                    placeholder="Your Name" required/>
                  
                  <input type="email" id="box1"
                    className='contact_form_name input_field'
                    name="email"
                    value={userData.email}
                    onChange={handleInputs}
                    placeholder="Your Email" required/>
                  
                  <input type="number" id="box1"
                    className='contact_form_phone input_field'
                    name="phone"
                    value={userData.phone}
                    onChange={handleInputs}
                    placeholder="Your Phone Number" required/>
                </div>
                  <br></br>
                <div className="contact_form_text" align="center">
                  <textarea className='text_field contact_form_message' type='text'
                      name="message"
                      value={userData.message}
                      onChange={handleInputs}
                      placeholder="Message" cols="60" rows="10"></textarea>
                </div>
                  <br></br>
                <div className="contact_form_button" align="center">
                  <button type="submit" className='button1 contact_submit_button' onClick={contactForm}><strong>Send Message</strong></button>
                </div>
              </form>
            </div>
        
      <br></br>
    </div>
  )
}

export default Contact