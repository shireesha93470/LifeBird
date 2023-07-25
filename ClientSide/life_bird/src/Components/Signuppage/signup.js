import React,{useState}from 'react';
import axios from 'axios';
import './signup.css';

 const  Signup=()=>{
	const [username,setUserName]=useState("");
	const [phonenumber,setPhoneNumber]=useState("");
	const [experience,setExperience]=useState("");
	const [specilaization,setSpecilaization]=useState("");
	const [qualification,setQualification]=useState("");
	const [email_Id,setEmail_Id]=useState("");
	const [password,setPassword]=useState("");
	const [address,setAddress]=useState("");

	

	const handleClick = async() => {
		await axios.post('http://localhost:8080/api/v1/doctors', {
				"id": 0,
				"userName":username,
				"phoneNumber":phonenumber,
				"emailId":experience,
				"password": specilaization,
				"address": qualification,
				"experience": email_Id,
				"qualification":password,
				"specialization":address
		}).then(function (response) {
				console.log(response);
		}).catch(function (error) {
				console.log(error);
		});
}


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
								<div className="input">
									<input type="text" placeholder="username" onChange={(e) => setUserName(e.target.value)} className="details"/>
								</div>
								
								<div className="input">
									<input type="number" placeholder="Phonenumber" onChange={(e)=> setPhoneNumber(e.target.value)} className="details"/>
								</div>
								<div className="input">
									<input type="text" placeholder="Experience" onChange={(e)=> setExperience(e.target.value)} className="details"/>
								</div>
								
								<div className="input">
									<input type="text" placeholder="Specilaization" onChange={(e)=> setSpecilaization(e.target.value)} className="details"/>
								</div>
								<div className="input">
									<input type="text" placeholder="Qualification" onChange={(e)=> setQualification(e.target.value)} className="details"/>
								</div>
								
								<div className="input">
									<input type="text" placeholder="Email-Id" onChange={(e)=> setEmail_Id(e.target.value)} className="details"/>
								</div>
								<div className="input">
									<input type="text" placeholder="Password" onChange={(e)=> setPassword(e.target.value)} className="details"/>
								</div>
								
								<div className="input">
									<input type="text" placeholder="Address" onChange={(e)=> setAddress(e.target.value)} className="details"/>
								</div>
								<div className="input center">
									<button className="login" onClick={handleClick}>signup</button>
								</div>
								<p className="login-text">Already a member? <a href="" className="white"> Login</a></p>
							</form>
						</div>
                </div>  
            </div>
        </div>
 
    </div>
)
}

 export default Signup;
