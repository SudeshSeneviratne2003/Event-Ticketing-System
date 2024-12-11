import React, { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from 'axios'
import '../pages/common.css'

const Signup = () => {
  const [values, setValues] = useState({
      username: '',
      email: '',
      password: ''
  })

  const handleChanges = (e) => {
      setValues({...values, [e.target.name]:e.target.value})
  }

  const [role, setRole] = useState(""); // State to store selected role
  const navigate1 = useNavigate();

  const handleLogin = () => {
    if (role === "admin") {
      navigate1("/admin-dashboard");
    } else if (role === "vendor") {
      navigate1("/vendor-dashboard");
    } else if (role === "customer") {
      navigate1("/customer-dashboard");
    } else {
      alert("Please select a role!");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="shadow-lg px-8 py-5 border w-25 bg-white">

        <h2 className="text-lg font-bold mb-4">
          Register
        </h2>

        <form  onChange={handleChanges}>
          <div className="box">
            <label htmlFor="username" className="block text-gray-700">
              Username
            </label>
            <input type="text" placeholder="@ Enter Username" className="w-full px-3 py-2 border" name="username"  onChange={handleChanges}/>
          </div>

          <div className="box">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input type="email" placeholder="🖂 Enter Email" className="w-full px-3 py-2 border" name="email"  onChange={handleChanges}/>
          </div>

          <div className="box">
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input type="password" placeholder="🔒 Enter Password" className="w-full px-3 py-2 border" name="password"  onChange={handleChanges}/>
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
          <span>Already have account?</span>
          <Link to="/login" className="text-blue-500">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
