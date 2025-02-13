import React, {useState} from 'react';
import useForm from '../Hooks/useForm';
import styles from './Login.module.css'

export default function Login() {
// const [username, setUsername] = useState('');
// const [password, setPassword] = useState('');

const [formData, handleChange] = useForm({
  username: '',
  password: ''
})

const handleSubmit = ()=>{
  event.preventDefault();
  console.log("Login form submitted", formData);
  
}

  return (

          <div className={styles.loginpage}>
         <div className={styles.loginBox}>
         <h2>Login Page</h2>
       <form onSubmit={handleSubmit} className={styles.form}>
         <div className={styles.formGroup}>
           <label htmlFor="username">Username</label>
           <input type="text" id='username' placeholder='Enter username' value={formData.username} onChange={handleChange} required />
         </div>
         <div className={styles.formGroup}>
           <label htmlFor="password" >Password</label>
           <input type="text" id='password' placeholder='Enter password' value={formData.password} onChange={handleChange} required />
         </div>
         <button type='submit'>Register</button>
       </form>
       </div>
         </div>
     
     )
}
