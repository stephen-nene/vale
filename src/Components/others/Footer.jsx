import React from "react";
import { FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-rose-600 to-pink-700 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <FaHeart className="text-2xl text-rose-500" />
              <span className="text-xl font-bold">Valentino</span>
            </div>
            <p className="">Where Meaningful Connections Begin</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">For You</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className=" hover:text-rose-400 transition-colors"
                >
                  Singles
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" hover:text-rose-400 transition-colors"
                >
                  Couples
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" hover:text-rose-400 transition-colors"
                >
                  Success Stories
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" hover:text-rose-400 transition-colors"
                >
                  Dating Tips
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className=" hover:text-rose-400 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" hover:text-rose-400 transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" hover:text-rose-400 transition-colors"
                >
                  Safety Tips
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" hover:text-rose-400 transition-colors"
                >
                  Community Guidelines
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className=" hover:text-rose-400 transition-colors"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" hover:text-rose-400 transition-colors"
                >
                  Safety Tips
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" hover:text-rose-400 transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" hover:text-rose-400 transition-colors"
                >
                  Report an Issue
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center ">
          <p>
            &copy; {new Date().getFullYear()} Valentino. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
