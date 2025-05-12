import { useNavigate } from "react-router-dom";
import Warning from "../assets/Warning.svg";

const NoData = () => {
  const navigate = useNavigate();
  const isSuper = localStorage.getItem("isSuper");
  console.log(isSuper);
  return (
    <div className="h-[50vh]">
      <div className="flex flex-col items-center justify-center gap-2 h-full">
        <img src={Warning} alt="warning" className="size-[100px] mt-10" />
        <div>해당하는 청원이 없습니다.</div>
        <div className="w-[300px]">
          {isSuper ? null : (
            <div
              className="hufsBtn rounded-md"
              onClick={() => navigate("/petition")}
            >
              내가 청원하러 가기
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NoData;
