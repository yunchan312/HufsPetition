import { useState } from "react";
import LoginForm from "../Components/LoginForm";
import SignUpForm from "../Components/SignUpForm";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  return (
    <div className="h-[100vh] flex flex-col items-center justify-center gap-10">
      <div className="text-[35px]">한국외대 신문고</div>
      <div>서비스를 이용하기 위해서는 한국 외대생임을 인증해야 합니다.</div>
      {isSignUp ? <SignUpForm /> : <LoginForm setter={setIsSignUp} />}
    </div>
  );
};

export default Login;
