import { GiBackwardTime } from "react-icons/gi";
import { RiDeleteBin7Line } from "react-icons/ri";
import { MdHourglassTop } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Status = () => {
  gsap.registerPlugin(useGSAP);
  useGSAP(() => {
    const tl = gsap.timeline({});
    tl.fromTo(
      ".S1",
      { y: "10%", opacity: 0 },
      { y: 0, opacity: 1, duration: 0.3, delay: 0.5 }
    );
    tl.fromTo(
      ".S2",
      { y: "10%", opacity: 0 },
      { y: 0, opacity: 1, duration: 0.3 }
    );
    tl.fromTo(
      ".S3",
      { y: "10%", opacity: 0 },
      { y: 0, opacity: 1, duration: 0.3 }
    );
    tl.fromTo(
      ".S4",
      { y: "10%", opacity: 0 },
      { y: 0, opacity: 1, duration: 0.3 }
    );
    tl.fromTo(
      ".S5",
      { y: "10%", opacity: 0 },
      { y: 0, opacity: 1, duration: 0.3 }
    );
  }, []);
  return (
    <div className="h-[200px] bg-white/60 w-full flex items-center justify-center">
      <div className="grid grid-cols-5 max-w-[1500px]">
        <div className="S1 flex flex-col items-center justify-center gap-5">
          <div className="text-Point w-full px-10">
            누적 동의 수 <br />
            <span className="text-black text-[20px]">159,347 명</span>
          </div>
          <div className="text-Point w-full px-10">
            5만건 이상 도달 청원 수 <br />
            <span className="text-black text-[20px]">194 건</span>
          </div>
        </div>

        <div className="S2 flex flex-col items-end justify-center">
          <GiBackwardTime className="size-[100px] text-Point mx-10" />
          <div className="text-Point w-full px-10">
            진행중 <br />
            <span className="text-black text-[20px]">194 건</span>
          </div>
        </div>

        <div className="S3 flex flex-col items-end justify-center">
          <RiDeleteBin7Line className="size-[100px] text-Point mx-10" />
          <div className="text-Point w-full px-10">
            만료 <br />
            <span className="text-black text-[20px]">194 건</span>
          </div>
        </div>

        <div className="S4 flex flex-col items-end justify-center">
          <MdHourglassTop className="size-[100px] text-Point mx-10" />
          <div className="text-Point w-full px-10">
            답변 대기 <br />
            <span className="text-black text-[20px]">194 건</span>
          </div>
        </div>

        <div className="S5 flex flex-col items-end justify-center">
          <FaCheck className="size-[100px] text-Point mx-10" />
          <div className="text-Point w-full px-10">
            답변 완료 <br />
            <span className="text-black text-[20px]">194 건</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Status;
