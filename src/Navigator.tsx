import { useNavigate } from "react-router-dom";
// import Logo from "./assets/logo-top-white.png";
import { LiaDrumSolid } from "react-icons/lia";
import { MdMenu } from "react-icons/md";
import { useState } from "react";
import MenuBar from "./Components/MenuBar";
import { useRecoilValue } from "recoil";
import { isAdmin } from "./atom";

const Navigator = () => {
  const navigate = useNavigate();
  const [isMenu, setIsMenu] = useState(false);
  const user = useRecoilValue(isAdmin);
  return (
    <>
      {isMenu ? <MenuBar setter={setIsMenu} state={isMenu} /> : null}
      <div className="absolute px-5 py-2 bg-black/30 w-full flex items-center justify-between">
        {/* <img
        src={Logo}
        className="cursor-pointer my-1"
        onClick={() => navigate("/")}
      /> */}
        <div
          className="text-white font-semibold text-[25px] flex items-center gap-1 select-none cursor-pointer"
          onClick={() => navigate("/")}
        >
          <LiaDrumSolid className="text-[40px]" />
          한국외대 신문고
        </div>

        <div className="phone:block hidden">
          <div className="text-white flex gap-5 *:cursor-pointer">
            <div
              className="hover:bg-black/20 rounded-md px-2 py-1"
              onClick={() => navigate("/ongoing")}
            >
              진행중인 청원
            </div>
            <div
              className="hover:bg-black/20 rounded-md px-2 py-1"
              onClick={() => navigate("/waiting")}
            >
              답변 대기 / 만료 청원
            </div>
            <div
              className="hover:bg-black/20 rounded-md px-2 py-1"
              onClick={() => navigate("/done")}
            >
              답변된 청원
            </div>
            {user ? (
              <div
                className="hover:bg-black/20 rounded-md px-2 py-1"
                onClick={() => navigate("/manager")}
              >
                서비스 관리
              </div>
            ) : null}
            <div
              className="hover:bg-black/20 rounded-md px-2 py-1"
              onClick={() => navigate("/login")}
            >
              로그인
            </div>
          </div>
        </div>

        <div className="phone:hidden block">
          <MdMenu
            className="text-white text-2xl"
            onClick={() => setIsMenu(true)}
          />
        </div>
      </div>
    </>
  );
};

export default Navigator;
