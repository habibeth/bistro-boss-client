import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa6";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SocialLogin = () => {
    const {googleSignIn} = useAuth();
    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const axiosPublic = useAxiosPublic();
    const handleGoogleSignIn=()=>{
        googleSignIn()
        .then(res=> {
            const userInfo = {
                name: res.user?.displayName,
                email: res.user?.email
            }
            axiosPublic.post('/users', userInfo)
            .then(res=> {
                console.log(res.data)
            })
            console.log(res.user);
            Swal.fire({
                icon: "success",
                title: "Log in Successfully",
                showConfirmButton: false,
                timer: 1500
            });
            navigate(from, { replace: true });
        })
        .catch(err=> console.log(err))
    }
    return (
        <div className="text-center">
            <p>Or sign in with</p>
            <div className="text-2xl flex text-stone-700 justify-center my-4">
                <button className='px-2 py-2 mr-2 border border-stone-700 rounded-full'><FaFacebookF /></button>
                <button onClick={handleGoogleSignIn} className='px-2 py-2 mr-2 border border-stone-700 rounded-full'><FaGoogle /></button>
                <button className='px-2 py-2 mr-2 border border-stone-700 rounded-full'><FaGithub /></button>
            </div>
        </div>
    );
};

export default SocialLogin;