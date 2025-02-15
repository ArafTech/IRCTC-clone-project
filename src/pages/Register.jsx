import React, {useState} from 'react';
import useForm from '../Hooks/useForm';
import styles from './Register.module.css';
import "../config/firebase.js";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";

export default function Register() {


  const [formData, handleChange] = useForm({});

  const [message, setMessage] = useState("");
  const [error, setErrors] = useState("");
  const auth = getAuth();


  const handleRegister = async (event)=>{
    event.preventDefault();
   try {
    const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
    const user = userCredential.user;
     // Set the display name
     await updateProfile(user, {
      displayName: formData.username, // Use the username from the form
    });

    //Email verfication
    await sendEmailVerification(user);
    setMessage("Registration successful");
  
   } catch (error) {
    setErrors(error.message);
   }
  }

  return (
       <div className={styles.registerpage}>
        <div className={styles.loginBox}> 
        <h2>Register Page</h2>
        {error && <p className={styles.error}>{error}</p>} 
        {message && <p className={styles.success}>{message}</p>} 
    <form onSubmit={handleRegister} className={styles.form}>
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
      <button type='submit'>Register</button>
    </form>
        </div>
      
    </div>
   
  )
}
