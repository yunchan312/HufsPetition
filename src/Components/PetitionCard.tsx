import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { isAdmin } from "../atom";
import { petitionsDataInterface } from "../Interfaces";
import { CategoryEnum } from "../Enums";
import { ReportPetition } from "../utils/Report";
import ReportIcon from "../assets/Report.svg";
import { DeletePetitions } from "../utils/Petitions";

const categoryEnum = CategoryEnum;

const PetitionCard = (props: petitionsDataInterface) => {
  const navigate = useNavigate();
  const user = useRecoilValue(isAdmin);
  const isSuper = Boolean(localStorage.getItem("isSuper"));

  return (
    <div
      className="phone:mx-10 mx-5 phone:py-5 *:py-2 border-b-2 cursor-pointer"
      onClick={() => {
        navigate(`/detail/${props.id}`);
      }}
    >
      <div className="text-[20px] text-Hufs flex items-center justify-between">
        <div className="font-G flex items-center justify-between w-full">
          <div className="text-[15px]">
            {categoryEnum[props.category as keyof typeof categoryEnum]}
          </div>
          {!user ? (
            <div
              className="text-[13px] text-neutral-300 flex items-center gap-1"
              onClick={async (e) => {
                e.stopPropagation();
                const ok = confirm("정말로 청원을 신고하겠습니까?");
                if (ok) {
                  const temp = await ReportPetition(props.id);
                  alert(temp.data.message);
                }
              }}
            >
              <img src={ReportIcon} alt="icon" />
              신고
            </div>
          ) : null}
        </div>
        {props.petitionStatus === "WAITING" ? (
          user ? (
            <div className="flex justify-end gap-3 w-[200px]">
              <div
                className="adminBtn"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/reply/${props.id}`);
                }}
              >
                답변하기
              </div>
              {isSuper ? (
                <div
                  className="adminBtnRed"
                  onClick={async (e) => {
                    e.stopPropagation();
                    const ok = confirm("정말로 삭제하시겠습니까?");
                    if (ok) {
                      await DeletePetitions(props.id);
                      alert("삭제되었습니다.");
                      window.location.reload();
                    }
                  }}
                >
                  삭제
                </div>
              ) : null}
            </div>
          ) : null
        ) : null}
      </div>
      <div className="text-[20px] text-black font-G *:overflow-ellipsis *:truncate">
        <div>{props.title}</div>
        <div className="text-[13px] text-neutral-300">{props.content}</div>
      </div>
      <div className="flex items-center justify-between">
        <div className="text-Point">조회: {props.viewCount}</div>
        <div className="text-Point">동의: {props.agreeCount}명</div>
      </div>
    </div>
  );
};

export default PetitionCard;
