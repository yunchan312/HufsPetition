import HomeBanner from "../Components/HomeBanner";
import OnGoing from "./OnGoing";

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <div className="phone:px-10 phone:py-5 flex items-center justify-center">
        <OnGoing />
      </div>
    </div>
  );
};

export default Home;
