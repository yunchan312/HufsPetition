import { useNavigate } from "react-router-dom";
import BulbIcon from "../assets/Bulb.svg";
import MoreIcon from "../assets/More.svg";
import { useEffect, useState } from "react";
import { GetBoard } from "../utils/GetBoard";
import { BoardContent } from "../Interfaces";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const FandQCard = () => {
  const navigate = useNavigate();
  gsap.registerPlugin(useGSAP);

  const [content, setContent] = useState<BoardContent[]>([]);
  const [isHover, setIsHover] = useState(false);
  useEffect(() => {
    const getBoard = async () => {
      const temp = await GetBoard("QNA", 0, 10);
      setContent(temp.data.result.content);
    };

    getBoard();
  }, [isHover]);

  useGSAP(() => {
    if (isHover) {
      gsap.fromTo(".more-icon", { rotate: 0 }, { rotate: 360, scale: 1.3 });
    } else {
      gsap.fromTo(".more-icon", { rotate: 360 }, { rotate: 0, scale: 1 });
    }
  }, [isHover]);
  return (
    <div className="homeElement">
      <div
        className="font-G flex items-center justify-between gap-2 cursor-pointer"
        onClick={() => navigate("/fq")}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <div className="flex items-start gap-2 ">
          <img src={BulbIcon} alt="icon" className="size-[25px]" />
          <span className="text-[20px]">자주 하는 질문</span>
        </div>
        <img src={MoreIcon} alt="icon" className="size-[30px] more-icon" />
      </div>

      <div className="border-y-2">
        {content.length > 0 ? (
          content.map((a, i) => (
            <li
              key={i}
              className="homeElementLists border-b-2 border-b-neutral-50"
              onClick={() => navigate(`/fq`)}
            >
              <span className="text-[14px] overflow-ellipsis truncate">
                {a.title}
              </span>
            </li>
          ))
        ) : (
          <div className="h-full w-full flex justify-center items-center">
            F & Q가 없습니다.
          </div>
        )}
      </div>
    </div>
  );
};

export default FandQCard;
