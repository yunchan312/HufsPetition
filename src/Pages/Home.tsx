import AnnouncementCard from "../Components/AnnouncementCard";
import FandQCard from "../Components/FandQCard";
import HomeBanner from "../Components/HomeBanner";

const Home = () => {
  return (
    <div className="">
      <HomeBanner />
      <div className="w-full flex phone:flex-row flex-col items-center justify-center">
        <div className="phone:w-[900px] w-full gap-1 flex phone:flex-row flex-col py-10 min-h-[300px]">
          <AnnouncementCard />
          <FandQCard />
        </div>
      </div>
    </div>
  );
};

export default Home;
