// Navbar.jsx

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LuMoonStar, LuSunMoon } from "react-icons/lu";

import {setDarkMode} from '../store/actions/appAction'

const Navbar = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.app.darkMode);


  return (
    <nav className={` ${darkMode ? 'bg-rose-950' : 'bg-rose-500'} p-4 flex justify-between items-center fixed w-full top-0`}>
      {/* Logo */}
      <div className=" font-bold text-lg">
        <p className={`${darkMode ? 'text-rose-500' : 'text-rose-950'}`}>Rose-Vale</p>
        </div>

      {/* Dark Mode Button */}
      <button
        className={`${darkMode ? 'bg-gray-950 text-white' : 'bg-white '}  hover:bg-yellow-600 text-gray-800  py-2 px-4 rounded-full flex items-center`}
        onClick={()=>{dispatch(setDarkMode())}}
      >
        {darkMode ? <LuSunMoon className="mr-2" /> : <LuMoonStar className="mr-2" />}
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </nav>
  );
};

export default Navbar;
