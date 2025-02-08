import { Link, useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import RightElement from "../components/layout-component/RightElement";
import { FaLongArrowAltRight } from "react-icons/fa";
import Navbar from "../components/Navbar";


const NewsDetails = () => {
    const data = useLoaderData();
    const news = data.data[0];
    console.log(news)
    return (
        <div>
            <header>
                <Header />
                <Navbar></Navbar>
            </header>
            <main className="container mx-auto grid grid-cols-12 gap-4">
                <section className="col-span-9">
                    <h2 className="font-bold pb-4">Dragon News</h2>
                    <div className="card bg-base-100 border border-gray-200">
                        <figure className="px-10 pt-10">
                            <img
                                src={news?.image_url}
                                alt="Shoes"
                                className="rounded-xl" />
                        </figure>
                        <div className="card-body">
                            <h2 className="text-2xl font-semibold py-2">{news?.title}</h2>
                            <p className="text-neutral-400">{news?.details}</p>
                            <div className="card-actions">
                                <Link to={`/category/${news.category_id}`} className="btn bg-[#D72050] my-4 text-white"><FaLongArrowAltRight size={20}/>All news in this category</Link>
                            </div>
                        </div>
                    </div>
                </section>
                <aside className="col-span-3">
                    <RightElement />
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;