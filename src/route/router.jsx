import { createBrowserRouter } from "react-router-dom";
import Homelayout from "../layout/Homelayout";
import Newslayout from "../layout/Newslayout";
import Authlayout from "../layout/Authlayout";


const router = createBrowserRouter(
    [
        {
            path: "/",
            element:<Homelayout/>
        },
        {
            path: "/news",
            element: <Newslayout/>
        },
        {
            path: "/auth",
            element: <Authlayout/>
        }
    ]
)

export default router;