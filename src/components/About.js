import React, { useEffect, useState  } from 'react'
import { useNavigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import "../App.css"
import { NavLink } from 'react-router-dom'

const About = () => {

    const navigate=useNavigate();
    const [userData, setUserData]=useState({});

    const callAboutPage = async ()=>{
      try{
        const res=await fetch('/getdata',{
          method:"GET",
          headers:{
            Accept:"application/json",
            "Content-Type" : "application/json"
          },
          credentials:"include"
        });

        const data = await res.json();
        //console.log(data);
        setUserData(data);

        if(!res.status === 200){
          const error=new Error(res.error);
          throw error;
        }
      }catch(err){
        console.log(err);
        navigate('/login');
      }
    }

    useEffect(()=>{
          callAboutPage();
    },[]);


  return (
    <div className='d11'><br/><br/>
    <div className="container emp-profile" id="about" ><br/><br/>
      <form method='GET'>
        <div className="row">
          <div className="col-md-4">
            <img src="https://img.freepik.com/premium-psd/user-group-icon-3d-render-premium-psd_471402-578.jpg?w=740" alt="pic" height={200} width={200}/>
          </div>
          <div className="col-md-6">
          <div className="profile-head">
            <h5>{userData.name }</h5>
            <h6>{userData.work }</h6>
            <p className="profile-rating mt-3 mb-5">RANKINGS: <span> 1/10</span>  </p>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
  <li className="nav-item" >
    <NavLink className="nav-link active"  id="home-tab" data-toggle="tab" to="#home" role="tab" aria-controls="home" aria-selected="true">About</NavLink>
  </li>
  <li className="nav-item" >
    <NavLink className="nav-link active"  id="profile-tab" data-toggle="tab" to="#profile" role="tab" aria-controls="profile"  aria-selected="false">Timeline</NavLink>
  </li>
</ul>
         
          </div>

          </div>

          <div className="col-md-2">
            <input type="submit" className="button2" value="Edit Profile" name='btnAddMore'/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4" >
            <div className="profile-work" id="below"><br/>
            <p><strong>WORK LINK</strong></p>
                    <NavLink href="https://www.w3schools.com/"  style={{ textDecoration: 'none' }} target='_blank'><strong>Youtube</strong></NavLink><br/>
                    <NavLink href="https://www.w3schools.com/" style={{ textDecoration: 'none' }} target='_blank'>Instagram</NavLink><br/>
                    <NavLink href="https://www.w3schools.com/" style={{ textDecoration: 'none' }} target='_blank'>Technical</NavLink><br/>
                    <NavLink href="https://www.w3schools.com/" style={{ textDecoration: 'none' }} target='_blank'>Web Developer</NavLink><br/>
                    <NavLink href="https://www.w3schools.com/" style={{ textDecoration: 'none' }} target='_blank'>Figma</NavLink><br/>
                    <NavLink href="https://www.w3schools.com/" style={{ textDecoration: 'none' }} target='_blank'>MERNSTACK Developer</NavLink><br/>
            </div>
          </div>
<div className="col-md-8 pl-5 about-info">
  <div className="tab-content profile-tab" id='myTabContent'>
    
    

        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby='home-tab'>
    
        <div className="row">
      <div className="col-md-6">
        <br/>
        <label >User ID</label>
      </div>
      <div className="col-md-6">
        <br/>
        <p>987654321676</p>
      </div>
      </div>


      <div className="row mt-3">
      <div className="col-md-6">
        <label >Name</label>
      </div>
      <div className="col-md-6">
        <p>{userData.name }</p>
      </div>
      </div>

      
      <div className="row mt-3">
      <div className="col-md-6">
        <label >Email</label>
      </div>
      <div className="col-md-6">
        <p>{userData.email }</p>
      </div>
      </div>

      
      <div className="row mt-3">
      <div className="col-md-6">
        <label >Phone</label>
      </div>
      <div className="col-md-6">
        <p>{userData.phone}</p>
      </div>
      </div>

      
      <div className="row mt-3">
      <div className="col-md-6">
        <label >Profession</label>
      </div>
      <div className="col-md-6">
        <p>{userData.work }</p>
      </div>
      </div>


    </div>


    <div className="tab-pane fade show " id="profile" role="tabpanel" aria-labelledby="profile-tab">
     <div className="row">
      <div className="col-md-6">
        <br/>
        <label > Experience</label>
      </div>
      <div className="col-md-6">
        <br/>
        <p>Expert</p>
      </div>
     </div>

     <div className="row mt-3">
      <div className="col-md-6">
        <label > Hourly Rate</label>
      </div>
      <div className="col-md-6">
        <p>10$/hr</p>
      </div>
     </div>

     <div className="row mt-3">
      <div className="col-md-6">
        <label > Total Projects</label>
      </div>
      <div className="col-md-6">
        <p>230</p>
      </div>
     </div>

     <div className="row mt-3">
      <div className="col-md-6">
        <label > English Level</label>
      </div>
      <div className="col-md-6">
        <p>Expert</p>
      </div>
     </div>

     <div className="row mt-3">
      <div className="col-md-6">
        <label > Availability</label>
      </div>
      <div className="col-md-6">
        <p>6 Months</p>
      </div>
     </div>

    </div>
    
  </div>
</div>

        </div>
      </form>
    </div> 
    </div>
  )
}

export default About