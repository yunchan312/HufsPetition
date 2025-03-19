import { CategoryEnum } from "../Enums";

const StatusBar = ({
  status,
  counts,
  category,
  startdate,
  enddate,
  views,
  writer,
}: {
  views?: number;
  writer?: string;
  status?: string;
  counts?: number;
  category?: string;
  startdate?: string;
  enddate?: string;
}) => {
  const selectIcons = () => {
    if (status === "ongoing") {
      return (
        <div className="flex items-center justify-between phone:block">
          <div className="text-Point">상태</div>
          <div className="text-[15px] text-neutral-500">청원 진행중</div>
        </div>
      );
    } else if (status === "waiting") {
      return (
        <div className="flex items-center justify-between phone:block">
          <div className="text-Point">상태</div>
          <div className="text-[15px] text-neutral-500">답변중</div>
        </div>
      );
    } else if (status === "done") {
      return (
        <div className="flex items-center justify-between phone:block">
          <div className="text-Point">상태</div>
          <div className="text-[15px] text-neutral-500">답변완료</div>
        </div>
      );
    } else if (status === "expired") {
      return (
        <div className="flex items-center justify-between phone:block">
          <div className="text-Point">상태</div>
          <div className="text-[15px] text-neutral-500">답변완료</div>
        </div>
      );
    }
  };
  return (
    <div className="phone:flex-row phone:w-[700px] flex flex-col phone:gap-6 gap-2 text-[12px]">
      <div className="flex items-center justify-between phone:block">
        <div className="text-Point">참여 인원</div>
        <div className="text-[15px] text-neutral-500">
          {counts
            ? counts.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
            : "- "}
          명
        </div>
      </div>
      <div className="flex items-center justify-between phone:block">
        <div className="text-Point">카테고리</div>
        <div className="text-[15px] text-neutral-500">
          {CategoryEnum[category as keyof typeof CategoryEnum]}
        </div>
      </div>

      <div className="flex items-center justify-between phone:block">
        <div className="text-Point">청원 기간</div>
        <div className="text-[14px] text-neutral-500">
          {startdate} ~ {enddate}
        </div>
      </div>

      <div>{selectIcons()}</div>

      <div className="flex items-center justify-between phone:block">
        <div className="text-Point">조회수</div>
        <div className="text-[14px] text-neutral-500">{views}</div>
      </div>

      <div className="flex items-center justify-between phone:block">
        <div className="text-Point">작성자</div>
        <div className="text-[14px] text-neutral-500">
          {writer?.split("@")[0].slice(0, 3)}****@hufs.ac.kr
        </div>
      </div>
    </div>
  );
};
export default StatusBar;
