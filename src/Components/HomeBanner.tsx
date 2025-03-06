import gsap from "gsap";
import Banner from "../assets/Banner.png";
import Status from "./Status";
import { useGSAP } from "@gsap/react";

const HomeBanner = () => {
  gsap.registerPlugin(useGSAP);
  useGSAP(() => {
    gsap.fromTo(".Banner", { opacity: 0 }, { opacity: 1, duration: 3 });
  }, []);
  return (
    <div>
      <div
        className="Banner phone:h-[600px] h-[300px] flex flex-col justify-end gap-10 bg-cover bg-center w-screen"
        style={{
          backgroundImage: `url(${Banner})`,
        }}
      >
        <div className="phone:flex hidden items-center justify-center w-full">
          <Status />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
