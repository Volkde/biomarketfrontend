import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
  timeout: 5000,
});

api.interceptors.request.use(config => {
  console.log("Sending request to:", config.url);
  return config;
});

api.interceptors.response.use(
  response => {
    console.log("Received response:", response.status, response.data);
    return response;
  },
  error => {
    console.error("Request failed:", error.response?.status, error.message);
    return Promise.reject(error);
  },
);

export default api;
