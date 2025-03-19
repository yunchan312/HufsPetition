import { useEffect } from "react";
import { Reissue } from "./Auth";
import { useCookies } from "react-cookie";

const Apitest = () => {
  const [, setCookie] = useCookies();
  useEffect(() => {
    const rr = async () => {
      const rt = localStorage.getItem("rt");
      setCookie("refresh_token", rt);
      const temp = await Reissue();
      console.log(temp);
    };

    rr();
  }, []);
  return <div></div>;
};

export default Apitest;
