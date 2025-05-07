import { useNavigate } from "react-router-dom";
import MicIcon from "../assets/Mic.svg";
import MoreIcon from "../assets/More.svg";
import { useEffect, useState } from "react";
import { GetBoard } from "../utils/GetBoard";
import { BoardContent } from "../Interfaces";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const AnnouncementCard = () => {
  const navigate = useNavigate();
  gsap.registerPlugin(useGSAP);

  const [content, setContent] = useState<BoardContent[]>([]);
  useEffect(() => {
    const getBoard = async () => {
      const temp = await GetBoard("NOTICE", 0);
      setContent(temp.data.result.content);
    };

    getBoard();
  }, []);
  const [isHover, setIsHover] = useState(false);

  useGSAP(() => {
    if (isHover) {
      gsap.fromTo(".more-iconN", { rotate: 0 }, { rotate: 360, scale: 1.3 });
    } else {
      gsap.fromTo(".more-iconN", { rotate: 360 }, { rotate: 0, scale: 1 });
    }
  }, [isHover]);
  return (
    <div className="homeElement">
      <div
        className="font-G flex items-center justify-between gap-2 cursor-pointer"
        onClick={() => navigate("/announcement")}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <div className="flex items-start gap-2 ">
          <img src={MicIcon} alt="icon" className="size-[25px]" />
          <span className="text-[20px]">공지사항</span>
        </div>
        <img src={MoreIcon} alt="icon" className="size-[30px] more-iconN" />
      </div>

      <div className="border-y-2 h-[300px]">
        {content.length > 0 ? (
          content.map((a, i) => (
            <li
              key={i}
              className="homeElementLists border-b-2 border-b-neutral-50"
              onClick={() => navigate(`/announcement/${a.id}`)}
            >
              <span className="text-[14px] overflow-ellipsis truncate">
                {a.title}
              </span>
              <div className="text-black/20 text-[10px] text-right pt-1">
                {a.createdAt.split("T")[0]}
              </div>
            </li>
          ))
        ) : (
          <div className="min-h-[300px] w-full flex justify-center items-center">
            공지사항이 없습니다.
          </div>
        )}
      </div>
    </div>
  );
};

export default AnnouncementCard;
