import React, {useState} from 'react';
import useForm from '../Hooks/useForm';

export default function Register() {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');

  const [formData, handleChange] = useForm({
    username: '',
    password: ''
  })

  const handleSubmit = (event)=>{
    event.preventDefault();
    console.log("Register Form submitted", formData);
    
  }

  return (
    <div className='registerpage'>
      <h2>Register Page</h2>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <input type="text" id='username' placeholder='Enter username' value={formData.username} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="text" id='password' placeholder='Enter password' value={formData.password} onChange={handleChange} required />
      </div>
      <button type='submit'>Register</button>
    </form>
    </div>
  )
}
