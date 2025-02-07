import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Latestnews = () => {
    return (
        <div className="flex p-2 items-center gap-2 font-bold bg-stone-200">
            <button className="bg-[#D72050] text-white px-4 py-2">Latest</button>
            <Marquee className="space-x-10" pauseOnHover={true}>
                <Link to="news">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, corporis.</Link>
                <Link to="news">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, corporis.</Link>
                <Link to="news">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, corporis.</Link>
            </Marquee>
        </div>
    );
};

export default Latestnews;