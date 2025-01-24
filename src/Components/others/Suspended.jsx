import React from 'react';
import { Link } from "react-router-dom";
import { 
  RiLockFill, 
  RiErrorWarningFill 
} from "react-icons/ri";
import { FaChevronRight } from "react-icons/fa";

export default function SuspendedAccount() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors">
      <div className="text-center max-w-md px-4">
        <div className="flex items-center justify-center text-red-500 dark:text-red-400 mb-6 animate-pulse">
          <RiLockFill className="text-9xl opacity-70" />
        </div>

        <div className="space-y-4">
          <h1 className="text-5xl font-bold mb-2 dark:text-gray-200">
            Account Suspended
          </h1>

          <div className="flex items-center justify-center space-x-2 text-xl dark:text-gray-400">
            <RiErrorWarningFill className="text-yellow-500" />
            <p>Temporary Access Restriction</p>
          </div>

          {/* <p className="text-lg mb-8 dark:text-gray-300">
            Your account has been temporarily suspended. Please contact support
            for more information.
          </p> */}
          <p className="text-lg mb-8 dark:text-gray-300">
            Unfortunately, your account has been suspended due to a violation of
            our terms of service. If you believe this is a mistake, please
            contact support for assistance.
          </p>

          <a
            href="mailto:stevekid705@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 mx-auto w-64 px-6 py-3 
  bg-blue-600 text-white rounded-lg text-lg font-semibold 
  hover:bg-blue-700 dark:hover:bg-blue-600 
  transition-colors duration-300 
  hover:scale-105 transform group"
          >
            <span>Contact Support</span>
            <FaChevronRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>
      </div>
    </div>
  );
}
