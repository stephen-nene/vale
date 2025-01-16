import React from "react";
import { Form, Input, Button, message } from "antd";
import { AiOutlineMail, AiOutlineLock, AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
const Reset = () => {
  const [form] = Form.useForm();
  const { token } = useParams();

  const onReset = (token) => { 
    console.log("Token Received:", token);
    // Call API to validate token and update password
    // Example: axios.put('/api/auth/reset-password/' + token, { password: values.password });
  }

  const onFinish = (values) => {
    console.log("Success:", values);
    message.success("Password reset successful!");
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
            Reset Your Password
          </h2>
          <p className="text-gray-600 mt-2">
            Create a new password for your account
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold text-center mb-8">Reset Password</h1>

          <Form
            form={form}
            name="reset"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            layout="vertical"
            size="large"
          >
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your new password!",
                },
                {
                  min: 6,
                  message: "Password must be at least 6 characters!",
                },
              ]}
            >
              <Input.Password
                prefix={<AiOutlineLock className="text-gray-400" />}
                placeholder="New Password"
              />
            </Form.Item>

            <Form.Item
              name="confirmPassword"
              dependencies={['password']}
              rules={[
                {
                  required: true,
                  message: "Please confirm your new password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('The two passwords do not match!'));
                  },
                }),
              ]}
            >
              <Input.Password
                prefix={<AiOutlineLock className="text-gray-400" />}
                placeholder="Confirm New Password"
              />
            </Form.Item>

            <Form.Item>
              <button
                type="submit"
                className="w-full text-lg h-12 bg-pink-500 hover:bg-pink-600 text-white rounded-lg"
              >
                Reset Password
              </button>
            </Form.Item>
            <div className="text-xl text-gray-600 mb-3">
              Remember your password?{" "}
              <Link
                to="/login"
                className="text-pink-500 hover:text-pink-600"
              >
                Login
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Reset;
