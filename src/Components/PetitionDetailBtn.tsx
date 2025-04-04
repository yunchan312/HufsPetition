import { Dispatch, SetStateAction } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DeleteReply } from "../utils/Reply";
import { DeletePetitions } from "../utils/Petitions";
// import { statusEnum } from "../Enums";

const statusEnum = {
  ONGOING: "ongoing",
  WAITING: "waiting",
  DONE: "done",
};

const PetitionDetailBtn = ({
  status,
  setter,
  answerId,
}: {
  status: string;
  answerId?: number;
  setter: Dispatch<SetStateAction<boolean>>;
}) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isSuper = Boolean(localStorage.getItem("isSuper"));
  return (
    <div>
      {status === statusEnum.DONE ? (
        <div className="phone:grid phone:grid-cols-3 flex flex-col items-center gap-3 *:w-full">
          <div
            onClick={() => navigate(`/reply/${id}`)}
            className="border-2 mx-0 rounded-md border-Point text-center py-1 px-2 cursor-pointer active:scale-[0.95] transition bg-Point text-white"
          >
            답변 수정하기
          </div>
          <div
            onClick={() => setter(true)}
            className="border-2 mx-0 rounded-md border-Hufs bg-Hufs text-white py-1 px-2 active:scale-[0.95] transition text-center cursor-pointer"
          >
            동의 내용 보기
          </div>
          <div
            onClick={async () => {
              const ok = confirm("정말로 답변을 삭제하시겠습니까?");
              if (ok) {
                await DeleteReply(answerId);
                navigate(-1);
              }
            }}
            className="px-2 py-1 mx-0 rounded-md bg-red-500 text-white text-center select-none active:scale-[0.95] cursor-pointer transition"
          >
            답변 삭제
          </div>
        </div>
      ) : status === statusEnum.ONGOING ? (
        <div className="flex items-center gap-2">
          <div
            onClick={() => setter(true)}
            className="border-2 mx-0 rounded-md border-Hufs bg-Hufs w-full text-white py-1 px-2 active:scale-[0.95] transition text-center cursor-pointer"
          >
            동의 내용 보기
          </div>
          {isSuper ? (
            <div
              onClick={async () => {
                const ok = confirm("정말로 삭제하시겠습니까?");
                if (ok) {
                  await DeletePetitions(Number(id));
                  alert("삭제되었습니다.");
                  navigate(-1);
                }
              }}
              className="px-2 py-1 w-full mx-0 rounded-md bg-red-500 text-white text-center select-none active:scale-[0.95] cursor-pointer transition"
            >
              청원 삭제
            </div>
          ) : null}
        </div>
      ) : (
        <div className="w-full *:w-full gap-3 flex items-center">
          <div
            onClick={() => setter(true)}
            className="border-2 border-Hufs text-Hufs py-1 px-2 active:scale-[0.95] transition text-center cursor-pointer"
          >
            동의 내용 보기
          </div>
          {status === statusEnum.WAITING ? (
            <div
              onClick={() => navigate(`/reply/${id}`)}
              className="px-2 py-1 bg-Hufs border-2 border-Hufs text-white text-center select-none active:scale-[0.95] cursor-pointer transition"
            >
              청원 답변하기
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default PetitionDetailBtn;
