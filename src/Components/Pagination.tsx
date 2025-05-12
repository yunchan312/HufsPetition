import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Pagination = ({
  totalPages,
  page,
  pathname,
}: {
  totalPages: number;
  page: number;
  pathname: string;
}) => {
  const getBtnLists = () => {
    const temp = [];
    for (let i = 1; i < totalPages + 1; i++) {
      temp.push(i);
    }
    return temp;
  };

  const [list, setList] = useState<number[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    const temp = getBtnLists();
    setList(temp);
    console.log(page);
  }, [totalPages, page]);

  return (
    <div className="py-3 flex items-center justify-center gap-5">
      {list.length > 0
        ? list.map((l) => (
            <div key={l}>
              {page + 1 !== l ? (
                <div
                  className="border-2 w-[20px] text-center border-Point text-Point cursor-pointer select-none"
                  onClick={() => navigate(`/${pathname}?size=10&page=${l - 1}`)}
                >
                  {l}
                </div>
              ) : (
                <div
                  className="border-2 w-[20px] text-center border-Point text-white bg-Point font-G cursor-pointer select-none"
                  onClick={() => navigate(`/${pathname}?size=10&page=${l - 1}`)}
                >
                  {l}
                </div>
              )}
            </div>
          ))
        : null}
    </div>
  );
};

export default Pagination;
