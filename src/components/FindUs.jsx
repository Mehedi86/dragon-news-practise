import facebookLogo from "../assets/fb.png"
import twitterLogo from "../assets/twitter.png"
import instragramLogo from "../assets/instagram.png"
const FindUs = () => {
    return (
        <div className="my-4">
            <h2 className="text-neutral-600 font-semibold mb-4">Find Us On</h2>
            <div className="flex flex-col items-start border border-stone-200 rounded">
                <div className="w-full flex gap-4 items-center p-4 border-b border-stone-200">
                    <img src={facebookLogo} alt="" />
                    <button className="cursor-pointer">Facebook</button>
                </div>
                <div className="w-full flex gap-4 items-center p-4 border-b border-stone-200">
                    <img src={twitterLogo} alt="" />
                    <button className="cursor-pointer">Twitter</button>
                </div>
                <div className="w-full flex gap-4 items-center p-4">
                    <img src={instragramLogo} alt="" />
                    <button className="cursor-pointer">Instragram</button>
                </div>
            </div>
        </div>
    );
};

export default FindUs;