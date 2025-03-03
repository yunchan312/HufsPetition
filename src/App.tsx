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
          path: "/login",
          element: <Login />,
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
          path: "/detail/:id",
          element: <PetitionDetail />,
        },
        {
          path: "/test",
          element: <Test />,
        },
      ],
      element: <Layout />,
    },
  ]);
  return (
    <div className="mx-auto max-w-[1500px] relative">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
