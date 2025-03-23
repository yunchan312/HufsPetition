import AnnouncementCard from "../Components/AnnouncementCard";
import FandQCard from "../Components/FandQCard";
import HomeBanner from "../Components/HomeBanner";

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <div className="w-full flex phone:flex-row flex-col items-center justify-center">
        <div className="phone:w-[900px] w-full gap-7 flex phone:flex-row flex-col px-10 py-10">
          <AnnouncementCard />
          <FandQCard />
        </div>
      </div>
    </div>
  );
};

export default Home;
