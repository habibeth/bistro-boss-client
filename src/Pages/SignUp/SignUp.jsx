import login from '../../assets/others/authentication2.png'
import loginBg from '../../assets/others/authentication.png'
import { Link, useNavigate } from 'react-router-dom';

import { useContext } from 'react';
import { useForm } from "react-hook-form"
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2'
import useAxiosPublic from '../../hooks/useAxiosPublic';
import SocialLogin from '../../components/SocialLogin/SocialLogin';


const SignUp = () => {
    const { createUser, updateProfileInfo } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm()
    const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                updateProfileInfo(data.name, data.photo)
                    .then(() => {
                        const userInfo = {
                            name: data.name,
                            email: data.email,
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        icon: "success",
                                        title: "User Created Successfully",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/')
                                }
                            })

                    })
                    .catch(err => console.log(err))
            })
            .then(error => console.log(error));
    }
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${loginBg})` }}>
            <Helmet>
                <title>Bisrto Boss || Sign Up </title>
            </Helmet>
            <div className="hero-content shadow-2xl flex-col md:flex-row mx-40 my-20 px-10" style={{ backgroundImage: `url(${loginBg})` }}>
                <div className="w-1/2">
                    <img src={login} alt="" />
                </div>
                <div className="card w-1/2">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} name='name' placeholder="Name" className="input input-bordered" />
                            {errors.name && <span className='text-red-600'>Name field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" {...register("photo", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                            {errors.photo && <span className='text-red-600'>Photo URL field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} name='email' placeholder="Email" className="input input-bordered" />
                            {errors.email && <span className='text-red-600'>Email field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password",
                                {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
                                }
                            )} placeholder="Password" name='password' className="input input-bordered" required />
                            {errors.password?.type === 'required' && <span className='text-red-600'>Password Must be Required</span>}
                            {errors.password?.type === 'minLength' && <span className='text-red-600'>Password at least 6 Character</span>}
                            {errors.password?.type === 'maxLength' && <span className='text-red-600'>Password Must be Under 16 Character</span>}
                            {errors.password?.type === 'pattern' && <span className='text-red-600'>Password Must be 1 Uppercase, 1 Lowercase 1 Special Character & 1 Number </span>}
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-yellow-400 hover:bg-yellow-500 text-white">Login</button>
                        </div>
                    </form>
                    <p className="mb-4 text-center">Already Have an Account. Please <Link to="/login" className='text-green-600'>Login</Link></p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default SignUp;