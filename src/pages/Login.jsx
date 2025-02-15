import React, {useState} from 'react';
import useForm from '../Hooks/useForm';
import styles from './Login.module.css';
import  '../config/firebase.js';
import {getAuth, signInWithEmailAndPassword , sendEmailVerification} from "firebase/auth";

export default function Login() {
// const [username, setUsername] = useState('');
// const [password, setPassword] = useState('');

const [formData, handleChange] = useForm({});
const auth = getAuth();
const [message, setMessage] = useState("");
const [error, setError] = useState("");
const handleLogin = async (e)=>{
  e.preventDefault();
  try {
    const userCredential = await signInWithEmailAndPassword(auth, formData.username, formData.email, formData.password);
    const user = userCredential.user;
    //check if email is verfied
    if(user.emailVerified){
      setMessage("Login sucessful! Welcome.");
    } else{
      setError("Please register if you are a new user");
    
    }
  } catch (error) {
    setError(error.message);
  } 
}
  return (

          <div className={styles.loginpage}>
         <div className={styles.loginBox}>
         <h2>Login Page</h2>
         {error && <p className={styles.error}>{error}</p>} 
         {message && <p className={styles.success}>{message}</p>} 
       <form onSubmit={handleLogin} className={styles.form}>
         <div className={styles.formGroup}>
           <label htmlFor="username">Username</label>
           <input type="text" id='username' placeholder='Enter username' value={formData.username} onChange={handleChange} required />
         </div>
         <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={handleChange} required />
          </div>
         <div className={styles.formGroup}>
           <label htmlFor="password" >Password</label>
           <input type="password" id='password' placeholder='Enter password' value={formData.password} onChange={handleChange} required />
         </div>
         <button type='submit'>LogIn</button>
       </form>
       </div>
         </div>
     
     )
}
