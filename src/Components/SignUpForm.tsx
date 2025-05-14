import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { CertifyCode, Register, SendCode } from "../utils/SignUp";
import { SignUpFormProps } from "../Interfaces";
import { SyncLoader } from "react-spinners";
import BrowserInfo from "../utils/BrowserInfo";
import { useSetRecoilState } from "recoil";
import { isSafariModal } from "../atom";

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    getValues,
  } = useForm<SignUpFormProps>();

  const onSubmit = async (data: SignUpFormProps) => {
    const temp = await Register(data.email, data.password);
    if (temp.data.isSuccess) {
      alert(temp.data.message);
      window.location.reload();
    }
  };

  const onSendCode = async (email: string) => {
    setIsLoading(true);
    const temp = await SendCode(email);
    alert(temp.data.message);
    setIsLoading(false);
  };

  const [isLoading, setIsLoading] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [isCoded, setIsCoded] = useState(false);
  const [email, setEmail] = useState("");
  const setIsSafariModal = useSetRecoilState(isSafariModal);

  let code = watch("code");

  useEffect(() => {
    const browserInfo = BrowserInfo();
    console.log(browserInfo);

    setIsSafariModal(true);
  }, []);
  return (
    <div className="border-2 rounded-md phone:w-[900px] w-[90%] phone:px-10 px-3 border-neutral-300 h-[400px] phone:h-[400px] flex flex-col justify-around">
      {isLoading ? (
        <div className="w-full flex items-center justify-center">
          <SyncLoader color="#00677f" />
        </div>
      ) : (
        <>
          <div>회원가입</div>
          <form
            className="flex flex-col items-center gap-2"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="grid grid-cols-[2fr_1fr] w-full">
              {isEmailSent ? (
                <div className="input bg-Point/20 text-black rounded-l-md">
                  {email}
                </div>
              ) : (
                <input
                  type="email"
                  {...register("email", { required: true })}
                  className="input  rounded-l-md"
                  placeholder="이메일"
                  onChange={(e) => setEmail(e.target.value)}
                />
              )}
              <div
                className="w-full rounded-r-md border-2 text-[13px] py-1 text-Point active:bg-Point/50 select-none cursor-pointer transition text-center"
                onClick={() => {
                  if (!isEmailSent) {
                    onSendCode(email);
                    setIsEmailSent(true);
                  } else {
                    alert(
                      "이미 전송되었습니다. 만약 오지 않았다면, 스팸메일함을 확인해주세요."
                    );
                  }
                }}
              >
                인증 코드 전송
              </div>

              {errors.email ? (
                <p className="error">이메일을 확인해주세요</p>
              ) : null}
            </div>
            <div className="w-full grid grid-cols-[2fr_1fr]">
              {isCoded ? (
                <div className="input bg-Point/20 text-black rounded-l-md">
                  {code}
                </div>
              ) : (
                <input
                  type="text"
                  {...register("code", { required: true })}
                  className="input rounded-l-md"
                  placeholder="메일 인증 코드"
                />
              )}
              <div
                className="w-full py-1 rounded-r-md bg-Point text-white border-2 border-Point active:bg-Point/50 cursor-pointer transition text-center text-[15px]"
                onClick={async () => {
                  if (!isCoded) {
                    try {
                      setIsLoading(true);
                      const temp = await CertifyCode(email, code);
                      if (temp.data.isSuccess) {
                        alert(temp.data.message);
                        setIsCoded(true);
                      }
                    } catch (err) {
                      console.log(err);
                    } finally {
                      setIsLoading(false);
                    }
                  }
                }}
              >
                메일 인증
              </div>
            </div>
            {isCoded ? (
              <>
                <input
                  type="password"
                  {...register("password", {
                    required: "비밀번호를 입력해주세요!",
                    minLength: {
                      value: 8,
                      message: "비밀번호는 8자 이상이어야 합니다.",
                    },
                    pattern: {
                      value:
                        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,
                      message:
                        "영어+숫자+특수문자(@$!%*?&#)를 포함해야 합니다!",
                    },
                    validate: (value) =>
                      !/[ㄱ-ㅎㅏ-ㅣ가-힣]/.test(value) ||
                      "한글은 사용할 수 없습니다!",
                  })}
                  className="input"
                  placeholder="비밀번호"
                />
                {errors.password ? (
                  <p className="error text-[13px]">{errors.password.message}</p>
                ) : null}
                <input
                  type="password"
                  {...register("passwordCheck", {
                    required: true,
                    validate: {
                      isValid: (val) => {
                        if (val !== getValues("password")) {
                          return "비밀번호가 일치하지 않습니다.";
                        }
                      },
                    },
                  })}
                  className="input"
                  placeholder="비밀번호 확인"
                />
                {errors.passwordCheck ? (
                  <p className="error text-[13px]">
                    {errors.passwordCheck.message}
                  </p>
                ) : null}
              </>
            ) : (
              <div className="input bg-neutral-300 text-white">
                메일 인증을 먼저 해주세요
              </div>
            )}

            <div className="flex phone:flex-row flex-col gap-1 self-start w-full">
              <input
                type="submit"
                value="회원가입"
                className="w-full border-2 rounded-md py-1 text-Point active:bg-Point/50 select-none cursor-pointer transition text-center"
              />
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default SignUpForm;
