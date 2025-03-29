import { useEffect, useState } from "react";
import Answer from "../Components/Answer";
import { BoardInterface } from "../Interfaces";
import { GetBoard } from "../utils/GetBoard";
import Pagination from "../Components/Pagination";
import WarningIcon from "../assets/Warning.svg";

const FandQ = () => {
  const [fq, setFq] = useState<BoardInterface[]>([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  useEffect(() => {
    const getBoard = async () => {
      const temp = await GetBoard("QNA", page);
      setFq(temp.data.result.content);
      setTotalPages(temp.data.result.totalPages);
    };

    getBoard();
  }, [page]);
  return (
    <div className="w-full min-h-[70vh] phone:mt-[90px] mt-[50px] px-5 flex flex-col justify-between">
      <div>
        <div className="border-b-2 py-2 text-[20px] phone:text-[25px] font-G">
          자주 하는 질문
        </div>
        <div>
          {fq.length > 0 ? (
            fq.map((f, i) => (
              <div key={i}>
                <Answer {...f} />
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center py-7 gap-2">
              <img
                src={WarningIcon}
                alt="warningIcon"
                className="size-[100px]"
              />
              <div>데이터가 없습니다</div>
            </div>
          )}
        </div>
      </div>
      <Pagination page={page} setter={setPage} totalPages={totalPages} />
    </div>
  );
};

export default FandQ;
