import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../Components/others/Navbar.jsx";
import Landing from "../Components/pages/Landing.jsx";
import Error404 from "../Components/others/Error404.jsx";
import Footer from "../Components/others/Footer.jsx";
import Contact from "../Components/pages/Contact.jsx";
import About from "../Components/pages/About.jsx";
import TryAI from "../Components/pages/TryAI.jsx";
import "../assets/css/App.css";

// Lazy loaded components
const Login = lazy(() => import("../Components/Auth/Login.jsx"));
const Signup = lazy(() => import("../Components/Auth/Signup.jsx"));
const Reset = lazy(() => import("../Components/Auth/Reset.jsx"));
const Forgot = lazy(() => import("../Components/Auth/Forgot.jsx"));

// Fallback Loader
const Loader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div role="status" className="max-w-sm animate-pulse text-center">
      <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
      <span className="sr-only">Loading...</span>
    </div>
  </div>
);

export default function App() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="*" element={<Error404 />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/try-ai" element={<TryAI />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/reset" element={<Reset />} />x
            <Route path="/forgot" element={<Forgot />} />
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </>
  );
}
