import axios from "axios";

const API_BASE = "https://localhost:44352/api";

const api = axios.create({
  baseURL: API_BASE,
});

// Attach JWT automatically
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
