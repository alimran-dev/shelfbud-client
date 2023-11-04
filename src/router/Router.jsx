import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <div>hello from home</div>,
            }
        ]
    }
])

export default router;