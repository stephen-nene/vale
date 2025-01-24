import React, { useState,useRef,useEffect } from "react";
import { FaHeart, FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";

import { setDarkMode } from '../../store/actions/appAction.js'
import { useDispatch,useSelector } from "react-redux";


export default function Navbar({ loggedIn }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const darkMode = useSelector((state) => state.app.darkMode);
  const dispatch = useDispatch();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className="sticky top-0 z-20">
      <header
        className={`bg-pink-700 gradient-to-r from-rose-600 to-pink-700 dark:bg-black text-white `}
      >
        <nav className="mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <NavLink
            to="/"
            className="dark:text-rose-600 flex items-center space-x-2 hover:text-pink-200"
          >
            <FaHeart className="text-2xl" />
            <span className="text-xl font-bold hidden md:block">Valentino</span>
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 text-lg">
            {/* <NavLink
              to="/requests"
              className="hover:text-pink-200 transition-colors"
            >
              Requests
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
            </NavLink> */}

            <NavLink
              to="/features"
              className="hover:text-pink-200 transition-colors"
            >
              Features
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
            {loggedIn?.loggedIn && (
              <NavLink
                to="/profile"
                className="hover:text-pink-200 transition-colors"
              >
                Profile
              </NavLink>
            )}
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
            className=" px-3 py-2 rounded-full transition-colors text-2xl"
            onClick={() => dispatch(setDarkMode(!darkMode))}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            ref={mobileMenuRef}
            className="md:hidden fixed top-19 left-0 right-0 bg-gradient-to-r from-rose-600 to-pink-700 dark:from-gray-900 dark:to-gray-950 text-white py-4 px-6 z-50"
          >
            <NavLink
              to="/features"
              className="hover:text-pink-200 transition-colors"
            >
              Features
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
            {loggedIn?.loggedIn && (
              <NavLink
                to="/profile"
                className="hover:text-pink-200 transition-colors"
              >
                Profile
              </NavLink>
            )}
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
