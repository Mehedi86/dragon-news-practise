import { createBrowserRouter } from "react-router-dom";
import Homelayout from "../layout/Homelayout";
import Newslayout from "../layout/Newslayout";
import Authlayout from "../layout/Authlayout";
import CategoryNews from "../pages/CategoryNews";


const router = createBrowserRouter(
    [
        {
            path: "/",
            element:<Homelayout/>,
            children: [
                {
                    path: "/category/:id",
                    element: <CategoryNews></CategoryNews>,
                    loader: ({params})=> fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
                }
            ]
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