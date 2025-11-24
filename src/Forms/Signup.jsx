import axios from 'axios';
import React, { useState } from 'react';
import { FaXmark } from "react-icons/fa6";
import { BiHide } from "react-icons/bi";
import { Link, useNavigate } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
// import { Signup } from '../ServicesBackend/PostMethod';


const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };

  const [formData, setFormData] = useState({
    companyName: '',
    companyWebsite: '',
    companyEmail: '',
    designation: '',
    // personEmail: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.companyName.trim()) newErrors.companyName = 'Required';
    if (!formData.companyWebsite.trim()) newErrors.companyWebsite = 'Required';
    if (!emailRegex.test(formData.companyEmail)) newErrors.companyEmail = 'Invalid email';
    if (!formData.designation.trim()) newErrors.designation = 'Required';
    // if (!emailRegex.test(formData.personEmail)) newErrors.personEmail = 'Invalid email';

    if (formData.password.length < 8) {
      newErrors.password = 'Minimum 8 characters';
    } else if (!/[A-Z]/.test(formData.password)) {
      newErrors.password = 'Must contain an uppercase letter';
    } else if (!/[0-9]/.test(formData.password)) {
      newErrors.password = 'Must contain a number';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      // You can trigger email verification API here
      console.log('Submitted Data:', formData);
      await axios.post('http://localhost:8080/api/auth/register', formData);
      alert('Signup successful! Please verify your email.');
      navigate('/login');
      setSubmitted(true);

      // navigate('/')
    }
  };

  return (
    <div style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url('https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`, backgroundSize: 'cover', }} className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-6">
      <form onSubmit={handleSubmit} className=" relative text-white dark:bg-gray-800 bg-white/20 backdrop-blur-xl shadow-md rounded-xl w-full max-w-lg p-8 space-y-6">
        <div className='absolute top-[2%] right-[2%] text-4xl hover:rounded-[50%] hover:bg-green-700 px-2 py-2 hover:text-white dark:text-white transition-all .5s '><Link to='/'><FaXmark /></Link></div>
        <h2 className="text-2xl font-bold text-center">Company Registration</h2>

        <div>
          <label className="block text-sm ">Company Name</label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder='Enter Company '
            className="w-full mt-1 p-2 rounded bg-transparent focus:bg-gray-300 border border-gray-300"
          />
          {errors.companyName && <p className="text-red-500 text-sm">{errors.companyName}</p>}
        </div>

        <div>
          <label className="block text-sm ">Company Website</label>
          <input
            type="url"
            name="companyWebsite"
            placeholder='Company website (eg- www.verdinexus.com) '
            value={formData.companyWebsite}
            onChange={handleChange}
            className="w-full mt-1 p-2 rounded bg-transparent focus:bg-gray-300  border-gray-300 border "
          />
          {errors.companyWebsite && <p className="text-red-500 text-sm">{errors.companyWebsite}</p>}
        </div>

        <div>
          <label className="block text-sm ">Company Email</label>
          <input
            type="email"
            name="companyEmail"
            value={formData.companyEmail}
            placeholder='Enter Email '
            onChange={handleChange}
            className="w-full mt-1 p-2 rounded bg-transparent focus:bg-gray-300 border-gray-300 border "
          />
          {errors.companyEmail && <p className="text-red-500 text-sm">{errors.companyEmail}</p>}
        </div>

        <div>
          <label className="block text-sm">Designation</label>
          <input
            type="text"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            className="w-full mt-1 p-2 rounded bg-transparent focus:bg-gray-300 border-gray-300 border "
          />
          {errors.designation && <p className="text-red-500 text-sm">{errors.designation}</p>}
        </div>

        {/* <div>
          <label className="block text-sm">Person's Email</label>
          <input
            type="email"
            name="personEmail"
            value={formData.personEmail}
            onChange={handleChange}
            className="w-full mt-1 p-2 rounded bg-transparent focus:bg-gray-300 border-gray-300 border "
          />
          {errors.personEmail && <p className="text-red-500 text-sm">{errors.personEmail}</p>}
        </div> */}

        <div>
          <label className="block text-sm ">Create Password</label>
          <div className='flex border-[.5px]  rounded'>
            <input
              // type="password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder='Enter Password'
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 outline-none rounded bg-transparent"
            /><button type="button" className='px-2 dark:text-white' onClick={togglePasswordVisibility}>
              {showPassword ? <BiHide /> : <FaEye />}
            </button>
          </div>
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
        </div>

        <div>
          <label className="block text-sm">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder='Confirm Password'
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full mt-1 p-2 rounded bg-transparent focus:bg-gray-300 border-gray-300 border  text-black"
          />
          {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition duration-300"
        >
          Submit
        </button>

        {submitted && (
          <p className="text-green-500 text-center mt-4">
            Verification email sent! Please check your inbox.
          </p>
        )}
        <p>Already Have An Account ? <Link to="/login" className='text-green-300'>Login</Link></p>
      </form>
    </div>
  );
};

export default Signup;
