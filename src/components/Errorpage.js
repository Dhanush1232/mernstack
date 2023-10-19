import React from 'react'
import { NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';

const Errorpage = () => {
    return(
        <>

        <div id='notfound' align="center"><br/><br/><br/><br/><br/><br/><br/><br/>
            <div className="notfound">
                <div className="notfound-404">
                    <h1>404</h1>
                </div>
                <h2>We are sorry, page not found!</h2>
                <p className='mb-5'>
                    The page you are looking for mgiht have been removed had its name changed or is temporarily unavailable 
                </p>
                <NavLink to="/" style={{ textDecoration: 'none' }}><strong>Back To HomePage</strong></NavLink>
            </div>
        </div>
        </>
    )
}

export default Errorpage