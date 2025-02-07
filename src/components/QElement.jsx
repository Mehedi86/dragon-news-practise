import playgroundImage from "../assets/playground.png"
import classImage from "../assets/class.png"
import swimmingImage from "../assets/swimming.png" 
const QElement = () => {
    return (
        <div className="bg-stone-200 p-4 rounded">
            <h2 className="font-semibold py-4">Q-Zone</h2>
            <div className="*:w-full px-12">
                <img className="py-2" src={playgroundImage} alt="" />
                <img className="py-2" src={classImage} alt="" />
                <img className="py-2" src={swimmingImage} alt="" />
            </div>
        </div>
    );
};

export default QElement;

