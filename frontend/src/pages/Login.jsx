import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'

const Login = () => {
  const [values, setValues] = useState({
      email: '',
      password: ''
  })
  const navigate = useNavigate()

  const handleChanges = (e) => {
      setValues({...values, [e.target.name]:e.target.value})
  }
  const handleSumbit = async (e) => {
      e.preventDefault()
      try {
          const response = await axios.post('http://localhost:3307/auth/login', values)
          if(response.status === 201) {
              localStorage.setItem('token', response.data.token)
              navigate('/')
          }
      } catch(err) {
          console.log(err.message)
      }
  }

  const [role, setRole] = useState(""); // State to store selected role
  const navigate1 = useNavigate();

  const handleLogin = () => {
    if (role === "admin") {
      navigate1("/admin");
    } else if (role === "vendor") {
      navigate1("/vendor");
    } else if (role === "customer") {
      navigate1("/customer");
    } else {
      alert("Please select a role!");
    }
  };

  return (
    <div className='login-contianer'>
      <div className='flex justify-center items-center h-screen'>
        <div className='shadow-lg px-8 py-5 border w-30 bg-white'>

          <h2 className='text-lg font-bold mb-4'>
            Login
          </h2>

          <form onSubmit={handleSumbit}>
            <div className="box">
                <label htmlFor="email" className='block text-gray-700'>Email</label>
                <input type="email" placeholder='🖂 Enter Email' className='w-full px-3 py-2 border'
                name="email" onChange={handleChanges}/>
            </div>

            <div className="box">
                <label htmlFor="password" className='block text-gray-700'>Password</label>
                <input type="password" placeholder='🔒 Enter Password' className='w-full px-3 py-2 border'
                name="password" onChange={handleChanges}/>
            </div>

            <div className="signup-role">
              <label htmlFor="role">Role : </label>
              <select id="role" value={role} onChange={(e) => setRole(e.target.value)} className='border px-10 py-1'>
                <option value="">Select Role</option>
                <option value="admin">Admin</option>
                <option value="vendor">Vendor</option>
                <option value="customer">Customer</option>
              </select>
            </div>

            <button onClick={handleLogin} className="w-full bg-gray-600 text-white py-2">Login</button>
          </form>

          <div className="text-center">
              <span>Don't Have Account?</span>
              <Link to='/signup' className='text-blue-500'>Signup</Link>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Login