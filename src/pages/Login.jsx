import React, {useState} from 'react';
import useForm from '../Hooks/useForm';
import styles from './Login.module.css';
import app from '../config/firebase.js';
import { getAuth, signInWithEmailAndPassword , sendEmailVerification} from "firebase/auth";



export default function Login() {
// const [username, setUsername] = useState('');
// const [password, setPassword] = useState('');

const [formData, handleChange] = useForm({});
const auth = getAuth();
const [message, setMessage] = useState("");

const handleSubmit = (e)=>{
  e.preventDefault();
  signInWithEmailAndPassword(auth, formData.email, formData.password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("User signed in:", user);
    return sendEmailVerification(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setMessage(`Error: ${error.message}`);
    setMessage(`Error in Logging In. Error Code ${errorCode} Error Message ${errorMessage}`)
  });

}

  return (

          <div className={styles.loginpage}>
         <div className={styles.loginBox}>
         <h2>Login Page</h2>
         {message && <p className={styles.success}>{message}</p>}
       <form onSubmit={handleSubmit} className={styles.form}>
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
