import { useCallback, useState } from "react";
import SearchIcon from "../assets/Search.svg";
import { DeBounce, SearchPetition } from "../utils/Search";
import { petitionsDataInterface } from "../Interfaces";
import { useNavigate } from "react-router-dom";

const Search = ({ status }: { status: string }) => {
  const [search, setSearch] = useState<petitionsDataInterface[]>([]);
  const SearchFunc = useCallback(
    async (value: string) => {
      const temp = await SearchPetition(status, value);
      setSearch(temp.data.result.slice(0, 9));
    },
    [status]
  );

  const [focus, setFocus] = useState(false);
  const nav = useNavigate();
  const debouncedSearch = useCallback(DeBounce(SearchFunc, 500), [SearchFunc]);

  return (
    <>
      <div
        className="border-2 border-neutral-400 rounded-md w-full"
        onFocus={() => setFocus(true)}
      >
        <div className="flex w-full py-3">
          <div className="w-[40px] py-1 px-3">
            <img src={SearchIcon} alt="Icon" className="" />
          </div>
          <input
            placeholder="검색어를 입력해주세요"
            type="text"
            name="search"
            id="search"
            className="w-full outline-none"
            onChange={(e) => {
              debouncedSearch(e.target.value);
            }}
          />
        </div>
        <div>
          {focus ? (
            search.length > 0 ? (
              <div
                className="max-h-[300px]"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                {search.map((s, i) => (
                  <div
                    key={i}
                    className="flex px-10 py-1 phone:hover:bg-neutral-200 select-none cursor-pointer justify-between"
                    onClick={() => {
                      nav(`/detail/${s.id}`);
                    }}
                  >
                    <div>{s.title}</div>
                    <div>조회: {s.viewCount}</div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="px-10 py-1">검색 결과가 없습니다.</div>
            )
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Search;
