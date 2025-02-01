import React from "react";
import { FaCommentDots, FaQuestionCircle, FaLock } from "react-icons/fa";

const Message = ({ msg, activeParticipant, isParticipant }) => {
  const MessageBubble = ({
    isOwn,
    avatar,
    content,
    isHidden,
    hiddenMessage,
  }) => (
    <div className={`flex items-start space-x-3 ${isOwn ? "justify-end" : ""}`}>
      {!isOwn && (
        <img
          src={avatar || "https://randomuser.me/api/portraits/men/2.jpg"}
          alt="Avatar"
          className="w-8 h-8 rounded-full"
        />
      )}
      <div
        className={`p-3 rounded-lg ${
          isHidden
            ? "bg-gray-100 dark:bg-gray-600"
            : isOwn
            ? "bg-blue-500 text-white"
            : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
        }`}
      >
        {isHidden ? (
          <div className="flex items-center space-x-2">
            <FaLock className="text-gray-500 dark:text-gray-400" />
            <p className="text-gray-500 dark:text-gray-400">{hiddenMessage}</p>
          </div>
        ) : (
          <p>{content}</p>
        )}
      </div>
      {isOwn && (
        <img
          src={avatar || "https://randomuser.me/api/portraits/men/1.jpg"}
          alt="Avatar"
          className="w-8 h-8 rounded-full"
        />
      )}
    </div>
  );

  const shouldShowCreatorAnswer =
    msg.creator_answer && (msg.participant_answer || !isParticipant);

  const shouldShowParticipantAnswer =
    msg.participant_answer && (msg.creator_answer || isParticipant);

  const getHiddenMessage = (userType) => {
    if (!msg.creator_answer && !msg.participant_answer) {
      return "No responses yet. Send your answer to unlock the conversation.";
    }
    return `${userType}'s answer is hidden. Waiting `;
  };

  return (
    <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-center bg-purple-100 dark:bg-purple-900/50 p-3 rounded-lg mb-4">
        <FaQuestionCircle className="mr-3 text-purple-600 dark:text-purple-400" />
        <p className="text-purple-800 dark:text-purple-200 italic">
          {msg.question_text}
        </p>
      </div>

      <div className="space-y-4">
        {!isParticipant ? (
          <>
            <MessageBubble
              isOwn={false}
              avatar={activeParticipant?.avatar}
              content={msg.participant_answer}
              isHidden={!shouldShowParticipantAnswer}
              hiddenMessage={getHiddenMessage("Participant")}
            />
            <MessageBubble
              isOwn={true}
              avatar={msg.creator_avatar}
              content={msg.creator_answer}
              isHidden={!shouldShowCreatorAnswer}
              hiddenMessage={getHiddenMessage("Creator")}
            />
          </>
        ) : (
          <>
            <MessageBubble
              isOwn={true}
              avatar={activeParticipant?.avatar}
              content={msg.participant_answer}
              isHidden={!shouldShowParticipantAnswer}
              hiddenMessage={getHiddenMessage("Participant")}
            />
            <MessageBubble
              isOwn={false}
              avatar={msg.creator_avatar}
              content={msg.creator_answer}
              isHidden={!shouldShowCreatorAnswer}
              hiddenMessage={getHiddenMessage("Creator")}
            />
          </>
        )}
      </div>
    </div>
  );
};

const ChatMessages = ({ messages, activeParticipant, isParticipant }) => {
  return (
    <main className="flex-1 overflow-y-auto p-6 space-y-8 pb-32 min-h-screen max-w-4xl mx-auto w-full">
      {activeParticipant ? (
        <div className="space-y-6">
          {messages.length > 0 ? (
            messages.map((msg, index) => (
              <Message
                key={msg.id || index}
                msg={msg}
                activeParticipant={activeParticipant}
                isParticipant={isParticipant}
              />
            ))
          ) : (
            <div className="text-center text-gray-500 dark:text-gray-400">
              No messages to display.
            </div>
          )}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-full text-gray-500 dark:text-gray-400 space-y-4">
          <FaCommentDots className="text-6xl text-purple-400" />
          <p className="text-xl">Select a participant to start chatting</p>
        </div>
      )}
    </main>
  );
};

export default ChatMessages;
