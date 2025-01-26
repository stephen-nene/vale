import React, { useState } from "react";
import {
  FaHeart,
  FaUserFriends,
  FaLock,
  FaBell,
  FaRegCalendarAlt,
  FaRegSmile,
} from "react-icons/fa";
import { MdEmail, MdDashboard, MdFavorite, MdChat } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";
import {Link} from 'react-router-dom'

const LandingPage = () => {
  const [activeFeature, setActiveFeature] = useState(null);

  const features = [
    {
      icon: <FaHeart className="w-8 h-8" />,
      title: "Smart Matchmaking",
      description:
        "Our intelligent system helps find compatible matches based on your preferences, interests, and values.",
    },
    {
      icon: <FaUserFriends className="w-8 h-8" />,
      title: "For Singles & Couples",
      description:
        "Whether you're looking for love or wanting to strengthen your relationship, we've got you covered.",
    },
    {
      icon: <MdChat className="w-8 h-8" />,
      title: "Meaningful Connections",
      description:
        "Create detailed profiles and submit personalized pitches to potential matches.",
    },
    {
      icon: <FaLock className="w-8 h-8" />,
      title: "Private & Secure",
      description:
        "Your privacy matters. All personal information and conversations are fully encrypted.",
    },
  ];

  const benefitsForSingles = [
    {
      icon: <MdDashboard className="w-6 h-6" />,
      title: "Public Matchmaking",
      description:
        "Browse and respond to matching requests that align with your preferences.",
    },
    {
      icon: <FaBell className="w-6 h-6" />,
      title: "Real-time Notifications",
      description:
        "Get instant alerts for new matches and responses to your requests.",
    },
    {
      icon: <FaRegCalendarAlt className="w-6 h-6" />,
      title: "Valentine's Special",
      description:
        "Special matchmaking events and features for holiday dating.",
    },
  ];

  const benefitsForCouples = [
    {
      icon: <MdFavorite className="w-6 h-6" />,
      title: "Partner Requests",
      description:
        "Send private gesture requests to your partner for special occasions.",
    },
    {
      icon: <MdEmail className="w-6 h-6" />,
      title: "Multi-Platform",
      description:
        "Receive requests via email, WhatsApp, or in-app notifications.",
    },
    {
      icon: <FaRegSmile className="w-6 h-6" />,
      title: "Relationship Growth",
      description: "Tools and features to help strengthen your bond.",
    },
  ];

  return (
    <div className="min-h-screen bg-rose-50  dark:bg-slate-900 ">
      {/* <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white dark:from-gray-950 dark:to-gray-900"> */}
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-extrabold  sm:text-5xl md:text-6xl">
              <span className="block">Where Love Stories</span>
              <span className="block text-rose-600">Begin & Flourish</span>
            </h1>
            <p className="mt-5 text-lg text-gray-600 dark:text-gray-50 sm:max-w-xl lg:mx-0">
              Whether you're seeking your perfect match or looking to strengthen
              your relationship, our platform provides the tools for meaningful
              connections.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Link
                className="px-8 py-3 rounded-lg bg-rose-600 text-white hover:bg-rose-700 transition-colors"
                to="/login"
              >
                <button>Start Your Journey</button>
              </Link>
              <button className="px-8 py-3 rounded-lg border-2 border-rose-600 text-rose-600 hover:bg-rose-50 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            Features You'll Love
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                onMouseEnter={() => setActiveFeature(index)}
                onMouseLeave={() => setActiveFeature(null)}
              >
                <div className="text-rose-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-rose-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Singles Section */}
      <section className="py-20 bg-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">For Singles</h2>
            <p className="mt-4 text-lg text-gray-600">
              Find your perfect match through our intelligent matchmaking system
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefitsForSingles.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="text-rose-600 mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Couples Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">For Couples</h2>
            <p className="mt-4 text-lg text-gray-600">
              Keep the romance alive with thoughtful gestures and private
              moments
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefitsForCouples.map((benefit, index) => (
              <div
                key={index}
                className="bg-rose-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="text-rose-600 mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-rose-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Find Your Perfect Match?
            </h2>
            <p className="text-xl text-rose-100 mb-8">
              Join thousands of happy couples who found love on our platform
            </p>
            <button className="bg-white text-rose-600 px-8 py-3 rounded-full font-semibold hover:bg-rose-50 transition-colors duration-300 flex items-center mx-auto">
              Get Started Now
              <BsArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;

        {
          /* Call to Action */
        }
        {
          /* <div className="mt-16 text-center">
          <button className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
            Start Your Love Journey
            <FaHeart className="inline-block ml-2 -mb-1" />
          </button>
        </div> */
        }

