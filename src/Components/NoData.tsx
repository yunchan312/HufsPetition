import { useNavigate } from "react-router-dom";
import Warning from "../assets/Warning.svg";

const NoData = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center gap-2 h-[50vh]">
      <img src={Warning} alt="warning" className="size-[100px] mt-10" />
      <div>해당하는 청원이 없습니다.</div>
      <div className="hufsBtn rounded-md" onClick={() => navigate("/petition")}>
        내가 청원하러 가기
      </div>
    </div>
  );
};

export default NoData;
