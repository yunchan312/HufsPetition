import { useNavigate } from "react-router-dom";
import Hufstory from "./assets/hufstory_black.png";
import { Withdraw } from "./utils/Auth";

const Footer = () => {
  const navigate = useNavigate();
  const isLogged = localStorage.getItem("at");
  return (
    <div className="bg-neutral-200 text-neutral-600 h-[300px] py-5 px-10 mt-10">
      <div className="flex items-center phone:text-[30px] text-[25px] font-bold mb-5">
        한국외대 신문고
      </div>
      <div className="pb-5 border-b-2 text-[13px]">© Team la VOZ. 2025.</div>

      <div className="py-4 text-[13px]">
        <div>
          <div
            onClick={() => navigate("/legals?policy=false")}
            className="phone:hover:underline underline-offset-3 phone:hover:font-G cursor-pointer"
          >
            개인정보처리방침
          </div>
          <div
            onClick={() => navigate("/legals?policy=true")}
            className="phone:hover:underline underline-offset-3 phone:hover:font-G cursor-pointer"
          >
            운영정책
          </div>
          {isLogged ? (
            <div
              onClick={async () => {
                const ok = confirm("정말로 탈퇴하시겠습니까?");
                if (ok) {
                  const really = confirm("진짜로 탈퇴하시겠습니까?");
                  if (really) {
                    const res = await Withdraw();
                    if (res.data.isSuccess) {
                      localStorage.clear();
                      window.location.reload();
                      navigate(`/`);
                    }
                  } else {
                    alert("휴~~ 다행입니다!!");
                  }
                }
              }}
              className="phone:hover:underline underline-offset-3 phone:hover:font-G cursor-pointer"
            >
              회원탈퇴
            </div>
          ) : null}
        </div>

        {/* <Link
          to="https://www.google.com"
          className="w-full flex items-center justify-between flex-row-reverse"
        >
          <div className="opacity-50 cursor-pointer phone:hover:opacity-30 transition duration-500">
            <img src={Hufstory} alt="logoo" className="w-22" />
            <div className="text-center font-G">la VOZ</div>
          </div>
        </Link> */}

        <div className="w-full flex items-center justify-between flex-row-reverse">
          <div className="opacity-50 cursor-pointer phone:hover:opacity-30 transition duration-500">
            <img src={Hufstory} alt="logoo" className="w-22" />
            <div className="text-center font-G">la VOZ</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
