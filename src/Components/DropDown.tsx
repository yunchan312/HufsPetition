import { Dispatch, SetStateAction } from "react";

const DropDown = ({
  options,
  setter,
}: {
  options: string[];
  setter?: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <select
      className="bg-white w-[200px] *:px-1 left-0 shadow-2xl border-2 rounded-md"
      onChange={(e) => {
        if (setter) {
          setter(e.target.value);
        }
      }}
    >
      {options.map((option, i) => (
        <option key={i} value={option} className="option">
          {option}
        </option>
      ))}
    </select>
  );
};

export default DropDown;
