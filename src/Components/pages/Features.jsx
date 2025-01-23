import React from "react";
import { NavLink, Routes, Route, useNavigate } from "react-router-dom";
import { message } from "antd";
import {
  FaHeart,
  FaEnvelopeOpenText,
  FaGift,
  FaClock,
  FaVideo,
  FaComments,
  FaRocket,
} from "react-icons/fa";
import {
  MdOutlineConnectWithoutContact,
  MdOutlinePsychology,
  MdLock,
} from "react-icons/md";
import { GiLovers } from "react-icons/gi";

const VirtualGifts = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-rose-700 mb-6">Virtual Gifts</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Gift Categories</h2>
          <ul className="space-y-4">
            <li>🌹 Digital Roses</li>
            <li>🍫 Virtual Chocolates</li>
            <li>💌 Personalized E-Cards</li>
            <li>🎵 Musical Dedications</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Gift Features</h2>
          <ul className="space-y-4">
            <li>🎨 Customizable Designs</li>
            <li>📸 Photo Integration</li>
            <li>🔔 Instant Delivery</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default function Features() {
  const navigate = useNavigate();

  const features = [
    {
      icon: <FaEnvelopeOpenText className="w-8 h-8" />,
      title: "Love Requests",
      description:
        "Send personalized love requests to potential matches and explore incoming connections.",
      color: "text-pink-500",
      route: "/requests",
    },
    {
      icon: <FaClock className="w-8 h-8" />,
      title: "Speed Dating",
      description: "5-minute video dates with automatic rotation system",
      color: "text-purple-500",
      handler: () => message.warning("Coming Soon!"),
    },
    {
      icon: <MdOutlinePsychology className="w-8 h-8" />,
      title: "AI Matchmaking",
      description:
        "Smart algorithm finds compatible partners using personality traits and preferences",
      color: "text-pink-500",
      handler: () => message.info("Coming Soon!"),
    },
    {
      icon: <FaGift className="w-8 h-8" />,
      title: "Virtual Gifts",
      description:
        "Send digital roses, chocolates & personalized Valentine's gifts",
      color: "text-red-500",
      route: "/valereq",
    },
    {
      icon: <GiLovers className="w-8 h-8" />,
      title: "Couple's Connections",
      description:
        "Join a portal designed for couples, where you can share moments, plan events, and build memories.",
      color: "text-rose-600",
      route: "/couples",
    },
    {
      icon: <FaVideo className="w-8 h-8" />,
      title: "Video Dating",
      description: "HD video calls with virtual date backgrounds & icebreakers",
      color: "text-blue-500",
      handler: () => message.info("Coming Soon!"),
    },
    {
      icon: <FaComments className="w-8 h-8" />,
      title: "Flirt Chat",
      description: "Anonymous chat with AI-powered conversation starters",
      color: "text-teal-500",
      handler: () => message.info("Coming Soon!"),
    },
    {
      icon: <MdLock className="w-8 h-8" />,
      title: "Private Matching",
      description: "Incognito mode for discreet connections",
      color: "text-gray-600",
      handler: () => message.info("Coming Soon!"),
    },
    {
      icon: <FaRocket className="w-8 h-8" />,
      title: "Instant Matching",
      description: "Real-time notifications for mutual interests",
      color: "text-orange-500",
      handler: () => message.info("Coming Soon!"),
    },
  ];

  const handleFeatureClick = (feature) => {
    if (feature.route) {
      navigate(feature.route);
    } else if (feature.handler) {
      feature.handler();
    }
  };

  return (
    <>
      <div className="py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-rose-700 mb-16">
            Find Your Perfect Love Feature
            <FaHeart className="inline-block ml-3 text-rose-500 animate-pulse" />
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                onClick={() => handleFeatureClick(feature)}
                className="relative group bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              >
                <div className={`mb-6 ${feature.color}`}>
                  {React.cloneElement(feature.icon, {
                    className: "w-12 h-12 transition-colors",
                  })}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
                <div className="absolute inset-0 border-2 border-- group-hover:border-rose-500 rounded-2xl transition-all duration-300 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Routes for Features */}
      {/* <Routes>
        <Route path="/matchmaking" element={<AIMatchmaking />} />
        <Route path="/gifts" element={<VirtualGifts />} />
        <Route path="/couples-portal" element={<CouplesPortal />} />
      </Routes> */}
    </>
  );
}
