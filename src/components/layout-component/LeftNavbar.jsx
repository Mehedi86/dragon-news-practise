import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftNavbar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("https://openapi.programming-hero.com/api/news/categories")
            .then(res => res.json())
            .then(data => setCategories(data.data.news_category));
    }, [])
    return (
        <div>
            <h2 className="font-semibold">All Category</h2>
            <div className="flex flex-col items-start my-4 gap-2 md:pr-32">
                {categories.map(category => <NavLink to={`/category/${category.category_id}`} className="py-2 w-full px-8 cursor-pointer hover:bg-neutral-300 bg-white text-neutral-600 border-none rounded font-semibold" key={category.category_id}>{category.category_name}</NavLink>)}
            </div>
        </div>
    );
};

export default LeftNavbar;