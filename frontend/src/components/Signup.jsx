import React, { useState } from 'react'
import axios from "axios";
import styles from "./signup.module.css";
const Signup = () => {
    const[SignupData,setSignupData] = useState({
        name:"",
        email:"",
        password:"",
    })

    const[image,setImage] = useState("");

    function handleInput(e){
        setSignupData({...SignupData,[e.target.name]:e.target.value})
    }


    async function handleSignup(event) {
        event.preventDefault();
    
        // Validate input fields
        if (SignupData.email === "") {
            alert("Please enter email...");
            return;
        }
    
        if (SignupData.password === "") {
            alert("Please enter password...");
            return;
        }
    
        if (SignupData.name === "") {
            alert("Please enter name...");
            return;
        }
    
        try {
            const formData = new FormData();
            formData.append("name", SignupData.name);  
            formData.append("email", SignupData.email);
            formData.append("password", SignupData.password);
            formData.append("image", image);
    
            console.log(...formData); 
    
            await axios.post("http://localhost:8080/user/signup", formData, {
                headers: {
                    "Content-Type": "multipart/form-data", 
                },
            });
    
            alert("You successfully signed up!");
        } catch (error) {
            console.error(error);
            alert("Something went wrong");
        }
    }






  return (
    <div>
        <form onSubmit={handleSignup} className={styles.formbox}>
            <label htmlFor="">Upload Your Image</label>
            <input type="file" value={Signup.image} onChange={(event)=>{
                console.log(event.target.files[0])
                setImage(event.target.files[0]);
            }}/>
            <label htmlFor="">Name</label>
            <input type="text" placeholder='Name...' value={SignupData.name} name="name"  onChange={handleInput}/>
            <label htmlFor="">Email</label>
            <input type="email" value={SignupData.email} name='email' onChange={handleInput} placeholder='Email...' />
            <label>password</label>
            <input type="password" value={SignupData.password} name="password" onChange={handleInput} placeholder='password...' />
            <input type="submit" />
        </form>
    </div>
  )
}

export default Signup