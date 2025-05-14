import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import OnGoingIcon from "../assets/OnGoing.svg";
import CancelIcon from "../assets/Cancel.svg";
import DoneIcon from "../assets/Done.svg";
import ReplyIcon from "../assets/Reply.svg";
import { PetitionStats } from "../Interfaces";
import { useEffect, useState } from "react";
import { GetStats } from "../utils/Stats";
import { useNavigate } from "react-router-dom";

const Status = () => {
  gsap.registerPlugin(useGSAP);
  const [stats, setStats] = useState<PetitionStats>();
  const navigate = useNavigate();
  useGSAP(() => {
    const tl = gsap.timeline({});
    tl.fromTo(
      ".S1",
      { y: "10%", opacity: 0 },
      { y: 0, opacity: 1, duration: 0.2, delay: 0.5 }
    );
    tl.fromTo(
      ".S2",
      { x: "-10%", opacity: 0 },
      { x: 0, opacity: 1, duration: 0.2 }
    );
    tl.fromTo(
      ".S3",
      { y: "10%", opacity: 0 },
      { y: 0, opacity: 1, duration: 0.2 }
    );
    tl.fromTo(
      ".S4",
      { x: "10%", opacity: 0 },
      { x: 0, opacity: 1, duration: 0.2 }
    );
    tl.fromTo(
      ".S5",
      { y: "-10%", opacity: 0 },
      { y: 0, opacity: 1, duration: 0.2 }
    );
  }, []);
  useEffect(() => {
    const getStatus = async () => {
      const temp = await GetStats();
      setStats(temp.data.result);
    };
    getStatus();
  }, []);
  return (
    <div className="h-[200px] bg-white/60 w-full flex items-center justify-center">
      <div className="grid grid-cols-5 phone:w-[900px]">
        <div className="S1 flex flex-col items-center justify-center gap-5">
          <div className="text-Point w-full px-10 font-G">
            누적 동의 수 <br />
            <span className="text-black text-[18px] font-GL">
              {stats?.totalAgreementCount} 명
            </span>
          </div>
          <div className="text-Point w-full px-10 font-G">
            {stats?.thresholdAgreeCount}건 이상 <br />
            도달 청원 수 <br />
            <span className="text-black text-[20px] font-GL">
              {stats?.thresholdReachedCount} 건
            </span>
          </div>
        </div>

        <div
          onClick={() => navigate("/ongoing?page=0&size=10")}
          className="S2 flex flex-col items-center justify-center rounded-xl cursor-pointer phone:hover:bg-black/20 transition duration-300"
        >
          <img src={OnGoingIcon} className="size-[80px] text-Point mx-10" />
          <div className="text-Point px-10 font-G">
            진행중 <br />
            <span className="text-black text-[20px] font-GL">
              {stats?.ongoingCount} 건
            </span>
          </div>
        </div>

        <div
          onClick={() => navigate("/waiting?page=0&size=10")}
          className="S3 flex flex-col items-center justify-center rounded-xl cursor-pointer phone:hover:bg-black/20 transition duration-300"
        >
          <img src={CancelIcon} className="size-[80px] text-Point mx-10" />
          <div className="text-Point px-10 font-G">
            만료 <br />
            <span className="text-black text-[20px] font-GL">
              {stats?.expiredCount} 건
            </span>
          </div>
        </div>

        <div
          onClick={() => navigate("/waiting?page=0&size=10")}
          className="S4 flex flex-col items-center justify-center rounded-xl cursor-pointer phone:hover:bg-black/20 transition duration-300"
        >
          <img src={ReplyIcon} className="size-[80px] text-Point mx-10" />
          <div className="text-Point px-10 font-G">
            답변중 <br />
            <span className="text-black text-[20px] font-GL">
              {stats?.waitingCount} 건
            </span>
          </div>
        </div>

        <div
          onClick={() => navigate("/done?page=0&size=10")}
          className="S5 flex flex-col items-center justify-center rounded-xl cursor-pointer phone:hover:bg-black/20 transition duration-300"
        >
          <img src={DoneIcon} className="size-[80px] text-Point mx-10" />
          <div className="text-Point px-10 font-G">
            답변 완료 <br />
            <span className="text-black text-[20px] font-GL">
              {stats?.answeredCount} 건
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Status;
