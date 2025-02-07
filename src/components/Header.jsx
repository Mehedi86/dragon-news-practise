import moment from "moment";
import logo from "../assets/logo.png"

const Header = () => {
    return (
        <div className="flex flex-col justify-center items-center pt-12">
            <div>
                <img className="w-[300px]" src={logo} alt="" />
            </div>
            <p className="text-gray-400 pt-2">Journalism Without Fear or Favour</p>
            <p className="py-2">{moment().format("dddd, MMMM Do YYYY")}</p>
        </div>
    );
};

export default Header;