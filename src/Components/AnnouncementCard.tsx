import { useNavigate } from "react-router-dom";
import MicIcon from "../assets/Mic.svg";
import MoreIcon from "../assets/More.svg";
import { useEffect, useState } from "react";
import { GetBoard } from "../utils/GetBoard";
import { BoardContent } from "../Interfaces";

const AnnouncementCard = () => {
  const navigate = useNavigate();

  const [content, setContent] = useState<BoardContent[]>([]);
  useEffect(() => {
    const getBoard = async () => {
      const temp = await GetBoard("NOTICE", 0);
      setContent(temp.data.result.content);
    };

    getBoard();
  }, []);
  return (
    <div className="homeElement">
      <div
        className="font-G flex items-center justify-between cursor-pointer phone:hover:scale-[1.01] transition"
        onClick={() => navigate("/announcement")}
      >
        <div className="flex items-start gap-2 ">
          <img src={MicIcon} alt="icon" className="size-[25px]" />
          <span className="text-[25px]">공지사항</span>
        </div>
        <img src={MoreIcon} alt="icon" className="size-[30px]" />
      </div>

      <div className="border-y-2 min-h-[300px]">
        {content.length > 0 ? (
          content.map((a, i) => (
            <li
              key={i}
              className="homeElementLists border-b-2 border-b-neutral-50"
              onClick={() => navigate(`/announcement/${a.id}`)}
            >
              <span>{a.title}</span>
              <span className="text-black/20 text-[10px]">
                {a.createdAt.split("T")[0]}
              </span>
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
