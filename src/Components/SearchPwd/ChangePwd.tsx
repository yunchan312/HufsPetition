import { useForm } from "react-hook-form";
import ToVisible from "../../assets/Visible.svg";
import ToNoVisible from "../../assets/Non-visible.svg";
import { Dispatch, SetStateAction, useState } from "react";
import { UpdatePassword } from "../../utils/Auth";
import { useNavigate } from "react-router-dom";

const ChangePwd = ({
  email,
  setIsLoading,
}: {
  email: string;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}) => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm<{ pwd: string; pwd2: string }>();
  const [visible, setVisible] = useState(false);
  const [v, setV] = useState(false);

  const onPwdChange = async (data: { pwd: string }) => {
    try {
      setIsLoading(true);
      const res = await UpdatePassword(email, data.pwd);
      if (res.data.isSuccess) {
        alert(res.data.message);
        const ok = confirm("로그인하러 가시겠습니까?");
        if (ok) {
          navigate("/login");
        } else {
          navigate("/");
        }
      }
    } catch (err: any) {
      console.log(err);
      alert(
        `${err.response.data.validation.email}\n${err.response.data.validation.password}`
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div>비밀번호 변경</div>
      <form onSubmit={handleSubmit(onPwdChange)}>
        {/* First input */}
        <div className="border-2 border-neutral-300 w-full flex items-center px-2 focus-within:border-0 focus-within:outline-Point/40 focus-within:outline-2 focus-within:rounded-sm">
          <input
            type={visible ? "text" : "password"}
            placeholder="새 비밀번호를 입력하세요"
            className="w-full h-full placeholder:text-Point/40 py-1 focus:outline-0"
            {...register("pwd", {
              required: "비밀번호를 입력해주세요!",
              minLength: {
                value: 8,
                message: "비밀번호는 8자 이상이어야 합니다.",
              },
              pattern: {
                value:
                  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,
                message: "영어+숫자+특수문자(@$!%*?&#)를 포함해야 합니다!",
              },
              validate: (value) =>
                !/[ㄱ-ㅎㅏ-ㅣ가-힣]/.test(value) ||
                "한글은 사용할 수 없습니다!",
            })}
          />
          <span onClick={() => setVisible((prev) => !prev)}>
            {visible ? (
              <img
                src={ToNoVisible}
                alt="visible"
                className="size-[20px] cursor-pointer"
              />
            ) : (
              <img
                src={ToVisible}
                alt="visible"
                className="size-[20px] cursor-pointer"
              />
            )}
          </span>
        </div>
        {errors.pwd ? (
          <p className="error text-[13px]">{errors.pwd.message}</p>
        ) : (
          <p className="text-[13px] text-green-400">
            비밀번호는 영어+숫자+특수문자(@$!%*?&#)를 포함한 8자 이상이어야
            합니다.
          </p>
        )}

        {/* Second Input */}
        <div className="mt-2 border-2 border-neutral-300 w-full flex items-center px-2 focus-within:border-0 focus-within:outline-Point/40 focus-within:outline-2 focus-within:rounded-sm">
          <input
            type={v ? "text" : "password"}
            placeholder="새 비밀번호를 다시 한번 입력해주세요"
            className="w-full h-full placeholder:text-Point/40 py-1 focus:outline-0"
            {...register("pwd2", {
              required: true,
              validate: {
                isValid: (val) => {
                  if (val !== getValues("pwd")) {
                    return "비밀번호가 일치하지 않습니다.";
                  }
                },
              },
            })}
          />
          <span onClick={() => setV((prev) => !prev)}>
            {v ? (
              <img
                src={ToNoVisible}
                alt="visible"
                className="size-[20px] cursor-pointer"
              />
            ) : (
              <img
                src={ToVisible}
                alt="visible"
                className="size-[20px] cursor-pointer"
              />
            )}
          </span>
        </div>
        {errors.pwd2 ? (
          <p className="error text-[13px]">{errors.pwd2.message}</p>
        ) : null}

        <input type="submit" value="변경하기" className="hufsBtn mt-2" />
      </form>
    </div>
  );
};

export default ChangePwd;
