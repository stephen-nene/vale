import React, { useState } from "react";
import { FaHeart, FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
    document.documentElement.classList.toggle("dark", !isDarkMode);
  };

  return (
    <nav className="sticky top-0 z-20">
      <header
        className={`bg-gradient-to-r from-rose-600 to-pink-700 text-white ${
          isDarkMode ? "dark" : ""
        }`}
      >
        <nav className="mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <NavLink
            to="/"
            className="flex items-center space-x-2 hover:text-pink-200"
          >
            <FaHeart className="text-2xl" />
            <span className="text-xl font-bold hidden md:block">Valentino</span>
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 text-lg">
            <NavLink
              to="/singles"
              className="hover:text-pink-200 transition-colors"
            >
              Singles
            </NavLink>
            <NavLink
              to="/couples"
              className="hover:text-pink-200 transition-colors"
            >
              Couples
            </NavLink>
            <NavLink
              to="/valereq"
              className="hover:text-pink-200 transition-colors"
            >
              Valentines?
            </NavLink>
            <NavLink
              to="/about"
              className="hover:text-pink-200 transition-colors"
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className="hover:text-pink-200 transition-colors"
            >
              Contact
            </NavLink>
          </div>

          {/* Mobile Menu Icon */}
          <button
            className="text-2xl md:hidden focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Get Started Button */}
          <Link to="/login" className="hidden lg:block">
            <button className="bg-white text-rose-600 hover:bg-pink-100 px-6 py-2 rounded-full transition-colors">
              Get Started
            </button>
          </Link>

          {/* Dark Mode Toggle */}
          <button
            className="bg-gray-900  hover:bg-pink-950 px-3 py-2 rounded-full transition-colors text-2xl"
            onClick={toggleDarkMode}
          >
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gradient-to-r from-rose-600 to-pink-700 text-white py-4 px-6">
            <NavLink
              to="/singles"
              className="block py-2 hover:text-pink-200 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Singles
            </NavLink>
            <NavLink
              to="/couples"
              className="block py-2 hover:text-pink-200 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Couples
            </NavLink>
            <NavLink
              to="/valereq"
              className="block py-2 hover:text-pink-200 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Valentines?
            </NavLink>
            <NavLink
              to="/about"
              className="block py-2 hover:text-pink-200 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className="block py-2 hover:text-pink-200 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </NavLink>
            <Link
              onClick={() => setIsMobileMenuOpen(false)}
              to="/login"
              className="block mt-4"
            >
              <button className="bg-white text-rose-600 hover:bg-pink-100 px-6 py-2 rounded-full transition-colors w-full">
                Get Started
              </button>
            </Link>
          </div>
        )}
      </header>
    </nav>
  );
}
