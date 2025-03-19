import { useEffect, useState } from "react";
import PetitionCard from "../Components/PetitionCard";
import PageTitle from "../Components/PageTitle";
import { GetPetitionsOnGoing } from "../utils/GetPetitions";
import Pagination from "../Components/Pagination";
import { petitionsDataInterface } from "../Interfaces";
import NoData from "../Components/NoData";
import Search from "../Components/Search";

const OnGoing = () => {
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [petitions, setPetitions] = useState<petitionsDataInterface[]>([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await GetPetitionsOnGoing(page);
        setPetitions(data.data.result.content);
        setTotalPages(data.data.result.totalPages);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [page]);
  return (
    <div className="phone:pt-[80px] pt-20 px-5 w-full phone:w-[900px]">
      <div>
        <div className="text-[25px] mb-5 font-G">청원 검색</div>
        <div className="px-5">
          <Search status="ONGOING" />
        </div>
      </div>

      <PageTitle title="진행중인 청원" />

      <div>
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
      <div>
        <Pagination page={page} totalPages={totalPages} setter={setPage} />
      </div>
    </div>
  );
};

export default OnGoing;
