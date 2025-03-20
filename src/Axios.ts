import axios from "axios";

export const instanceAuth = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
  timeout: 5000, // 5초로 증가
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("at")}`,
  },
});

export const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
  timeout: 5000, // 5초로 증가
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export const instanceRegister = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
  timeout: 5000, // 5초로 증가
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export const adminInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
  timeout: 5000, // 5초로 증가
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("admin_at")}`,
  },
});

instanceAuth.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("at"); // 매 요청마다 가져오기
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

adminInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("admin_at"); // 매 요청마다 가져오기
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => Promise.reject(error)
);
