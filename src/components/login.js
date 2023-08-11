import React, { useState } from 'react'
import "./main.css"
import {useDispatch} from 'react-redux'
import { login } from "../features/userSlice";

function Login() {
  const [username, setName] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(login({
        username : username,
        password : password,
        loggedIn : true
    }));
  }
    return (
    <>
        <div className='login'>
        <form className="form" onSubmit={(e) => handleSubmit(e)}>
            <h1 id='head'> Login Now </h1>
            <div>
                <p className='input-label'>Username or Email</p>
                <input className='input-item' type='text' name='Username or Email' placeholder='   Enter your Username or Email' required value={username} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <p className='input-label'>Password</p>
                <input className='input-item' type='password' name='Password' placeholder='   Enter your Password' required value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className='robot-chk'>
                <input id='terms-check' type='checkbox' name='terms and conditions' value='accept' required />I'm not a robot.
            </div>
            {/* <input type='submit' value='Login' /> */}
            <button type='submit' className='login-btn' value='Login'>LOGIN</button>
        </form>
    </div>
    </>
  )
}

export default Login