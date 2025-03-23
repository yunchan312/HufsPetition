import axios from "axios";
import { Reissue } from "./utils/Auth";

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
  async (err) => {
    alert(err.response?.data.message);
    console.log("Axios", err);

    Promise.reject(err);
  }
);

instanceAuth.interceptors.response.use(
  (response) => {
    return response;
  },
  async (err) => {
    alert(err.response?.data.message);
    console.log("Axios", err);
    if (err.response?.data.code === "USER4013") {
      try {
        const temp = await Reissue();
        const newToken = temp.data.result.tokenDto;
        localStorage.setItem("at", newToken.accessToken);
        localStorage.setItem("rt", newToken.accessToken);
      } catch (errs: any) {
        if (errs.response?.data.code === "USER4015") {
          localStorage.removeItem("at");
          localStorage.removeItem("rt");
          alert("토큰이 만료되었습니다. 다시 로그인해주세요.");
          window.location.replace(`${import.meta.env.VITE_BASE_URL}/login`);
        }
      }
    }
    if (err.response?.data.code === "COMMON4017") {
      localStorage.removeItem("at");
      localStorage.removeItem("rt");
      alert(
        "🥳기적적인 에러 극뽁!!!!!!!!🥳\n🎊🎉축하합니다 회원님!!🎊🎉\n로그아웃 되었습니다. 다시 로그인해주세요"
      );
      window.location.reload();
    }

    Promise.reject(err);
  }
);

adminInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (err) => {
    alert(err.response?.data.message);

    console.log("Axios", err);
    if (err.response?.data.code === "USER4013") {
      try {
        const temp = await Reissue();
        const newToken = temp.data.result.tokenDto;
        localStorage.setItem("admin_at", newToken.accessToken);
        localStorage.setItem("admin_rt", newToken.accessToken);
      } catch (errs: any) {
        if (errs.response?.data.code === "USER4015") {
          localStorage.removeItem("admin_at");
          localStorage.removeItem("admin_rt");
          alert("토큰이 만료되었습니다. 다시 로그인해주세요.");
          window.location.replace(`${import.meta.env.VITE_BASE_URL}/login`);
        }
      }
    }
    if (err.response?.data.code === "COMMON4017") {
      localStorage.removeItem("admin_at");
      localStorage.removeItem("admin_rt");
      alert(
        "🥳기적적인 에러 극뽁!!!!!!!!🥳\n🎊🎉축하합니다 회원님!!🎊🎉\n로그아웃 되었습니다. 다시 로그인해주세요"
      );
      window.location.reload();
    }

    Promise.reject(err);
  }
);
