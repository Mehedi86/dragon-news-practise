import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Latestnews from "../components/Latestnews";
import LeftNavbar from "../components/layout-component/LeftNavbar";
import RightElement from "../components/layout-component/RightElement";
import Navbar from "../components/Navbar";


const Homelayout = () => {
    return (
        <div>
            {/* Header */}
            <header>
                <Header />
                <section className="container mx-auto">
                    <Latestnews></Latestnews>
                </section>
                <nav className="container mx-auto">
                    <Navbar></Navbar>
                </nav>
            </header>

            {/* Main */}
            <main className="container mx-auto grid grid-cols-12 gap-4">
                <aside className="left col-span-3">
                    <LeftNavbar></LeftNavbar>
                </aside>
                <section className="col-span-6">
                    <Outlet/>
                </section>
                <aside className="col-span-3">
                    <RightElement></RightElement>
                </aside>
            </main>
        </div>
    );
};

export default Homelayout;