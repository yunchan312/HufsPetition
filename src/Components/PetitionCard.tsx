import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { isAdmin } from "../atom";

interface PetitionCardProps {
  types: string;
  title: string;
  id: number;
  enddate: string;
  count: number;
}

const PetitionCard = (props: PetitionCardProps) => {
  const navigate = useNavigate();
  const user = useRecoilValue(isAdmin);
  return (
    <div
      className="phone:mx-10 mx-5 phone:py-5 *:py-2 border-b-2 cursor-pointer"
      onClick={() => {
        navigate(`/detail/${props.id}`);
      }}
    >
      <div className="text-[20px] text-Hufs flex items-center justify-between">
        <div className="font-G">{props.types}</div>
        {user ? (
          <div className="flex gap-3">
            <div
              className="adminBtn"
              onClick={(e) => {
                e.stopPropagation();
                navigate("/reply");
              }}
            >
              답변하기
            </div>
            <div
              className="adminBtnRed"
              onClick={(e) => {
                e.stopPropagation();
                const ok = confirm("정말로 삭제하시겠습니까?");
                if (ok) {
                  alert("삭제되었습니다.");
                }
              }}
            >
              삭제
            </div>
          </div>
        ) : null}
      </div>
      <div className="text-[15px] text-black/50">{props.title}</div>
      <div className="flex items-center justify-between">
        <div className="text-Point">~ {props.enddate}</div>
        <div className="text-Point">{props.count}명</div>
      </div>
    </div>
  );
};

export default PetitionCard;
