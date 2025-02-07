import { useLoaderData } from "react-router-dom";
import NewsCard from "../components/NewsCard";


const CategoryNews = () => {
    const { data: news } = useLoaderData();
    return (
        <div className="max-h-screen overflow-scroll">
            <h2 className="font-semibold pb-4">Dragon News Home</h2>
            <div>
                {news.map(singlenews => <NewsCard key={singlenews._id} news={singlenews}></NewsCard>)}
            </div>
        </div>
    );
};

export default CategoryNews;