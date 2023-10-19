import React,{useState, useEffect} from 'react';
const Home = () => {
  const [userName, setUserName]=useState('');
  const [show,setShow]=useState(false);

    const userHomePage = async ()=>{
      try{
        const res=await fetch('/getdata',{
          method:"GET",
          headers:{
            "Content-Type" : "application/json"
          },
        });

        const data = await res.json();
        console.log(data);
        setUserName(data.name);
        setShow(true);

      }catch(err){
        console.log(err);
      }
    }

    useEffect(()=>{
          userHomePage();
    },[]);
  return(
    <>
       <div className="home">
      <div className="home-div h-100 d-flex flex-column justify-content-center align-items-center">
        <div className="d-flex justify-content-center">
          <p className="fs-3" style={{letterSpacing:"0.5em",color:"skyblue"}}>WELCOME</p>
        </div>
        <h1>{userName}</h1>
          <h1>{show ? 'Happy, To See You Back!!' : 'We Are The Mern Developer' }</h1>
      </div>
    </div>
    </>
  )
}

export default Home