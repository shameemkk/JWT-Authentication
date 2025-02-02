import React, { useContext, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { context } from '../context/AuthContext';

const Login = () => {
  const navigate = useNavigate();
  const [inputData, setInputData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { login } = useContext(context);



  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await login(inputData);
      navigate('/dashboard');
    } catch (error) {
      setError(error.response?.data?.error || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              onChange={handleChange}
              value={inputData.email}
              name="email"
              type="email"
              id="email"
              placeholder="Enter your email"
              required
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              name="password"
              value={inputData.password}
              onChange={handleChange}
              type="password"
              id="password"
              placeholder="Enter your password"
              required
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
          {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
        </form>
        <p className="text-sm text-center text-gray-600">
          Don't have an account? <Link to="/register" className="text-blue-600 hover:text-blue-500">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;