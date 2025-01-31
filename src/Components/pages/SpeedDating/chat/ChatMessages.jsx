import React from "react";
import { FaCommentDots, FaQuestionCircle } from "react-icons/fa";

const ChatMessages = ({ messages, activeParticipant, isParticipant }) => {
  // const isParticipant = activeParticipant?.email === user.email;

  // console.log(isParticipant);

  return (
    <main className="flex-1 overflow-y -auto p-6 space-y -6 min-h-screen max-w-4xl mx-auto w-full">
      {activeParticipant ? (
        <div className="space-y-6">
          {messages.length > 0 ? (
            messages.map((msg, index) => (
              <div
                key={msg.id || index}
                className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow"
              >
                {/* Question */}
                <div className="flex items-center bg-purple-100 dark:bg-purple-900/50 p-3 rounded-lg mb-4">
                  <FaQuestionCircle className="mr-3 text-purple-600 dark:text-purple-400" />
                  <p className="text-purple-800 dark:text-purple-200 italic">
                    {msg.question_text}
                  </p>
                </div>

                {/* Conversation Answers */}
                <div className="space-y-4">
                  {!isParticipant ? (
                    <>
                      {/* Participant's Answer */}
                      <div className="flex items-start space-x-3">
                        <img
                          src={
                            activeParticipant?.avatar ||
                            "https://randomuser.me/api/portraits/men/1.jpg"
                          }
                          alt={activeParticipant.name}
                          className="w-8 h-8 rounded-full"
                        />
                        <div className="bg-gray-200 dark:bg-gray-700 p-3 rounded-lg flex-grow">
                          <p className="text-gray-800 dark:text-gray-200">
                            {msg.participant_answer}
                          </p>
                        </div>
                      </div>

                      {/* Creator's Answer */}

                      <div className="flex items-start justify-end space-x-3">
                        <div className="bg-blue-500 text-white p-3 rounded-lg">
                          <p>{msg.creator_answer || "awaiting"}</p>
                        </div>
                        <img
                          src={
                            msg.creator_avatar ||
                            "https://randomuser.me/api/portraits/men/2.jpg"
                          }
                          alt="Creator"
                          className="w-8 h-8 rounded-full"
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Creator's Answer */}
                      <div className="flex items-start space-x-3">
                        <img
                          src={
                            msg.creator_avatar ||
                            "https://randomuser.me/api/portraits/men/2.jpg"
                          }
                          alt="Creator"
                          className="w-8 h-8 rounded-full"
                        />
                        <div className="bg-gray-200 dark:bg-gray-700 p-3 rounded-lg flex-grow">
                          <p className="text-gray-800 dark:text-gray-200">
                            {msg.creator_answer}
                          </p>
                        </div>
                      </div>

                      {/* Participant's Answer */}
                      <div className="flex items-start justify-end space-x-3">
                        <div className="bg-blue-500 text-white p-3 rounded-lg">
                          <p>{msg.participant_answer}</p>
                        </div>
                        <img
                          src={
                            activeParticipant?.avatar ||
                            "https://randomuser.me/api/portraits/men/1.jpg"
                          }
                          alt={activeParticipant.name}
                          className="w-8 h-8 rounded-full"
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>
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
