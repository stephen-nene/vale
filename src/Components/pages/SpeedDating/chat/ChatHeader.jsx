import React from "react";
import { FaUsers } from "react-icons/fa";

const ChatHeader = ({ participants, activeChat, onAvatarClick }) => {
  return (
    <header className="p-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <div className="flex items-center space-x-3">
          <FaUsers className="text-purple-600 dark:text-purple-400 text-2xl" />
          <h2 className="text-xl font-bold text-gray-800 dark:text-white">
            Speed Dating Connections
          </h2>
        </div>
        <div className="flex items-center gap-4">
          {participants?.map((user, index) => (
            <div key={user.id} onClick={() => onAvatarClick(user)}>
              <img
                src={
                  user.avatar ||
                  `https://randomuser.me/api/portraits/men/${index}.jpg`
                }
                alt={user.username}
                className={`w-12 h-12 rounded-full cursor-pointer transition-all duration-300 ${
                  activeChat === user.id
                    ? "ring-4 ring-blue-500 ring-opacity-50"
                    : "hover:scale-110 hover:ring-2 hover:ring-purple-500"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default ChatHeader;
