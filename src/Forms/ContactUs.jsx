import React, { useState } from 'react';
import visionBg from '../assets/images/contact.jpeg'; // Import your background image
import { FaXmark } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100vw',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url(${visionBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div className="w-[96vw] max-w-2xl shadow-x1 rounded-3xl relative bg-green-1200/40 backdrop-blur-lg p-6 mx-auto">
        <div className="absolute top-4 right-4 text-4xl hover:rounded-full dark:text-white hover:bg-green-800 px-2 py-2 hover:text-white transition-all">
          <Link to="/"><FaXmark /></Link>
        </div>
        <h2 className="text-4xl font-bold mb-8 text-center text-green-300">Contact Us</h2>
        {submitted ? (
          <div className="text-center p-8 text-green-500 text-xl">Thank you! We'll be in touch soon.</div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-1 text-sm font-medium text-green-200">Name</label>
                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 border border-green-300 bg-transparent rounded-md text-green-200 placeholder-green-400 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-green-200">Email</label>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  required
                  placeholder="Enter your Email"
                  className="w-full px-4 py-2 border border-green-300 bg-transparent rounded-md text-green-200 placeholder-green-400 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-green-200">Company</label>
              <input
                type="text"
                name="company"
                onChange={handleChange}
                required
                placeholder="Company Name"
                className="w-full px-4 py-2 border border-green-300 bg-transparent rounded-md text-green-200 placeholder-green-400 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-green-200">Subject</label>
              <input
                type="text"
                name="subject"
                onChange={handleChange}
                required
                placeholder="Subject"
                className="w-full px-4 py-2 border border-green-300 bg-transparent rounded-md text-green-200 placeholder-green-400 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-green-200">Message</label>
              <textarea
                name="message"
                onChange={handleChange}
                required
                rows="5"
                placeholder="Type your message..."
                className="w-full px-4 py-2 border border-green-300 bg-transparent rounded-md text-green-200 placeholder-green-400 focus:outline-none focus:ring-2 focus:ring-green-400"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-3 rounded-md bg-gradient-to-r from-green-400 to-green-700 text-white font-semibold hover:from-green-700 hover:to-green-400 transition-all"
              >
                Send Message
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default ContactUs;
