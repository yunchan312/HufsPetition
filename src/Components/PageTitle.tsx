import { Dispatch, SetStateAction } from "react";
import DropDown from "./DropDown";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { isAdmin } from "../atom";

const PageTitle = ({
  title,
  options,
  setter,
}: {
  setter?: Dispatch<SetStateAction<string>>;
  title: string;
  options?: string[];
}) => {
  const navigate = useNavigate();
  const user = useRecoilValue(isAdmin);
  return (
    <div className="mt-10 px-5">
      <div className="flex flex-col phone:flex-row phone:items-center gap-5 phone:gap-0 justify-between border-b-2 pb-7">
        <div className="flex items-center gap-4">
          <div className="phone:text-[25px] text-[20px] font-G">{title}</div>
          {user ? null : (
            <div
              className="bg-Hufs rounded-md text-white py-2 px-3 cursor-pointer active:scale-[0.95] active:bg-Hufs/60 select-none transition"
              onClick={() => navigate("/petition")}
            >
              지금 청원하기
            </div>
          )}
        </div>

        {options ? <DropDown options={options} setter={setter} /> : null}
      </div>
    </div>
  );
};

export default PageTitle;
