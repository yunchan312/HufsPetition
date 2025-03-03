import HomeBanner from "../Components/HomeBanner";
import OnGoing from "./OnGoing";

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <div className="px-10 py-5">
        <OnGoing />
      </div>
    </div>
  );
};

export default Home;
