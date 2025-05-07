import gsap from "gsap";
import Banner from "../assets/Banner2.png";
import Status from "./Status";
import { useGSAP } from "@gsap/react";
import HomeSwiper from "./HomeSwiper";
import { useEffect, useState } from "react";
import { GetStats } from "../utils/Stats";
import { PetitionStats } from "../Interfaces";

const HomeBanner = () => {
  gsap.registerPlugin(useGSAP);
  useGSAP(() => {
    gsap.fromTo(".Banner", { opacity: 0 }, { opacity: 1, duration: 3 });
  }, []);

  const [stats, setStats] = useState<PetitionStats>();

  useEffect(() => {
    const getStatus = async () => {
      const temp = await GetStats();
      setStats(temp.data.result);
    };

    getStatus();
  }, []);
  return (
    <div className="phone:pt-[45px] pt-[30px]">
      <div
        className="Banner flex flex-col justify-end h-[300px] phone:h-[600px] gap-10 bg-cover bg-center w-[99vw]"
        style={{
          backgroundImage: `url(${Banner})`,
        }}
      >
        <div className="phone:flex hidden items-center justify-center w-full">
          <Status />
        </div>
        <div className="relative phone:hidden w-full h-full bg-white/60">
          <HomeSwiper {...stats} />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
