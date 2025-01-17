import React, { useState } from "react";
import { Button, message, Steps } from "antd";
import {
  SmileOutlined,
  SolutionOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  FaHeart,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";
import { MdMessage, MdNavigateNext, MdNavigateBefore } from "react-icons/md";

const ValeReqForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    senderName: "",
    senderPhone: "",
    senderEmail: "",
    senderMessage: "",
    recipientName: "",
    recipientPhone: "",
    recipientEmail: "",
    deliveryMethod: [],
    budget: "",
    dressCode: "",
    location: "",
    meetingDate: "",
    theme: "romantic",
    additionalInfo: "",
  });
// create for me an object in js with data that matches this model

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDeliveryMethod = (method) => {
    setFormData((prev) => ({
      ...prev,
      deliveryMethod: prev.deliveryMethod.includes(method)
        ? prev.deliveryMethod.filter((m) => m !== method)
        : [...prev.deliveryMethod, method],
    }));
  };

  const validateAdditionalStep = () => {
    const { budget, meetingDate, location, dressCode, additionalInfo } =
      formData;
    return (
      budget.trim() !== "" &&
      meetingDate.trim() !== "" &&
      location.trim() !== "" &&
      dressCode.trim() !== "" &&
      additionalInfo.trim() !== ""
    );
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === 3 && !validateAdditionalStep()) {
      message.error("Please complete all required fields in this section.");
      return;
    }
    console.log("Form submitted:", formData);
  };

  const validateSenderStep = () => {
    const { senderName, senderPhone, senderEmail } = formData;
    return (
      senderName.trim() !== "" &&
      senderPhone.trim() !== "" &&
      senderEmail.trim() !== ""
    );
  };
  const validateReceiverStep = () => {
    const { recipientName, recipientPhone, recipientEmail } = formData;
    return (
      recipientName.trim() !== "" &&
      recipientPhone.trim() !== "" &&
      recipientEmail.trim() !== ""
    );
  };
  const nextStep = () => {
    if (step === 1 && !validateSenderStep()) {
      message.error(
        "Please complete all required fields in the Sender section."
      );
      return;
    }
    if (step === 2 && !validateReceiverStep()) {
      message.error(
        "Please complete all required fields in the Recipient section."
      );
      return;
    }

    setStep((prev) => prev + 1);
  };
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <>
      <header className="bg-gradient-to-r from-rose-400 to-red-400 text-white py-16">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-5xl font-bold mb-4">Request Form</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Fill out the form below to submit your request.
          </p>
        </div>
      </header>
      <div className="p-6">
        <div
          className="bg-white p-6 rounded-lg shadow-md"
          style={{ maxWidth: "600px", margin: "0 auto" }}
        >
          <Steps current={step - 1} className="mb-5">
            <Steps.Step
              title="Sender"
              icon={<UserOutlined />}
              status={step > 1 ? "finish" : "process"}
            />
            <Steps.Step
              title="Recipient"
              icon={<SolutionOutlined />}
              status={step > 2 ? "finish" : step === 2 ? "process" : "wait"}
            />
            <Steps.Step
              title="More Info"
              icon={<SmileOutlined />}
              status={step === 3 ? "process" : "wait"}
            />
          </Steps>

          {/* <form > */}
          {step === 1 && (
            <SenderStep
              formData={formData}
              handleInputChange={handleInputChange}
            />
          )}
          {step === 2 && (
            <RecipientStep
              formData={formData}
              handleInputChange={handleInputChange}
              handleDeliveryMethod={handleDeliveryMethod}
            />
          )}
          {step === 3 && (
            <MoreInfoStep
              formData={formData}
              handleInputChange={handleInputChange}
            />
          )}

          {/* </form> */}
          <div className="flex justify-between mt-6">
            {step > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="px-4 py-2 bg-gray-100 rounded hover:bg-gray-200"
              >
                Back
              </button>
            )}
            {step < 3 ? (
              <button
                onClick={nextStep}
                className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors ml-auto"
              >
                Next <MdNavigateNext />
              </button>
            ) : (
              <button
                onClick={(e) => handleSubmit(e)}
                className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors ml-auto"
              >
                Send Request <FaHeart />
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ValeReqForm;

// SenderStep.js
const SenderStep = ({ formData, handleInputChange }) => (
  <div className="space-y-4">
    <div>
      <label>Your Name</label>
      <input
        type="text"
        name="senderName"
        value={formData.senderName}
        onChange={handleInputChange}
        className="w-full p-2 border rounded"
        required
      />
    </div>
    <div>
      <label>Your Phone</label>
      <input
        type="tel"
        name="senderPhone"
        value={formData.senderPhone}
        onChange={handleInputChange}
        className="w-full p-2 border rounded"
        required
      />
    </div>
    <div>
      <label>Your Email</label>
      <input
        type="email"
        name="senderEmail"
        value={formData.senderEmail}
        onChange={handleInputChange}
        className="w-full p-2 border rounded"
        required
      />
    </div>
  </div>
);

// RecipientStep.js
const RecipientStep = ({
  formData,
  handleInputChange,
  handleDeliveryMethod,
}) => (
  <div className="space-y-4">
    <div>
      <label>Recipient's Name</label>
      <input
        type="text"
        name="recipientName"
        value={formData.recipientName}
        onChange={handleInputChange}
        className="w-full p-2 border rounded"
        required
      />
    </div>
    <div>
      <label>Recipient's Phone</label>
      <input
        type="tel"
        name="recipientPhone"
        value={formData.recipientPhone}
        onChange={handleInputChange}
        className="w-full p-2 border rounded"
        required
      />
    </div>
    <div>
      <label>Recipient's Email</label>
      <input
        type="email"
        name="recipientEmail"
        value={formData.recipientEmail}
        onChange={handleInputChange}
        className="w-full p-2 border rounded"
        required
      />
    </div>
    <div>
      <label>Delivery Method</label>
      <div className="flex gap-4">
        <button
          type="button"
          onClick={() => handleDeliveryMethod("email")}
          className={`p-2 rounded ${
            formData.deliveryMethod.includes("email")
              ? "bg-blue-500 text-white"
              : "bg-gray-100"
          }`}
        >
          Email
        </button>
        <button
          type="button"
          onClick={() => handleDeliveryMethod("whatsapp")}
          className={`p-2 rounded ${
            formData.deliveryMethod.includes("whatsapp")
              ? "bg-blue-500 text-white"
              : "bg-gray-100"
          }`}
        >
          WhatsApp
        </button>
      </div>
    </div>
    <div>
      <label>Theme</label>
      <select
        name="theme"
        value={formData.theme}
        onChange={handleInputChange}
        className="w-full p-2 border rounded"
      >
        <option value="romantic">Romantic</option>
        <option value="funny">Funny</option>
        <option value="friendship">Friendship</option>
      </select>
    </div>
  </div>
);

// MoreInfoStep.js
const MoreInfoStep = ({ formData, handleInputChange }) => (
  <div className="space-y-4">
    <div>
      <label className="block text-sm font-medium">Budget</label>
      <input
        type="number"
        name="budget"
        value={formData.budget}
        onChange={handleInputChange}
        className="w-full px-3 py-2 border rounded"
        placeholder="Proposed budget"
      />
    </div>
    <div>
      <label className="block text-sm font-medium">Dress Code</label>
      <input
        type="text"
        name="dressCode"
        value={formData.dressCode}
        onChange={handleInputChange}
        className="w-full px-3 py-2 border rounded"
        placeholder="Suggested dress code"
      />
    </div>
    <div>
      <label className="block text-sm font-medium">Meeting Date</label>
      <input
        type="date"
        name="meetingDate"
        value={formData.meetingDate}
        onChange={handleInputChange}
        className="w-full px-3 py-2 border rounded"
      />
    </div>
    <div>
      <label className="block text-sm font-medium">Location</label>
      <input
        type="text"
        name="location"
        value={formData.location}
        onChange={handleInputChange}
        className="w-full px-3 py-2 border rounded"
        placeholder="Meeting location"
      />
    </div>
    <div>
      <label>Your Message</label>
      <textarea
        name="senderMessage"
        value={formData.senderMessage}
        onChange={handleInputChange}
        className="w-full p-2 border rounded"
        rows="4"
      />
    </div>
    <div>
      <label>Additional Information</label>
      <textarea
        name="additionalInfo"
        value={formData.additionalInfo}
        onChange={handleInputChange}
        className="w-full p-2 border rounded"
        rows="4"
      />
    </div>
  </div>
);
