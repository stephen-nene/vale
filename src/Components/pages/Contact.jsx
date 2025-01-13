import { useState } from "react";  
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaWhatsapp,
} from "react-icons/fa";
// import { MdMissionControl, MdTimeline } from "react-icons/md";
 export default function Contact  () {
  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("success");
    // Add form submission logic here
  };

  const contactInfo = [
    {
      icon: <FaPhone />,
      title: "Phone",
      details: "+254 742 780 970",
      action: "Call us",
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      details: "stevekid705@gmail.com",
      action: "Email us",
    },
    {
      icon: <FaWhatsapp />,
      title: "WhatsApp",
      details: "+254 742 780 970",
      action: "Message us",
    },
    {
      icon: <FaClock />,
      title: "Working Hours",
      details: "Mon - Fri: 8AM - 6PM",
      action: "Visit us",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="bg-gradient-to-r from-rose-400 to-red-400 text-white py-16">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            We're here to help! Reach out to us with any questions or concerns.
          </p>
        </div>
      </header>

      <main className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="text-rose-600 mb-4 text-2xl">
                    {info.icon}
                  </div>
                  <h3 className="font-bold mb-2">{info.title}</h3>
                  <p className="text-gray-600 mb-4">{info.details}</p>
                  <button className="text-rose-600 hover:text-rose-700 font-medium">
                    {info.action} →
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-rose-50 p-6 rounded-lg">
              <h3 className="font-bold mb-4">Office Location</h3>
              <div className="flex items-start space-x-4">
                <FaMapMarkerAlt className="text-rose-600 text-xl flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-600">
                    123 Digital Avenue
                    <br />
                    Tech District
                    <br />
                    Innovation City, ST 12345
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 shadow-lg rounded-lg"
            >
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full border rounded-lg p-3 focus:border-rose-600 focus:ring focus:ring-rose-200"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border rounded-lg p-3 focus:border-rose-600 focus:ring focus:ring-rose-200"
                  placeholder="Enter your email address"
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full border rounded-lg p-3 focus:border-rose-600 focus:ring focus:ring-rose-200"
                  placeholder="What is this about?"
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full border rounded-lg p-3 focus:border-rose-600 focus:ring focus:ring-rose-200"
                  placeholder="Type your message here..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-rose-600 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition"
              >
                Send Message
              </button>

              {formStatus === "success" && (
                <div className="mt-4 p-4 bg-rose-50 text-rose-700 rounded-lg">
                  Thank you for your message! We'll get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};
