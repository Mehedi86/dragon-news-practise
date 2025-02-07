import playgroundImage from "../assets/playground.png"
import classImage from "../assets/class.png"
import swimmingImage from "../assets/swimming.png" 
const QElement = () => {
    return (
        <div className="bg-stone-200 px-2 py-4 rounded">
            <h2 className="font-semibold py-4">Q-Zone</h2>
            <div className="*:w-full">
                <img src={playgroundImage} alt="" />
                <img src={classImage} alt="" />
                <img src={swimmingImage} alt="" />
            </div>
        </div>
    );
};

export default QElement;

