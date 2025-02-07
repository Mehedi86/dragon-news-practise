import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";


const Authlayout = () => {
    return (
        <div className="container mx-auto">
            <Navbar></Navbar>
            <Outlet/>
        </div>
    );
};

export default Authlayout;