import React,{useContext, useState} from 'react'
import login from "../images/login.jpg"
import { NavLink, useNavigate } from 'react-router-dom'
import {UserContext} from "../App";

const Login = () => {

  const {dispatch} = useContext(UserContext);
  const navigate=useNavigate();
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');

  const loginUser = async (e)=>{
        e.preventDefault();

        const res = await fetch('/signin',{
          method:"POST",
          headers:{
            "Content-Type" : "application/json"
          },
          body:JSON.stringify({
            email,password
          })

        });
        const data =res.json();
        if(res.status===400 || !data){
          window.alert("Invalid credentials");
        }
        else{
          dispatch({type:'USER', payload:true})
          window.alert("login successfully");
          navigate('/');
        }
    } 
  
  return(
    <div className='a1'>
      <div className='pre'>
    <br></br><br></br><br></br><br></br><br></br>
    <div className="prior" align="center">
    <div className="main">
      <div className="a">
        <br></br>
              <h2 className="f"><strong>Sign up</strong></h2>
              <br></br>
              <form method="POST" className="register-form" id="register-form">


                <div className="f1">
                  <label htmlFor='email'>
                    <i className="zmdi zmdi-email material-icons-name"></i>
                  </label>
                  <input type="text" name="email" id="email" autoComplete="off" value={email} onChange={(e)=>setEmail(e.target.value)}
                      placeholder="Your email"
                  />
                </div>
                <br></br>

                <div className="f1">
                  <label htmlFor='Password'>
                    <i className="zmdi zmdi-lock material-icons-name"></i>
                  </label>
                  <input type="text" name="Password" id="Password" autoComplete="off" value={password} onChange={(e)=>setPassword(e.target.value)}
                      placeholder="Your Password"
                  />
                </div>

              <br></br>
               
              <div className='form-group form-button'>
                <input type="submit" name="signin" id="signin" className='button' value="Log In"
                 onClick={loginUser}
                />
              </div>
              
              </form>
              </div>
              <div className="b">
                <br></br>
                <img src={login} alt="login logo" height="200px" width="200px"/><br></br><br></br>
                <NavLink to="/signup">Create An Account?</NavLink>
              </div> 
              </div>
              </div>
              <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
              </div>


    </div>
  )
}

export default Login