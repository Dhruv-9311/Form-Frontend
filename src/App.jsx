import Form from './Component/Form.jsx'
import Login from './Component/Login.jsx'
import Navbar from './Component/Navbar.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App
