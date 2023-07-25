import {useState,useEffect} from 'react';
import './navbar.css';
import {Link} from "react-router-dom";

 const NavBar=()=>{
    
    
      
    return(<div>
        <div className='main-section'>
            <div className='navbar'>
               <img  className="logo"src="./resources/logo.png"></img>
                <p className='home'>Home</p>
                <p className='navtext'>PHC</p>
                <p className='navtext'>Specilaist</p>
                <p className='navtext'>medicines</p>
                <p className='navtext'><Link to="/page">Signup</Link></p>
            </div>
        </div>
        </div>
 )
}
export default  NavBar;