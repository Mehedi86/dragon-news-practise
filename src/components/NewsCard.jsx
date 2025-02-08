import { FaRegBookmark } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
const NewsCard = (props = {}) => {

    
    const { news } = props || {};

    return (
        <div className="border-2 border-neutral-100 rounded mb-6">
            <div className="bg-neutral-100 flex py-4 itmes-center justify-between p-4">
                <div className="flex items-center gap-2">
                    <img className="w-10 h-10 rounded-full" src={news.author.img} alt="" />
                    <div className="mx-2">
                        <h2 className="text-xl font-semibold">{news.author.name}</h2>
                        <p className="text-neutral-400">{news.author.published_date}</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <FaRegBookmark size={20} />
                    <IoMdShare size={20} />
                </div>
            </div>
            <div className="p-4">
                <h2 className="text-xl font-bold">{news.title}</h2>
                <img className="w-full h-[450px] py-4 object-cover " src={news.thumbnail_url} alt="" />
                <p className="text-neutral-400 pb-2">{news.details}</p>
                <Link to={`/news/${news._id}`} className="py-2 text-bold text-orange-600">Read More</Link>
                <div className="divider"></div>
                <div className="flex itmes-center justify-between">
                    <div className="flex text-amber-400 items-center">
                        <FaStar size={20} />
                        <FaStar size={20} />
                        <FaStar size={20} />
                        <FaStar size={20} />
                        <FaStar size={20} />
                        <p className="px-2 text-neutral-400 font-bold">{news.rating.number}</p>
                    </div>
                    <p className="px-2 text-neutral-400 font-bold">Total view : {news.total_view}</p>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;

