import { useNavigate } from "react-router-dom";
import { BoardInterface } from "../Interfaces";

const AnnouncementList = (f: BoardInterface) => {
  const navigate = useNavigate();
  return (
    <div
      className="cursor-pointer phone:hover:bg-Hufs/10 transition flex py-3 justify-between text-[10px] items-end border-b-2 border-neutral-400 px-3"
      onClick={() => navigate(`/announcement/${f.id}`)}
    >
      <div className="max-w-[200px] phone:max-w-[700px] text-[20px]">
        {f.title}
      </div>
      <div className="w-[120px] text-neutral-400">
        <div className="w-full overflow-ellipsis truncate">
          작성자 | {f.writer}
        </div>
        <div className="w-full">작성일 | {f.createdAt.split("T")[0]}</div>
      </div>
    </div>
  );
};

export default AnnouncementList;
