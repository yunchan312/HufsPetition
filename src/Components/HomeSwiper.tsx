import OnGoingIcon from "../assets/OnGoing.svg";
import CancelIcon from "../assets/Cancel.svg";
import DoneIcon from "../assets/Done.svg";
import ReplyIcon from "../assets/Reply.svg";
import { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { PetitionStats } from "../Interfaces";

const HomeSwiper = (props: PetitionStats) => {
  gsap.registerPlugin(useGSAP);

  const [now, setNow] = useState(0);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo(".now", { opacity: 0 }, { opacity: 1, duration: 1.5 });
    tl.fromTo(
      ".now",
      { opacity: 1 },
      {
        opacity: 0,
        duration: 1.5,
        delay: 3,
        onComplete: () => setNow((now + 1) % 3),
      }
    );
  }, [now]);

  const SelectCard = (target: number) => {
    if (target === 0) {
      return (
        <div className="flex flex-col items-center justify-center gap-3 font-G pt-[20px]">
          <div className="text-Point px-10 text-[20px]">
            누적 동의 수 <br />
            <div className="text-black text-[20px] w-full text-center">
              {props.totalAgreementCount} 명
            </div>
          </div>
          <div className="text-Point px-10 font-G text-[20px]">
            {props.thresholdAgreeCount}건 이상 도달 청원 수 <br />
            <div className="text-center text-black text-[20px]">
              {props.thresholdReachedCount} 건
            </div>
          </div>
        </div>
      );
    } else if (target === 1) {
      return (
        <div className="flex items-center justify-center gap-3">
          <div className="font-G flex flex-col items-center justify-center pt-5">
            <div className="text-Point px-10 text-[20px]">진행중</div>
            <img src={OnGoingIcon} className="size-[80px] text-Point mx-10" />
            <span className="text-black text-[20px] py-2">
              {props.ongoingCount} 건
            </span>
          </div>
          <div className="font-G flex flex-col items-center justify-center pt-5">
            <div className="text-Point px-10 text-[20px]">만료</div>
            <img src={CancelIcon} className="size-[80px] text-Point mx-10" />
            <span className="text-black text-[20px] py-2">
              {props.expiredCount} 건
            </span>
          </div>
        </div>
      );
    } else if (target === 2) {
      return (
        <div className="flex items-center justify-center gap-3">
          <div className="font-G flex flex-col items-center justify-center pt-5">
            <div className="text-Point px-10 text-[20px]">답변중</div>
            <img src={ReplyIcon} className="size-[80px] text-Point mx-10" />
            <span className="text-black text-[20px] py-2">
              {props.answeredCount} 건
            </span>
          </div>
          <div className="font-G flex flex-col items-center justify-center pt-5">
            <div className="text-Point px-10 text-[20px]">답변 완료</div>
            <img src={DoneIcon} className="size-[80px] text-Point mx-10" />
            <span className="text-black text-[20px] py-2">
              {props.answeredCount} 건
            </span>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="relative overflow-hidden w-full">
      <div className="h-[300px] *:pt-[70px]">
        <div className="now w-full h-full">{SelectCard(now)}</div>
      </div>
    </div>
  );
};

export default HomeSwiper;
