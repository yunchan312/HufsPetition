import { Dispatch, SetStateAction } from "react";
import { FaXmark } from "react-icons/fa6";

const AgreeModal = ({
  setter,
}: {
  setter: Dispatch<SetStateAction<boolean>>;
}) => {
  const lists = [
    {
      StdNum: "202000299",
      text: "동의합니다.",
    },
    {
      StdNum: "202000299",
      text: "동의합니다.",
    },
    {
      StdNum: "202000299",
      text: "동의합니다.",
    },
    {
      StdNum: "202000299",
      text: "동의합니다.",
    },
    {
      StdNum: "202000299",
      text: "동의합니다.",
    },
    {
      StdNum: "202000299",
      text: "동의합니다.",
    },
    {
      StdNum: "202000299",
      text: "동의합니다.",
    },
    {
      StdNum: "202000299",
      text: "동의합니다.",
    },
    {
      StdNum: "202000299",
      text: "동의합니다.",
    },
    {
      StdNum: "202000299",
      text: "동의합니다.",
    },
    {
      StdNum: "202000299",
      text: "동의합니다.",
    },
    {
      StdNum: "202000299",
      text: "동의합니다.",
    },
    {
      StdNum: "202000299",
      text: "동의합니다.",
    },
    {
      StdNum: "202000299",
      text: "동의합니다.",
    },
    {
      StdNum: "202000299",
      text: "동의합니다.",
    },
    {
      StdNum: "202000299",
      text: "동의합니다.",
    },
    {
      StdNum: "202000299",
      text: "동의합니다.",
    },
    {
      StdNum: "202000299",
      text: "동의합니다.",
    },
  ];
  return (
    <div className="w-[600px] h-[700px] bg-white border-2 overflow-y-scroll px-5 py-3">
      <div className="flex justify-end">
        <FaXmark
          className="text-[30px] text-neutral-400 cursor-pointer"
          onClick={() => setter(false)}
        />
      </div>
      {lists.map((l, i) => (
        <div className="border-b-2 py-3" key={i}>
          <div className="text-[25px] text-Point mb-2">
            {l.StdNum.slice(0, 4) + "*****"}
          </div>
          <div>{l.text}</div>
        </div>
      ))}
    </div>
  );
};

export default AgreeModal;
