import {useState,useEffect} from 'react';
import './navbar.css';

 const NavBar=()=>{
    
    
      
    return(<div>
        <div className='main-section'>
            <div className='navbar'>
               <img  className="logo"src="./resources/bird.jpeg"></img>
                <p className='home'>Home</p>
                <p className='navtext'>PHC</p>
                <p className='navtext'>Specilaist</p>
                <p className='navtext'>medicines</p>
                <p className='navtext'>Signup</p>
            </div>
        </div>
        </div>
 )
}
export default  NavBar;