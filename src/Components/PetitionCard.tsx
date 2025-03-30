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

  console.log(isSuper);

  return (
    <div
      className="phone:py-2 py-2 px-5 *:py-2 border-b-2 cursor-pointer phone:w-full flex flex-col justify-between"
      onClick={() => {
        navigate(`/detail/${props.id}`);
      }}
    >
      <div>
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
        <div className="text-[20px] text-black font-G mt-2">
          <div className="line-clamp-1">{props.title}</div>
          <p className="text-[13px] text-neutral-300 line-clamp-4">
            {props.content}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between text-[13px]">
        <div className="flex flex-col items-start justify-between text-[13px]">
          <div className="text-Point">조회: {props.viewCount}</div>
          <div className="text-Point">동의: {props.agreeCount}명</div>
        </div>

        <div className="text-white font-G bg-Point rounded-full size-10 flex items-center justify-center">
          D-
          {Math.ceil(
            (new Date(props.endDate).getTime() - new Date().getTime()) /
              (1000 * 60 * 60 * 24)
          )}
        </div>
      </div>
    </div>
  );
};

export default PetitionCard;
