import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";

const MenuBar = ({
  state,
  setter,
  selected,
  user,
}: {
  setter: Dispatch<SetStateAction<boolean>>;
  state: boolean;
  selected: string;
  user: boolean;
}) => {
  gsap.registerPlugin(useGSAP);
  useGSAP(() => {
    if (state) {
      gsap.fromTo(".Overlay", { opacity: 0 }, { opacity: 1 });
      gsap.fromTo(".Menu", { x: 100, opacity: 0 }, { x: 0, opacity: 1 });
    }
  }, [state]);
  const navigate = useNavigate();
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
          {selected === "petition" ? (
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
                navigate("/ongoing");
              }}
            >
              진행중인 청원
            </div>
          )}
          {user ? (
            selected === "manager" ? (
              <div className="px-2 py-1 text-white font-G border-b-2 bg-Point/40">
                서비스 관리
              </div>
            ) : (
              <div
                className="hover:bg-black/20"
                onClick={() => {
                  setter(false);
                  navigate("/ongoing");
                }}
              >
                서비스 관리
              </div>
            )
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
                navigate("/waiting");
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
                navigate("/done");
              }}
            >
              답변된 청원
            </div>
          )}
          {selected === "login" ? (
            <div className="px-2 py-1 text-white font-G border-b-2 bg-Point/40">
              로그인
            </div>
          ) : (
            <div
              className="hover:bg-black/20"
              onClick={() => {
                setter(false);
                navigate("/login");
              }}
            >
              로그인
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
