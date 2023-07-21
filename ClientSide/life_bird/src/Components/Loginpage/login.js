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
								<div class="Input">
									<input type="text" placeholder="Username" class="Details" />
								</div>
								<div class="Input">
									<input type="text" placeholder="Experience" class="Details" />
								</div>
								<div class="Input center">
									<input type="button" value="Login" class="Login" />
								</div>
								<p class="Login-text">Not a member? <a href="" class="White">Signup</a></p>
							</form>
						</div>
                </div>  
            </div>
        </div>
 
    </div>
)
}
export default  Login;
