import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import { LogOut } from "../utils/Auth";

const MenuBar = ({
  state,
  setter,
  selected,
  user,
  isLogged,
  setIsLogged,
  setMode,
}: {
  setMode: Dispatch<SetStateAction<boolean>>;
  setIsLogged: Dispatch<SetStateAction<boolean>>;
  setter: Dispatch<SetStateAction<boolean>>;
  state: boolean;
  selected: string;
  user: boolean;
  isLogged: boolean;
}) => {
  gsap.registerPlugin(useGSAP);
  useGSAP(() => {
    if (state) {
      gsap.fromTo(".Overlay", { opacity: 0 }, { opacity: 1 });
      gsap.fromTo(".Menu", { x: 100, opacity: 0 }, { x: 0, opacity: 1 });
    }
  }, [state]);
  const navigate = useNavigate();
  const isSuper = Boolean(localStorage.getItem("isSuper"));
  return (
    <div
      className="Overlay bg-black/30 fixed h-full z-60 w-full flex justify-end"
      onClick={() => setter(false)}
    >
      <div
        className="Menu bg-white flex-col self-end gap-3 h-full w-[200px] right-0"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="flex items-center gap-1 border-b-2 py-5 px-2 text-[20px] font-G"
          onClick={() => {
            setter(false);
            navigate("/");
          }}
        >
          한국외대 신문고
        </div>
        <div className="flex flex-col *:cursor-pointer *:px-3 *:py-3 *:border-b-2 *:border-neutral-300">
          {user ? null : selected === "petition" ? (
            <div className="px-2 py-1 text-white font-G border-b-2 bg-Point/40">
              청원하기
            </div>
          ) : (
            <div
              className="hover:bg-black/20"
              onClick={() => {
                setter(false);
                navigate("/petition");
              }}
            >
              청원하기
            </div>
          )}
          {selected === "ongoing" ? (
            <div className="px-2 py-1 text-white font-G border-b-2 bg-Point/40">
              진행중인 청원
            </div>
          ) : (
            <div
              className="hover:bg-black/20"
              onClick={() => {
                setter(false);
                navigate("/ongoing?page=0&size=10");
              }}
            >
              진행중인 청원
            </div>
          )}
          {user ? (
            isSuper ? (
              selected === "manager" ? (
                <div className="px-2 py-1 text-white font-G border-b-2 bg-Point/40">
                  서비스 관리
                </div>
              ) : (
                <div
                  className="hover:bg-black/20"
                  onClick={() => {
                    setter(false);
                    navigate("/manager");
                  }}
                >
                  서비스 관리
                </div>
              )
            ) : null
          ) : null}

          {selected === "waiting" ? (
            <div className="px-2 py-1 text-white font-G border-b-2 bg-Point/40">
              답변 대기 / 만료 청원
            </div>
          ) : (
            <div
              className="hover:bg-black/20"
              onClick={() => {
                setter(false);
                navigate("/waiting?page=0&size=10");
              }}
            >
              답변 대기 / 만료 청원
            </div>
          )}
          {selected === "done" ? (
            <div className="px-2 py-1 text-white font-G border-b-2 bg-Point/40">
              답변된 청원
            </div>
          ) : (
            <div
              className="hover:bg-black/20"
              onClick={() => {
                setter(false);
                navigate("/done?page=0&size=10");
              }}
            >
              답변된 청원
            </div>
          )}
          {!user ? (
            isSuper ? null : selected === "mypage" ? (
              <div
                className="px-2 py-1 text-white font-G border-b-2 bg-Point/40"
                onClick={() => {
                  setter(false);
                  navigate(`/mypage`);
                }}
              >
                마이페이지
              </div>
            ) : (
              <div
                className="hover:bg-black/20 px-2 py-1"
                onClick={() => {
                  setter(false);
                  navigate(`/mypage`);
                }}
              >
                마이페이지
              </div>
            )
          ) : null}
          {selected === "login" ? (
            <div className="px-2 py-1 text-white font-G border-b-2 bg-Point/40">
              {isLogged ? "로그아웃" : "로그인"}
            </div>
          ) : (
            <div
              className="hover:bg-black/20"
              onClick={() => {
                if (!isLogged) {
                  setter(false);
                  navigate("/login");
                } else {
                  setter(false);
                  setMode(false);
                  setIsLogged(false);
                  LogOut();
                }
              }}
            >
              {isLogged ? "로그아웃" : "로그인"}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
