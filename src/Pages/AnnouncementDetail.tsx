import { useEffect, useState } from "react";
import { NoticeDetailProps } from "../Interfaces";
import { useParams } from "react-router-dom";
import { GetBoardDetail } from "../utils/GetBoard";
import { throwErr } from "../utils/ThrowErr";

const AnnouncementDetail = () => {
  const [detail, setDetail] = useState<NoticeDetailProps>();
  const { id } = useParams();

  useEffect(() => {
    const getNoticeDetail = async () => {
      try {
        if (id) {
          const temp = await GetBoardDetail("NOTICE", id);
          setDetail(temp.data.result);
        }
      } catch (err) {
        throwErr(err);
      }
    };
    getNoticeDetail();
  }, []);
  return (
    <div className="w-full min-h-[70vh] phone:mt-[90px] mt-[50px] px-5">
      <div className="py-2 text-[20px] phone:text-[25px] font-G">
        {detail?.title}
      </div>
      <div className="border-b-2  border-neutral-400 flex justify-between text-[13px] pb-2">
        <div>작성자 | {detail?.writer}</div>
        <div>작성일 | {detail?.createdAt.split("T")[0]}</div>
      </div>

      <div>
        {detail?.content.split("\n").map((d, i) => (
          <div key={i} className="py-2">
            {d}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnnouncementDetail;
