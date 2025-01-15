import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  FaHeart,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaCalendar,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { MdMessage, MdCheck, MdClose } from "react-icons/md";
import { GiClothes } from "react-icons/gi";
import { Alert, message } from "antd";
import emailjs from "@emailjs/browser";

export default function ViewVale() {
  const { id } = useParams();
  const [response, setResponse] = useState({
    email: "",
    message: "",
    number: "",
    status: "accepted",
  });
  const [loading, setLoading] = useState(false);
  const [activeButton, setActiveButton] = useState(response.status);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Sample request data
  const request = {
    id: "val-123",
    status: "pending",
    createdAt: "2024-01-15T10:30:00Z",
    requestData: {
      senderName: "Steve Nene",
      senderPhone: "+254741780970",
      senderEmail: "steve@wangigemarket.com",
      senderMessage:
        "Would you be my Valentine? I'd love to take you somewhere special!",
      recipientName: "Jane Doe",
      recipientPhone: "+9876543210",
      recipientEmail: "jane@example.com",
      deliveryMethod: ["email", "whatsapp"],
      budget: "cap Ksh 500",
      dressCode: "Smart Casual",
      location: "Not yet Decided",
      meetingDate: "2024-02-14T19:00:00Z",
      theme: "Make our exes jealous",
      additionalInfo: "Utatoa ngapi before accepting",
    },
  };

  const handleButtonClick = (status) => {
    setActiveButton(status);
    setResponse((prevResponse) => ({ ...prevResponse, status }));
  };
  const userId = import.meta.env.VITE_EMAILJS_USER_ID;
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLICKEY;
  // console.log(templateId);

  const validateForm = () => {
    const phoneRegex = /^07\d{8}$/; // Regex for validating 10-digit numbers starting with '07'
    const trimmedMessage = response.message.trim();

    // Validate phone number
    if (!phoneRegex.test(response.number)) {
      message.error("Please enter a valid phone number (e.g. 0741780970)", 2);
      setError("Please enter a valid phone number in the format 0741780970.");
      return false;
    }

    // Validate message
    if (trimmedMessage.length < 10) {
      message.error("Please enter a response with at least 10 characters", 2);
      setError("Your Response must be at least 10 characters long.");
      return false;
    }

    setError("");
    return true;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);
    const loadingToast = message.loading("sending response...", 0);
    try {
      // Email.js integration
      const templateParams = {
        senderName: response.senderName || "Unknown",
        email: response.email,
        number: response.number,
        message: response.message,
        status: response.status,
      };
      const result = await emailjs.send(serviceId, templateId, templateParams, {
        publicKey: publicKey,
      });
      // console.log("Email sent:", result.text);
      message.success("Email sent successfully, Refreshing in 5....", 5);
      setTimeout(() => {
        navigate("/");
      }, 5000);
      setResponse({
        email: "",
        message: "",
        number: "",
        status: "accepted",
      });

      // Here you would make your API call
    } catch (error) {
      console.error("Error sending response:", error);
    } finally {
      loadingToast();
      setLoading(false);
    }
  };

  return (
    <div className="p-6" style={{ maxWidth: "800px", margin: "0 auto" }}>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-4">
            <FaHeart className="text-red-500 text-2xl" />
            <h2 className="text-2xl font-semibold">Valentine's Request</h2>
          </div>

          <div className="p-4 bg-pink-50 rounded-lg mb-6">
            <h3 className="text-xl font-semibold flex items-center gap-2 mb-3">
              <FaUser /> From {request.requestData.senderName}
            </h3>
            <div className="text-lg font-medium mb-4 italic">
              "{request.requestData.senderMessage}"
            </div>
            <div className="">Theme: {request.requestData.theme}</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-semibold border-b pb-2">Event Details</h3>

              <div className="flex items-center gap-2">
                <FaCalendar className="text-gray-600" />
                <span>
                  Date:{" "}
                  {new Date(request.requestData.meetingDate).toLocaleString()}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-gray-600" />
                <span>Location: {request.requestData.location}</span>
              </div>

              <div className="flex items-center gap-2">
                <GiClothes className="text-gray-600" />
                <span>Dress Code: {request.requestData.dressCode}</span>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold border-b pb-2">
                Contact Information
              </h3>

              <div className="flex items-center gap-2">
                <a
                  href={`https://wa.me/${request.requestData.senderPhone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <FaPhone className="text-gray-600" />
                  <span>{request.requestData.senderPhone}</span>
                </a>
              </div>

              <div className="flex items-center gap-2">
                <a
                  className="flex items-center gap-2"
                  rel="noopener noreferrer"
                  target="_blank"
                  href="mailto:steve@wangigemarket.com"
                >
                  <FaEnvelope className="text-gray-600" />
                  <span>{request.requestData.senderEmail}</span>
                </a>
              </div>

              {request.requestData.additionalInfo && (
                <div className="flex items-center gap-2">
                  <MdMessage className="text-gray-600" />
                  <span>{request.requestData.additionalInfo}</span>
                </div>
              )}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <h3 className="font-semibold">Your Whatsapp Number</h3>
            <div className="flex gap-2">
              <input
                placeholder="0741780970"
                className="w-full p-3 border rounded-lg focus:outline-none focus:border-red-500"
                type="number"
                value={response.number}
                required
                onChange={(e) =>
                  setResponse((prevResponse) => ({
                    ...prevResponse,
                    number: e.target.value,
                  }))
                }
              />
            </div>
            <h3 className="font-semibold">Your Email</h3>
            <div className="flex gap-2">
              <input
                placeholder="enter your email "
                className="w-full p-3 border rounded-lg focus:outline-none focus:border-red-500"
                type="email"
                value={response.email}
                required
                onChange={(e) =>
                  setResponse((prevResponse) => ({
                    ...prevResponse,
                    email: e.target.value,
                  }))
                }
              />
            </div>

            <h3 className="font-semibold">Your Response</h3>
            <textarea
              value={response.message}
              onChange={(e) =>
                setResponse((prevResponse) => ({
                  ...prevResponse,
                  message: e.target.value,
                }))
              }
              required
              placeholder="Write a message with your response..."
              className="w-full p-3 border rounded-lg focus:outline-none focus:border-red-500"
              rows="4"
            />
            {error && <Alert message={error} type="error" showIcon closable />}

            <div className="flex gap-4">
              <button
                disabled={loading}
                onClick={() => handleButtonClick("accepted")}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg transition-colors ${
                  activeButton === "accepted"
                    ? "bg-green-600 text-white"
                    : "bg-green-200 hover:bg-green-600"
                }`}
              >
                <MdCheck /> Accept Request
              </button>

              <button
                disabled={loading}
                onClick={() => handleButtonClick("declined")}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg transition-colors ${
                  activeButton === "declined"
                    ? "bg-red-600 text-white"
                    : "bg-red-200 hover:bg-red-600"
                }`}
              >
                <MdClose /> Decline Request
              </button>
            </div>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 px-4 py-3 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
