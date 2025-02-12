import React, {useState} from 'react';
import useForm from '../Hooks/useForm';

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
    <div className="loginpage">
      <h2>Login page</h2>
      <form onsubmit={handleSubmit}>
        <div> 
        <label htmlFor="username">Username</label>
        <input type="text" id="username" placeholder="Enter Username" value={formData.username} onChange={handleChange} required/>
        </div>
        <div>
        <label htmlFor="password">Password</label>
        <input type="text" id='password' placeholder='Enter password' value={formData.password} onChange={handleChange} required/>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
     
  )
}
