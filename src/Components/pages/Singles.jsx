import React from "react";
import { FaFilter, FaEdit, FaRegHeart } from "react-icons/fa";

export default function Singles() {
  const requests = [
    {
      id: 1,
      requester: "John Doe",
      lookingFor: "Female",
      likes: "Coffee dates, beach walks",
      dislikes: "Loud music, spicy food",
    },
    {
      id: 2,
      requester: "Jane Smith",
      lookingFor: "Male",
      likes: "Art galleries, movies",
      dislikes: "Outdoor sports, large crowds",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold text-center mb-6">Singles</h1>
        <div className="mb-6">
          <button className="px-6 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition">
            Create Matchmaking Request
          </button>
        </div>

        <h2 className="text-xl font-semibold mb-4">Matchmaking Requests</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {requests.map((request) => (
            <div
              key={request.id}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {request.requester} is looking for a {request.lookingFor}
              </h3>
              <p className="text-gray-700">
                <strong>Likes:</strong> {request.likes}
              </p>
              <p className="text-gray-700">
                <strong>Dislikes:</strong> {request.dislikes}
              </p>
              <button className="mt-4 w-full bg-rose-500 text-white py-2 rounded-md hover:bg-rose-600 transition">
                Pitch for This Request
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
