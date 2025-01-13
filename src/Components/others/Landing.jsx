import React, { useState } from "react";
import {
  FaHandHoldingHeart,
  FaUsers,
  FaMobileAlt,
  FaChartLine,
  FaBell,
  FaLock,
  FaHandshake,
  FaRegCalendarAlt,
  FaRegCreditCard,
  FaRegLightbulb,
} from "react-icons/fa";
import { MdDashboard, MdSupportAgent, MdAnalytics } from "react-icons/md";
import { BsArrowRightCircle } from "react-icons/bs";

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState(null);

  const features = [
    {
      icon: <FaHandHoldingHeart className="w-8 h-8" />,
      title: "Community Support",
      description:
        "Connect and contribute to meaningful causes in your community with ease and transparency.",
    },
    {
      icon: <FaMobileAlt className="w-8 h-8" />,
      title: "Mobile Money Integration",
      description:
        "Secure and instant payments through various mobile money platforms.",
    },
    {
      icon: <MdDashboard className="w-8 h-8" />,
      title: "Smart Dashboard",
      description:
        "Real-time tracking of contributions and event progress with intuitive visualizations.",
    },
    {
      icon: <FaBell className="w-8 h-8" />,
      title: "Smart Notifications",
      description:
        "Stay updated with personalized alerts for events and contribution milestones.",
    },
  ];

  const additionalFeatures = [
    {
      icon: <FaRegCalendarAlt className="w-6 h-6" />,
      title: "Event Planning",
      description:
        "Comprehensive event management with customizable templates and scheduling.",
    },
    {
      icon: <MdAnalytics className="w-6 h-6" />,
      title: "Advanced Analytics",
      description:
        "Detailed insights and reporting on contribution patterns and community engagement.",
    },
    {
      icon: <FaRegCreditCard className="w-6 h-6" />,
      title: "Flexible Payments",
      description:
        "Multiple payment options including recurring contributions and installment plans.",
    },
    {
      icon: <MdSupportAgent className="w-6 h-6" />,
      title: "24/7 Support",
      description: "Round-the-clock assistance for all platform users.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <FaHandshake className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">
                CommunityCare
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-gray-600 hover:text-blue-600 transition"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-gray-600 hover:text-blue-600 transition"
              >
                How it Works
              </a>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>










    </div>
  );
};

export default LandingPage;
