import OnGoingIcon from "../assets/OnGoing.svg";
import CancelIcon from "../assets/Cancel.svg";
import DoneIcon from "../assets/Done.svg";
import ReplyIcon from "../assets/Reply.svg";
import { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const HomeSwiper = () => {
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
        onComplete: () => setNow((now + 1) % 5),
      }
    );
  }, [now]);

  const SelectCard = (target: number) => {
    if (target === 0) {
      return (
        <div className="flex flex-col items-center justify-center gap-3 font-G pt-[30px]">
          <div className="text-Point px-10 text-[25px]">
            누적 동의 수 <br />
            <span className="text-black text-[25px]">159,347 명</span>
          </div>
          <div className="text-Point px-10 font-G text-[25px]">
            5만건 이상 도달 청원 수 <br />
            <div className="text-center text-black text-[25px]">194 건</div>
          </div>
        </div>
      );
    } else if (target === 1) {
      return (
        <div className="font-G flex flex-col items-center justify-center pt-5">
          <div className="text-Point px-10 text-[30px]">진행중</div>
          <img src={OnGoingIcon} className="size-[100px] text-Point mx-10" />
          <span className="text-black text-[25px] py-2">194 건</span>
        </div>
      );
    } else if (target === 2) {
      return (
        <div className="font-G flex flex-col items-center justify-center pt-5">
          <div className="text-Point px-10 text-[30px]">만료</div>
          <img src={CancelIcon} className="size-[100px] text-Point mx-10" />
          <span className="text-black text-[25px] py-2">194 건</span>
        </div>
      );
    } else if (target === 3) {
      return (
        <div className="font-G flex flex-col items-center justify-center pt-5">
          <div className="text-Point px-10 text-[30px]">답변중</div>
          <img src={ReplyIcon} className="size-[100px] text-Point mx-10" />
          <span className="text-black text-[25px] py-2">194 건</span>
        </div>
      );
    } else if (target === 4) {
      return (
        <div className="font-G flex flex-col items-center justify-center pt-5">
          <div className="text-Point px-10 text-[30px]">답변 완료</div>
          <img src={DoneIcon} className="size-[100px] text-Point mx-10" />
          <span className="text-black text-[25px] py-2">194 건</span>
        </div>
      );
    }
  };

  return (
    <div className="relative overflow-hidden w-full">
      <div className="h-[300px] *:pt-[50px]">
        <div className="now w-full h-full">{SelectCard(now)}</div>
      </div>
    </div>
  );
};

export default HomeSwiper;
