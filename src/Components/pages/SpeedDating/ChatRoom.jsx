import React, { useState } from "react";
import {
  FaPaperPlane,
  FaUsers,
  FaCommentDots,
  FaSmile,
  FaQuestionCircle,
} from "react-icons/fa";
import dummyData from "../../../assets/data/dummchats.json";
import { useLocation, useParams } from "react-router-dom";

import { getSpeedDateChats } from "../../requests/requests";
const SpeedDatingChat = () => {

  const location = useLocation();
  const { request } = location.state || {};
  const {id} = useParams()
  const [activeChat, setActiveChat] = useState(null);
  const [newMessage, setNewMessage] = useState("");
  const [hoveredUser, setHoveredUser] = useState(null);
  const [messages, setMessages] = useState([]);
  
  
  const handleAvatarClick = async (user) => {
    console.log("speeddate id", id);
    console.log("participant id", user.id);
     await getSpeedDateChats(id, user.id,setMessages);
    setActiveChat(user.id === activeChat ? null : user.id);
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // setMessages([...messages, { sender: "currentUser", text: newMessage }]);
      setNewMessage("");
    }
  };

  const activeParticipant = request?.participant?.find(
    (p) => p.id === activeChat
  );

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      {/* Header */}
      <header className="p-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <div className="flex items-center space-x-3">
            <FaUsers className="text-purple-600 dark:text-purple-400 text-2xl" />
            <h2 className="text-xl font-bold text-gray-800 dark:text-white">
              Speed Dating Connections
            </h2>
          </div>

          {/* Participant Avatars with Hover Effects */}
          <div className="flex items-center gap-4">
            {request?.participant?.map((user, index) => (
              <div
                key={user.id}
                className="relative group"
                onMouseEnter={() => setHoveredUser(user.id)}
                onMouseLeave={() => setHoveredUser(null)}
              >
                <img
                  src={
                    user.avatar ||
                    `https://randomuser.me/api/portraits/men/${index}.jpg`
                  }
                  alt={user.username}
                  onClick={() => handleAvatarClick(user)}
                  className={`w-12 h-12 rounded-full cursor-pointer transition-all duration-300 
                    ${
                      activeChat === user.id
                        ? "ring-4 ring-blue-500 ring-opacity-50"
                        : "hover:scale-110 hover:ring-2 hover:ring-purple-500"
                    }
                  `}
                />
                {hoveredUser === user.id && (
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                    {user.username}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Chat Container */}
        {console.log(messages)}
      <main className="flex-1 overflow-y-auto p-6 space-y-6 max-w-4xl mx-auto w-full">
        {activeParticipant ? (
          <div className="space-y-6">
            {messages.map((msg, index) => (
              <div
                key={index}
                className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow"
              >
                {/* Question */}
                <div className="flex items-center bg-purple-100 dark:bg-purple-900/50 p-3 rounded-lg mb-4">
                  <FaQuestionCircle className="mr-3 text-purple-600 dark:text-purple-400" />
                  <p className="text-purple-800 dark:text-purple-200 italic">
                    {msg.question_text} {/* Display the question */}
                  </p>
                </div>

                {/* Conversation Answers */}
                <div className="space-y-4">
                  {/* Participant's Answer */}
                  <div className="flex items-start space-x-3">
                    <img
                      src={activeParticipant.avatar}
                      alt={activeParticipant.name}
                      className="w-8 h-8 rounded-full"
                    />
                    <div className="bg-gray-200 dark:bg-gray-700 p-3 rounded-lg flex-grow">
                      <p className="text-gray-800 dark:text-gray-200">
                        {msg.participant_answer}{" "}
                        {/* Display participant's answer */}
                      </p>
                    </div>
                  </div>

                  {/* Current User's Answer */}
                  <div className="flex items-start justify-end space-x-3">
                    <div className="bg-blue-500 text-white p-3 rounded-lg">
                      <p>{msg.creator_answer}</p>{" "}
                      {/* Display current user's (creator's) answer */}
                    </div>
                    <img
                      src={dummyData.currentUser.avatar}
                      alt={dummyData.currentUser.name}
                      className="w-8 h-8 rounded-full"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-gray-500 dark:text-gray-400 space-y-4">
            <FaCommentDots className="text-6xl text-purple-400" />
            <p className="text-xl">Select a participant to start chatting</p>
          </div>
        )}
      </main>

      {/* Input Area */}
      {activeParticipant && (
        <footer className="p-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-t dark:border-gray-700/50">
          <div className="max-w-4xl mx-auto flex items-center space-x-3">
            <FaSmile className="text-2xl text-gray-500 dark:text-gray-400 cursor-pointer hover:text-blue-500" />
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder={`Message to ${activeParticipant.name}...`}
              className="flex-1 p-3 rounded-full bg-gray-100 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
            <button
              onClick={handleSendMessage}
              className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition-colors"
              disabled={!newMessage}
            >
              <FaPaperPlane />
            </button>
          </div>
        </footer>
      )}
    </div>
  );
};

export default SpeedDatingChat;
