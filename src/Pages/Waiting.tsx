import PageTitle from "../Components/PageTitle";
import PetitionCard from "../Components/PetitionCard";
import Status from "../Components/Status";

const Waiting = () => {
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
  return (
    <div className="pt-[80px] px-5">
      <div className="text-[25px]">청원 현황</div>
      <div className="border-2 py-5">
        <Status />
      </div>

      <PageTitle title="답변 대기 / 만료 청원" options={["a", "b", "c", "d"]} />

      {petitions.map((petition) => (
        <PetitionCard {...petition} />
      ))}
    </div>
  );
};

export default Waiting;
