import axios from "axios";

export const axiosInstance = axios.create({
  headers: {
    "Content-Type": "application/json"
  },
  timeout: 5000
});
