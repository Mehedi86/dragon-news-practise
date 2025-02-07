import { FaGithub, FaGoogle } from "react-icons/fa";
const SocialLogin = () => {
    return (
        <div>
            <h2 className="font-semibold mb-4">Login With</h2>
            <div className="flex flex-col gap-2">
                <button className="btn text-blue-600 border-blue-600"><FaGoogle /> Login With Google</button>
                <button className="btn border-neutral-900"><FaGithub /> Login With Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;