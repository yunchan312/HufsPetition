import { Outlet } from "react-router-dom";
import Navigator from "./Navigator";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="min-h-[100vh] flex flex-col justify-between items-center font-GL">
      <div className="relative z-30 w-[100%]">
        <Navigator />
      </div>
      <div className="phone:w-[900px] w-[100%] z-20 flex items-center justify-center pt-10">
        <Outlet />
      </div>

      <div className="self-end w-full">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
