import { useState } from 'react'
import './Form.css'
import axios from 'axios'

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
    age: '',
    gender: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: ''
  })
  const [errors, setErrors] = useState({})
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post('http://localhost:3001/forms/post', formData)
      console.log(response)

      if (response.status === 200 || response.status === 201) {
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          phone: '',
          age: '',
          gender: '',
          address: '',
          city: '',
          state: '',
          zipCode: '',
          country: ''
        })
        setErrors({})
      } else {
        console.log('Unexpected status:', response.status)
      }
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <div className="form-container">
      <h2 className="form-title">Complete Form</h2>
      <form onSubmit={handleSubmit} className="form-layout">
        <div className="form-row">
          <input 
            type="text" 
            placeholder="First Name *" 
            name="firstName" 
            value={formData.firstName}
            onChange={handleChange}
            required
            className="form-input"
          />
          <input 
            type="text" 
            placeholder="Last Name *" 
            name="lastName" 
            value={formData.lastName}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        
        <input 
          type="email" 
          placeholder="Email *" 
          name="email" 
          value={formData.email}
          onChange={handleChange}
          required
          className="form-input"
        />

        <input
          type="password"
          placeholder="Password *"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          className="form-input"
        />
        
        <input 
          type="tel" 
          placeholder="Phone *" 
          name="phone" 
          value={formData.phone}
          onChange={handleChange}
          required
          className="form-input"
        />
        
        <div className="form-row">
          <input 
            type="number" 
            placeholder="Age *" 
            name="age" 
            value={formData.age}
            onChange={handleChange}
            required
            className="form-input"
          />
          <select 
            name="gender" 
            value={formData.gender}
            onChange={handleChange}
            required
            className="form-select"
          >
            <option value="">Select Gender *</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        
        <input 
          type="text" 
          placeholder="Address *" 
          name="address" 
          value={formData.address}
          onChange={handleChange}
          required
          className="form-input"
        />
        
        <div className="form-row">
          <input 
            type="text" 
            placeholder="City *" 
            name="city" 
            value={formData.city}
            onChange={handleChange}
            required
            className="form-input"
          />
          <input 
            type="text" 
            placeholder="State *" 
            name="state" 
            value={formData.state}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        
        <div className="form-row">
          <input 
            type="text" 
            placeholder="Zip Code *" 
            name="zipCode" 
            value={formData.zipCode}
            onChange={handleChange}
            required
            className="form-input"
          />
          <input 
            type="text" 
            placeholder="Country *" 
            name="country" 
            value={formData.country}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        
        <button 
          type="submit" 
          className="submit-button"
        >
          Register
        </button> 
      </form>
    </div>
  )
}

export default Form