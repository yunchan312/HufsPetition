import { useNavigate } from "react-router-dom";
import WarningIcon from "./assets/Warning.svg";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center gap-2">
      <img src={WarningIcon} alt="icon" className="size-[200px]" />
      <div className="text-[20px]">존재하지 않는 페이지입니다.</div>
      <div className="hufsBtn rounded-md" onClick={() => navigate("/")}>
        홈으로 돌아가기
      </div>
    </div>
  );
};

export default NotFound;
