import apiClient from "./apiClient";
import { message } from "antd";
// import { loginAction } from "../../store/actions/userAction";

export function showMessage(type, content, duration) {
  return message[type]({
    content,
    duration,
  });
}

export const getRequests = async (setSelectedRequest) => {
  try {
    const response = await apiClient.get("/requests");
    //   console.log(response);
      setSelectedRequest(response?.data);
    return response.data;
  } catch (error) {
    showMessage("error", error?.response?.data?.detail, 3);
    throw error;
  }
};

export const serverLogin = async (values, navigate, dispatch) => {
  const loadingMessage = message.loading("Logging in...", 0);
  try {
    const response = await apiClient.post("auth/login", values);
    // console.log(response)
    if (response.status === 200) {
      showMessage("success", response?.data?.message, 2);
      dispatch(loginAction(response?.data?.User));
      console.log(response?.data);
    //   navigate("/dashboard");
      return response.data;
    } else {
      showMessage("error", "Login Failed", 2);
    //   throw new Error("Login failed");
    }
  } catch (error) {
    // console.error("Error response:", error.response?.data?.detail);
    showMessage("error", error?.response?.data?.detail, 3);
  } finally {
    loadingMessage();
  }
};