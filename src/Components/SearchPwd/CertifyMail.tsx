import { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import { CertifyCode } from "../../utils/SignUp";
import { useCookies } from "react-cookie";

const CertifyMail = ({
  isVerified,
  setIsVerified,
  setIsLoading,
  email,
}: {
  isVerified: boolean;
  setIsVerified: Dispatch<SetStateAction<boolean>>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  email: string;
}) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<{ code: string }>();

  const [, setCookie] = useCookies(["email_token"]);

  const onVerify = async (data: { code: string }) => {
    try {
      setIsLoading(true);
      const res = await CertifyCode(email, data.code);
      if (res.data.isSuccess) {
        setCookie("email_token", res.data.result);
        setIsVerified(true);
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
      <form onSubmit={handleSubmit(onVerify)}>
        <div className="font-G">메일 인증하기</div>

        <input
          type="text"
          {...register("code", { required: true })}
          className="input"
          placeholder="인증 코드를 입력해주세요"
        />

        {errors.code ? (
          <p className="error">인증 코드를 확인해주세요</p>
        ) : (
          <p className="self-start text-green-500 text-[13px]">
            메일로 전송된 코드를 입력해주세요
          </p>
        )}
        {isVerified ? null : (
          <input type="submit" value="인증하기" className="hufsBtn my-2" />
        )}
      </form>
    </div>
  );
};

export default CertifyMail;
