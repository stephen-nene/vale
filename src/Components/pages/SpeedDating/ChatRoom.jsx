import React, { useState, useEffect, useRef } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getSpeedDateChats } from "../../requests/requests";
import ChatHeader from "./chat/ChatHeader.jsx";
import ChatMessages from "./chat/ChatMessages.jsx";
import ChatInput from "./chat/ChatInput.jsx";
import { message } from "antd";

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

  const handleAvatarClick = async (selectedUser) => {
    if (!isParticipant || activeChat !== selectedUser.id) {
      await getSpeedDateChats(id, selectedUser.id, setMessages);
      setActiveChat(selectedUser.id === activeChat ? null : selectedUser.id);
    }
  };

  const onSendMessage = () => {
    if (
      wsRef.current &&
      wsRef.current.readyState === WebSocket.OPEN &&
      newMessage.trim()
    ) {
      const messageData = {
        chat_id: messages[messages.length - 1]?.id, // Chat ID from params
        sender_id: user.id, // User ID from Redux
        answer: newMessage, // Message content
      };

      console.log("Sending message:", messageData);
      wsRef.current.send(JSON.stringify(messageData)); // Send to WebSocket server

      // Optimistically update UI (if needed)
      // setMessages((prevMessages) => [
      //   ...prevMessages,
      //   { sender: user.id, text: newMessage },
      // ]);

      setNewMessage(""); // Clear input after sending
    } else {
      console.warn("WebSocket is not connected.");
      message.warning("Please connect to a WebSocket server");
    }
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { sender: "currentUser", text: newMessage }]);
      setNewMessage("");
    }
  };

  const connectWebSocket = (participantId) => {
    if (wsRef.current) {
      wsRef.current.close();
    }

    const wsUrl = `ws://localhost:8000/ws/speeddates/chats/${id}/${participantId}/`;
    wsRef.current = new WebSocket(wsUrl);

    // wsRef.current.onmessage = (event) => {
    //   const data = JSON.parse(event.data);
    //   if (data.type === "chats_data") {
    //     setMessages(data.chats);
    //     setActiveChat(participantId);
    //   } else if (data.message) {
    //     setMessages((prev) => [
    //       ...prev,
    //       { sender: data.sender_id, text: data.message },
    //     ]);
    //   }
    // };

    wsRef.current.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log("Received WebSocket message:", data); // Debugging

      if (data.type === "chats_data") {
        setActiveChat(participantId);

        setMessages(data.chats);
      } else if (data.type === "new_message") {
        setMessages((prevMessages) => {
          const messageExists = prevMessages.some(
            (msg) => msg.id === data.chat.id
          );

          if (messageExists) {
            // Update the message if it already exists
            return prevMessages.map((msg) =>
              msg.id === data.chat.id ? { ...msg, ...data.chat } : msg
            );
          } else {
            // Otherwise, add the new message
            return [...prevMessages, data.chat];
          }
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
  }, [isParticipant]); // Only depend on `isParticipant`

  useEffect(() => {
    if (isParticipant) {
      // handleAvatarClick(user);
    }
  }, [user, isParticipant]);

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
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
