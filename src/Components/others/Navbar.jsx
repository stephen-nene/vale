import React from "react";
import { FaHeart } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-20">
      <header className="bg-gradient-to-r from-rose-600 to-pink-700 text-white">
        <nav className="mx-auto px-6 py-4 flex justify-between items-center">
          <NavLink
            to="/"
            className="flex items-center space-x-2 hover:text-pink-200"
          >
            <FaHeart className="text-2xl" />
            <span className="text-xl font-bold hidden md:block">Valentino</span>
          </NavLink>
          <div className="hidden md:flex space-x-8 text-lg">
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
          <Link to="/login">
            <button className="bg-white text-rose-600 hover:bg-pink-100 px-6 py-2 rounded-full transition-colors">
              Get Started
            </button>
          </Link>
        </nav>
      </header>
    </nav>
  );
}
