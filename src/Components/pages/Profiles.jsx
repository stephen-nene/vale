import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  FiEdit2,
  FiSave,
  FiX,
  FiUser,
  FiMail,
  FiPhone,
  FiToggleRight,
} from "react-icons/fi";
import { IoMdLogOut } from "react-icons/io";

import { useNavigate } from "react-router-dom";
import { serverLogout } from "../requests/auth";

export default function Profiles() {
  const userData = useSelector((state) => state.user.userData);
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [editedData, setEditedData] = useState({
    username: userData.username,
    first_name: userData.first_name,
    last_name: userData.last_name,
    email: userData.email,
    phone_number: userData.phone_number || "",
  });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedData({
      username: userData.username,
      first_name: userData.first_name,
      last_name: userData.last_name,
      email: userData.email,
      phone_number: userData.phone_number || "",
    });
  };

  const handleSave = () => {
    console.log("Updated user data:", {
      ...userData,
      ...editedData,
    });
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setEditedData({
      ...editedData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h- screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
        {/* Header */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Profile Details
            </h1>
            {!isEditing ? (
              <button
                onClick={handleEdit}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <FiEdit2 className="w-4 h-4" />
                <span>Edit Profile</span>
              </button>
            ) : (
              <div className="flex gap-2">
                <button
                  onClick={handleSave}
                  className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  <FiSave className="w-4 h-4" />
                  <span>Save</span>
                </button>
                <button
                  onClick={handleCancel}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <FiX className="w-4 h-4" />
                  <span>Cancel</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Profile Content */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            <div className="flex items-center justify-center mb-6">
              <div className="w-32 h-32 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
                {/* {!userData.profile_image ? ( */}
                  <img
                    src={
                      userData.profile_image ||
                      "https://randomuser.me/api/portraits/men/44.jpg"
                    }
                    alt="Profile"
                    className="w-full h-full rounded-full object-cover"
                  />
                {/*  ) : (
                 <FiUser className="w-16 h-16 text-gray-400 dark:text-gray-500" />
                )} */}
              </div>
            </div>

            {/* Non-editable Fields */}
            <div className="space-y-4">
              <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-1">
                  <FiToggleRight className="w-4 h-4" />
                  <span>Status</span>
                </div>
                <div className="text-gray-900 dark:text-white font-medium">
                  {userData.status}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Editable Fields */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  value={isEditing ? editedData.username : userData.username}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-full p-2 border rounded-lg bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white disabled:bg-gray-100 dark:disabled:bg-gray-800"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  name="first_name"
                  value={
                    isEditing ? editedData.first_name : userData.first_name
                  }
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-full p-2 border rounded-lg bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white disabled:bg-gray-100 dark:disabled:bg-gray-800"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  name="last_name"
                  value={isEditing ? editedData.last_name : userData.last_name}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-full p-2 border rounded-lg bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white disabled:bg-gray-100 dark:disabled:bg-gray-800"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  <div className="flex items-center gap-2">
                    <FiMail className="w-4 h-4" />
                    <span>Email</span>
                  </div>
                </label>
                <input
                  type="email"
                  name="email"
                  value={isEditing ? editedData.email : userData.email}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-full p-2 border rounded-lg bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white disabled:bg-gray-100 dark:disabled:bg-gray-800"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  <div className="flex items-center gap-2">
                    <FiPhone className="w-4 h-4" />
                    <span>Phone Number</span>
                  </div>
                </label>
                <input
                  type="tel"
                  name="phone_number"
                  value={
                    isEditing
                      ? editedData.phone_number
                      : userData.phone_number || ""
                  }
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-full p-2 border rounded-lg bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white disabled:bg-gray-100 dark:disabled:bg-gray-800"
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" flex  justify-center ">
          <button
            onClick={() => serverLogout(dispatch, navigate)}
            className="mb-5 flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            <IoMdLogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
}
