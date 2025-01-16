import React,{useState} from "react";
import { Form, Input, Alert, message } from "antd";
import { AiOutlineMail, AiOutlineLock, AiOutlineHeart } from "react-icons/ai";
import { IoCallOutline, IoAtOutline, IoManOutline } from "react-icons/io5";
import { Link,useNavigate } from "react-router-dom";

import { serverSignup } from "../requests/auth";
const Register = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const onFinish = async (values) => {
    await serverSignup(values, navigate, setError);
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
            Find Your Perfect Match
          </h2>
          <p className="text-gray-600 mt-2">
            Connect with people who share your interests
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold text-center mb-8">
            Create Account
          </h1>
          <div className="my-3">

          {error?.length > 0 && (
            <Alert
              message="Signup Errors"
              showIcon
              description={
                <ul>
                  {error.map((error, index) => (
                    <li className="mb-1" key={index}>{error}</li>
                  ))}
                </ul>
              }
              type="error"
              closable
              onClose={() => setError([])}
            />
          )}
          </div>
          <Form
            form={form}
            name="register"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            layout="vertical"
            size="large"
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input
                prefix={<IoAtOutline className="text-gray-400" />}
                placeholder="Username"
                className="rounded-lg"
              />
            </Form.Item>
            <div className="flex gap-2">
              <Form.Item name="first_name">
                <Input
                  prefix={<IoManOutline className="text-lg text-gray-400" />}
                  placeholder="first name"
                  className="rounded-lg"
                />
              </Form.Item>
              <Form.Item name="last_name">
                <Input
                  prefix={<IoManOutline className="text-lg text-gray-400" />}
                  placeholder="last name"
                  className="rounded-lg"
                />
              </Form.Item>
            </div>
            <Form.Item
              name="phone_number"
              rules={[
                {
                  required: true,
                  message: "Phone number is required!",
                },
                {
                  pattern: /^07\d{8}$/,
                  message:
                    "Phone number must start with 07 and be 10 digits long!",
                },
              ]}
            >
              <Input
                prefix={<IoCallOutline className="text-lg text-gray-400" />}
                placeholder="0741 780 970"
                className="rounded-lg"
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
                  const formatted = value.replace(
                    /(\d{4})(\d{3})(\d{3})/,
                    "$1 $2 $3"
                  ); // Format as 0741 780 970
                  e.target.value = formatted; // Update the input value
                }}
              />
            </Form.Item>

            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "Please input a valid email!",
                },
              ]}
            >
              <Input
                prefix={<AiOutlineMail className="text-gray-400" />}
                placeholder="Email"
                className="rounded-lg"
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
                {
                  min: 6,
                  message: "Password must be at least 6 characters!",
                },
              ]}
            >
              <Input.Password
                prefix={<AiOutlineLock className="text-gray-400" />}
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item
              name="confirmPassword"
              dependencies={["password"]}
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error("The two passwords do not match!")
                    );
                  },
                }),
              ]}
            >
              <Input.Password
                prefix={<AiOutlineLock className="text-gray-400" />}
                placeholder="Confirm Password"
              />
            </Form.Item>
            <Form.Item>
              <button
                type="submit"
                className="w-full text-lg h-12 bg-pink-500 hover:bg-pink-600 rounded-lg"
              >
                Register
              </button>
            </Form.Item>
            <div className="text-xl text-gray-600 mb-3">
              Already have an account?{" "}
              <Link to="/login" className="text-pink-500 hover:text-pink-600">
                Login
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Register;
