import React, { useState } from 'react'
import './Login.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate()

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
                setMessage('✅ Login successful!');
                navigate('/dashboard');
            }
        }).catch((error) => {
            console.log(error);
            setMessage('❌ Login failed. Please try again.');
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
              className='input-field'
            />
            
            <input 
              type="password" 
              name="password"
              placeholder="Password" 
              value={password}
              onChange={handleChange}
              required
              className='input-field'
            />            
            <button type="submit">Login</button>
        </form>
        
        {/* Display messages */}
        {message && (
            <div className={`message ${message.includes('✅') ? 'success' : message.includes('❌') ? 'error' : 'info'}`}>
                {message}
            </div>
        )}
        
    </div>
  )
}

export default Login