import Banner from "../assets/Banner.png";
import Status from "./Status";

const HomeBanner = () => {
  return (
    <div>
      <div
        className="h-[600px] flex flex-col justify-end bg-cover bg-center"
        style={{
          backgroundImage: `url(${Banner})`,
        }}
      >
        <Status />
      </div>
    </div>
  );
};

export default HomeBanner;
