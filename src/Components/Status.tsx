import { GiBackwardTime } from "react-icons/gi";
import { RiDeleteBin7Line } from "react-icons/ri";
import { MdHourglassTop } from "react-icons/md";
import { FaCheck } from "react-icons/fa";

const Status = () => {
  return (
    <div className="h-[200px] bg-white/60 grid grid-cols-5">
      <div className="flex flex-col items-center justify-center gap-5">
        <div className="text-Point w-full px-10">
          누적 동의 수 <br />
          <span className="text-black text-[20px]">159,347 명</span>
        </div>
        <div className="text-Point w-full px-10">
          5만건 이상 도달 청원 수 <br />
          <span className="text-black text-[20px]">194 건</span>
        </div>
      </div>
      <div className="flex flex-col items-end justify-center">
        <GiBackwardTime className="size-[100px] text-Point mx-10" />
        <div className="text-Point w-full px-10">
          진행중 <br />
          <span className="text-black text-[20px]">194 건</span>
        </div>
      </div>
      <div className="flex flex-col items-end justify-center">
        <RiDeleteBin7Line className="size-[100px] text-Point mx-10" />
        <div className="text-Point w-full px-10">
          만료 <br />
          <span className="text-black text-[20px]">194 건</span>
        </div>
      </div>
      <div className="flex flex-col items-end justify-center">
        <MdHourglassTop className="size-[100px] text-Point mx-10" />
        <div className="text-Point w-full px-10">
          답변 대기 <br />
          <span className="text-black text-[20px]">194 건</span>
        </div>
      </div>
      <div className="flex flex-col items-end justify-center">
        <FaCheck className="size-[100px] text-Point mx-10" />
        <div className="text-Point w-full px-10">
          답변 완료 <br />
          <span className="text-black text-[20px]">194 건</span>
        </div>
      </div>
    </div>
  );
};

export default Status;
