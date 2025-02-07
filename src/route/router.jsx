import { createBrowserRouter, Navigate } from "react-router-dom";
import Homelayout from "../layout/Homelayout";
import Newslayout from "../layout/Newslayout";
import Authlayout from "../layout/Authlayout";
import CategoryNews from "../pages/CategoryNews";
import Login from "../pages/Login";
import Register from "../pages/Register";


const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Homelayout />,
            children: [
                {
                    path: "",
                    element: <Navigate to={"/category/01"}></Navigate>
                },
                {
                    path: "/category/:id",
                    element: <CategoryNews></CategoryNews>,
                    loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
                }
            ]
        },
        {
            path: "/news",
            element: <Newslayout />
        },
        {
            path: "/auth",
            element: <Authlayout />,
            children: [
                {
                    path: "/auth/login",
                    element: <Login/>
                },
                {
                    path: "/auth/register",
                    element: <Register/>
                }
            ]
        }
    ]
)

export default router;