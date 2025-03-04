const DropDown = ({ options }: { options: string[] }) => {
  return (
    <select className="bg-white w-[200px] *:px-1 left-0 shadow-2xl border-2 rounded-md">
      {options.map((option, i) => (
        <option key={i} value={option} className="option">
          {option}
        </option>
      ))}
    </select>
  );
};

export default DropDown;
