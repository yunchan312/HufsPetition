import { Link, useNavigate } from "react-router-dom";
import Hufstory from "./assets/hufstory_black.png";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-neutral-200 text-neutral-600 h-[300px] py-5 px-10 mt-10">
      <div className="flex items-center phone:text-[30px] text-[25px] font-bold mb-5">
        한국외대 신문고
      </div>
      <div className="pb-5 border-b-2 text-[13px]">© Team VOZ. 2025.</div>

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
        </div>

        <Link
          to="https://www.google.com"
          className="w-full flex items-center justify-between flex-row-reverse"
        >
          <div className="opacity-50 cursor-pointer phone:hover:opacity-30 transition duration-500">
            <img src={Hufstory} alt="logoo" className="w-22" />
            <div className="text-center font-G">V O Z</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
