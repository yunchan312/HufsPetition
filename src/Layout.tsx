import { Outlet } from "react-router-dom";
import Navigator from "./Navigator";
import Footer from "./Footer";
import AgreeModal from "./Components/Modals/AgreeModal";
import { useRecoilValue } from "recoil";
import { isModal, isSafariModal } from "./atom";
import { useEffect } from "react";
import SafariModal from "./Components/Modals/SafariModal";

const Layout = () => {
  const modal = useRecoilValue(isModal);
  const isSafari = useRecoilValue(isSafariModal);

  useEffect(() => {
    if (modal || isSafari) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [modal, isSafari]);

  return (
    <>
      {modal ? <div className="overlay">{<AgreeModal />}</div> : null}
      {isSafari ? <div className="overlay">{<SafariModal />}</div> : null}

      <div className="min-h-[100vh] flex flex-col justify-between items-center font-GL">
        <div className="relative z-40 w-[100%]">
          <Navigator />
        </div>
        <div className="phone:w-[900px] w-[100%] z-20 flex items-center justify-center pt-10">
          <Outlet />
        </div>

        <div className="self-end w-full">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
