import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "/api",
  headers: {
    accept: "*/*",
    "Content-Type": "application/json"
  },
  withCredentials: true,
  timeout: 5000
});
