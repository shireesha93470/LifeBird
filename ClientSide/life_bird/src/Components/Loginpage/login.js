import {useState,useEffect} from 'react';
import './login.css';

 const  Login=()=>{
    
    
      
    return(<div>
        <div>
            <div className='back-ground'>
              <div className='mainCard'>
					<div className='subCard1'>
						<img src="https://i.pinimg.com/originals/fd/93/8f/fd938f85645c5fad55df48a7e30b1161.png"></img>
					</div>
					<div className='subCard2'>
						<h1>Login Page</h1>
							<form>
								<div className="Input">
									<input type="text" placeholder="Username" className="Details" />
								</div>
								<div className="Input">
									<input type="password" placeholder="password" className="Details" />
								</div>
								<div className="Input center">
									<input type="button" value="Login" className="Login" />
								</div>
								<p className="Login-text">Not a member? <a href="" className="White">Signup</a></p>
							</form>
						</div>
                </div>  
            </div>
        </div>
 
    </div>
)
}
export default  Login;
