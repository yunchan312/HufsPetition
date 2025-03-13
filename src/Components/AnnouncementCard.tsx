import { useNavigate } from "react-router-dom";
import MicIcon from "../assets/Mic.svg";
import MoreIcon from "../assets/More.svg";

const AnnouncementCard = () => {
  const navigate = useNavigate();
  const announcement = [
    { title: "제목", id: 0, date: "2025-03-12" },
    { title: "제목", id: 0, date: "2025-03-12" },
    { title: "제목", id: 0, date: "2025-03-12" },
    { title: "제목", id: 0, date: "2025-03-12" },
    { title: "제목", id: 0, date: "2025-03-12" },
    { title: "제목", id: 0, date: "2025-03-12" },
    { title: "제목", id: 0, date: "2025-03-12" },
    { title: "제목", id: 0, date: "2025-03-12" },
    { title: "제목", id: 0, date: "2025-03-12" },
    { title: "제목", id: 0, date: "2025-03-12" },
  ];
  return (
    <div className="homeElement">
      <div
        className="font-G flex items-center justify-between cursor-pointer phone:hover:scale-[1.01] transition"
        onClick={() => navigate("/announcement")}
      >
        <div className="flex items-start gap-2 ">
          <img src={MicIcon} alt="icon" className="size-[25px]" />
          <span className="text-[20px]">공지사항</span>
        </div>
        <img src={MoreIcon} alt="icon" className="border-2 rounded-md" />
      </div>

      <div>
        {announcement.map((a, i) => (
          <li
            key={i}
            className="cursor-pointer transition phone:hover:font-G phone:hover:bg-Point/20 flex items-center justify-between list-none"
            onClick={() => navigate(`/announcement/${a.id}`)}
          >
            <span>{a.title + (i + 1)}</span>
            <span className="text-black/20 text-[10px]">{a.date}</span>
          </li>
        ))}
      </div>
    </div>
  );
};

export default AnnouncementCard;
