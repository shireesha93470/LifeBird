import {useState,useEffect} from 'react';
import './footer.css';

 const Footer=()=>{
    
    
      
    return(<div>


<div className='footer'>
        <div className='location'>
            <h1 className="h1">LOCATION</h1>
            <p className="p">somewhere in India</p>
        </div>
        <div className='logos'>
            <h1 className="h1">AROUND THE WEB</h1>
            <div className='logo1'>
                <div className="facebook">
					<a href="https://www.facebook.com/"><img src="/resources/facebook.avif" alt=""></img></a>
				</div>
				<div className="insta">
					<a href="https://www.instagram.com/"><img src="/resources/instagram.avif" alt=""></img></a>
				</div>
				<div className="twitter">
					<a href="https://twitter.com/"><img src="/resources/twitter.png" alt=""></img></a>
				</div>
            </div>
        </div>
        <div className='about'>
            <h1 className="h1">ABOUT US</h1>
            <p className="p">Connecting patients with trusted doctors online for<br></br> accessible and convenient healthcare.</p>
        </div>
                        
    </div>
</div>
    )
}
export default  Footer;