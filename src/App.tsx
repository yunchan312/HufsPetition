import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./Layout";
import Login from "./Pages/Login";
import OnGoing from "./Pages/OnGoing";
import Waiting from "./Pages/Waiting";
import Done from "./Pages/Done";
import Petition from "./Pages/Petition";
import PetitionDetail from "./Pages/PetitionDetail";
import Test from "./Test";
import Service from "./Pages/Service";
import Reply from "./Components/Reply";
import Announcement from "./Pages/Announcement";
import FandQ from "./Pages/FandQ";
import AnnouncementDetail from "./Pages/AnnouncementDetail";
import NotFound from "./NotFound";
import MyPage from "./Pages/MyPage";
import MyBookmark from "./Pages/MyBookmark";
import MyAgreement from "./Pages/MyAgreement";
import MyPetition from "./Pages/MyPetition";
import Legals from "./Pages/Legals";
import SearchPwd from "./Pages/SearchPwd";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/ongoing",
          element: <OnGoing />,
        },
        {
          path: "/waiting",
          element: <Waiting />,
        },
        {
          path: "/done",
          element: <Done />,
        },
        {
          path: "/petition",
          element: <Petition />,
        },
        {
          path: "/manager",
          element: <Service />,
        },
        {
          path: "/reply/:id",
          element: <Reply />,
        },
        {
          path: "/announcement",
          element: <Announcement />,
        },
        {
          path: "/announcement/:id",
          element: <AnnouncementDetail />,
        },
        {
          path: "/fq",
          element: <FandQ />,
        },
        {
          path: "/detail/:id",
          element: <PetitionDetail />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/mypage",
          element: <MyPage />,
        },
        {
          path: "/mypage/bookmark",
          element: <MyBookmark />,
        },
        {
          path: "/mypage/agreement",
          element: <MyAgreement />,
        },
        {
          path: "/mypage/mypet",
          element: <MyPetition />,
        },
        {
          path: "/legals",
          element: <Legals />,
        },
        {
          path: "/search-pwd",
          element: <SearchPwd />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
      element: <Layout />,
    },
    {
      path: "/test",
      element: <Test />,
    },
  ]);
  return (
    <div className="mx-auto relative">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
