import { useEffect, useState } from "react";
import DonePetitionCard from "../Components/DonePetitionCard";
import { petitionsDataInterface } from "../Interfaces";
import { GetPetitionsAnswered } from "../utils/GetPetitions";
import Pagination from "../Components/Pagination";
import NoData from "../Components/NoData";
import { SortEnum } from "../Enums";
import PageTitle from "../Components/PageTitle";

const Done = () => {
  // const DonePetitions = [
  //   {
  //     title: "응급환자가 있는 구급차를 막아세운 택시 기사를 처벌해 주세요.",
  //     id: 181,
  //     startdate: "2020.01.01",
  //     enddate: "2020.02.01",
  //     count: 592144,
  //     donedate: "2020.03.01",
  //     src: "https://s3-alpha-sig.figma.com/img/b73d/e669/cac39391b591280f272cbc242419c97a?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VbtlZPzuInkMfmM60klT~5FOKdPJany0h77hzDkXEVMPpjBhW-MCGVNOBT3WN0WJMgxu5JPqTY4WdXvWAlnkXAj~ceJRkirniwiB4NFX6KdTHRmmTb5IEn0A~Z4EaOXz5kl1iQCwTIE1F0yMB5RXTwgn3tbBeBYPVU7C7GVnHEILAeCVy540SMJAssZJTiRJKrYQr7BrlF3aH11J6SFe2WFIHfVWy-ctdJFIc3QMhr9zWVQKW4NIG772W6yINqnRPYmsgae7UNkE~X2xWsDripRbnwWLMisCNNavhkLCaglYlkDGFm5nlFsiRMGbMzv5wrmHP4P-rt2E6MCUIUs2Iw__",
  //   },
  //   {
  //     title: "응급환자가 있는 구급차를 막아세운 택시 기사를 처벌해 주세요.",
  //     id: 181,
  //     startdate: "2020.01.01",
  //     enddate: "2020.02.01",
  //     count: 592144,
  //     donedate: "2020.03.01",
  //     src: "https://s3-alpha-sig.figma.com/img/b73d/e669/cac39391b591280f272cbc242419c97a?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VbtlZPzuInkMfmM60klT~5FOKdPJany0h77hzDkXEVMPpjBhW-MCGVNOBT3WN0WJMgxu5JPqTY4WdXvWAlnkXAj~ceJRkirniwiB4NFX6KdTHRmmTb5IEn0A~Z4EaOXz5kl1iQCwTIE1F0yMB5RXTwgn3tbBeBYPVU7C7GVnHEILAeCVy540SMJAssZJTiRJKrYQr7BrlF3aH11J6SFe2WFIHfVWy-ctdJFIc3QMhr9zWVQKW4NIG772W6yINqnRPYmsgae7UNkE~X2xWsDripRbnwWLMisCNNavhkLCaglYlkDGFm5nlFsiRMGbMzv5wrmHP4P-rt2E6MCUIUs2Iw__",
  //   },
  //   {
  //     title: "응급환자가 있는 구급차를 막아세운 택시 기사를 처벌해 주세요.",
  //     id: 181,
  //     startdate: "2020.01.01",
  //     enddate: "2020.02.01",
  //     count: 592144,
  //     donedate: "2020.03.01",
  //     src: "https://s3-alpha-sig.figma.com/img/b73d/e669/cac39391b591280f272cbc242419c97a?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VbtlZPzuInkMfmM60klT~5FOKdPJany0h77hzDkXEVMPpjBhW-MCGVNOBT3WN0WJMgxu5JPqTY4WdXvWAlnkXAj~ceJRkirniwiB4NFX6KdTHRmmTb5IEn0A~Z4EaOXz5kl1iQCwTIE1F0yMB5RXTwgn3tbBeBYPVU7C7GVnHEILAeCVy540SMJAssZJTiRJKrYQr7BrlF3aH11J6SFe2WFIHfVWy-ctdJFIc3QMhr9zWVQKW4NIG772W6yINqnRPYmsgae7UNkE~X2xWsDripRbnwWLMisCNNavhkLCaglYlkDGFm5nlFsiRMGbMzv5wrmHP4P-rt2E6MCUIUs2Iw__",
  //   },
  //   {
  //     title: "응급환자가 있는 구급차를 막아세운 택시 기사를 처벌해 주세요.",
  //     id: 181,
  //     startdate: "2020.01.01",
  //     enddate: "2020.02.01",
  //     count: 592144,
  //     donedate: "2020.03.01",
  //     src: "https://s3-alpha-sig.figma.com/img/b73d/e669/cac39391b591280f272cbc242419c97a?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VbtlZPzuInkMfmM60klT~5FOKdPJany0h77hzDkXEVMPpjBhW-MCGVNOBT3WN0WJMgxu5JPqTY4WdXvWAlnkXAj~ceJRkirniwiB4NFX6KdTHRmmTb5IEn0A~Z4EaOXz5kl1iQCwTIE1F0yMB5RXTwgn3tbBeBYPVU7C7GVnHEILAeCVy540SMJAssZJTiRJKrYQr7BrlF3aH11J6SFe2WFIHfVWy-ctdJFIc3QMhr9zWVQKW4NIG772W6yINqnRPYmsgae7UNkE~X2xWsDripRbnwWLMisCNNavhkLCaglYlkDGFm5nlFsiRMGbMzv5wrmHP4P-rt2E6MCUIUs2Iw__",
  //   },
  //   {
  //     title: "응급환자가 있는 구급차를 막아세운 택시 기사를 처벌해 주세요.",
  //     id: 181,
  //     startdate: "2020.01.01",
  //     enddate: "2020.02.01",
  //     count: 592144,
  //     donedate: "2020.03.01",
  //     src: "https://s3-alpha-sig.figma.com/img/b73d/e669/cac39391b591280f272cbc242419c97a?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VbtlZPzuInkMfmM60klT~5FOKdPJany0h77hzDkXEVMPpjBhW-MCGVNOBT3WN0WJMgxu5JPqTY4WdXvWAlnkXAj~ceJRkirniwiB4NFX6KdTHRmmTb5IEn0A~Z4EaOXz5kl1iQCwTIE1F0yMB5RXTwgn3tbBeBYPVU7C7GVnHEILAeCVy540SMJAssZJTiRJKrYQr7BrlF3aH11J6SFe2WFIHfVWy-ctdJFIc3QMhr9zWVQKW4NIG772W6yINqnRPYmsgae7UNkE~X2xWsDripRbnwWLMisCNNavhkLCaglYlkDGFm5nlFsiRMGbMzv5wrmHP4P-rt2E6MCUIUs2Iw__",
  //   },
  //   {
  //     title: "응급환자가 있는 구급차를 막아세운 택시 기사를 처벌해 주세요.",
  //     id: 181,
  //     startdate: "2020.01.01",
  //     enddate: "2020.02.01",
  //     count: 592144,
  //     donedate: "2020.03.01",
  //     src: "https://s3-alpha-sig.figma.com/img/b73d/e669/cac39391b591280f272cbc242419c97a?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VbtlZPzuInkMfmM60klT~5FOKdPJany0h77hzDkXEVMPpjBhW-MCGVNOBT3WN0WJMgxu5JPqTY4WdXvWAlnkXAj~ceJRkirniwiB4NFX6KdTHRmmTb5IEn0A~Z4EaOXz5kl1iQCwTIE1F0yMB5RXTwgn3tbBeBYPVU7C7GVnHEILAeCVy540SMJAssZJTiRJKrYQr7BrlF3aH11J6SFe2WFIHfVWy-ctdJFIc3QMhr9zWVQKW4NIG772W6yINqnRPYmsgae7UNkE~X2xWsDripRbnwWLMisCNNavhkLCaglYlkDGFm5nlFsiRMGbMzv5wrmHP4P-rt2E6MCUIUs2Iw__",
  //   },
  //   {
  //     title: "응급환자가 있는 구급차를 막아세운 택시 기사를 처벌해 주세요.",
  //     id: 181,
  //     startdate: "2020.01.01",
  //     enddate: "2020.02.01",
  //     count: 592144,
  //     donedate: "2020.03.01",
  //     src: "https://s3-alpha-sig.figma.com/img/b73d/e669/cac39391b591280f272cbc242419c97a?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VbtlZPzuInkMfmM60klT~5FOKdPJany0h77hzDkXEVMPpjBhW-MCGVNOBT3WN0WJMgxu5JPqTY4WdXvWAlnkXAj~ceJRkirniwiB4NFX6KdTHRmmTb5IEn0A~Z4EaOXz5kl1iQCwTIE1F0yMB5RXTwgn3tbBeBYPVU7C7GVnHEILAeCVy540SMJAssZJTiRJKrYQr7BrlF3aH11J6SFe2WFIHfVWy-ctdJFIc3QMhr9zWVQKW4NIG772W6yINqnRPYmsgae7UNkE~X2xWsDripRbnwWLMisCNNavhkLCaglYlkDGFm5nlFsiRMGbMzv5wrmHP4P-rt2E6MCUIUs2Iw__",
  //   },
  //   {
  //     title: "응급환자가 있는 구급차를 막아세운 택시 기사를 처벌해 주세요.",
  //     id: 181,
  //     startdate: "2020.01.01",
  //     enddate: "2020.02.01",
  //     count: 592144,
  //     donedate: "2020.03.01",
  //     src: "https://s3-alpha-sig.figma.com/img/b73d/e669/cac39391b591280f272cbc242419c97a?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VbtlZPzuInkMfmM60klT~5FOKdPJany0h77hzDkXEVMPpjBhW-MCGVNOBT3WN0WJMgxu5JPqTY4WdXvWAlnkXAj~ceJRkirniwiB4NFX6KdTHRmmTb5IEn0A~Z4EaOXz5kl1iQCwTIE1F0yMB5RXTwgn3tbBeBYPVU7C7GVnHEILAeCVy540SMJAssZJTiRJKrYQr7BrlF3aH11J6SFe2WFIHfVWy-ctdJFIc3QMhr9zWVQKW4NIG772W6yINqnRPYmsgae7UNkE~X2xWsDripRbnwWLMisCNNavhkLCaglYlkDGFm5nlFsiRMGbMzv5wrmHP4P-rt2E6MCUIUs2Iw__",
  //   },
  //   {
  //     title: "응급환자가 있는 구급차를 막아세운 택시 기사를 처벌해 주세요.",
  //     id: 181,
  //     startdate: "2020.01.01",
  //     enddate: "2020.02.01",
  //     count: 592144,
  //     donedate: "2020.03.01",
  //     src: "https://s3-alpha-sig.figma.com/img/b73d/e669/cac39391b591280f272cbc242419c97a?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VbtlZPzuInkMfmM60klT~5FOKdPJany0h77hzDkXEVMPpjBhW-MCGVNOBT3WN0WJMgxu5JPqTY4WdXvWAlnkXAj~ceJRkirniwiB4NFX6KdTHRmmTb5IEn0A~Z4EaOXz5kl1iQCwTIE1F0yMB5RXTwgn3tbBeBYPVU7C7GVnHEILAeCVy540SMJAssZJTiRJKrYQr7BrlF3aH11J6SFe2WFIHfVWy-ctdJFIc3QMhr9zWVQKW4NIG772W6yINqnRPYmsgae7UNkE~X2xWsDripRbnwWLMisCNNavhkLCaglYlkDGFm5nlFsiRMGbMzv5wrmHP4P-rt2E6MCUIUs2Iw__",
  //   },

  //   {
  //     title: "응급환자가 있는 구급차를 막아세운 택시 기사를 처벌해 주세요.",
  //     id: 181,
  //     startdate: "2020.01.01",
  //     enddate: "2020.02.01",
  //     count: 592144,
  //     donedate: "2020.03.01",
  //   },
  // ];
  const [donePetitions, setDonePetitions] = useState<petitionsDataInterface[]>(
    []
  );
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [sortType, setSortType] = useState("동의순");
  useEffect(() => {
    const getPetitions = async () => {
      const temp = await GetPetitionsAnswered(
        page,
        SortEnum[sortType as keyof typeof SortEnum]
      );
      setDonePetitions(temp.data.result.content);
      setTotalPages(temp.data.result.totalPages);
    };

    getPetitions();
  }, [page, sortType]);
  return (
    <div className="phone:pt-[80px] pt-20 w-full phone:w-[900px]">
      <div className="py-5 mx-5">
        {/* <div className="text-[25px] font-G">답변된 청원</div> */}
        <PageTitle
          title="답변된 청원"
          options={["동의순", "날짜순"]}
          setter={setSortType}
        />
      </div>

      <div className="flex flex-wrap justify-center gap-5 items-center w-full">
        {donePetitions.length > 0 ? (
          donePetitions.map((done, i) => (
            <div key={i}>
              <DonePetitionCard {...done} />
            </div>
          ))
        ) : (
          <NoData />
        )}
      </div>
      <Pagination page={page} setter={setPage} totalPages={totalPages} />
    </div>
  );
};

export default Done;
