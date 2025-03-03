import { FaCheck } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";
import { GiBackwardTime } from "react-icons/gi";

const StatusBar = ({
  status,
  counts,
  category,
  startdate,
  enddate,
}: {
  status: string;
  counts: number;
  category: string;
  startdate: string;
  enddate: string;
}) => {
  const selectIcons = () => {
    if (status === "ongoing") {
      return (
        <div className="flex flex-col">
          <GiBackwardTime className="size-[140px] self-end text-Point" />
          <div className="text-[40px] text-Hufs">청원 진행중</div>
        </div>
      );
    } else if (status === "waiting") {
      return (
        <div className="flex flex-col">
          <FaRegCircleCheck className="size-[130px] self-end text-Point" />
          <div className="text-[40px] text-Hufs">청원 종료</div>
        </div>
      );
    } else if (status === "done") {
      return (
        <div className="flex flex-col">
          <FaCheck className="size-[130px] self-end text-Point" />
          <div className="text-[40px] text-Hufs">답변 완료</div>
        </div>
      );
    }
  };
  return (
    <div className="border-2 grid grid-cols-3 py-3 px-5 h-[250px] w-[60%]">
      <div className="flex flex-col justify-around border-r-2 px-5">
        <div>
          <div className="text-Point">참여 인원</div>
          <div className="text-[25px]">
            {counts.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}{" "}
            명
          </div>
        </div>
        <div>
          <div className="text-Point">카테고리</div>
          <div className="text-[25px]">{category}</div>
        </div>
      </div>

      <div className="flex flex-col justify-around border-r-2 px-5">
        <div>
          <div className="text-Point">청원 시작</div>
          <div className="text-[25px]">{startdate}</div>
        </div>
        <div>
          <div className="text-Point">카테고리</div>
          <div className="text-[25px]">{enddate}</div>
        </div>
      </div>

      <div className="pl-5">{selectIcons()}</div>

      <div></div>
    </div>
  );
};
export default StatusBar;
