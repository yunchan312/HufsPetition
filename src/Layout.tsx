import { Outlet } from "react-router-dom";
import Navigator from "./Navigator";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="min-h-[100vh] flex flex-col justify-between">
      <Navigator />
      <Outlet />
      <div className="self-end w-full">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
