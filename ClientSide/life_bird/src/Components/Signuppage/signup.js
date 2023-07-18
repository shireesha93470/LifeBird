import {useState,useEffect} from 'react';
import './signup.css';

 const  Signup=()=>{
    
    
      
    return(<div>
        <div>
            <div className='background'>
              <div className='main-card'>
					<div className='sub-card1'>
						<img src="https://i.pinimg.com/originals/fd/93/8f/fd938f85645c5fad55df48a7e30b1161.png"></img>
					</div>
					<div className='sub-card2'>
						<h1>Signup Page</h1>
							<form>
								<div class="input">
									<input type="text" placeholder="username" class="details" />
								</div>
								
								<div class="input">
									<input type="password" placeholder="password" class="details" />
								</div>
								<div class="input">
									<input type="text" placeholder="Experience" class="details" />
								</div>
								
								<div class="input">
									<input type="password" placeholder="password" class="details" />
								</div>
								<div class="input">
									<input type="text" placeholder="username" class="details" />
								</div>
								
								<div class="input">
									<input type="password" placeholder="password" class="details" />
								</div>
								<div class="input">
									<input type="text" placeholder="username" class="details" />
								</div>
								
								<div class="input">
									<input type="password" placeholder="password" class="details" />
								</div>
								<div class="input center">
									<input type="button" value="submit" class="login" />
								</div>
								<p class="login-text">Already a member? <a href="" class="white"> Login</a></p>
							</form>
						</div>
                </div>  
            </div>
        </div>
 
    </div>
)
}
export default  Signup;
