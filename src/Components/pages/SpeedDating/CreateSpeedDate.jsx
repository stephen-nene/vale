import React from "react";
import { Form, Input, Select, InputNumber, Button,Breadcrumb } from "antd";
import { FiSend } from "react-icons/fi";
import {Link} from 'react-router-dom'

export default function CreateSpeedDate() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Form values:", values);
  };

  return (
    <div className="p-6 dark:bg -gray-800 dark:text-white">
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
            title: (
              <Link className="dark:text-white mb-4" to="/speeddating">
                Speeddating
              </Link>
            ),
          },
          {
            title: <p className="dark:text-white">Create</p>,
          },
        ]}
      />
      <h1 className="text-2xl font-bold mb-4">Create Speed Date</h1>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        className="space-y-4"
        size="large"
        defaultValue={{
          date_type: "public",
          duration: 30,
          max_participants: 10,
        }}
      >
        {/* Title */}
        <Form.Item
          label="Title"
          name="title"
          rules={[{ required: true, message: "Please enter a title" }]}
        >
          <Input
            className="w-full dark:bg-gray-700 dark:text-white dark:border-gray-600"
            placeholder="Enter the title"
          />
        </Form.Item>

        {/* Description */}
        <Form.Item
          label="Description"
          name="description"
          rules={[
            { required: true, message: "Please enter a description" },
            { max: 300, message: "Description cannot exceed 300 characters" },
          ]}
        >
          <Input.TextArea
            className="w-full dark:bg-gray-700 dark:text-white dark:border-gray-600"
            placeholder="Enter the description (max 300 characters)"
            maxLength={300}
          />
        </Form.Item>

        {/* Date Type */}
        <Form.Item
          label="View Type"
          name="date_type"
          initialValue="public"
          rules={[{ required: true, message: "Please select a date type" }]}
        >
          <Select
            className="dark:bg-gray-800 dark:text-white dark:border-gray-700"
            popupClassName="dark:bg-gray-800 dark:text-white dark:border-gray-700"
          >
            <Select.Option value="public" className="dark:hover:bg-gray-700">
              Public
            </Select.Option>
            <Select.Option value="private" className="dark:hover:bg-gray-700">
              Private
            </Select.Option>
          </Select>
        </Form.Item>

        {/* Availability */}
        <Form.Item
          label="Availability"
          name="availability"
          rules={[
            { required: true, message: "Please enter availability details" },
          ]}
        >
          <Input
            className="w-full dark:bg-gray-700 dark:text-white dark:border-gray-600"
            placeholder="Enter availability details"
          />
        </Form.Item>

        {/* Max Participants */}
        <Form.Item
          label="Max Participants"
          name="max_participants"
          rules={[
            {
              required: true,
              message: "Please enter the maximum number of participants",
            },
            {
              type: "number",
              min: 1,
              message: "Must be at least 1 participant",
            },
          ]}
        >
          <InputNumber
            min={1}
            className="w-full dark:bg-gray-700 dark:text-white dark:border-gray-600"
            placeholder="Enter max participants"
          />
        </Form.Item>

        {/* Max Questions */}
        <Form.Item
          label="Max Questions"
          name="max_questions"
          rules={[
            {
              required: true,
              message: "Please enter the maximum number of questions",
            },
            {
              type: "number",
              min: 10,
              message: "Must be at least 10 questions",
            },
          ]}
        >
          <InputNumber
            min={10}
            className="w-full dark:bg-gray-700 dark:text-white dark:border-gray-600"
            placeholder="Enter max questions"
          />
        </Form.Item>

        {/* Duration */}
        <Form.Item
          label="Duration (minutes)"
          name="duration"
          rules={[
            {
              required: false,
              message: "Please enter the duration in minutes",
            },
            {
              type: "number",
              min: 1,
              message: "Duration must be at least 1 minute",
            },
          ]}
        >
          <InputNumber
            min={1}
            className="w-full dark:bg-gray-700 dark:text-white dark:border-gray-600"
            placeholder="Enter duration in minutes"
          />
        </Form.Item>

        {/* Submit Button */}
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            icon={<FiSend />}
            className="flex items-center space-x-2"
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
