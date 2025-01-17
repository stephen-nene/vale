import React, { useState } from "react";
import { FaFilter, FaEdit, FaRegHeart } from "react-icons/fa";
import { getRequests } from "../requests/requests";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import {
  Modal,
  Input,
  Select,
  DatePicker,
  InputNumber,
  Checkbox,
  Form,
} from "antd";
const { TextArea } = Input;
const { Option } = Select;

export default function Singles() {
  const [newReq, setnewReq] = useState(false);
  const [requests, setSelectedRequest] = useState([]);
  const [form] = Form.useForm();

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      console.log("Form values:", values);
      setnewReq(false);
      form.resetFields();
    } catch (error) {
      console.error("Form validation failed:", error);
    }
  };

  useEffect(() => {
    if (requests?.length === 0) {
      const getReqs = async () => {
        await getRequests(setSelectedRequest);
      };
      getReqs();
      // .then((res) => setSelectedRequest(res));
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-900 dark:text-white">
          Requests
        </h1>

        <div className="mb-6 flex justify-between items-center">
          <button
            onClick={() => setnewReq(true)}
            className="px-6 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition"
          >
            Create Matchmaking Request
          </button>
          <button className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
            <FaFilter className="w-5 h-5" />
          </button>
        </div>

        <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
          Matchmaking Requests
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {requests &&
            requests.map((request) => (
              <div
                key={request.id}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      {request.user?.first_name} {request.user?.last_name}{" "}
                      {request.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Looking for: {request.target_gender}, {request.age_range}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button className="text-gray-400 hover:text-rose-500 dark:text-gray-500 dark:hover:text-rose-400">
                      <FaRegHeart className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-medium">Location:</span>{" "}
                    {request.location}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-medium">Theme:</span> {request.theme}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-medium">Date:</span>{" "}
                    {new Date(request.date).toLocaleDateString()}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-medium">Dress Code:</span>{" "}
                    {request.dress_code}
                  </p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {request.interests.map((interest) => (
                    <span
                      key={interest}
                      className="px-2 py-1 bg-rose-100 dark:bg-rose-900 text-rose-700 dark:text-rose-200 text-sm rounded-full"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
                <Link
                  to={`/request/${request.id}`}
                  state={{ request }}
                  className="w-full"
                >
                  <button className="mt-6 w-full bg-rose-500 text-white py-2 rounded-md hover:bg-rose-600 transition">
                    Express Interest
                  </button>
                </Link>
              </div>
            ))}
        </div>
      </div>
      {/* Modal for adding more details - can be implemented when needed */}

      <Modal
        open={newReq}
        onCancel={() => setnewReq(false)}
        title="Create New Request"
        width={800}
        onOk={handleSubmit}
        okText="Create Request"
        cancelText="Cancel"
        okButtonProps={{
          className: "bg-rose-600 hover:bg-rose-700 border-rose-600",
        }}
      >
        <Form
          form={form}
          layout="vertical"
          className="mt-4"
          initialValues={{
            view_type: "public",
            theme: "casual",
            comfort_level: "medium",
            meeting_environment: "quiet",
            urgency_level: "low",
            is_anonymous: false,
          }}
        >
          <div className="grid grid-cols-2 gap-4">
            <Form.Item
              name="title"
              label="Title"
              rules={[{ required: true, message: "Please enter a title" }]}
            >
              <Input size="large" />
            </Form.Item>

            <Form.Item name="view_type" label="View Type">
              <Select size="large">
                <Option value="private">Private</Option>
                <Option value="public">Public</Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="location"
              label="Location"
              rules={[{ required: true }]}
            >
              <Input size="large" />
            </Form.Item>

            <Form.Item name="date" label="Date" rules={[{ required: true }]}>
              <DatePicker size="large" className="w-full" />
            </Form.Item>

            <Form.Item name="target_gender" label="Target Gender">
              <Select size="large">
                <Option value="">Select Gender</Option>
                <Option value="male">Male</Option>
                <Option value="female">Female</Option>
                <Option value="other">Other</Option>
              </Select>
            </Form.Item>

            <Form.Item name="budget" label="Budget">
              <InputNumber
                size="large"
                className="w-full"
                step={0.01}
                precision={2}
              />
            </Form.Item>

            <Form.Item name="theme" label="Theme">
              <Select size="large">
                <Option value="romantic">Romantic</Option>
                <Option value="business">Business</Option>
                <Option value="friendly">Friendly</Option>
                <Option value="casual">Casual</Option>
              </Select>
            </Form.Item>

            <Form.Item name="dress_code" label="Dress Code">
              <Input size="large" />
            </Form.Item>
          </div>

          <Form.Item name="reason" label="Reason" rules={[{ required: true }]}>
            <TextArea rows={3} size="large" />
          </Form.Item>

          <Form.Item name="special_msg" label="Special Message">
            <TextArea rows={3} size="large" />
          </Form.Item>

          <div className="grid grid-cols-3 gap-4">
            <Form.Item name="comfort_level" label="Comfort Level">
              <Select size="large">
                <Option value="low">Low</Option>
                <Option value="medium">Medium</Option>
                <Option value="high">High</Option>
              </Select>
            </Form.Item>

            <Form.Item name="meeting_environment" label="Meeting Environment">
              <Select size="large">
                <Option value="quiet">Quiet</Option>
                <Option value="crowded">Crowded</Option>
                <Option value="virtual">Virtual</Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="preferred_communication"
              label="Preferred Communication"
            >
              <Select size="large">
                <Option value="text">Text</Option>
                <Option value="call">Call</Option>
                <Option value="video">Video</Option>
                <Option value="in_person">In Person</Option>
              </Select>
            </Form.Item>
          </div>

          <Form.Item
            name="interests"
            label="Interests"
            extra="Enter interests separated by commas"
          >
            <Select
              size="large"
              mode="tags"
              tokenSeparators={[","]}
              placeholder="Enter interests"
            />
          </Form.Item>

          <Form.Item
            name="language_preferences"
            label="Language Preferences"
            extra="Enter languages separated by commas"
          >
            <Select
              size="large"
              mode="tags"
              tokenSeparators={[","]}
              placeholder="Enter languages"
            />
          </Form.Item>

          <Form.Item name="age_range" label="Age Range">
            <Select size="large">
              <Option value="18-25">18-25</Option>
              <Option value="26-35">26-35</Option>
              <Option value="36-50">36-50</Option>
              <Option value="50+">50+</Option>
            </Select>
          </Form.Item>

          <Form.Item name="urgency_level" label="Urgency Level">
            <Select size="large">
              <Option value="low">Low</Option>
              <Option value="medium">Medium</Option>
              <Option value="high">High</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="accessibility_requirements"
            label="Accessibility Requirements"
          >
            <TextArea rows={2} size="large" />
          </Form.Item>

          <Form.Item name="additional_notes" label="Additional Notes">
            <TextArea rows={2} size="large" />
          </Form.Item>

          <Form.Item name="is_anonymous" valuePropName="checked">
            <Checkbox>Make this request anonymous</Checkbox>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
