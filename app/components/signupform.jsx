"use client"
import React, { useState } from 'react';
import { useAuth } from '../auth';
import { FaTimes } from 'react-icons/fa';

const SignupForm = ({ onCancel }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signup } = useAuth();

  const handleSignup = async (e) => {
    e.preventDefault();
    signup(email, password);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md relative">
      <FaTimes className="absolute top-2 right-2 cursor-pointer" onClick={onCancel} />
      <form onSubmit={handleSignup}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600 text-sm font-medium mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-600 text-sm font-medium mb-2">
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300"
        >
          Signup
        </button>
      </form>
      <div className="text-center mt-4">
        <p>Already have an account? <span className="text-blue-500 cursor-pointer" onClick={onCancel}>Login here</span>.</p>
      </div>
    </div>
  );
};

export default SignupForm;
