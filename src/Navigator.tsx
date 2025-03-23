import { useLocation, useNavigate } from "react-router-dom";
// import Logo from "./assets/logo-top-white.png";
import { MdMenu } from "react-icons/md";
import { useEffect, useState } from "react";
import MenuBar from "./Components/MenuBar";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isAdmin } from "./atom";
import { LogOut } from "./utils/Auth";

const Navigator = () => {
  const navigate = useNavigate();
  const user = useRecoilValue(isAdmin);

  const setMode = useSetRecoilState(isAdmin);

  const [isMenu, setIsMenu] = useState(false);
  const [selected, setSelected] = useState("");
  const [isLogged, setIsLogged] = useState(false);
  // let loc = location.pathname;
  let loc = useLocation().pathname;
  const adminLs = localStorage.getItem("admin_at");
  const ls = localStorage.getItem("at");

  const isSuper = Boolean(localStorage.getItem("isSuper"));
  useEffect(() => {
    if (localStorage.getItem("admin_at")) {
      setMode(true);
      setIsLogged(true);
    }
    if (localStorage.getItem("at")) {
      setIsLogged(true);
    }
  }, [ls, adminLs]);

  useEffect(() => {
    if (loc.includes("petition")) {
      setSelected("petition");
    } else if (loc.includes("ongoing")) {
      setSelected("ongoing");
    } else if (loc.includes("waiting")) {
      setSelected("waiting");
    } else if (loc.includes("done")) {
      setSelected("done");
    } else if (loc.includes("login")) {
      setSelected("login");
    } else if (loc.includes("manager")) {
      setSelected("manager");
    } else {
      setSelected("");
    }
  }, [loc]);
  return (
    <>
      {isMenu ? (
        <MenuBar
          setMode={setMode}
          setIsLogged={setIsLogged}
          user={user}
          selected={selected}
          setter={setIsMenu}
          state={isMenu}
          isLogged={isLogged}
        />
      ) : null}
      <div className="absolute z-50 px-5 phone:py-7 py-4 bg-white shadow-lg w-full text-black flex items-center justify-between">
        <div
          className="text-[25px] font-G flex items-center gap-1 select-none cursor-pointer"
          onClick={() => navigate("/")}
        >
          한국외대 신문고
        </div>

        <div className="phone:block hidden">
          <div className="flex gap-5 *:cursor-pointer">
            {user ? null : selected === "petition" ? (
              <div className="px-2 py-1 text-Point font-G border-b-2">
                청원하기
              </div>
            ) : (
              <div
                className="hover:bg-black/20 rounded-md px-2 py-1"
                onClick={() => navigate("/petition")}
              >
                청원하기
              </div>
            )}
            {selected === "ongoing" ? (
              <div className="px-2 py-1 text-Point font-G border-b-2">
                진행중인 청원
              </div>
            ) : (
              <div
                className="hover:bg-black/20 rounded-md px-2 py-1"
                onClick={() => navigate("/ongoing")}
              >
                진행중인 청원
              </div>
            )}
            {selected === "waiting" ? (
              <div className="px-2 py-1 text-Point font-G border-b-2">
                답변 대기 / 만료 청원
              </div>
            ) : (
              <div
                className="hover:bg-black/20 rounded-md px-2 py-1"
                onClick={() => navigate("/waiting")}
              >
                답변 대기 / 만료 청원
              </div>
            )}
            {selected === "done" ? (
              <div className="px-2 py-1 text-Point font-G border-b-2">
                답변된 청원
              </div>
            ) : (
              <div
                className="hover:bg-black/20 rounded-md px-2 py-1"
                onClick={() => navigate("/done")}
              >
                답변된 청원
              </div>
            )}
            {user ? (
              isSuper ? (
                selected === "manager" ? (
                  <div className="px-2 py-1 text-Point font-G border-b-2">
                    서비스 관리
                  </div>
                ) : (
                  <div
                    className="hover:bg-black/20 rounded-md px-2 py-1"
                    onClick={() => navigate("/manager")}
                  >
                    서비스 관리
                  </div>
                )
              ) : null
            ) : null}
            {selected === "login" ? (
              <div className="px-2 py-1 text-Point font-G border-b-2">
                {isLogged ? "로그아웃" : "로그인"}
              </div>
            ) : (
              <div
                className="hover:bg-black/20 rounded-md px-2 py-1"
                onClick={() => {
                  if (!isLogged) {
                    navigate("/login");
                  } else {
                    setMode(false);
                    LogOut();
                  }
                }}
              >
                {isLogged ? "로그아웃" : "로그인"}
              </div>
            )}
          </div>
        </div>

        <div className="phone:hidden block">
          <MdMenu className="text-2xl" onClick={() => setIsMenu(true)} />
        </div>
      </div>
    </>
  );
};

export default Navigator;
