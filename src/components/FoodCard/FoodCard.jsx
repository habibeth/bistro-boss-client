import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";

import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";


const FoodCard = ({ item }) => {
    const { name, recipe, image, price, _id } = item;
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [,refetch] = useCart()
    const handleAddToCart = (food) => {
        if (user && user.email) {
            // console.log(user)
            console.log(user.email, food)
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }

            axiosSecure.post('/cart', cartItem)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        Swal.fire({
                            icon: "success",
                            title: `${name} Successfully Added`,
                            showConfirmButton: false,
                            timer: 1500
                        });

                        //refetch the cart item
                        refetch();
                    }

                })

        }
        else {
            Swal.fire({
                title: "You are not Login?",
                text: "You want to Login Then Add to Cart!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    }
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" className="w-full" /></figure>
            <p className="text-white bg-black absolute right-0 mr-4 mt-4 px-4 py-2 rounded-lg">${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="flex justify-center pb-10">
                    <button onClick={() => handleAddToCart()} className="btn btn-outline mt-5 border-0 border-b-4 uppercase text-yellow-600 bg-slate-100">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;