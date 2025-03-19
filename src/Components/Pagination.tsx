import { Dispatch, SetStateAction, useEffect, useState } from "react";

const Pagination = ({
  totalPages,
  page,
  setter,
}: {
  totalPages: number;
  page: number;
  setter: Dispatch<SetStateAction<number>>;
}) => {
  const getBtnLists = () => {
    const temp = [];
    for (let i = 1; i < totalPages + 1; i++) {
      temp.push(i);
    }
    return temp;
  };

  const [list, setList] = useState<number[]>([]);

  useEffect(() => {
    const temp = getBtnLists();
    setList(temp);
  }, [totalPages]);

  return (
    <div className="py-3 flex items-center justify-center gap-5">
      {list.length > 0
        ? list.map((l) => (
            <div key={l}>
              {page + 1 !== l ? (
                <div
                  className="border-2 w-[20px] text-center border-Point text-Point cursor-pointer select-none"
                  onClick={() => setter(l - 1)}
                >
                  {l}
                </div>
              ) : (
                <div
                  className="border-2 w-[20px] text-center border-Point text-white bg-Point font-G cursor-pointer select-none"
                  onClick={() => setter(l - 1)}
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
