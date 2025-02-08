import { Link } from "react-router-dom";
import userIcon from "../assets/user.png"
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


const Navbar = () => {
    const { user, logoutUser } = useContext(AuthContext);

    const logout = () => {
        logoutUser()
    }


    return (
        <div className="flex justify-between items-center py-4">
            <div className="w-[121px]">
            </div>
            <div className="space-x-4">
                <Link to="/">Home</Link>
                <Link>About</Link>
                <Link>Career</Link>
            </div>
            <div className="flex gap-2 items-center">
                <div>
                    <img src={userIcon} alt="" />
                </div>
                {user ? <button onClick={logout} className="btn text-white bg-neutral">Logout</button> : <Link to="/auth/login" className="btn text-white bg-neutral">Login</Link >}

            </div>
        </div>
    );
};

export default Navbar;