import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import { AiOutlineMail, AiOutlineLock, AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
const Forgot = () => {
  const [form] = Form.useForm();
  const [servMsg,setServMsg] = useState("")

  const onFinish = (values) => {
    console.log("Success:", values);
    message.success("Login successful!");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    message.error("Please check your input and try again.");
  };

  return (
    <div className="min-h-screen w-full flex flex-co md:flex-row">
      {/* Image Section */}
      <div className="hidden md:flex md:w-1/2 bg-pink-100 items-center justify-center">
        <div className="text-center">
          <AiOutlineHeart className="w-32 h-32 text-pink-500 mx-auto" />
          <h2 className="text-3xl font-bold text-gray-800 mt-4">
           Forgot your password? No worries
          </h2>
          <p className="text-gray-600 mt-2">
            Enter your email to receive a password reset link
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold text-center mb-8">password Manager</h1>

          <Form
            form={form}
            name="login"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            layout="vertical"
            size="large"
          >
            <Form.Item
              name="email"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input
                type="email"
                prefix={<AiOutlineMail className="text-gray-400" />}
                placeholder="Email "
                className="rounded-lg mb-4"
              />
            </Form.Item>

            <Form.Item>
              <button
                typeof="submit"
                className="w-full text-lg h-12 bg-pink-500 hover:bg-pink-600  rounded-lg"
              >
                reset
              </button>
            </Form.Item>

            <div className="text-xl text-gray-600">
              <Link to="/login" className="text-pink-500 hover:text-pink-600">
                login?
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Forgot;
