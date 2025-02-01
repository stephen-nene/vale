import React, { useState, useEffect } from "react";
import { Avatar, Tag, Button, message } from "antd";
import {
  FaUser,
  FaCalendar,
  FaClock,
  FaFilter,
  FaInfoCircle,
  FaHeart,
  FaArrowLeft,
  FaCommentDots,
} from "react-icons/fa";
import { Link, useLocation, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { handleRequestToConnect,getChatById } from "../../requests/requests";

const ViewSpeedDate = () => {
  const location = useLocation();
  const { id } = useParams();
  const [request, setRequest] = useState();
  const user = useSelector((state) => state.user.userData);

  useEffect(() => {
    // setRequest(location.state.request );
  }, [location]); 
  
  useEffect(() => {

    const getChatByIdHere = async () => {
      if (!request) {
        await getChatById(id,setRequest);
      }
    }
    getChatByIdHere();
  },[])

  const isParticipant = request?.participant?.some(
    (participant) => participant.email === user.email
  );
  const isCreator = request?.creator?.email === user.email;

  if (!request) {
    return (
      <div className="container mx-auto p-6 text-center">
        <h1 className="text-2xl font-bold text-red-500 dark:text-red-300">
          No Speed Date Found
        </h1>
      </div>
    );
  }

  return (
    <div className=" p-6 rounded-xl sha dow-2xl">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-4xl font-extrabold text-rose-600 dark:text-rose-400 mb-4">
          {request.title}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          {request.description}
        </p>
      </div>

      {/* Creator Profile */}
      <div className="flex items-center bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-6">
        <Avatar
          size={120}
          src={
            request.creator?.profilePic ||
            `https://randomuser.me/api/portraits/men/${Math.floor(
              Math.random() * 100
            )}.jpg`
          }
          icon={<FaUser className="text-gray-500 dark:text-gray-300" />}
          className="mr-6 bg-gray-200 dark:bg-gray-700"
        />
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center gap-4">

          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 m b-3">
            Creator: 
          </h2>
          <h2 className="text-xl font-bold text-rose-700 dark:text-rose-500">
            {request.creator?.first_name} {request.creator?.last_name}
          </h2>
          </div>
          <div className="mt-3 space-y-2 text-gray-700 dark:text-gray-300">
            <p>
              <strong className="text-gray-900 dark:text-white">
                Username:
              </strong>{" "}
              {request.creator?.username}
            </p>
            <p>
              <strong className="text-gray-900 dark:text-white">Email:</strong>{" "}
              {request.creator?.email}
            </p>
          </div>
        </div>
      </div>

      {/* Speed Date Details */}
      <div className="grid md:grid-cols-1 gap-6 mb-6">
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-rose-600 dark:text-rose-400 mb-4">
            Event Details
          </h3>
          <div className="space-y-3">
            <DetailItem
              icon={
                <FaCalendar className="text-green-500 dark:text-green-400" />
              }
              label="Availability"
              value={request.availability}
            />
            <DetailItem
              icon={<FaFilter className="text-blue-500 dark:text-blue-400" />}
              label="Date Type"
              value={<Tag color="blue">{request.date_type}</Tag>}
            />
            <DetailItem
              icon={
                <FaClock className="text-purple-500 dark:text-purple-400" />
              }
              label="Status"
              value={
                <Tag color={request.status === "pending" ? "orange" : "green"}>
                  {request.status}
                </Tag>
              }
            />
            <DetailItem
              icon={
                <FaInfoCircle className="text-pink-500 dark:text-pink-400" />
              }
              label="Max Participants"
              value={request.max_questions}
            />
            <DetailItem
              icon={
                <FaInfoCircle className="text-pink-500 dark:text-pink-400" />
              }
              label="Max Questions"
              value={request.max_participants}
            />
            <DetailItem
              icon={<FaClock className="text-gray-500 dark:text-gray-400" />}
              label="Duration"
              value={`${request.duration} mins`}
            />
          </div>
        </div>
      </div>
      {isCreator && (
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg mb-5">
          <h3 className="text-xl font-semibold text-rose-600 dark:text-rose-400 mb-4">
            Participants ({request.participant.length})
          </h3>
          <div className="space-y-3">
            {request.participant.map((participant) => (
              <div
                key={participant.username}
                className="flex items-center bg-white dark:bg-gray-700 p-3 rounded-lg shadow-sm"
              >
                <div>
                  <p className="font-semibold text-gray-800 dark:text-gray-200">
                    {participant.first_name || "N/A"}{" "}
                    {participant.last_name || "N/A"}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {participant.username}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex justify-between space-x-4">
        <button
          onClick={() => window.history.back()}
          className="flex items-center justify-center bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-100 py-2 px-4 rounded-md transition-colors"
        >
          <FaArrowLeft className="mr-2" />
          Go Back
        </button>

        {(isParticipant || isCreator) && (
          <Link
            state={{ request }}
            to={`/speeddating/${request.id}`}
            className="text-white"
          >
            <button className="flex items-center justify-center bg-green-500 dark:bg-green-700 hover:bg-green-600 dark:hover:bg-green-800 text-white py-2 px-4 rounded-md transition-colors">
              <FaCommentDots className="mr-2" />
              Chat Room
            </button>
          </Link>
        )}

        {!isParticipant && !isCreator && (
          <button
            onClick={() => handleRequestToConnect(request.id, setRequest)}
            className="flex items-center justify-center bg-blue-500 dark:bg-blue-700 hover:bg-blue-600 dark:hover:bg-blue-800 text-white py-2 px-4 rounded-md transition-colors"
          >
            <FaHeart className="mr-2" />
            Request to Connect
          </button>
        )}
      </div>
    </div>
  );
};

// Utility Component for Detail Items
const DetailItem = ({ icon, label, value }) => (
  <div className="flex items-center space-x-3">
    <div className="w-6">{icon}</div>
    <div className="flex-1">
      <span className="font-medium text-gray-700 dark:text-gray-300">
        {label}:
      </span>
      <span className="ml-2 text-gray-800 dark:text-gray-200">{value}</span>
    </div>
  </div>
);

export default ViewSpeedDate;
