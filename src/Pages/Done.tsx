import DonePetitionCard from "../Components/DonePetitionCard";

const Done = () => {
  const DonePetitions = [
    {
      title: "응급환자가 있는 구급차를 막아세운 택시 기사를 처벌해 주세요.",
      id: 181,
      startdate: "2020.01.01",
      enddate: "2020.02.01",
      count: 592144,
      donedate: "2020.03.01",
      src: "https://s3-alpha-sig.figma.com/img/b73d/e669/cac39391b591280f272cbc242419c97a?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VbtlZPzuInkMfmM60klT~5FOKdPJany0h77hzDkXEVMPpjBhW-MCGVNOBT3WN0WJMgxu5JPqTY4WdXvWAlnkXAj~ceJRkirniwiB4NFX6KdTHRmmTb5IEn0A~Z4EaOXz5kl1iQCwTIE1F0yMB5RXTwgn3tbBeBYPVU7C7GVnHEILAeCVy540SMJAssZJTiRJKrYQr7BrlF3aH11J6SFe2WFIHfVWy-ctdJFIc3QMhr9zWVQKW4NIG772W6yINqnRPYmsgae7UNkE~X2xWsDripRbnwWLMisCNNavhkLCaglYlkDGFm5nlFsiRMGbMzv5wrmHP4P-rt2E6MCUIUs2Iw__",
    },
    {
      title: "응급환자가 있는 구급차를 막아세운 택시 기사를 처벌해 주세요.",
      id: 181,
      startdate: "2020.01.01",
      enddate: "2020.02.01",
      count: 592144,
      donedate: "2020.03.01",
      src: "https://s3-alpha-sig.figma.com/img/b73d/e669/cac39391b591280f272cbc242419c97a?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VbtlZPzuInkMfmM60klT~5FOKdPJany0h77hzDkXEVMPpjBhW-MCGVNOBT3WN0WJMgxu5JPqTY4WdXvWAlnkXAj~ceJRkirniwiB4NFX6KdTHRmmTb5IEn0A~Z4EaOXz5kl1iQCwTIE1F0yMB5RXTwgn3tbBeBYPVU7C7GVnHEILAeCVy540SMJAssZJTiRJKrYQr7BrlF3aH11J6SFe2WFIHfVWy-ctdJFIc3QMhr9zWVQKW4NIG772W6yINqnRPYmsgae7UNkE~X2xWsDripRbnwWLMisCNNavhkLCaglYlkDGFm5nlFsiRMGbMzv5wrmHP4P-rt2E6MCUIUs2Iw__",
    },
    {
      title: "응급환자가 있는 구급차를 막아세운 택시 기사를 처벌해 주세요.",
      id: 181,
      startdate: "2020.01.01",
      enddate: "2020.02.01",
      count: 592144,
      donedate: "2020.03.01",
      src: "https://s3-alpha-sig.figma.com/img/b73d/e669/cac39391b591280f272cbc242419c97a?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VbtlZPzuInkMfmM60klT~5FOKdPJany0h77hzDkXEVMPpjBhW-MCGVNOBT3WN0WJMgxu5JPqTY4WdXvWAlnkXAj~ceJRkirniwiB4NFX6KdTHRmmTb5IEn0A~Z4EaOXz5kl1iQCwTIE1F0yMB5RXTwgn3tbBeBYPVU7C7GVnHEILAeCVy540SMJAssZJTiRJKrYQr7BrlF3aH11J6SFe2WFIHfVWy-ctdJFIc3QMhr9zWVQKW4NIG772W6yINqnRPYmsgae7UNkE~X2xWsDripRbnwWLMisCNNavhkLCaglYlkDGFm5nlFsiRMGbMzv5wrmHP4P-rt2E6MCUIUs2Iw__",
    },
    {
      title: "응급환자가 있는 구급차를 막아세운 택시 기사를 처벌해 주세요.",
      id: 181,
      startdate: "2020.01.01",
      enddate: "2020.02.01",
      count: 592144,
      donedate: "2020.03.01",
      src: "https://s3-alpha-sig.figma.com/img/b73d/e669/cac39391b591280f272cbc242419c97a?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VbtlZPzuInkMfmM60klT~5FOKdPJany0h77hzDkXEVMPpjBhW-MCGVNOBT3WN0WJMgxu5JPqTY4WdXvWAlnkXAj~ceJRkirniwiB4NFX6KdTHRmmTb5IEn0A~Z4EaOXz5kl1iQCwTIE1F0yMB5RXTwgn3tbBeBYPVU7C7GVnHEILAeCVy540SMJAssZJTiRJKrYQr7BrlF3aH11J6SFe2WFIHfVWy-ctdJFIc3QMhr9zWVQKW4NIG772W6yINqnRPYmsgae7UNkE~X2xWsDripRbnwWLMisCNNavhkLCaglYlkDGFm5nlFsiRMGbMzv5wrmHP4P-rt2E6MCUIUs2Iw__",
    },
    {
      title: "응급환자가 있는 구급차를 막아세운 택시 기사를 처벌해 주세요.",
      id: 181,
      startdate: "2020.01.01",
      enddate: "2020.02.01",
      count: 592144,
      donedate: "2020.03.01",
      src: "https://s3-alpha-sig.figma.com/img/b73d/e669/cac39391b591280f272cbc242419c97a?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VbtlZPzuInkMfmM60klT~5FOKdPJany0h77hzDkXEVMPpjBhW-MCGVNOBT3WN0WJMgxu5JPqTY4WdXvWAlnkXAj~ceJRkirniwiB4NFX6KdTHRmmTb5IEn0A~Z4EaOXz5kl1iQCwTIE1F0yMB5RXTwgn3tbBeBYPVU7C7GVnHEILAeCVy540SMJAssZJTiRJKrYQr7BrlF3aH11J6SFe2WFIHfVWy-ctdJFIc3QMhr9zWVQKW4NIG772W6yINqnRPYmsgae7UNkE~X2xWsDripRbnwWLMisCNNavhkLCaglYlkDGFm5nlFsiRMGbMzv5wrmHP4P-rt2E6MCUIUs2Iw__",
    },
    {
      title: "응급환자가 있는 구급차를 막아세운 택시 기사를 처벌해 주세요.",
      id: 181,
      startdate: "2020.01.01",
      enddate: "2020.02.01",
      count: 592144,
      donedate: "2020.03.01",
      src: "https://s3-alpha-sig.figma.com/img/b73d/e669/cac39391b591280f272cbc242419c97a?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VbtlZPzuInkMfmM60klT~5FOKdPJany0h77hzDkXEVMPpjBhW-MCGVNOBT3WN0WJMgxu5JPqTY4WdXvWAlnkXAj~ceJRkirniwiB4NFX6KdTHRmmTb5IEn0A~Z4EaOXz5kl1iQCwTIE1F0yMB5RXTwgn3tbBeBYPVU7C7GVnHEILAeCVy540SMJAssZJTiRJKrYQr7BrlF3aH11J6SFe2WFIHfVWy-ctdJFIc3QMhr9zWVQKW4NIG772W6yINqnRPYmsgae7UNkE~X2xWsDripRbnwWLMisCNNavhkLCaglYlkDGFm5nlFsiRMGbMzv5wrmHP4P-rt2E6MCUIUs2Iw__",
    },
    {
      title: "응급환자가 있는 구급차를 막아세운 택시 기사를 처벌해 주세요.",
      id: 181,
      startdate: "2020.01.01",
      enddate: "2020.02.01",
      count: 592144,
      donedate: "2020.03.01",
      src: "https://s3-alpha-sig.figma.com/img/b73d/e669/cac39391b591280f272cbc242419c97a?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VbtlZPzuInkMfmM60klT~5FOKdPJany0h77hzDkXEVMPpjBhW-MCGVNOBT3WN0WJMgxu5JPqTY4WdXvWAlnkXAj~ceJRkirniwiB4NFX6KdTHRmmTb5IEn0A~Z4EaOXz5kl1iQCwTIE1F0yMB5RXTwgn3tbBeBYPVU7C7GVnHEILAeCVy540SMJAssZJTiRJKrYQr7BrlF3aH11J6SFe2WFIHfVWy-ctdJFIc3QMhr9zWVQKW4NIG772W6yINqnRPYmsgae7UNkE~X2xWsDripRbnwWLMisCNNavhkLCaglYlkDGFm5nlFsiRMGbMzv5wrmHP4P-rt2E6MCUIUs2Iw__",
    },
    {
      title: "응급환자가 있는 구급차를 막아세운 택시 기사를 처벌해 주세요.",
      id: 181,
      startdate: "2020.01.01",
      enddate: "2020.02.01",
      count: 592144,
      donedate: "2020.03.01",
      src: "https://s3-alpha-sig.figma.com/img/b73d/e669/cac39391b591280f272cbc242419c97a?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VbtlZPzuInkMfmM60klT~5FOKdPJany0h77hzDkXEVMPpjBhW-MCGVNOBT3WN0WJMgxu5JPqTY4WdXvWAlnkXAj~ceJRkirniwiB4NFX6KdTHRmmTb5IEn0A~Z4EaOXz5kl1iQCwTIE1F0yMB5RXTwgn3tbBeBYPVU7C7GVnHEILAeCVy540SMJAssZJTiRJKrYQr7BrlF3aH11J6SFe2WFIHfVWy-ctdJFIc3QMhr9zWVQKW4NIG772W6yINqnRPYmsgae7UNkE~X2xWsDripRbnwWLMisCNNavhkLCaglYlkDGFm5nlFsiRMGbMzv5wrmHP4P-rt2E6MCUIUs2Iw__",
    },
    {
      title: "응급환자가 있는 구급차를 막아세운 택시 기사를 처벌해 주세요.",
      id: 181,
      startdate: "2020.01.01",
      enddate: "2020.02.01",
      count: 592144,
      donedate: "2020.03.01",
      src: "https://s3-alpha-sig.figma.com/img/b73d/e669/cac39391b591280f272cbc242419c97a?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VbtlZPzuInkMfmM60klT~5FOKdPJany0h77hzDkXEVMPpjBhW-MCGVNOBT3WN0WJMgxu5JPqTY4WdXvWAlnkXAj~ceJRkirniwiB4NFX6KdTHRmmTb5IEn0A~Z4EaOXz5kl1iQCwTIE1F0yMB5RXTwgn3tbBeBYPVU7C7GVnHEILAeCVy540SMJAssZJTiRJKrYQr7BrlF3aH11J6SFe2WFIHfVWy-ctdJFIc3QMhr9zWVQKW4NIG772W6yINqnRPYmsgae7UNkE~X2xWsDripRbnwWLMisCNNavhkLCaglYlkDGFm5nlFsiRMGbMzv5wrmHP4P-rt2E6MCUIUs2Iw__",
    },

    {
      title: "응급환자가 있는 구급차를 막아세운 택시 기사를 처벌해 주세요.",
      id: 181,
      startdate: "2020.01.01",
      enddate: "2020.02.01",
      count: 592144,
      donedate: "2020.03.01",
    },
  ];
  return (
    <div className="pt-[80px] px-5">
      <div className="py-5 border-b-2 mx-5">
        <div className="text-[25px]">답변된 청원</div>
      </div>

      {DonePetitions.map((done, i) => (
        <div key={i}>
          <DonePetitionCard {...done} />
        </div>
      ))}
    </div>
  );
};

export default Done;
