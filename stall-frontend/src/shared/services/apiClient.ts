import axios, { CanceledError } from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:7000/api/v1",
  headers: {
    Authorization: `bearer ${localStorage.getItem("token")}`,
  },
});

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // Fetch token on every request
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { CanceledError };
export default apiClient;
