import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const Register = () => {

    const { createUser } = useContext(AuthContext);

    const register = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get("name");
        const url = form.get("url");
        const email = form.get("email");
        const password = form.get("password");

        createUser(email, password).then(result => {
            console.log(result.user);
        })
            .catch(error => {
                console.log("Error", error.message)
            })
    }
    return (
        <div className="hero bg-base-200 min-h-[calc(100vh-150px)]">
            <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
                <div className="card-body">
                    <h2 className="text-2xl text-neutral-600 text-center font-semibold py-6 ">Register your account</h2>
                    <div className="divider"></div>
                    <form onSubmit={register} className="fieldset">
                        <label className="fieldset-label font-semibold">Your Name</label>
                        <input type="text" className="input w-full border-none bg-[#F3F3F3]" placeholder="Name" name="name" />
                        <label className="fieldset-label font-semibold">Photo URL</label>
                        <input type="text" className="input w-full border-none bg-[#F3F3F3]" placeholder="Photo URL" name="url" />
                        <label className="fieldset-label font-semibold">Email</label>
                        <input type="email" className="input w-full border-none bg-[#F3F3F3]" placeholder="Email" name="email" />
                        <label className="fieldset-label font-semibold">Password</label>
                        <input type="password" className="input w-full border-none bg-[#F3F3F3]" placeholder="Password" name="password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Register</button>
                        <div className="py-2">
                            <p className="text-neutral-400 font-bold text-center pt-2">{"Already Have An Account ?"} <Link to="/auth/login" className="text-red-400">Please Login</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;