import { FaRegBookmark } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";
import { FaStar } from "react-icons/fa";
const NewsCard = (props = {}) => {
    const { news } = props || {};
    console.log(news);

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
                <p className="text-neutral-400">{news.details}</p>
                <button className="py-2 text-bold text-orange-600">Read More</button>
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

// author
// :
// { name: 'Jimmy Dane', published_date: '2022-08-24 17:27:34', img: 'https://images.unsplash.com/photo-1633332755192-72…HxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80' }
// category_id
// :
// "01"
// details
// :
// "Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News) – U.S. President Joe Biden has announced nearly $3 billion in new U.S. military aid for Kyiv as Ukraine marked its independence day six months after Russia invaded the country.'The United States of America is committed to supporting the people of Ukraine as they continue the fight to defend their sovereignty. As part of that commitment, I am proud to announce our biggest tranche of security assistance to date: approximately $2."
// image_url
// :
// "https://i.ibb.co/M23fhxm/unsplash-Eh-Tc-C9s-YXsw.png"
// others_info
// :
// { is_todays_pick: false, is_trending: true }
// rating
// :
// { number: 4.5, badge: 'Excellent' }
// thumbnail_url
// :
// "https://i.ibb.co/QnwC4sG/unsplash-Eh-Tc-C9s-YXsw-11.png"
// title
// :
// "Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet"
// total_view
// :
// 488
// _id
// :
// "0282e0e58a5c404fbd15261f11c2ab6a"