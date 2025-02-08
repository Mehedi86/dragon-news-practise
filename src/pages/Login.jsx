import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const Login = () => {
    const { loginUser } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();

    const login = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        loginUser(email, password).then(result => {
            console.log(result.user);
            navigate(location?.state ? location.state : "/")
        })
            .catch(error => {
                console.log("Error", error.message)
            })
    }

    return (
        <div className="hero bg-base-200 min-h-[calc(100vh-150px)]">
            <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
                <div className="card-body">
                    <h2 className="text-2xl text-neutral-600 text-center font-semibold py-6 ">Login your account</h2>
                    <div className="divider"></div>
                    <form onSubmit={login} className="fieldset">
                        <label className="fieldset-label font-semibold">Email</label>
                        <input type="email" className="input w-full border-none bg-[#F3F3F3]" placeholder="Email" name="email" />
                        <label className="fieldset-label font-semibold">Password</label>
                        <input type="password" className="input w-full border-none bg-[#F3F3F3]" placeholder="Password" name="password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Login</button>
                        <div className="py-2">
                            <p className="text-neutral-400 font-bold text-center pt-2">{"Dont't Have An Account ?"} <Link to="/auth/register" className="text-red-400">Register</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;