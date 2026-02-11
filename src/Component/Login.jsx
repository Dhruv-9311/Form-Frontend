import React, { useState } from 'react'
import './Login.css'
import './LoginMessage.css'
import axios from 'axios'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [verificationUrl, setVerificationUrl] = useState('');

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
                
                // Handle verification response
                if(response.data.verificationUrl) {
                    setVerificationUrl(response.data.verificationUrl);
                    setMessage('✅ Login successful! Check your email for verification link.');
                } else {
                    setMessage('✅ Login successful!');
                }
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
        
        {/* Display messages and verification info */}
        {message && (
            <div className={`message ${message.includes('✅') ? 'success' : message.includes('❌') ? 'error' : 'info'}`}>
                {message}
            </div>
        )}
        
        {verificationUrl && (
            <div className="message info">
                <div style={{ marginBottom: '10px' }}>
                    📧 <strong>Verification Email Sent!</strong>
                </div>
                <div>
                    Check your email and click: 
                    <a 
                        href={verificationUrl} 
                        target="_blank" 
                        className="verification-link"
                    >
                        Verify Email
                    </a>
                </div>
                <div style={{ marginTop: '10px', fontSize: '12px', color: '#666' }}>
                    After verification, you can close this window and continue.
                </div>
            </div>
        )}
    </div>
  )
}

export default Login