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

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/login',
                element: <Login/>,
            },
            {
                path: '/signup',
                element: <SignUp/>
            },
            {
                path: '/addServices',
                element: <PrivateRoutes><AddServices/></PrivateRoutes>
            },
            {
                path: '/myServices',
                element: <MyServices/>,
            },
            {
                path: 'mySchedules',
                element: <MySchedules />,
            }
        ]
    }
])

export default router;