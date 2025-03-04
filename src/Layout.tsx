import { Outlet } from "react-router-dom";
import Navigator from "./Navigator";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="min-h-[100vh] flex flex-col justify-between items-center">
      <div className="relative z-50 w-[100%]">
        <Navigator />
      </div>
      <div className="max-w-[1500px] z-40 flex items-center justify-center">
        <Outlet />
      </div>

      <div className="self-end w-full">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
