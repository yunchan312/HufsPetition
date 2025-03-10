import { useRef, useState } from "react";
import ChevronR from "../assets/ChevronR.svg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface AnswerProps {
  title: string;
  id: number;
  detail: string;
}

const Answer = (props: AnswerProps) => {
  gsap.registerPlugin(useGSAP);
  const [isSelected, setIsSelected] = useState(false);
  const chevronRef = useRef(null);
  const toggleRef = useRef(null);

  useGSAP(() => {
    if (chevronRef.current) {
      gsap.to(chevronRef.current, { rotate: isSelected ? 90 : 0 });
    }
    if (toggleRef.current) {
      gsap.to(toggleRef.current, { height: isSelected ? "250px" : 0 });
    }
  }, [isSelected]);
  return (
    <div
      className="border-b-2 border-neutral-300 cursor-pointer"
      onClick={() => setIsSelected((prev) => !prev)}
    >
      <div
        className="flex items-end py-3 phone:hover:bg-Hufs/10 transition"
        style={{
          backgroundColor: isSelected ? "rgb(233 237 238)" : "",
        }}
      >
        <img
          ref={chevronRef}
          src={ChevronR}
          alt="icon"
          className="chevron size-[25px]"
        />
        <div className="font-G">{props.title}</div>
      </div>

      <div className="bg-Hufs/10 overflow-y-scroll h-0" ref={toggleRef}>
        <div className="pt-5 px-5">{isSelected ? props.detail : null}</div>
      </div>
    </div>
  );
};

export default Answer;
