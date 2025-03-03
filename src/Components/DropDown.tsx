const DropDown = ({ options }: { options: string[] }) => {
  return (
    <div className="absolute top-7 bg-white w-full *:px-1 left-0 shadow-2xl">
      {options.map((option) => (
        <div className="option">{option}</div>
      ))}
    </div>
  );
};

export default DropDown;
