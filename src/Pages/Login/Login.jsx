import login from '../../assets/others/authentication2.png'
import loginBg from '../../assets/others/authentication.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa6";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/Authprovider';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2'

const Login = () => {
    const [disabled, setDisabled] = useState(true);
    const { loginUser } = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])


    const handleValidateCaptcha = (event) => {
        const user_captcha_value = event.target.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false)
        }
        else {
            setDisabled(true)
        }
        // console.log(user_captcha_value)
    }


    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password)

        loginUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Log in Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(from, { replace: true });
            })
            .catch(error => console.log(error))
    }
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${loginBg})` }}>
            <Helmet>
                <title>Bisrto Boss || Login </title>
            </Helmet>
            <div className="hero-content shadow-2xl flex-col md:flex-row mx-40 my-20 px-10" style={{ backgroundImage: `url(${loginBg})` }}>
                <div className="w-1/2">
                    <img src={login} alt="" />
                </div>
                <div className="card w-1/2">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Password" name='password' className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <input type="text" onBlur={handleValidateCaptcha} placeholder="Fill Out from Above" name='captcha' className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button disabled={disabled} className="btn bg-yellow-400 hover:bg-yellow-500 text-white">Login</button>
                        </div>
                    </form>
                    <div className="text-center">
                        <p className="mb-4">New to our website. Please <Link to="/register" className='text-green-600'>Create an Account</Link></p>
                        <p>Or sign in with</p>
                        <div className="text-2xl flex text-stone-700 justify-center my-4">
                            <button className='px-2 py-2 mr-2 border border-stone-700 rounded-full'><FaFacebookF /></button>
                            <button className='px-2 py-2 mr-2 border border-stone-700 rounded-full'><FaGoogle /></button>
                            <button className='px-2 py-2 mr-2 border border-stone-700 rounded-full'><FaGithub /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;