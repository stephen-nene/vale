import apiClient from "./apiClient";
import { message } from "antd";
import { loginAction, logoutAction } from "../../store/actions/userAction";

export function showMessage(type, content, duration) {
  return message[type]({
    content,
    duration,
  });
}

export async function resetPassword(data, navigate) {
  try {
    const response = await apiClient.post("/reset_password", data);
    // console.log(response)
    if (response.data.message) {
      setTimeout(() => {
        navigate("/login");
      }, 3000);
      showMessage("success", response.data.message);
    }
    return response;
  } catch (error) {
    const errorMessage =
      error.response?.data?.detail || "Failed to reset password. Try again.";
    // showMessage("error", errorMessage);
    throw error;
  }
}

export const getCurrentUser = async (dispatch) => {
  try {
    const response = await apiClient.get("/auth/me");

      if (response.status === 200) {
        console.log(response.data)
    //   showMessage("success", `welcome ${response.data.name}`, 1);
      dispatch(loginAction(response?.data?.User));
      return response;
    }
  } catch (error) {
    console.log(error.response?.data);
    showMessage("error", error?.response?.data?.detail || "An error occurred", 3);
    // throw error
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
      navigate("/profile");
      return response.data;
    } else {
      showMessage("error", "Login Failed", 2);
    //   throw new Error("Login failed");
    }
  } catch (error) {
    console.error("Error response:", error.response);
    showMessage("error", error?.response?.data?.detail, 3);
  } finally {
    loadingMessage();
  }
};

export const serverSignup = async (values, navigate,setError) => {
  const loadingMessage = message.loading("Signing up...", 0);

  try {
    const response = await apiClient.post("/auth/signup", values); // Use the custom Axios instance
    if (response.status === 201) {
      console.log(response.data);
      loadingMessage();
      showMessage("success", response?.data?.detail, 3);
      //   navigate("/login");
      return response.data;
    }
  } catch (error) {
    // console.error("Error response:", error.response?.data);
    const serverErrors = error.response?.data;

    // Flatten the error messages into an array
    const formattedErrors = [];
    for (const [key, messages] of Object.entries(serverErrors)) {
      messages.forEach((msg) => {
        formattedErrors.push(`${key}: ${msg}`);
      });
    }
    setError(formattedErrors);
  } finally {
    loadingMessage();
  }
};

export const serverLogout = async (dispatch, navigate) => {
  console.log("Server Logout");
  try {
    const response = await apiClient.post("/auth/logout");
    if (response.status === 200) {
      showMessage("success", response?.data?.message, 2);
      // console.log("logout",response)
      dispatch(logoutAction());
      navigate("/");
      return response.data;
    } else {
      showMessage("error", "Logout Failed", 2);
      throw new Error("Logout failed");
    }
  } catch (error) {
    console.error("Error response:", error);
    showMessage("error", error?.response?.data?.error, 3);
  }
};

export const serverForgotPass = async (email) => {
  try {
    const response = await apiClient.post("/send_otp", email);
    if (response.status === 200) {
      showMessage("success", response?.data?.message, 2);
      return response.data;
    } else {
      showMessage("error", "Failed to send password reset email", 2);
      throw new Error("Failed to send password reset email");
    }
  } catch (error) {
    showMessage("error", error?.response?.data?.detail, 3);
    throw error;
  }
};
