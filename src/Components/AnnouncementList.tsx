import { useNavigate } from "react-router-dom";

interface AnnouncementListProps {
  title: string;
  writer: string;
  date: string;
  id: number;
  detail: string;
}

const AnnouncementList = (f: AnnouncementListProps) => {
  const navigate = useNavigate();
  return (
    <div
      className="cursor-pointer phone:hover:bg-Hufs/10 transition flex py-3 justify-between text-[10px] items-end border-b-2 border-neutral-400 px-3"
      onClick={() => navigate(`/announcement/${f.id}`)}
    >
      <div className="max-w-[200px] phone:max-w-[700px] text-[20px]">
        {f.title}
      </div>
      <div>
        <div>작성자 | {f.writer}</div>
        <div>작성일 | {f.date}</div>
      </div>
    </div>
  );
};

export default AnnouncementList;
