import { AxiosError } from "axios";
import { adminInstance, instanceAuth, instance } from "../Axios";
import { LoginProps } from "../Interfaces";

export const AdminAuth = async (data: LoginProps) => {
  const authRes = await instance
    .post("admin/login", data)
    .catch((err) => alert(err.message));

  return authRes;
};

export const UserAuth = async (data: LoginProps) => {
  const authRes = await instance
    .post("user/login", data)
    .catch((err) => console.log(err));

  return authRes;
};

export const LogOut = async () => {
  const ok = confirm("정말로 로그아웃 하시겠습니까?");
  if (ok) {
    try {
      if (localStorage.getItem("at")) {
        const temp: { isSuccess: boolean } = await instanceAuth.post(
          "user/logout"
        );
        if (temp.isSuccess) {
          localStorage.removeItem("at");
          localStorage.removeItem("rt");
          alert("로그아웃 되었습니다.");
          window.location.reload();
        }
      }
      if (localStorage.getItem("admin_at")) {
        const temp: { isSuccess: boolean } = await adminInstance.post(
          "admin/logout"
        );
        if (temp.isSuccess) {
          localStorage.removeItem("admin_at");
          localStorage.removeItem("admin_rt");
          alert("로그아웃 되었습니다.");
          window.location.reload();
        }
      }
    } catch (err) {
      if (err instanceof AxiosError) {
        console.log(err);
        if (err.response?.data.code === "COMMON4017") {
          localStorage.removeItem("admin_at");
          localStorage.removeItem("admin_rt");
          localStorage.removeItem("at");
          localStorage.removeItem("rt");
          alert("로그아웃 되었습니다.");
          window.location.pathname = "/login";
        } else {
          alert(err.response?.data.message);
        }
      }
    }
  }
};

export const IsLogged = () => {
  if (localStorage.getItem("at")) {
    return true;
  } else {
    return false;
  }
};
