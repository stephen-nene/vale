import React, { useState, useEffect } from "react";
import { Button, Avatar, Tag, message, FloatButton, Breadcrumb } from "antd";
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
import { useSelector, useDispatch } from "react-redux";

import { getSpeedDates } from "../../requests/requests";

export default function SpeedDating() {
  const [isRequestModalVisible, setIsRequestModalVisible] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);
  // const [speeddates, setSpeeddates] = useState([])
  const user = useSelector((state) => state.user);
  const speeddates = useSelector((state) => state.app.speedDates);
  const dispatch = useDispatch();

  const [isPublic, setIsPublic] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      await getSpeedDates(dispatch, isPublic);
      if (speeddates.length <= 0) {
      }
    };
    fetchData();
  }, [isPublic]);

  const viewPrivateRequest = async () => {
    if (user.loggedIn === true) {
      await getSpeedDates(dispatch, isPublic);
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
      <Breadcrumb
        className="dark:text-white mb-4"
        items={[
          {
            title: (
              <Link className="dark:text-white" to="/">
                Home
              </Link>
            ),
          },
          {
            title: (
              <Link className="dark:text-white mb-4" to="/features">
                Features
              </Link>
            ),
          },
          {
            title: <p className="dark:text-white">Speeddating</p>,
          },
        ]}
      />
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-rose-700">
          Speed Dating Requests
        </h1>
        <Link to="/speeddating/create">
          <Button size="large" type="primary" icon={<HeartOutlined />}>
            Create Speed Date
          </Button>
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* <div>
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
        </div> */}
      </div>

      <div className="my-5 flex justify-between">
        <div className=" ">
          <h2 className="text-xl font-semibold mb-4">
            {isPublic ? (
              <button
                onClick={() => setIsPublic(false)}
                className="px-6 py-2 bg-green-900 text-white rounded-lg hover:bg-green-700 transition"
              >
                🌐 Public
              </button>
            ) : (
              <button
                onClick={() => setIsPublic(true)}
                className="px-6 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition"
              >
                🔐 Private
              </button>
            )}
          </h2>
        </div>
      </div>

      {speeddates.length <= 0 ? (
        <p className="text-center text-gray-500">
          No active speeddating requests found.
        </p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {speeddates.map((request) => (
            <div
              key={request.id}
              className="bg-rose-100 dark:bg-black p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              {/* Creator Info */}
              <div className="flex items-center mb-4">
                <Avatar
                  src={request.creator?.profilePic}
                  size={64}
                  icon={<UserOutlined />}
                  className="mr-4"
                />
                <div>
                  <h3 className="text-xl font-semibold">
                    {request.creator.username}
                  </h3>
                  <p className="text-gray-500">Age: {request.creator.age}</p>
                </div>
              </div>

              {/* Speed Date Details */}
              <div className="mb-4">
                <div className="my-3">
                  <h3 className="text-lg font-medium">{request.title}</h3>
                  <p className="text-sm text-gray-500">{request.description}</p>
                </div>
              </div>

              {/* Status and Availability */}
              <div className="flex justify-between items-center my-5">
                <Tag
                  icon={<StarOutlined />}
                  color={request.date_type === "private" ? "green" : "orange"}
                >
                  {request.date_type}
                </Tag>
                <span className="text-gray-500">{request.availability}</span>
              </div>

              {/* View Button */}
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
      )}

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
