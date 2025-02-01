import React, { useState, useEffect, useRef } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { message } from "antd";

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
  const wsRef = useRef(null);

  const isParticipant = request?.participant.some(
    (participant) => participant.email === user.email
  );

  const onSendMessage = () => {
    if (
      wsRef.current &&
      wsRef.current.readyState === WebSocket.OPEN &&
      newMessage.trim()
    ) {
      const messageData = {
        chat_id: messages[messages.length - 1]?.id,
        sender_id: user.id,
        answer: newMessage,
      };

      // console.log("Sending message:", messageData);
      wsRef.current.send(JSON.stringify(messageData));

      setNewMessage("");
    } else {
      console.warn("WebSocket is not connected.");
      message.warning("Please connect to a WebSocket server");
    }
  };

  const connectWebSocket = (participantId) => {
    if (wsRef.current) {
      wsRef.current.close();
    }

    // Automatically use wss:// if the frontend is served over HTTPS
    const protocol =
      window.location.protocol === "https:"
        ? "wss://vale-backend.onrender.com"
        : "ws://localhost:8000";
    const wsUrl = `${protocol}/ws/speeddates/chats/${id}/${participantId}/`;

    wsRef.current = new WebSocket(wsUrl);

    wsRef.current.onmessage = (event) => {
      const data = JSON.parse(event.data);

      if (data.type === "chats_data") {
        setActiveChat(participantId);
        setMessages(data.chats);
      } else if (data.type === "new_message") {
        setMessages((prevMessages) => {
          const messageExists = prevMessages.some(
            (msg) => msg.id === data.chat.id
          );
          return messageExists
            ? prevMessages.map((msg) =>
                msg.id === data.chat.id ? { ...msg, ...data.chat } : msg
              )
            : [...prevMessages, data.chat];
        });
      }
    };

    wsRef.current.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    wsRef.current.onclose = (e) => {
      console.log("WebSocket connection closed");
    };
  };

  // console.log(request)

  useEffect(() => {
    if (isParticipant && !wsRef.current) {
      connectWebSocket(user.id);
    }
    return () => {
      if (wsRef.current) {
        wsRef.current.close();
        wsRef.current = null;
      }
    };
  }, [isParticipant]);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      {!isParticipant && (
        <ChatHeader
          participants={request?.participant}
          activeChat={activeChat}
          onAvatarClick={connectWebSocket}
        />
      )}
      <ChatMessages
        messages={messages}
        activeParticipant={request?.participant?.find(
          (p) => p.id === activeChat
        )}
        isParticipant={isParticipant}
      />
      {activeChat && (
        <ChatInput
          newMessage={newMessage}
          setNewMessage={setNewMessage}
          onSendMessage={onSendMessage}
        />
      )}
    </div>
  );
};

export default SpeedDatingChat;
