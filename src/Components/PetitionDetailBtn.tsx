import { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";

const statusEnum = {
  ONGOING: "ongoing",
  WAITING: "waiting",
  DONE: "done",
};

const PetitionDetailBtn = ({
  status,
  setter,
}: {
  status: string;
  setter: Dispatch<SetStateAction<boolean>>;
}) => {
  const navigate = useNavigate();
  return (
    <div>
      {status === statusEnum.DONE ? (
        <div className="phone:grid phone:grid-cols-3 flex flex-col items-center gap-3 *:w-full">
          <div
            onClick={() => navigate("/reply")}
            className="border-2 mx-3 border-Point text-center py-1 px-2 cursor-pointer active:scale-[0.95] transition bg-Point text-white"
          >
            답변 수정하기
          </div>
          <div
            onClick={() => setter(true)}
            className="border-2 mx-3 border-Hufs bg-Hufs text-white py-1 px-2 active:scale-[0.95] transition text-center cursor-pointer"
          >
            동의 내용 보기
          </div>
          <div
            onClick={() => {
              const ok = confirm("정말로 삭제하시겠습니까?");
              if (ok) {
                alert("삭제되었습니다.");
                navigate(-1);
              }
            }}
            className="px-2 py-1 mx-3 bg-red-500 text-white text-center select-none active:scale-[0.95] cursor-pointer transition"
          >
            답변 삭제
          </div>
        </div>
      ) : status === statusEnum.ONGOING ? (
        <div className="grid grid-cols-2 px-5">
          <div
            onClick={() => setter(true)}
            className="border-2 mx-3 border-Hufs bg-Hufs text-white py-1 px-2 active:scale-[0.95] transition text-center cursor-pointer"
          >
            동의 내용 보기
          </div>
          <div
            onClick={() => {
              const ok = confirm("정말로 삭제하시겠습니까?");
              if (ok) {
                alert("삭제되었습니다.");
                navigate(-1);
              }
            }}
            className="px-2 py-1 mx-3 bg-red-500 text-white text-center select-none active:scale-[0.95] cursor-pointer transition"
          >
            청원 삭제
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-2 px-5">
          <div
            onClick={() => setter(true)}
            className="border-2 mx-3 border-Hufs  text-Hufs py-1 px-2 active:scale-[0.95] transition text-center cursor-pointer"
          >
            동의 내용 보기
          </div>
          <div
            onClick={() => navigate("/reply")}
            className="px-2 py-1 mx-3 bg-Hufs text-white text-center select-none active:scale-[0.95] cursor-pointer transition"
          >
            청원 답변하기
          </div>
        </div>
      )}
    </div>
  );
};

export default PetitionDetailBtn;
