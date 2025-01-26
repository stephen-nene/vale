import React, { useState } from "react";
import { Button, Avatar, Tag, message, FloatButton } from "antd";
import {
  PlusOutlined,
  HeartOutlined,
  GiftOutlined,
  ClockCircleOutlined,
  UserOutlined,
  StarOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import ViewModal from "./ViewSpeedDate";
import { useSelector } from "react-redux";

export default function SpeedDating() {
  const [isRequestModalVisible, setIsRequestModalVisible] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const user = useSelector((state) => state.user);

  const [publicRequests, setPublicRequests] = useState([
    {
      id: 1,
      type: "public",
      title: "Romantic Evenings for Singles",
      description: "Join us for a night of fun and meaningful connections!",
      user: {
        id: "user-123",
        age: 28,
        name: "John Doe",
        profilePic: "https://randomuser.me/api/portraits/men/44.jpg",
      },
      durationPerDate: 5,
      preferences: {
        ageRange: [25, 35],
        genderPreferences: ["male", "female", "non-binary"],
        interests: ["travel", "movies", "cooking"],
      },
      interests: ["Travel", "Photography", "Music"],
      status: "Open",
      availability: "Weekend Evening",
      maxParticipants: 20,
      currentParticipants: 15,
      joinLink: "https://speeddating.com/join/sd-001",
      createdAt: "2023-10-30T12:00:00Z",
    },
    {
      id: 2,
      type: "public",
      title: "Tech Enthusiasts Speed Dating",
      description: "For those who love coding, gadgets, and innovation!",
      user: {
        id: "user-456",
        age: 32,
        name: "Jane Smith",
        profilePic: "https://randomuser.me/api/portraits/women/44.jpg",
      },
      durationPerDate: 6,
      preferences: {
        ageRange: [20, 30],
        genderPreferences: ["any"],
        interests: ["tech", "coding", "gaming"],
      },
      interests: ["Hiking", "Cooking", "Tech"],
      status: "Open",
      availability: "Weekday Afternoon",
      maxParticipants: 15,
      currentParticipants: 12,
      joinLink: "https://speeddating.com/join/sd-002",
      createdAt: "2023-10-29T09:30:00Z",
    },
    {
      id: 3,
      type: "public",
      title: "Art Lovers Speed Dating",
      description: "Connect with fellow art enthusiasts and creatives!",
      user: {
        id: "user-789",
        age: 25,
        name: "Alex Johnson",
        profilePic: "https://randomuser.me/api/portraits/women/64.jpg",
      },
      durationPerDate: 7,
      preferences: {
        ageRange: [22, 40],
        genderPreferences: ["any"],
        interests: ["art", "yoga", "indie films"],
      },
      interests: ["Art", "Yoga", "Indie Films"],
      status: "In Progress",
      availability: "Weekend Brunch",
      maxParticipants: 10,
      currentParticipants: 8,
      joinLink: "https://speeddating.com/join/sd-003",
      createdAt: "2023-10-28T14:45:00Z",
    },
    {
      id: 4,
      type: "public",
      title: "Outdoor Adventures Speed Dating",
      description:
        "For those who love hiking, camping, and the great outdoors!",
      user: {
        id: "user-101",
        age: 30,
        name: "Michael Brown",
        profilePic: "https://randomuser.me/api/portraits/men/34.jpg",
      },
      durationPerDate: 8,
      preferences: {
        ageRange: [25, 40],
        genderPreferences: ["any"],
        interests: ["hiking", "camping", "nature"],
      },
      interests: ["Hiking", "Camping", "Photography"],
      status: "Open",
      availability: "Weekend Morning",
      maxParticipants: 12,
      currentParticipants: 10,
      joinLink: "https://speeddating.com/join/sd-004",
      createdAt: "2023-10-27T10:15:00Z",
    },
    {
      id: 5,
      type: "public",
      title: "Book Lovers Speed Dating",
      description: "Find your literary soulmate!",
      user: {
        id: "user-202",
        age: 29,
        name: "Laura Wilson",
        profilePic: "https://randomuser.me/api/portraits/women/24.jpg",
      },
      durationPerDate: 6,
      preferences: {
        ageRange: [24, 34],
        genderPreferences: ["any"],
        interests: ["books", "writing", "coffee"],
      },
      interests: ["Books", "Writing", "Coffee"],
      status: "Open",
      availability: "Weekday Evening",
      maxParticipants: 15,
      currentParticipants: 11,
      joinLink: "https://speeddating.com/join/sd-005",
      createdAt: "2023-10-26T16:20:00Z",
    },
    {
      id: 6,
      type: "public",
      title: "Gamers Speed Dating",
      description: "Level up your love life with fellow gamers!",
      user: {
        id: "user-303",
        age: 27,
        name: "Daniel Lee",
        profilePic: "https://randomuser.me/api/portraits/men/54.jpg",
      },
      durationPerDate: 7,
      preferences: {
        ageRange: [20, 30],
        genderPreferences: ["any"],
        interests: ["gaming", "tech", "anime"],
      },
      interests: ["Gaming", "Tech", "Anime"],
      status: "Open",
      availability: "Weekend Night",
      maxParticipants: 10,
      currentParticipants: 7,
      joinLink: "https://speeddating.com/join/sd-006",
      createdAt: "2023-10-25T18:30:00Z",
    },
  ]);

  const viewPrivateRequest = () => {
    if (user.loggedIn === true) {
      message.info("Coming soon, this feature is not yet implemented.");
    } else {
      message.warning("You need to be logged in to view private requests. ");
    }
  };
  const handleViewRequest = (request) => {
    setSelectedRequest(request);
    setIsRequestModalVisible(true);
  };

  return (
    <div className="container mx-auto p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-rose-700">
          Speed Dating Central
        </h1>
        <Link to="/speeddating/create">
          <Button size="large" type="primary" icon={<HeartOutlined />}>
            Create Speed Dating Request
          </Button>
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <GiftOutlined className="mr-2 text-red-500" /> Request Types
          </h2>
          <ul className="space-y-4">
            <li>🌐 Public Requests: Visible to all members</li>
            <li>🔐 Private Requests: Matched by AI</li>
            <li>💑 Couple Requests: Send to you special person</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <ClockCircleOutlined className="mr-2 text-purple-500" /> Speed
            Dating Rules
          </h2>
          <ul className="space-y-4">
            <li>⏱️ 5-minute video chat sessions</li>
            <li>🔄 Automatic partner rotation</li>
            <li>🤝 Mutual consent for further connection</li>
          </ul>
        </div>
      </div>
      <div className="my-5">
        <h2 className="text-2xl font-bold text-rose-700 mb-6">
          Active Speed Dating Requests
        </h2>
        <button
          onClick={() => viewPrivateRequest()}
          className="px-6 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition"
        >
          Private Date Requests
        </button>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {publicRequests.map((request) => (
          <div
            key={request.id}
            className="bg-rose-100 dark:bg-black p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center mb-4">
              <Avatar
                src={request.user?.profilePic}
                size={64}
                icon={<UserOutlined />}
                className="mr-4"
              />
              <div>
                <h3 className="text-xl font-semibold">{request.user.name}</h3>
                <p className="text-gray-500">Age: {request.user.age}</p>
              </div>
            </div>

            <div className="mb-4">
              <div className="my-3">
                <h3 className="text-lg font-medium ">{request.title}</h3>
                <p className="text-sm text-gray-500"> {request.description}</p>
              </div>
              <h4 className="font-semibold mb-2">Interests</h4>
              <div className="space-x-2">
                {request.interests.map((interest) => (
                  <Tag key={interest} color="red">
                    {interest}
                  </Tag>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center my-5">
              <Tag
                icon={<StarOutlined />}
                color={request.status === "Open" ? "green" : "orange"}
              >
                {request.status}
              </Tag>
              <span className="text-gray-500">{request.availability}</span>
            </div>
            <Button
              size="large"
              type="primary"
              icon={<HeartOutlined />}
              onClick={() => handleViewRequest(request)}
            >
              View
            </Button>
          </div>
        ))}
      </div>

      <ViewModal
        isRequestModalVisible={isRequestModalVisible}
        setIsRequestModalVisible={setIsRequestModalVisible}
        selectedRequest={selectedRequest}
      />
      <Link to="/speeddating/create">
        <FloatButton
          tooltip="create speeddating"
          color={"green"}
          icon={<PlusOutlined />}
        />
      </Link>
    </div>
  );
}
