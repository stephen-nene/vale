import React from "react";
import { MdEmail, MdFavorite, MdChat } from "react-icons/md";

export default function Couples() {
  const gestures = [
    {
      id: 1,
      occasion: "Valentine's Day",
      description: "A candlelight dinner at their favorite restaurant",
      status: "Pending Response",
    },
    {
      id: 2,
      occasion: "Anniversary",
      description: "A surprise getaway to the mountains",
      status: "Accepted",
    },
  ];

  return (
    <div className=" bg-gray-50">
      <div className="max-w-4xl mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold text-center mb-6">Couples</h1>
        <div className="mb-6">
          <button className="px-6 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition">
            Send Partner Request
          </button>
        </div>

        <h2 className="text-xl font-semibold mb-4">Your Sent Requests</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {gestures.map((gesture) => (
            <div
              key={gesture.id}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Occasion: {gesture.occasion}
              </h3>
              <p className="text-gray-700">
                <strong>Description:</strong> {gesture.description}
              </p>
              <p className="text-gray-700">
                <strong>Status:</strong> {gesture.status}
              </p>
              <button className="mt-4 w-full bg-gray-500 text-white py-2 rounded-md hover:bg-gray-600 transition">
                View Partner's Response
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
