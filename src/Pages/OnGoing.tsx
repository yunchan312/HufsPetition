import { useEffect, useState } from "react";
import PetitionCard from "../Components/PetitionCard";
import PageTitle from "../Components/PageTitle";
import { GetPetitionsOnGoing } from "../utils/GetPetitions";
import Pagination from "../Components/Pagination";
import { petitionsDataInterface } from "../Interfaces";
import NoData from "../Components/NoData";
import Search from "../Components/Search";
import { SortEnum } from "../Enums";

const OnGoing = () => {
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [petitions, setPetitions] = useState<petitionsDataInterface[]>([]);
  const [sortType, setSortType] = useState("동의순");
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await GetPetitionsOnGoing(
          page,
          SortEnum[sortType as keyof typeof SortEnum]
        );
        setPetitions(data.data.result.content);
        setTotalPages(data.data.result.totalPages);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [page, sortType]);

  return (
    <div className="phone:pt-[80px] pt-20 px-5 w-full phone:w-[900px]">
      <div>
        <div className="text-[25px] mb-2 font-G">청원 검색</div>
        <div className="px-5 mb-5">
          <Search status="ONGOING" />
        </div>
      </div>

      <PageTitle
        title="진행중인 청원"
        options={["동의순", "날짜순"]}
        setter={setSortType}
      />
      <div className="px-5 flex flex-wrap gap-2 justify-center">
        <div className="flex flex-col phone:flex-row phone:flex-wrap gap-2 phone:items-stretch">
          {petitions.length > 0 ? (
            petitions.map((petition: petitionsDataInterface, i: number) => (
              <div key={i}>
                <PetitionCard {...petition} />
              </div>
            ))
          ) : (
            <NoData />
          )}
        </div>
      </div>
      <div>
        <Pagination page={page} totalPages={totalPages} setter={setPage} />
      </div>
    </div>
  );
};

export default OnGoing;
