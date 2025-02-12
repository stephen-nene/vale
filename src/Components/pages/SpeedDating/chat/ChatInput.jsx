// ChatInput.jsx
import React from "react";
import { FaSmile, FaPaperPlane } from "react-icons/fa";

const ChatInput = ({ newMessage, setNewMessage, onSendMessage }) => {
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey && newMessage.trim()) {
      e.preventDefault();
      onSendMessage();
    }
  };

  return (
    <footer className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-t dark:border-gray-700/50">
      <div className="max-w-4xl mx-auto flex items-center space-x-3">
        <button className="text-2xl text-gray-500 dark:text-gray-400 hover:text-blue-500 transition-colors">
          <FaSmile />
        </button>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type a message..."
          className="flex-1 p-3 rounded-full bg-gray-100 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
        />
        <button
          onClick={onSendMessage}
          disabled={!newMessage.trim()}
          className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          <FaPaperPlane />
        </button>
      </div>
    </footer>
  );
};

export default ChatInput;
