import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import SharedTitle from "../../../components/SharedTitle/SharedTitle";


const PaymentHistory = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure()

    const { data: payments = [] } = useQuery({
        queryKey: ['payments'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data;
        }
    })
    return (
        <div className="pl-5">
            <SharedTitle heading={"PAYMENT HISTORY"} subheading={"At a Glance"}></SharedTitle>
            <h2 className="text-3xl mb-5">Total Users: {payments.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className="uppercase rounded-t-lg">
                        <tr className="bg-[#D1A054] text-white">
                            <th>#</th>
                            <th>Email</th>
                            <th>Transaction ID</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            payments.map((payment, i) => <tr key={payment._id} className="">
                                <th>{i + 1}</th>
                                <td>{payment.email}</td>
                                <td>{payment.payment}</td>
                                <td>
                                    {payment.date}
                                </td>
                                <td>
                                    {payment.status}
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;