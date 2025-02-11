import React, {useState} from 'react'

export default function Login() {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

const handleLogin = ()=>{

}

  return (
    <div className="loginpage">
      <h2>Login page</h2>
      <form onsubmit={handleLogin}>
        <div> 
        <label htmlFor="username">Username</label>
        <input type="text" id="username" placeholder="Enter Username" value={username} onChange={ (e)=>setUsername(e.target.value)} required/>
        </div>
        <div>
        <label htmlFor="password">Password</label>
        <input type="text" id='password' placeholder='Enter password' value={password} onChange={(e)=>setPassword(e.target.value)} required/>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
     
  )
}
