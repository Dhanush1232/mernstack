import React,{useState} from 'react'
import signup2 from "../images/signup3.jpg";
import "../App.css";
import { NavLink, useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate=useNavigate();
  const [user, setUser]=useState({
    name:"", email: "", phone: "", work: "", password: "", cpassword: ""
  });

  let name, value;

const handleInputs = (e) => {
  console.log(e);
  name = e.target.name;
  value=e.target.value;

  setUser({...user, [name]:value});

}

const PostData = async (e) => {
    e.preventDefault();

    const {name, email, phone, work, password, cpassword} = user;

    const res = await fetch("/register",{
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        name, email, phone, work, password, cpassword
      })  
    });

    const data = await res.json();

    if(res.status === 422 || !data){
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    }
    else{
      window.alert("Registration is Successfull");
      console.log("Successfull Registration");
      navigate("../login");
    }
}

  return(
    <> 
    <div className="pre">
    <br></br><br></br><br></br><br></br><br></br>
    <div className="prior" align="center">
    <div className="main">
      <div className="a">
              <h2 className="f"><strong>Sign up</strong></h2>
              <form method="POST" className="register-form" id="register-form">

                <div className="from-group">
                  <label htmlFor='name'>
                    <i className="zmdi zmdi-account material-icons-name"></i>
                  </label>
                  <input type="text" name="name" id="name" autoComplete="off" 
                      value={user.name}
                      onChange={handleInputs}
                      placeholder="Your Name"
                  />
                </div>

                <div className="from-group">
                  <label htmlFor='email'>
                    <i className="zmdi zmdi-email material-icons-name"></i>
                  </label>
                  <input type="text" name="email" id="email" autoComplete="off"
                      value={user.email}
                      onChange={handleInputs}
                      placeholder="Your email"
                  />
                </div>

                <div className="from-group">
                  <label htmlFor='Phone'>
                    <i className="zmdi zmdi-phone-in-talk material-icons-name"></i>
                  </label>
                  <input type="number" name="phone" id="phone" autoComplete="off"
                      value={user.phone}
                      onChange={handleInputs}
                      placeholder="Your Phone"
                  />
                </div>

                <div className="from-group">
                  <label htmlFor='work'>
                    <i className="zmdi zmdi-slideshow material-icons-name"></i>
                  </label>
                  <input type="text" name="work" id="work" autoComplete="off"
                      value={user.work}
                      onChange={handleInputs}
                      placeholder="Your Profession"
                  />
                </div>

                <div className="from-group">
                  <label htmlFor='Password'>
                    <i className="zmdi zmdi-lock material-icons-name"></i>
                  </label>
                  <input type="text" name="password" id="Password" autoComplete="off"
                        value={user.password}
                        onChange={handleInputs}
                      placeholder="Your Password"
                  />
                </div>

                <div className="from-group">
                  <label htmlFor='cPassword'>
                    <i className="zmdi zmdi-lock material-icons-name"></i>
                  </label>
                  <input type="text" name="cpassword" id="cPassword" autoComplete="off"
                      value={user.cpassword}
                      onChange={handleInputs}
                      placeholder="Confirm Your Password" 
                  />
                </div><br></br>
                <div className='form-group form-button'>
                  <input type="submit" name="signup" id="signup" className='button' 
                      value="Register" onClick={PostData}
                      />
                </div>
                
              </form>
              </div>
              <div className="b">
                <br></br>
                <img src={signup2} alt="signup logo" height="200px" width="200px"/><br></br><br></br>
                <NavLink to="/login">I am Already Registered?</NavLink>
              </div> 
              </div>
              </div>
              <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
              </div>
    </>
  )
}

export default Signup
