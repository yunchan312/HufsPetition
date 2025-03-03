import { useState } from "react";
import PetitionCard from "../Components/PetitionCard";
import PageTitle from "../Components/PageTitle";

const OnGoing = () => {
  const types = [
    "전체",
    "분야1",
    "분야2",
    "분야3",
    "분야4",
    "분야5",
    "분야1",
    "분야2",
    "분야3",
    "분야4",
    "분야5",
    "분야1",
    "분야2",
    "분야3",
    "분야4",
    "분야5",
    "기타",
  ];
  const petitions = [
    {
      types: "교육/인권",
      title:
        "우즈베키스탄 학생들을 울리며 등록금을 돌려주지 않은 **전문학교 김**을 고발합니다. (제발 등록금을 돌려받게 해주십시오).",
      id: 1,
      enddate: "2010-10-04",
      count: 4556,
    },
    {
      types: "교육/인권",
      title:
        "우즈베키스탄 학생들을 울리며 등록금을 돌려주지 않은 **전문학교 김**을 고발합니다. (제발 등록금을 돌려받게 해주십시오).",
      id: 1,
      enddate: "2010-10-04",
      count: 4556,
    },
    {
      types: "교육/인권",
      title:
        "우즈베키스탄 학생들을 울리며 등록금을 돌려주지 않은 **전문학교 김**을 고발합니다. (제발 등록금을 돌려받게 해주십시오).",
      id: 1,
      enddate: "2010-10-04",
      count: 4556,
    },
    {
      types: "교육/인권",
      title:
        "우즈베키스탄 학생들을 울리며 등록금을 돌려주지 않은 **전문학교 김**을 고발합니다. (제발 등록금을 돌려받게 해주십시오).",
      id: 1,
      enddate: "2010-10-04",
      count: 4556,
    },
    {
      types: "교육/인권",
      title:
        "우즈베키스탄 학생들을 울리며 등록금을 돌려주지 않은 **전문학교 김**을 고발합니다. (제발 등록금을 돌려받게 해주십시오).",
      id: 1,
      enddate: "2010-10-04",
      count: 4556,
    },
    {
      types: "교육/인권",
      title:
        "우즈베키스탄 학생들을 울리며 등록금을 돌려주지 않은 **전문학교 김**을 고발합니다. (제발 등록금을 돌려받게 해주십시오).",
      id: 1,
      enddate: "2010-10-04",
      count: 4556,
    },
    {
      types: "교육/인권",
      title:
        "우즈베키스탄 학생들을 울리며 등록금을 돌려주지 않은 **전문학교 김**을 고발합니다. (제발 등록금을 돌려받게 해주십시오).",
      id: 1,
      enddate: "2010-10-04",
      count: 4556,
    },
    {
      types: "교육/인권",
      title:
        "우즈베키스탄 학생들을 울리며 등록금을 돌려주지 않은 **전문학교 김**을 고발합니다. (제발 등록금을 돌려받게 해주십시오).",
      id: 1,
      enddate: "2010-10-04",
      count: 4556,
    },
    {
      types: "교육/인권",
      title:
        "우즈베키스탄 학생들을 울리며 등록금을 돌려주지 않은 **전문학교 김**을 고발합니다. (제발 등록금을 돌려받게 해주십시오).",
      id: 1,
      enddate: "2010-10-04",
      count: 4556,
    },
  ];
  const [typeNum, setTypeNum] = useState(0);
  return (
    <div className="pt-[80px] px-5">
      <div>
        <div className="text-[25px] mb-5">청원 분류 선택</div>
        <div className="border-2 grid grid-cols-5 py-3 px-3">
          {types.map((t, i) => (
            <div
              onClick={() => setTypeNum(i)}
              key={i}
              id={`${i}`}
              className="text-Point/50 my-2 select-none cursor-pointer px-2"
              style={{
                backgroundColor: typeNum === i ? "#00677F40" : "white",
                color: typeNum === i ? "#00677F" : "#00677F40",
                fontWeight: typeNum === i ? "bold" : "",
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>

      <PageTitle title="진행중인 청원" options={["a", "b", "c", "d"]} />
      <div>
        {petitions.map((petition, i) => (
          <div key={i}>
            <PetitionCard
              types={petition.types}
              title={petition.title}
              id={petition.id}
              enddate={petition.enddate}
              count={petition.count}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OnGoing;
