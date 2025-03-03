import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import DropDown from "./DropDown";
import { useNavigate } from "react-router-dom";

const PageTitle = ({
  title,
  options,
}: {
  title: string;
  options: string[];
}) => {
  const [isDrop, setIsDrop] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="mt-10 px-5">
      <div className="flex items-center justify-between border-b-2 pb-7">
        <div className="flex items-center gap-4">
          <div className="text-[25px]">{title}</div>
          <div
            className="bg-Hufs text-white font-bold py-2 px-3 cursor-pointer active:scale-[0.95] active:bg-Hufs/60 select-none transition"
            onClick={() => navigate("/petition")}
          >
            지금 청원하기
          </div>
        </div>

        <div className="cursor-pointer relative">
          <span
            className="flex items-center select-none"
            onClick={() => setIsDrop((prev) => !prev)}
          >
            DropDown <IoMdArrowDropdown className="text-[25px]" />
          </span>
          {isDrop ? <DropDown options={options} /> : null}
        </div>
      </div>
    </div>
  );
};

export default PageTitle;
