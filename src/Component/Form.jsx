import { useState } from 'react'
import './Form.css'

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
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
      const response = await fetch('http://localhost:5000/forms/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(
          formData
        )
      })
      
      if (response.ok) {
        const result = await response.json()
        console.log('Form submitted successfully:', result)
        alert('Form submitted successfully! Check console for data.')
        
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          age: '',
          gender: '',
          address: '',
          city: '',
          state: '',
          zipCode: '',
          country: ''
        })
      } else {
        console.error('Form submission failed')
        alert('Form submission failed! Please try again.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Error submitting form! Please check console.')
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
          Submit Form
        </button>
      </form>
    </div>
  )
}

export default Form