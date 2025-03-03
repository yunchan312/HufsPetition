import { useForm } from "react-hook-form";

interface SignUpForm {
  email: string;
  code: string;
  password: string;
}
const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpForm>();
  const onSubmit = (data: SignUpForm) => {
    console.log(data);
  };
  return (
    <div className="border-2 w-[50%] px-10 border-neutral-300 h-[400px] flex flex-col py-10 justify-between">
      <div>회원가입</div>
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
          type="text"
          {...register("code", { required: true })}
          className="input"
          placeholder="메일 인증 코드"
        />
        <input
          type="password"
          {...register("password", { required: true })}
          className="input"
          placeholder="비밀번호"
        />
        {errors.email ? <p className="error">이메일을 확인해주세요</p> : null}
        <div className="flex gap-5 self-start">
          <input type="submit" value="인증 코드 전송" className="Btn" />
          <div className="greenBtn" onClick={() => console.log("code")}>
            메일 인증
          </div>
          <input type="submit" value="회원가입" className="Btn" />
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
