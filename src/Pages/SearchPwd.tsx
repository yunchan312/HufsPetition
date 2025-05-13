import PageTitle from "../Components/PageTitle";
import { useState } from "react";
import { SyncLoader } from "react-spinners";
import SendMail from "../Components/SearchPwd/SendMail";
import CertifyMail from "../Components/SearchPwd/CertifyMail";
import ChangePwd from "../Components/SearchPwd/ChangePwd";
import { CookiesProvider } from "react-cookie";

const SearchPwd = () => {
  const [isCodeSend, setIsCodeSend] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [mail, setMail] = useState("");
  const [isVerified, setIsVerified] = useState(false);

  return (
    <div className="w-full">
      <PageTitle title="비밀번호 찾기" />
      {isLoading ? (
        <div className="w-full flex items-center justify-center py-24">
          <SyncLoader color="#00677f" />
        </div>
      ) : (
        <div className="px-5">
          {/* 메일 전송 */}
          <section className="my-3">
            {isCodeSend ? (
              <div className="input bg-Point/20 text-black rounded-l-md">
                {mail}
              </div>
            ) : (
              <SendMail
                setIsLoading={setIsLoading}
                isCodeSend={isCodeSend}
                setIsCodeSend={setIsCodeSend}
                setMail={setMail}
              />
            )}
          </section>

          {/* 메일인증 */}
          <section className="my-3">
            {isCodeSend ? (
              isVerified ? (
                <div className="input bg-Point/20 text-black rounded-l-md">
                  인증이 완료되었습니다.
                </div>
              ) : (
                <CookiesProvider>
                  <CertifyMail
                    email={mail}
                    setIsLoading={setIsLoading}
                    isVerified={isVerified}
                    setIsVerified={setIsVerified}
                  />
                </CookiesProvider>
              )
            ) : null}
          </section>

          {/* 비밀번호 변경 */}
          {isCodeSend ? (
            isVerified ? (
              <section className="my-3">
                <ChangePwd email={mail} setIsLoading={setIsLoading} />
              </section>
            ) : null
          ) : null}
        </div>
      )}
    </div>
  );
};

export default SearchPwd;
