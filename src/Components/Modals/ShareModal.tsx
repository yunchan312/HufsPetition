import { Dispatch, SetStateAction, useEffect } from "react";
import Xmark from "../../assets/Xmark.svg";
import copyToClipboard from "../../utils/Share";

const ShareModal = ({
  isShare,
  setIsShare,
  id,
  title,
}: {
  isShare: boolean;
  setIsShare: Dispatch<SetStateAction<boolean>>;
  id: number;
  title: string;
}) => {
  const link = `${import.meta.env.VITE_BASE_URL}/detail/${id}`;

  useEffect(() => {
    if (isShare) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isShare]);

  return (
    <div
      className="bg-black/10 fixed w-full h-full top-0 left-0 flex items-center justify-center"
      onClick={() => setIsShare(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white phone:w-1/2 w-[90%] phone:h-[40%] h-[40%] rounded-md py-2 px-5 flex flex-col items-center justify-around"
      >
        <div className="w-full flex items-end justify-end">
          <img
            src={Xmark}
            alt="xmark"
            className="phone:size-[30px] size-[30px] cursor-pointer hover:bg-black/10 rounded-full"
            onClick={() => setIsShare(false)}
          />
        </div>
        <div>
          <div className="text-center w-full font-G text-xl">공유하기</div>
          <div className="text-Point text-center font-G w-full">{title}</div>
          <div className="text-center">
            청원을 공유해서 더 많은 학생들의 의견을 들려주세요.
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-center">
          <div className="text-center">
            복사하기 버튼을 누르면 클립보드에 복사됩니다.
          </div>
          <div className="mb-20 phone:hover:text-blue-700 phone:cursor-pointer text-blue-500 border-2 border-neutral-300 phone:w-[60%] w-[90%] rounded-md flex">
            <div className="w-[70%] py-2 px-2 overflow-hidden text-ellipsis">{`${link}`}</div>
            <div
              className="text-black self-end phone:hover:bg-neutral-200 transition bg-neutral-100 w-[30%] h-full py-2 px-auto text-center"
              onClick={() => copyToClipboard(link)}
            >
              복사하기
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;
