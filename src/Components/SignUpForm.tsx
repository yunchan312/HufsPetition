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
    <div className="border-2 phone:w-[90%] w-[300px] phone:px-10 px-3 border-neutral-300 h-[400px] phone:h-[400px] flex flex-col justify-around">
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
        <div className="flex phone:flex-row flex-col gap-1 self-start w-full">
          <input
            type="submit"
            value="인증 코드 전송"
            className="w-full border-2 rounded-md py-1 text-Point active:bg-Point/50 select-none cursor-pointer transition text-center"
          />
          <div
            className="rounded-md w-full py-1 bg-Point text-white border-2 border-Point active:bg-Point/50 cursor-pointer transition text-center"
            onClick={() => console.log("code")}
          >
            메일 인증
          </div>
          <input
            type="submit"
            value="회원가입"
            className="w-full border-2 rounded-md py-1 text-Point active:bg-Point/50 select-none cursor-pointer transition text-center"
          />
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
