import Default from "../assets/photo.png";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { isAdmin } from "../atom";
import PDeparture from "../assets/PlaneDeparture.svg";
import PeopleIcon from "../assets/Peaple.svg";
// import AnswerDateIcon from "../assets/AnswerDate.svg";
import PArrivalDone from "../assets/PlaneArrivalDone.svg";
import { petitionsDataInterface } from "../Interfaces";
import CategoryIcon from "../assets/Category.svg";
import { CategoryEnum } from "../Enums";

const DonePetitionCard = (props: petitionsDataInterface) => {
  const navigate = useNavigate();
  const user = useRecoilValue(isAdmin);

  return (
    <div
      className="flex phone:flex-row flex-col-reverse items-center phone:justify-between phone:py-5 py-3 border-b-2 cursor-pointer phone:w-[850px] gap-3"
      onClick={() => navigate(`/detail/${props.id}`)}
    >
      <div className="flex flex-col justify-around gap-2 w-[340px] phone:w-full">
        <div className="my-2">
          <div className="flex items-center justify-between">
            <div className="bg-Hufs text-white px-4 py-2 rounded-md w-[150px] text-center">
              청원답변 {props.id}호
            </div>
            {user ? (
              <div className="flex items-center gap-3">
                <div
                  className="adminBtn"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/reply/${props.id}`);
                  }}
                >
                  수정
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
          <div className="text-[20px] text-Hufs font-semibold mt-5">
            {props.content.length > 20
              ? props.content.slice(0, 20) + "..."
              : props.content}
          </div>
        </div>

        <div className="grid grid-cols-4">
          <div>
            <div className="flex flex-col items-center text-[13px]">
              <img src={PDeparture} className="size-[50px]" />
              <div>청원시작</div>
              <div className="text-[12px]">[{props.createDate}]</div>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-center text-[13px]">
              <img src={PArrivalDone} className="size-[50px]" />
              <div>청원마감</div>
              <div className="text-[12px]">[{props.endDate}]</div>
            </div>
          </div>

          <div>
            <div className="flex flex-col items-center text-[13px]">
              <img src={PeopleIcon} className="size-[50px]" />
              <div>청원인원</div>
              <div>
                {props.agreeCount
                  .toString()
                  .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-col items-center text-[13px]">
              <img src={CategoryIcon} className="size-[50px]" />
              <div>카테고리</div>
              <div>
                {CategoryEnum[props.category as keyof typeof CategoryEnum]}
              </div>
            </div>
          </div>

          {/* <div>
            <div className="flex flex-col items-center text-[13px]">
              <img src={AnswerDateIcon} className="size-[50px]" />
              <div>답변일</div>
              <div>
                [
                {props.answerResponses.length > 0
                  ? props.answerResponses[0].createdAt
                  : "알수없음"}
                ]
              </div>
            </div>
          </div> */}
        </div>
      </div>

      <div className="relative *:rounded-lg">
        <div className="px-5 py-2 bg-black/50 phone:w-[400px] phone:h-[250px] w-[340px] h-[150px] absolute text-white font-G phone:text-[25px] text-[20px] flex justify-end flex-col">
          <div className="pr-5">{props.title}</div>
        </div>

        <div
          className="phone:w-[400px] phone:h-[250px] w-[340px] h-[150px] bg-center bg-cover"
          style={{
            backgroundImage: `url(${Default})`,
          }}
        />
      </div>
    </div>
  );
};

export default DonePetitionCard;
