import { useNavigate } from "react-router-dom";
import BulbIcon from "../assets/Bulb.svg";
import MoreIcon from "../assets/More.svg";

const FandQCard = () => {
  const navigate = useNavigate();
  const FandQ = [
    { title: "질문", id: 0 },
    { title: "질문", id: 0 },
    { title: "질문", id: 0 },
    { title: "질문", id: 0 },
    { title: "질문", id: 0 },
    { title: "질문", id: 0 },
    { title: "질문", id: 0 },
    { title: "질문", id: 0 },
    { title: "질문", id: 0 },
    { title: "질문", id: 0 },
  ];
  return (
    <div className="homeElement">
      <div
        className="font-G flex items-center justify-between gap-2 cursor-pointer phone:hover:scale-[1.01] transition"
        onClick={() => navigate("/fq")}
      >
        <div className="flex items-start gap-2 ">
          <img src={BulbIcon} alt="icon" className="size-[25px]" />
          <span className="text-[20px]">공지사항</span>
        </div>
        <img src={MoreIcon} alt="icon" className="border-2 rounded-md" />
      </div>

      <div className="px-3">
        {FandQ.map((a, i) => (
          <li
            key={i}
            className="cursor-pointer transition phone:hover:font-G"
            onClick={() => navigate(`/fq`)}
          >
            {a.title + (i + 1)}
          </li>
        ))}
      </div>
    </div>
  );
};

export default FandQCard;
