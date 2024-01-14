import { FaHome } from "react-icons/fa";
import { FaCalendar, FaCartShopping } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import { MdRateReview } from "react-icons/md";
import { MdOutlinePayment } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import { IoMenu } from "react-icons/io5";


const Dashboard = () => {
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-400 pt-10">
                <ul className="menu uppercase">
                    <li>
                        <NavLink to="/dashboard/userHome">
                           <FaHome/> User Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/reservation">
                           <FaCalendar /> reservation
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/payment">
                        <MdOutlinePayment /> payment history
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/cart">
                           <FaCartShopping/> My Cart
                        </NavLink>
                    </li>                    
                    <li>
                        <NavLink to="/dashboard/review ">
                        <MdRateReview /> add review
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/review ">
                        <TbBrandBooking /> my booking
                        </NavLink>
                    </li>
                    <div className="divider"></div> 
                    <li>
                        <NavLink to="/">
                           <FaHome/> Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/salad">
                        <IoMenu /> Menu
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;