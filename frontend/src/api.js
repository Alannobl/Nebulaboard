import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8080",   // ✅ IMPORTANT
  withCredentials: false,   // set true only if using cookies/sessions
  timeout: 15000,
});

// JWT from localStorage -> Authorization header
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token"); // adjust your key
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});
