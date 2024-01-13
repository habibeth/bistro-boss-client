import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/Authprovider";
import Swal from 'sweetalert2'

const Navbar = () => {

    const {user, logOut} = useContext(AuthContext);
    const handleLogOut=()=>{
        logOut()
        .then(()=>{
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Log Out Successfully",
                showConfirmButton: false,
                timer: 1500
              });
        })
        .catch(err=>console.log(err))
    }
    const navOption = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Our Menu</Link></li>
        <li><Link to="/order/salad">Order Food</Link></li>
        <li><Link to="/secret">Secret</Link></li>
        {
            user ? <>
            <li>
            <button onClick={handleLogOut} className="btn btn-active btn-ghost">Logout</button>
            </li>
            </> : <>
            <li><Link to="/login">Login</Link></li>
            </>
        }
    </>
    return (
        <>
            <div className="navbar bg-black text-white bg-opacity-30 fixed z-10 max-w-screen-xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navOption}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">BISTRO BOSS</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOption}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </>
    );
};

export default Navbar;