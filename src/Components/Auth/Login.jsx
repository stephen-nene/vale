import React,{useState} from "react";
import { Form, Input, Alert, message } from "antd";
import { AiOutlineMail, AiOutlineLock, AiOutlineHeart } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";

import { serverLogin } from "../requests/auth";
const Login = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userdata = useSelector((state) => state.user.userData);

  const onFinish = async (values) => {
    await serverLogin(values, navigate, dispatch);
  };

  const onFinishFailed = (errorInfo) => {
    // console.log("Failed:", errorInfo?.errorFields[0]);
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
            Welcome Back{" "}
            <span className="text-green-500 uppercase">
              {userdata?.username}
            </span>
          </h1>

          <Form
            form={form}
            name="login"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            layout="vertical"
            size="large"
          >
            <Form.Item
              name="identifier"
              rules={[
                {
                  required: true,
                  message: "Please input your email or username!",
                },
              ]}
            >
              <Input
                prefix={<AiOutlineMail className="text-gray-400" />}
                placeholder="Email or Username"
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

            <Form.Item>
              <button
                typeof="submit"
                className="w-full text-lg h-12 bg-pink-500 hover:bg-pink-600  rounded-lg"
              >
                Login
              </button>
            </Form.Item>
            <div className="text-xl text-gray-600 mb-3">
              Don't have an account yet?{" "}
              <Link
                to="/register"
                className="text-pink-500 hover:text-pink-600"
              >
                Register
              </Link>
            </div>
            <div className="text-xl text-gray-600">
              <Link to="/forgot" className="text-pink-500 hover:text-pink-600">
                Forgot password?
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
