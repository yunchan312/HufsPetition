import { useNavigate } from "react-router-dom";

interface PetitionCardProps {
  types: string;
  title: string;
  id: number;
  enddate: string;
  count: number;
}

const PetitionCard = (props: PetitionCardProps) => {
  const navigate = useNavigate();
  return (
    <div
      className="mx-10 py-5 *:py-2 border-b-2 cursor-pointer"
      onClick={() => {
        navigate(`/detail/${props.id}`);
      }}
    >
      <div className="text-[20px] text-Hufs">{props.types}</div>
      <div className="text-[15px]">{props.title}</div>
      <div className="flex items-center justify-between">
        <div className="text-Point">~ {props.enddate}</div>
        <div className="text-Point">{props.count}명</div>
      </div>
    </div>
  );
};

export default PetitionCard;
