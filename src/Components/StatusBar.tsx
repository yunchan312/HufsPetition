const StatusBar = ({
  status,
  counts,
  category,
  startdate,
  enddate,
}: {
  status: string;
  counts: number;
  category: string;
  startdate: string;
  enddate: string;
}) => {
  const selectIcons = () => {
    if (status === "ongoing") {
      return (
        <div className="flex items-center justify-between phone:block">
          <div className="text-Point">상태</div>
          <div className="text-[15px]">청원 진행중</div>
        </div>
      );
    } else if (status === "waiting") {
      return (
        <div className="flex items-center justify-between phone:block">
          <div className="text-Point">상태</div>
          <div className="text-[15px]">답변중</div>
        </div>
      );
    } else if (status === "done") {
      return (
        <div className="flex items-center justify-between phone:block">
          <div className="text-Point">상태</div>
          <div className="text-[15px]">답변완료</div>
        </div>
      );
    }
  };
  return (
    <div className="phone:flex-row phone:w-[700px] flex flex-col gap-6 text-[12px]">
      <div className="flex items-center justify-between phone:block">
        <div className="text-Point">참여 인원</div>
        <div className="text-[15px]">
          {counts.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}명
        </div>
      </div>
      <div className="flex items-center justify-between phone:block">
        <div className="text-Point">카테고리</div>
        <div className="text-[15px]">{category}</div>
      </div>

      <div className="flex items-center justify-between phone:block">
        <div className="text-Point">청원 기간</div>
        <div className="text-[14px]">
          {startdate} ~ {enddate}
        </div>
      </div>

      <div>{selectIcons()}</div>
    </div>
  );
};
export default StatusBar;
