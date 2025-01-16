import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;
// const API_URL = import.meta.env.VITE_API_URL;
console.log(API_URL)
const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});


export default apiClient