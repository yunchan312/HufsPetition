import { useEffect, useState } from "react";
import PageTitle from "../Components/PageTitle";
import PetitionCard from "../Components/PetitionCard";
import Status from "../Components/Status";
import { petitionsDataInterface } from "../Interfaces";
import {
  GetPetitionsExpired,
  GetPetitionsWaiting,
} from "../utils/GetPetitions";
import Pagination from "../Components/Pagination";
import NoData from "../Components/NoData";
import { SortEnum } from "../Enums";
import { useSearchParams } from "react-router-dom";

const Waiting = () => {
  // const petitions = [
  //   {
  //     types: "교육/인권",
  //     title:
  //       "우즈베키스탄 학생들을 울리며 등록금을 돌려주지 않은 **전문학교 김**을 고발합니다. (제발 등록금을 돌려받게 해주십시오).",
  //     id: 1,
  //     enddate: "2010-10-04",
  //     count: 4556,
  //   },
  //   {
  //     types: "교육/인권",
  //     title:
  //       "우즈베키스탄 학생들을 울리며 등록금을 돌려주지 않은 **전문학교 김**을 고발합니다. (제발 등록금을 돌려받게 해주십시오).",
  //     id: 1,
  //     enddate: "2010-10-04",
  //     count: 4556,
  //   },
  //   {
  //     types: "교육/인권",
  //     title:
  //       "우즈베키스탄 학생들을 울리며 등록금을 돌려주지 않은 **전문학교 김**을 고발합니다. (제발 등록금을 돌려받게 해주십시오).",
  //     id: 1,
  //     enddate: "2010-10-04",
  //     count: 4556,
  //   },
  //   {
  //     types: "교육/인권",
  //     title:
  //       "우즈베키스탄 학생들을 울리며 등록금을 돌려주지 않은 **전문학교 김**을 고발합니다. (제발 등록금을 돌려받게 해주십시오).",
  //     id: 1,
  //     enddate: "2010-10-04",
  //     count: 4556,
  //   },
  //   {
  //     types: "교육/인권",
  //     title:
  //       "우즈베키스탄 학생들을 울리며 등록금을 돌려주지 않은 **전문학교 김**을 고발합니다. (제발 등록금을 돌려받게 해주십시오).",
  //     id: 1,
  //     enddate: "2010-10-04",
  //     count: 4556,
  //   },
  //   {
  //     types: "교육/인권",
  //     title:
  //       "우즈베키스탄 학생들을 울리며 등록금을 돌려주지 않은 **전문학교 김**을 고발합니다. (제발 등록금을 돌려받게 해주십시오).",
  //     id: 1,
  //     enddate: "2010-10-04",
  //     count: 4556,
  //   },
  //   {
  //     types: "교육/인권",
  //     title:
  //       "우즈베키스탄 학생들을 울리며 등록금을 돌려주지 않은 **전문학교 김**을 고발합니다. (제발 등록금을 돌려받게 해주십시오).",
  //     id: 1,
  //     enddate: "2010-10-04",
  //     count: 4556,
  //   },
  //   {
  //     types: "교육/인권",
  //     title:
  //       "우즈베키스탄 학생들을 울리며 등록금을 돌려주지 않은 **전문학교 김**을 고발합니다. (제발 등록금을 돌려받게 해주십시오).",
  //     id: 1,
  //     enddate: "2010-10-04",
  //     count: 4556,
  //   },
  //   {
  //     types: "교육/인권",
  //     title:
  //       "우즈베키스탄 학생들을 울리며 등록금을 돌려주지 않은 **전문학교 김**을 고발합니다. (제발 등록금을 돌려받게 해주십시오).",
  //     id: 1,
  //     enddate: "2010-10-04",
  //     count: 4556,
  //   },
  // ];
  const [params] = useSearchParams();
  const [dropdown, setDropdown] = useState("답변중인 청원");
  const [totalPages, setTotalPages] = useState(1);
  const [petitions, setPetitions] = useState<petitionsDataInterface[]>([]);
  const [sortType, setSortType] = useState("날짜순");
  const petitionType = {
    "만료된 청원": "expired",
    "답변중인 청원": "waiting",
  };
  useEffect(() => {
    const current = petitionType[dropdown as keyof typeof petitionType];
    const getWaitingPetition = async () => {
      const temp = await GetPetitionsWaiting(
        Number(params.get("page")) ?? 0,
        SortEnum[sortType as keyof typeof SortEnum]
      );
      setTotalPages(temp.data.result.totalPages);
      setPetitions(temp.data.result.content);
    };
    const getExpiredPetition = async () => {
      const temp = await GetPetitionsExpired(
        Number(params.get("page")) ?? 0,
        SortEnum[sortType as keyof typeof SortEnum]
      );
      setTotalPages(temp.data.result.totalPages);
      setPetitions(temp.data.result.content);
    };

    if (current === "waiting") {
      getWaitingPetition();
    } else if (current === "expired") {
      getExpiredPetition();
    }
  }, [dropdown, Number(params.get("page")), sortType]);

  return (
    <div className="phone:pt-[80px] pt-20 px-5 w-full phone:w-[900px]">
      <div className="text-[25px] phone:block hidden font-G">청원 현황</div>
      <div className="border-2 border-neutral-400 rounded-xl py-5 phone:block hidden">
        <Status />
      </div>

      <PageTitle
        title="답변중/만료 청원"
        options={["동의순", "날짜순"]}
        setter={setSortType}
      />
      {/* ["답변중인 청원", "만료된 청원"] */}
      <div className="py-1 px-3 flex gap-3 justify-end">
        <div
          className="border-Hufs border-2 px-3 py-1 rounded-lg cursor-pointer"
          onClick={() => {
            setDropdown("답변중인 청원");
          }}
          style={{
            backgroundColor: dropdown === "답변중인 청원" ? "#013642" : "white",
            color: dropdown === "답변중인 청원" ? "white" : "black",
          }}
        >
          답변중
        </div>
        <div
          className="border-Hufs border-2 px-3 py-1 rounded-lg cursor-pointer"
          onClick={() => {
            setDropdown("만료된 청원");
          }}
          style={{
            backgroundColor: dropdown === "만료된 청원" ? "#013642" : "white",
            color: dropdown === "만료된 청원" ? "white" : "black",
          }}
        >
          만료
        </div>
      </div>

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
      <Pagination
        page={Number(params.get("page"))}
        totalPages={totalPages}
        pathname="waiting"
      />
    </div>
  );
};

export default Waiting;
