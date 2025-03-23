import { useEffect, useState } from "react";
import AnnouncementList from "../Components/AnnouncementList";
import { GetBoard } from "../utils/GetBoard";
import Pagination from "../Components/Pagination";
import { BoardInterface } from "../Interfaces";

const Announcement = () => {
  const [Announce, setAnnounce] = useState<BoardInterface[]>([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const getAnnounce = async () => {
      const temp = await GetBoard("NOTICE", page);
      setTotalPages(temp.data.result.totalPages);
      setAnnounce(temp.data.result.content);
    };
    getAnnounce();
  }, [page]);
  return (
    <div className="flex flex-col w-full">
      <div className="w-full min-h-[70vh] phone:mt-[90px] mt-[50px] px-5">
        <div className="border-b-2 py-2 text-[20px] phone:text-[25px] font-G">
          공지사항
        </div>
        <div>
          {Announce.map((f, i) => (
            <div key={i}>
              <AnnouncementList {...f} />
            </div>
          ))}
        </div>
      </div>
      <div>
        <Pagination page={page} setter={setPage} totalPages={totalPages} />
      </div>
    </div>
  );
};

export default Announcement;
