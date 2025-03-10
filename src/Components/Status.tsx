import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import OnGoingIcon from "../assets/OnGoing.svg";
import CancelIcon from "../assets/Cancel.svg";
import DoneIcon from "../assets/Done.svg";
import ReplyIcon from "../assets/Reply.svg";

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
      <div className="grid grid-cols-5 phone:w-[900px]">
        <div className="S1 flex flex-col items-center justify-center gap-5">
          <div className="text-Point w-full px-10 font-G">
            누적 동의 수 <br />
            <span className="text-black text-[18px] font-GL">159,347 명</span>
          </div>
          <div className="text-Point w-full px-10 font-G">
            5만건 이상 <br />
            도달 청원 수 <br />
            <span className="text-black text-[20px] font-GL">194 건</span>
          </div>
        </div>

        <div className="S2 flex flex-col items-center justify-center">
          <img src={OnGoingIcon} className="size-[80px] text-Point mx-10" />
          <div className="text-Point px-10 font-G">
            진행중 <br />
            <span className="text-black text-[20px] font-GL">194 건</span>
          </div>
        </div>

        <div className="S3 flex flex-col items-center justify-center">
          <img src={CancelIcon} className="size-[80px] text-Point mx-10" />
          <div className="text-Point px-10 font-G">
            만료 <br />
            <span className="text-black text-[20px] font-GL">194 건</span>
          </div>
        </div>

        <div className="S4 flex flex-col items-center justify-center">
          <img src={ReplyIcon} className="size-[80px] text-Point mx-10" />
          <div className="text-Point px-10 font-G">
            답변중 <br />
            <span className="text-black text-[20px] font-GL">194 건</span>
          </div>
        </div>

        <div className="S5 flex flex-col items-center justify-center">
          <img src={DoneIcon} className="size-[80px] text-Point mx-10" />
          <div className="text-Point px-10 font-G">
            답변 완료 <br />
            <span className="text-black text-[20px] font-GL">194 건</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Status;
