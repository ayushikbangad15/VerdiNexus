import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaXmark } from "react-icons/fa6";
import { AuthContext } from '../Context/AuthContext';
import { FaEye } from "react-icons/fa";
import { BiHide } from "react-icons/bi";

import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  // const navigate = useNavigate();


   const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
      setShowPassword(prev => !prev);
    };

  const [formData, setFormData] = useState({
    companyEmail: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.companyEmail)) newErrors.companyEmail = 'Invalid email';
    if (!formData.password) newErrors.password = 'Password required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      // ✅ Process login logic here (API call etc.)
      console.log('Logging in:', formData);
      // navigate('/'); // redirect to home
      const res = await axios.post('http://localhost:8080/api/auth/login', formData);
      login(res.data.token); // Save JWT globally
      navigate('/');
    }
  };

  return (
    <div style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url('https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`, backgroundSize: 'cover', }} className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 shadow-lg relative rounded-xl w-full max-w-md p-8 space-y-6"
      >
        <div className='absolute top-[2%] right-[2%] text-4xl hover:rounded-[50%] dark:text-white hover:bg-green-700 px-2 py-2 hover:text-white transition-all .5s '><Link to='/'><FaXmark /></Link></div>
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white">
          Company Login
        </h2>

        <div>
          <label className="block text-sm text-gray-700 dark:text-gray-300">Company Email</label>
          <input
            type="email"
            name="companyEmail"
            value={formData.companyEmail}
            onChange={handleChange}
            className="w-full mt-1 p-2 rounded border dark:bg-gray-700 dark:text-white"
          />
          {errors.companyEmail && (
            <p className="text-red-500 text-sm">{errors.companyEmail}</p>
          )}
        </div>

        <div>
          <div className='flex border-[.5px]  rounded'>
            <input
              // type="password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder='Enter Password'
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 outline-none  dark:text-white rounded bg-transparent"
            /><button type="button" className='px-2 dark:text-white' onClick={togglePasswordVisibility}>
              {showPassword ? <BiHide /> : <FaEye />}
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition duration-300"
        >
          Login
        </button>

        <div className="flex justify-between text-sm mt-4 text-gray-600 dark:text-gray-300">
          <button
            type="button"
            onClick={() => navigate('/forgetpassword')}
            className="hover:underline text-blue-600"
          >
            Forgot Password?
          </button>
          <button
            type="button"
            onClick={() => navigate('/signup')}
            className="hover:underline text-blue-600"
          >
            Create New Account
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
