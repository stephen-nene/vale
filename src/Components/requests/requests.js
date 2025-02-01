import apiClient from "./apiClient";
import { message } from "antd";
import { setSpeedDate } from "../../store/actions/appAction";

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

export const getChatById = async (id, setRequest) => {
  const loadingMessage = showMessage("loading","getting speed date...", 0);
  try {
    const response = await apiClient.get(`/speed_date/${id}`);
    // console.log(response.data);
    if (response.status === 200) { 
      setRequest(response.data.speed_date);
      return response.data;
    }
  } catch (error) {
    console.error(error.response?.data);
    showMessage("error", error?.response?.data?.detail|| "try again later!", 3);
    throw error;
  } finally {
    loadingMessage();
  }
};

export const getSpeedDates = async (dispatch, mine = false,setIsPublic) => {
  const loadingMessage = showMessage("loading","getting speed dates...", 0);
  try {
    const response = await apiClient.get("/speed_dates", {
      params: { mine: mine },
    });
    if (response.status === 200) {
      dispatch(setSpeedDate(response.data?.speed_dates));
      return response.data;
    }
  } catch (error) {
    setIsPublic(false);
    console.log("error", error?.response?.data);
    showMessage("error", error?.response?.data?.detail || "Try again later", 1);
  } finally {
    loadingMessage();
  }
};

export const createSpeedDate = async ( data,navigate) => {
  const loadingMessage = showMessage("loading","creating speed date...", 0);
  try {
    const response = await apiClient.post("/speed_dates", data);
    // console.log(response.data);
    if (response.status === 201) {
      console.log(response)
      showMessage("success", response?.data?.message, 2);
      navigate(-1)
      // dispatch(setSpeedDate(response.data.speed_date));
      return response.data;
    }
  } catch (error) {
    console.error(error.response);
    showMessage("error", error?.response?.data?.detail, 3);
  } finally {
    loadingMessage();
  }
}

export const handleRequestToConnect = async (speeddate_id, setRequest) => {
  const loadingMessage = showMessage("loading","adding to chatroom...", 0);
  try {
    const response = await apiClient.post("/speeddates/participants", {
      speed_date_id: speeddate_id,
    });
    console.log(response.data.speed_date);
    if (response.status === 200) {
      showMessage("success", response?.data?.message, 2);
      setRequest(response.data.speed_date);
      // return response.data;
    } else {
      showMessage("error", "Failed to connect", 2);
    }
  } catch (error) {
    console.log(error.response);
    showMessage("error", error?.response?.data?.detail, 3);
  } finally {
    loadingMessage();
  }
};

export const getSpeedDateChats = async (
  speed_date_id,
  participant_id,
  setMessages
) => {
  const loadingMessage = message.loading("Loading chats...", 0);
  try {
    const response = await apiClient.get(`/speeddates/chats`, {
      params: {
        speed_date_id,
        participant_id,
      },
    });
    // console.log(response.data);
    if (response.status === 200) {
      setMessages(response.data.chats);
      return response.data;
    }
  } catch (error) {
    console.error("Error response:", error.response);
    showMessage("error", error?.response?.data?.detail, 3);
  } finally {
    loadingMessage();
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
