import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../hooks/useAuth.jsx'
import useAxiosSecure from '../../../hooks/useAxiosSecure.jsx';
import { IoWallet } from "react-icons/io5";
import { FaTruck, FaUserTie, FaUsers } from 'react-icons/fa';

const AdminHome = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure()

    const { data: stats = [] } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats')
            return res.data
        }
    })
    console.log(stats)
    return (
        <div className='mt-20 ml-10'>
            <h2 className="text-3xl">Hi, Welcome
                {
                    user?.displayName ? ` ${user?.displayName}` : ' Back'
                }
                !
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5 text-center text-white mt-16">
                <div className="bg-sky-300 flex items-center px-6 py-10 rounded-xl">
                    <IoWallet className='text-8xl text-white' />
                    <div className="ml-6">
                        <h2 className="text-4xl mt-2">{stats.revenue}</h2>
                        <h2 className="text-2xl">Revenue</h2>
                    </div>
                </div>
                <div className="bg-rose-300 flex items-center px-6 py-10 rounded-xl">
                    <FaUsers className='text-8xl text-white' />
                    <div className="ml-6">
                        <h2 className="text-4xl mt-2">{stats.users}</h2>
                        <h2 className="text-2xl">Users</h2>
                    </div>
                </div>
                <div className="bg-green-300 flex items-center px-6 py-10 rounded-xl">
                    <FaUserTie className='text-8xl text-white'></FaUserTie>
                    <div className="ml-6">
                        <h2 className="text-4xl mt-2">{stats.menuItem}</h2>
                        <h2 className="text-2xl">Products</h2>
                    </div>
                </div>
                <div className="bg-pink-300 flex items-center px-6 py-10 rounded-xl">
                    <FaTruck className='text-8xl text-white' />
                    <div className="ml-6">
                        <h2 className="text-4xl mt-2">{stats.orders}</h2>
                        <h2 className="text-2xl">Orders</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;