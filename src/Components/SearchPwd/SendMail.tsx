import { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import { SendCode } from "../../utils/SignUp";

const SendMail = ({
  setIsCodeSend,
  isCodeSend,
  setIsLoading,
  setMail,
}: {
  setIsCodeSend: Dispatch<SetStateAction<boolean>>;
  isCodeSend: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setMail: Dispatch<SetStateAction<string>>;
}) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<{ email: string }>();

  const onCodeSend = async (data: { email: string }) => {
    setMail(data.email);
    try {
      setIsLoading(true);
      const res = await SendCode(data.email);
      if (res.data.isSuccess) {
        setIsCodeSend(true);
        alert(res.data.message);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onCodeSend)}>
        <div className="font-G">이메일</div>

        <input
          type="email"
          {...register("email", { required: true })}
          className="input"
          placeholder="가입했던 학교 이메일을 입력해주세요"
        />

        {errors.email ? <p className="error">이메일을 확인해주세요</p> : null}
        {isCodeSend ? null : (
          <input
            type="submit"
            value="인증 메일 발송"
            className="hufsBtn my-2"
          />
        )}
      </form>
    </div>
  );
};

export default SendMail;
