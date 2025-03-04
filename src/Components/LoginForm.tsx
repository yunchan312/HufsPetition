import { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";

interface LoginProps {
  email: string;
  password: string;
}

const LoginForm = ({
  setter,
}: {
  setter: Dispatch<SetStateAction<boolean>>;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginProps>();
  const onSubmit = (data: LoginProps) => {
    console.log(data);
  };
  return (
    <div className="border-2 phone:w-[90%] w-[300px] px-10 border-neutral-300 h-[300px] flex flex-col py-10 justify-between">
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
          type="password"
          {...register("password", { required: true })}
          className="input"
          placeholder="비밀번호"
        />
        {errors.password ? (
          <p className="error">비밀번호를 확인해주세요</p>
        ) : null}
        <div className="flex gap-5 self-start">
          <input type="submit" value="로그인" className="greenBtn" />
          <div className="Btn" onClick={() => setter(true)}>
            회원가입
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
