import React from "react";
import { Modal, Avatar, Tag, Descriptions, Button } from "antd";
import {
  UserOutlined,
  CalendarOutlined,
  HeartOutlined,
  ClockCircleOutlined,
  TagsOutlined,
  FilterOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const ViewModal = ({
  isRequestModalVisible,
  setIsRequestModalVisible,
  selectedRequest,
}) => {
  if (!selectedRequest) return null;

  return (
    <Modal
      title="Speed Dating Request Details"
      open={isRequestModalVisible}
      onCancel={() => setIsRequestModalVisible(false)}
      footer={[
        <Button key="back" onClick={() => setIsRequestModalVisible(false)}>
          Close
        </Button>,
        <Button key="submit" type="primary" icon={<HeartOutlined />}>
          <Link to={`/speeddating/${selectedRequest.id}`}>
            Request to Connect
          </Link>
        </Button>,
      ]}
      width={600}
    >
      <div className="flex items-center mb-6">
        <Avatar
          src={selectedRequest.creator?.profilePic}
          size={100}
          icon={<UserOutlined />}
          className="mr-6"
        />
        <div>
          <h2 className="text-2xl font-bold text-rose-700">
            {selectedRequest.creator?.username}
          </h2>
          <p className="text-gray-600">Age: {selectedRequest.creator.age}</p>
        </div>
      </div>

      <Descriptions bordered column={1} size="small" className="mb-6">
        <Descriptions.Item
          label={
            <span>
              <TagsOutlined className="mr-2 text-rose-500" />
              Interests
            </span>
          }
        >
          <div className="space-x-2">
            {selectedRequest?.interests?.map((interest) => (
              <Tag key={interest} color="red">
                {interest}
              </Tag>
            ))}
          </div>
        </Descriptions.Item>

        <Descriptions.Item
          label={
            <span>
              <CalendarOutlined className="mr-2 text-green-500" />
              Availability
            </span>
          }
        >
          {selectedRequest.availability}
        </Descriptions.Item>

        <Descriptions.Item
          label={
            <span>
              <FilterOutlined className="mr-2 text-blue-500" />
              Type
            </span>
          }
        >
          <Tag color="blue">{selectedRequest.date_type}</Tag>
        </Descriptions.Item>

        <Descriptions.Item
          label={
            <span>
              <ClockCircleOutlined className="mr-2 text-purple-500" />
              Status
            </span>
          }
        >
          <Tag color={selectedRequest.status === "Open" ? "green" : "orange"}>
            {selectedRequest.status}
          </Tag>
        </Descriptions.Item>
      </Descriptions>

      {selectedRequest.preferences && (
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-4 text-rose-700">
            Request Preferences
          </h3>
          <Descriptions bordered column={1} size="small">
            <Descriptions.Item label="Age Range">
              {selectedRequest.preferences.ageRange[0]} -{" "}
              {selectedRequest.preferences.ageRange[1]} years
            </Descriptions.Item>
            <Descriptions.Item label="Gender Preferences">
              {selectedRequest.preferences.genderPreferences.join(", ")}
            </Descriptions.Item>
            <Descriptions.Item label="Matching Interests">
              {selectedRequest.preferences.interests.join(", ")}
            </Descriptions.Item>
          </Descriptions>
        </div>
      )}
    </Modal>
  );
};

export default ViewModal;
