import gsap from "gsap";
import Banner from "../assets/Banner.png";
import Status from "./Status";
import { useGSAP } from "@gsap/react";
import HomeSwiper from "./HomeSwiper";
import { useEffect, useState } from "react";
import { GetStats } from "../utils/Stats";
import { PetitionStats } from "../Interfaces";
import { throwErr } from "../utils/ThrowErr";

const HomeBanner = () => {
  gsap.registerPlugin(useGSAP);
  useGSAP(() => {
    gsap.fromTo(".Banner", { opacity: 0 }, { opacity: 1, duration: 3 });
  }, []);

  const [stats, setStats] = useState<PetitionStats>();
  useEffect(() => {
    const getStatus = async () => {
      try {
        const temp = await GetStats();
        setStats(temp.data.result);
      } catch (err) {
        throwErr(err);
      }
    };

    getStatus();
  }, []);
  return (
    <div>
      <div
        className="Banner phone:h-[600px] h-[300px] flex flex-col justify-end gap-10 bg-cover bg-center w-[99vw]"
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
