import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div className="hero bg-base-200 min-h-[calc(100vh-150px)]">
            <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
                <div className="card-body">
                    <h2 className="text-2xl text-neutral-600 text-center font-semibold py-6 ">Login your account</h2>
                    <div className="divider"></div>
                    <fieldset className="fieldset">
                        <label className="fieldset-label font-semibold">Email</label>
                        <input type="email" className="input w-full border-none bg-[#F3F3F3]" placeholder="Email" />
                        <label className="fieldset-label font-semibold">Password</label>
                        <input type="password" className="input w-full border-none bg-[#F3F3F3]" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Login</button>
                        <div className="py-2">
                            <p className="text-neutral-400 font-bold text-center pt-2">{"Dont't Have An Account ?"} <Link to="/auth/register" className="text-red-400">Register</Link></p>
                        </div>
                    </fieldset>
                </div>
            </div>
        </div>
    );
};

export default Login;