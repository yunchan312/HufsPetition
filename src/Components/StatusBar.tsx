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
        <div className="flex phone:flex-col items-end">
          <GiBackwardTime className="phone:size-[130px] size-[100px] phone:self-start text-Point" />
          <div className="phone:text-[40px] text-[30px] phone:ml-0 ml-3 text-Hufs">
            청원 진행중
          </div>
        </div>
      );
    } else if (status === "waiting") {
      return (
        <div className="flex phone:flex-col items-end">
          <FaRegCircleCheck className="phone:size-[130px] size-[100px] phone:self-start text-Point" />
          <div className="phone:text-[40px] text-[30px] phone:ml-0 ml-3 text-Hufs">
            청원 종료
          </div>
        </div>
      );
    } else if (status === "done") {
      return (
        <div className="flex phone:flex-col items-end">
          <FaCheck className="phone:size-[130px] size-[100px] phone:self-start text-Point" />
          <div className="phone:text-[40px] text-[30px] phone:ml-0 ml-3 text-Hufs">
            답변 완료
          </div>
        </div>
      );
    }
  };
  return (
    <div className="bg-neutral-200 phone:grid phone:grid-cols-3 py-3 phone:px-5 phone:h-[250px] phone:w-[700px] flex flex-col gap-5">
      <div className="flex flex-col justify-around phone:border-r-2 border-neutral-300 px-5 gap-5">
        <div className="flex items-center justify-between phone:block">
          <div className="text-Point">참여 인원</div>
          <div className="text-[25px]">
            {counts.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
            명
          </div>
        </div>
        <div className="flex items-center justify-between phone:block">
          <div className="text-Point">카테고리</div>
          <div className="text-[25px]">{category}</div>
        </div>
      </div>

      <div className="flex flex-col justify-around phone:border-r-2 border-neutral-300 px-5 gap-5">
        <div className="flex items-center justify-between phone:block">
          <div className="text-Point">청원 시작</div>
          <div className="text-[25px]">{startdate}</div>
        </div>
        <div className="flex items-center justify-between phone:block">
          <div className="text-Point">카테고리</div>
          <div className="text-[25px]">{enddate}</div>
        </div>
      </div>

      <div className="pl-5">{selectIcons()}</div>
    </div>
  );
};
export default StatusBar;
