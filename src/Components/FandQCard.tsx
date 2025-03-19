import { useNavigate } from "react-router-dom";
import BulbIcon from "../assets/Bulb.svg";
import MoreIcon from "../assets/More.svg";
import { useEffect, useState } from "react";
import { GetBoard } from "../utils/GetBoard";
import { BoardContent } from "../Interfaces";
import { throwErr } from "../utils/ThrowErr";

const FandQCard = () => {
  const navigate = useNavigate();

  const [content, setContent] = useState<BoardContent[]>([]);
  useEffect(() => {
    const getBoard = async () => {
      try {
        const temp = await GetBoard("NOTICE", 0);
        console.log(temp.data.result.content);
        setContent(temp.data.result.content);
      } catch (err) {
        throwErr(err);
      }
    };

    getBoard();
  }, []);
  return (
    <div className="homeElement">
      <div
        className="font-G flex items-center justify-between gap-2 cursor-pointer phone:hover:scale-[1.01] transition"
        onClick={() => navigate("/fq")}
      >
        <div className="flex items-start gap-2 ">
          <img src={BulbIcon} alt="icon" className="size-[25px]" />
          <span className="text-[25px]">자주 하는 질문</span>
        </div>
        <img src={MoreIcon} alt="icon" className="size-[30px]" />
      </div>

      {/* <div className="">
        {FandQ.map((a, i) => (
          <li
            key={i}
            className="homeElementLists"
            onClick={() => navigate(`/fq`)}
          >
            {a.title + (i + 1)}
          </li>
        ))}
      </div> */}
      <div className="border-y-2">
        {content.length > 0 ? (
          content.map((a, i) => (
            <li
              key={i}
              className="homeElementLists"
              onClick={() => navigate(`/announcement/${a.id}`)}
            >
              <span>{a.title + (i + 1)}</span>
              <span className="text-black/20 text-[10px]">
                {a.createdAt.split("T")[0]}
              </span>
            </li>
          ))
        ) : (
          <div className="min-h-[350px] w-full flex justify-center items-center">
            F & Q가 없습니다.
          </div>
        )}
      </div>
    </div>
  );
};

export default FandQCard;
