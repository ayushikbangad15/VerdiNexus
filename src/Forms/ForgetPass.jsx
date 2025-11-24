import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgetPass = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    // ✅ Simulate sending reset email (replace with API call)
    setTimeout(() => {
      setMessage('Password reset link sent to your email.');
    }, 1000);
  };

  return (
    <div style={{backgroundImage:`linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url('https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` , backgroundSize:'cover',}}  className="min-h-screen flex items-center justify-center  bg-gray-100 dark:bg-gray-900 px-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 shadow-lg rounded-xl w-full max-w-md p-8 space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white">
          Forgot Password
        </h2>

        <div>
          <label className="block text-sm text-gray-700 dark:text-gray-300">
            Enter your company email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mt-1 p-2 rounded border dark:bg-gray-700 dark:text-white"
            placeholder="example@company.com"
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-300"
        >
          Send Reset Link
        </button>

        {message && (
          <p className="text-green-500 text-center text-sm">{message}</p>
        )}

        <div className="text-center mt-4">
          <button
            type="button"
            onClick={() => navigate('/login')}
            className="text-sm text-blue-600 hover:underline"
          >
            Back to Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default ForgetPass;
