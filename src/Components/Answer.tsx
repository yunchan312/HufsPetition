import { useRef, useState } from "react";
import ChevronR from "../assets/ChevronR.svg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { BoardContent } from "../Interfaces";

const Answer = (props: BoardContent) => {
  gsap.registerPlugin(useGSAP);
  const [isSelected, setIsSelected] = useState(false);
  const chevronRef = useRef(null);
  const toggleRef = useRef(null);

  useGSAP(() => {
    if (chevronRef.current) {
      gsap.to(chevronRef.current, {
        rotate: isSelected ? 90 : 0,
        duration: 0.2,
      });
    }
    if (toggleRef.current) {
      gsap.to(toggleRef.current, {
        height: isSelected ? "auto" : 0,
        duration: 0.2,
      });
    }
  }, [isSelected]);
  return (
    <div
      className="border-b-2 border-neutral-300 cursor-pointer"
      onClick={() => setIsSelected((prev) => !prev)}
    >
      <div className="flex items-end py-3 phone:hover:bg-Hufs/10 transition">
        <img
          ref={chevronRef}
          src={ChevronR}
          alt="icon"
          className="chevron size-[25px]"
        />
        <div className="font-G">{props.title}</div>
      </div>

      <div className="overflow-y-scroll h-0" ref={toggleRef}>
        <div className="pt-5 px-5 py-5">
          {isSelected
            ? props.content.split("\n").map((c) => <div>{c}</div>)
            : null}
        </div>
      </div>
    </div>
  );
};

export default Answer;
