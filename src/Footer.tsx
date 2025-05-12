import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-neutral-200 text-neutral-600 h-[300px] py-5 px-10 mt-10">
      <div className="flex items-center phone:text-[30px] text-[25px] font-bold mb-5">
        한국외대 신문고
      </div>
      <div className="pb-5 border-b-2 text-[13px]">© Team Hufstory. 2025.</div>

      <div className="grid grid-cols-2 py-4 text-[13px]">
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

        <div className="">
          <div className="">About us</div>
          <div>BE 융떠</div>
          <div>BE 떼여니</div>
          <div>FE 구윤찬</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
