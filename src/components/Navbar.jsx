import { Link } from "react-router-dom";
import userIcon from "../assets/user.png"


const Navbar = () => {
    return (
        <div className="flex justify-between items-center py-4">
            <div className="w-[121px]">

            </div>
            <div className="space-x-4">
                <Link>Home</Link>
                <Link>About</Link>
                <Link>Career</Link>
            </div>
            <div className="flex gap-2 items-center">
                <div>
                    <img src={userIcon} alt="" />
                </div>
                <button className="btn text-white bg-neutral">Login</button>
            </div>
        </div>
    );
};

export default Navbar;