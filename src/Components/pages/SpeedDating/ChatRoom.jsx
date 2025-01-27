import React, { useState, useEffect } from "react";
import { FaPaperPlane, FaCommentDots, FaSmile } from "react-icons/fa";
import { useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getSpeedDateChats } from "../../requests/requests";
import ChatHeader from "./chat/ChatHeader.jsx";
import ChatMessages from "./chat/ChatMessages.jsx";
import ChatInput from "./chat/ChatInput.jsx";

const SpeedDatingChat = () => {
  const location = useLocation();
  const { request } = location.state || {};
  const { id } = useParams();
  const [activeChat, setActiveChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const user = useSelector((state) => state.user.userData);

  const isParticipant = request?.participant.some(
    (participant) => participant.email === user.email
  );

  const handleAvatarClick = async (selectedUser) => {
    if (!isParticipant || activeChat !== selectedUser.id) {
      await getSpeedDateChats(id, selectedUser.id, setMessages);
      setActiveChat(selectedUser.id === activeChat ? null : selectedUser.id);
    }
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { sender: "currentUser", text: newMessage }]);
      setNewMessage("");
    }
  };

  useEffect(() => {
    if (isParticipant) {
      handleAvatarClick(user);
    }
  }, [user, isParticipant]);

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      {!isParticipant && (
        <ChatHeader
          participants={request?.participant}
          activeChat={activeChat}
          onAvatarClick={handleAvatarClick}
        />
      )}
      <ChatMessages
        messages={messages}
        activeParticipant={request?.participant?.find(
          (p) => p.id === activeChat
        )}
      />
      {activeChat && (
        <ChatInput
          newMessage={newMessage}
          setNewMessage={setNewMessage}
          onSendMessage={handleSendMessage}
        />
      )}
    </div>
  );
};

export default SpeedDatingChat;
