import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation(); // Get current route information

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="logo">
          <Link to="/" className="text-2xl font-bold text-green-600">
            Car Rental
          </Link>
        </div>
        <nav className="hidden md:flex space-x-4">
          <Link
            to="/"
            className={`text-gray-600 hover:text-green-600 ${
              location.pathname === '/' ? 'text-green-500' : ''
            }`}
          >
            Home
          </Link>
          <Link
            to="/cars"
            className={`text-gray-600 hover:text-green-600 ${
              location.pathname === '/cars' ? 'text-green-500' : ''
            }`}
          >
            Cars
          </Link>
          <Link
            to="/about"
            className={`text-gray-600 hover:text-green-600 ${
              location.pathname === '/about' ? 'text-green-500' : ''
            }`}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`text-gray-600 hover:text-green-600 ${
              location.pathname === '/contact' ? 'text-green-500' : ''
            }`}
          >
            Contact
          </Link>
        </nav>
        <div className="auth-buttons space-x-2">
          {/* <Link to="/login" className="bg-slate-500 hover:bg-green-600 text-white px-4 py-2 rounded">
            Login
          </Link> */}
          {/* <Link to="/register" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
            Register
          </Link> */}
        </div>
      </div>
    </header>
  );
}
