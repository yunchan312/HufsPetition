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
    <div className="phone:pt-[80px] pt-20 px-5">
      <div className="text-[25px] phone:block hidden font-G">청원 현황</div>
      <div className="border-2 border-neutral-400 rounded-xl py-5 phone:block hidden">
        <Status />
      </div>

      <PageTitle title="답변중/만료 청원" options={["a", "b", "c", "d"]} />

      {petitions.map((petition, i) => (
        <div key={i}>
          <PetitionCard {...petition} />
        </div>
      ))}
    </div>
  );
};

export default Waiting;
