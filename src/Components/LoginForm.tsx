import { Dispatch, SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";
import { AdminAuth, UserAuth } from "../utils/Auth";
import { LoginProps } from "../Interfaces";
import { useSetRecoilState } from "recoil";
import { isAdmin } from "../atom";
import { useNavigate } from "react-router-dom";

const LoginForm = ({
  setter,
  setIsBoo,
}: {
  setter: Dispatch<SetStateAction<boolean>>;
  setIsBoo: Dispatch<SetStateAction<boolean>>;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginProps>();

  const setMode = useSetRecoilState(isAdmin);
  const navigate = useNavigate();
  const onSubmit = async (data: LoginProps) => {
    if (isAdminLogin) {
      try {
        const temp = await AdminAuth(data);
        if (temp.data.result.role === "ROLE_SUPER") {
          localStorage.setItem("isSuper", "true");
        }

        if (temp) {
          const tokens = temp.data.result.tokenDto;
          localStorage.setItem("admin_rt", tokens.refreshToken);
          localStorage.setItem("admin_at", tokens.accessToken);
          setMode(true);
          navigate("/");
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        const temp = await UserAuth(data);
        if (temp) {
          const tokens = temp.data.result.tokenDto;
          localStorage.setItem("rt", tokens.refreshToken);
          localStorage.setItem("at", tokens.accessToken);
          navigate("/");
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  const [isAdminLogin, setIsAdminLogin] = useState(false);

  return (
    <div className="border-2 phone:w-[850px] w-[90%] px-10 border-neutral-300 h-[300px] flex flex-col py-10 justify-between">
      <div>로그인</div>
      <form
        className="flex flex-col items-center gap-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type="email"
          {...register("email", { required: true })}
          className="input"
          placeholder="이메일"
        />
        {errors.email ? <p className="error">이메일을 확인해주세요</p> : null}
        <input
          onFocus={() => setIsBoo(true)}
          type="password"
          {...register("password", {
            required: true,
            onBlur: () => {
              setIsBoo(false);
            },
          })}
          className="input"
          placeholder="비밀번호"
        />
        {errors.password ? (
          <p className="error">비밀번호를 확인해주세요</p>
        ) : null}
        <div className="flex self-start items-center gap-2 phone:flex-row flex-col">
          <div className="flex gap-5 self-start items-center">
            <input type="submit" value="로그인" className="greenBtn" />
            <div className="Btn" onClick={() => setter(true)}>
              회원가입
            </div>
          </div>
          <label className="w-full flex items-center gap-1 cursor-pointer phone:text-[15px] text-[10px] py-1">
            <input
              type="checkbox"
              onChange={(e) => setIsAdminLogin(e.target.checked)}
            />
            관리자
          </label>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
