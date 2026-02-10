import React, { useState } from 'react'
import './Login.css'
import axios from 'axios'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



    const handleChange = (e) => {
      if(e.target.name === 'email') {
        setEmail(e.target.value);
      } else if(e.target.name === 'password') {
        setPassword(e.target.value);
      }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login attempt:', { email, password });
        axios.post('http://localhost:3001/forms/login/post', { email, password }).then((response) => {
            console.log(response);
            if(response.status === 200 || response.status === 201) {
                setEmail('');
                setPassword('');
            }
        }).catch((error) => {
            console.log(error);
        })
    }
  return (
    <div className='login-container'>
        <form onSubmit={handleSubmit}>
            <input 
              type="email" 
              name="email"
              placeholder="Email" 
              value={email}
              onChange={handleChange}
              required
            />
            <input 
              type="password" 
              name="password"
              placeholder="Password" 
              value={password}
              onChange={handleChange}
              required
            />
            <button type="submit">Login</button>
        </form>
    </div>
  )
}

export default Login