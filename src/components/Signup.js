import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'

const Signup = (props) => {
  const [credentials, setCredentials] = useState({name:"",email:"",password:"",cpassword:""})
  const [msg,Setmsg] = useState("");
  let navigate = useNavigate()

  const handleSubmit = async(e)=>{
    e.preventDefault();
    const {name,email,password} = credentials
    const response = await fetch("http://18.220.155.174:5000/api/auth/createuser", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body : JSON.stringify({name,email,password})
    });
    const json =  await response.json();
    console.log(json)
    if(json.success){
      //save the authtoken and redirect
      localStorage.setItem('token',json.authtoken);
      navigate("/")
      props.showAlert("Account created succesfully","success")
    }
    else{
      props.showAlert("Invalid credentials","danger")
    }
  }
  const onChange = (e)=>{
    setCredentials({...credentials,[e.target.name]:e.target.value})
  }
  return (
    <>
      <h2>Welcome to iNotebook Sign up to continue</h2>
      <form onSubmit={handleSubmit}>
        <div className = "mb-3">
          <label htmlFor = "na" className = "form-label">Name</label>
          <input type="text" className = "form-control" id="name" aria-describedby="emailHelp" name = "name" onChange={onChange}/>
        </div>
        <div className = "mb-3">
          <label htmlFor = "email" className = "form-label">Email address</label>
          <input type="email" className = "form-control" id="email" aria-describedby="emailHelp" name = "email" onChange={onChange} minLength = {5} required/>
          <div id="emailHelp" className = "form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className = "mb-3">
          <label htmlFor = "password" className = "form-label">Password</label>
          <input type="password" className = "form-control" id="password" name = 'password' onChange={onChange} minLength = {5} required/>
        </div>
        <div className = "mb-3">
          <label htmlFor = "password" className = "form-label">Confirm Password</label>
          <input type="password" className = "form-control" id="cpassword" name = 'cpassword' onChange={onChange}/>
        </div>
        <div className = "mb-3 form-check">
          <input type="checkbox" className = "form-check-input" id="exampleCheck1"/>
          <label className = "form-check-label" htmlFor = "exampleCheck1">Check me out</label>
        </div>
        {msg && <div className="success_msg">{msg}</div>}
        <button type="submit" className = "btn btn-primary">Submit</button>
      </form>
    </>
  )
}

export default Signup