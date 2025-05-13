import { useState } from "react";
import LoginForm from "../Components/LoginForm";
import SignUpForm from "../Components/SignUpForm";
import OpenBoo from "../assets/OpenBoo.png";
import ClosedBoo from "../assets/ClosedBoo.png";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isBoo, setIsBoo] = useState(false);
  return (
    <div className="h-[100vh] flex flex-col items-center justify-center gap-2 mt-5 w-full">
      <div className="text-[35px]">한국외대 신문고</div>
      <img src={isBoo ? ClosedBoo : OpenBoo} alt="" className="size-52" />
      <div className="phone:w-[700px] w-[300px] text-center">
        서비스를 이용하기 위해서는 <br /> 한국 외대생임을 인증해야 합니다.
      </div>
      {isSignUp ? (
        <SignUpForm />
      ) : (
        <LoginForm setter={setIsSignUp} setIsBoo={setIsBoo} />
      )}
    </div>
  );
};

export default Login;
