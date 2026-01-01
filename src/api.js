// src/api.js
import axios from "axios";

// Use Vite environment variable for backend base URL
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL + "/api", // automatically picks from Vercel env
});

// Attach JWT token automatically
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token"); // get token from localStorage
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default api;
