import React, {useState} from 'react';

export default function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = ()=>{

  }

  return (
    <div className='registerpage'>
      <h2>Register Page</h2>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <input type="text" id='username' placeholder='Enter username' value={username} onChange={(e)=>setUsername(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="text" id='password' placeholder='Enter password' value={password} onChange={(e)=>setPassword(e.target.value)} required />
      </div>
      <button type='submit'>Register</button>
    </form>
    </div>
  )
}
