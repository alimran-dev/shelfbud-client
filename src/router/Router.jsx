import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import AddServices from "../pages/AddServices/AddServices";
import MyServices from "../pages/MyServices/MyServices";
import MySchedules from "../pages/MySchedules/MySchedules";
import PrivateRoutes from "../providers/PrivateRoutes";
import Services from "../pages/Services/Services";
import Service from "../pages/Service/Service";
import EditService from "../pages/MyServices/EditService";
import Settings from "../pages/Settings/Settings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
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
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/services/:id",
        element: (
          <PrivateRoutes>
            <Service />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`https://shelfbud-server.vercel.app/services/${params.id}`,{credentials: "include"}),
      },
      {
        path: "/addServices",
        element: (
          <PrivateRoutes>
            <AddServices />
          </PrivateRoutes>
        ),
      },
      {
        path: "/myServices",
        element: (
          <PrivateRoutes>
            <MyServices />
          </PrivateRoutes>
        ),
      },
      {
        path: "/editService/:id",
        element: (
          <PrivateRoutes>
            <EditService />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`https://shelfbud-server.vercel.app/services/${params.id}`,{credentials: "include"}),
      },
      {
        path: "mySchedules",
        element: (
          <PrivateRoutes>
            <MySchedules />
          </PrivateRoutes>
        ),
      },
      {
        path: "/settings",
        element: (
          <PrivateRoutes>
            <Settings />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default router;
