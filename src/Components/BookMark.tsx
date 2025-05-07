import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import { GetBookmark } from "../utils/ApplyBookmarks";
import PetitionCard from "./PetitionCard";
import { petitionsDataInterface } from "../Interfaces";
import { SyncLoader } from "react-spinners";
import Warning from "../assets/Warning.svg";
import { useNavigate } from "react-router-dom";

const BookMark = ({ pagination }: { pagination: boolean }) => {
  const [bookmarks, setBookMarks] = useState<petitionsDataInterface[]>([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const data = await GetBookmark(0, 5);
        setTotalPages(data.result.totalPages);
        setBookMarks(data.result.content);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, []);
  return (
    <>
      {bookmarks.length > 0 ? (
        <div className="flex items-center flex-col justify-between">
          {isLoading ? (
            <SyncLoader color="#00677f" />
          ) : (
            bookmarks.map((b, i) => (
              <div key={i} className="w-full">
                <PetitionCard {...b} />
              </div>
            ))
          )}
          {pagination ? (
            <Pagination totalPages={totalPages} setter={setPage} page={page} />
          ) : null}
        </div>
      ) : (
        <div
          className="py-10 border-b-2 flex flex-col items-center"
          onClick={() => navigate("/ongoing")}
        >
          <div className="flex items-center justify-center gap-5">
            <img src={Warning} alt="warning" className="size-[50px]" />
            <div>내가 북마크한 청원이 없습니다.</div>
          </div>
          <div className="bg-Point phone:w-[450px] w-full text-white text-center py-2 rounded-md mt-4 mx-2 cursor-pointer active:scale-[0.99] transition">
            진행중인 청원 보러 가기
          </div>
        </div>
      )}
    </>
  );
};

export default BookMark;
