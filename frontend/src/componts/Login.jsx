import React, { useState } from 'react'
import "./Login.css"
import axios from 'axios'

const Login = () => {
    const[loginData,setLoginData] = useState({
        email:"",
        password:""
    })

    function handleInput(e){
        setLoginData({...loginData,[e.target.name]:e.target.name})
    }


    async function handleLogin(event){
        event.preventDefault();
        if(loginData.email==""){
            alert("Please enter email...");
            return;
        }

        if(loginData.password==""){
            alert("Please enter password...");
            return;
        }
        try {
          const checkUser = await axios.post("http://localhost:8080/user/login",loginData);
          console.log(checkUser);
          localStorage.setItem("follow-along-auth-token",JSON.stringify(checkUser.data.token));
          alert("You are successfully logged in");

        } catch (error) {
          console.log(error);
          alert("Something went wrong while logging in");
        }

        
    }
  return (
    <div>
      <form onSubmit={handleLogin}>
        <label htmlFor="">Email</label>
        <input type="email" value={loginData.email} name='email' onChange={handleInput} placeholder='Email...'/>
        <label>password</label>
        <input type="password" value={loginData.password} name="password" onChange={handleInput} placeholder='password...'/>
        <input type="submit"/>
      </form>
    </div>
  )
}

export default Login
