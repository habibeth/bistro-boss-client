import { useLoaderData } from "react-router-dom";
import SharedTitle from "../../../components/SharedTitle/SharedTitle";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";

const image_api_keys = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const uploadURL = `https://api.imgbb.com/1/upload?key=${image_api_keys}`;
const UpdateItem = () => {
    const item = useLoaderData();
    console.log(item)
    const { name, recipe, category, price, _id } = item
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm()
    const onSubmit = async (data) => {
        console.log(data)
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(uploadURL, imageFile, {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
        })
        if (res.data.success) {
            const updateMenuItem = {
                name: data.name,
                recipe: data.recipe,
                category: data.category,
                price: parseFloat(data.price),
                image: res.data.data.display_url
            }
            const menuResult = await axiosSecure.patch(`/menu/${_id}`, updateMenuItem);
            console.log(menuResult.data)
            if (menuResult.data.modifiedCount>0) {
                reset();
                Swal.fire({
                    icon: "success",
                    title: `Your Have Successfully Updated ${data.name}`,
                    showConfirmButton: false,
                    timer: 1500
                });

            }
        }
        console.log(res.data.data.display_url)

    }
    return (
        <div>
            <SharedTitle
                heading={"UPDATE ITEM"}
                subheading={"Update Menu Item"}
            ></SharedTitle>
            <div className="mx-36 p-10 bg-base-200">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text font-bold">Recipe Name*</span>
                        </div>
                        <input {...register("name", { required: true })} type="text" defaultValue={name} className="input input-bordered w-full" />
                    </label>

                    <div className="grid md:grid-cols-2 gap-5 items-center my-4">
                        <div className="">
                            <div className="label">
                                <span className="label-text font-bold">Category*</span>
                            </div>
                            <select defaultValue={category} className="select select-bordered w-full" {...register("category", { required: true })}>
                                <option disabled value="default">Select a Category?</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soups</option>
                                <option value="dessert">Dessert</option>
                                <option value="drink">Drink</option>
                            </select>
                        </div>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-bold">Price*</span>
                            </div>
                            <input {...register("price", { required: true })} type="text" defaultValue={price} className="input input-bordered w-full" />
                        </label>
                    </div>
                    <label className="form-control w-full mb-5">
                        <div className="label">
                            <span className="label-text font-bold">Recipe Details*</span>
                        </div>
                        <textarea {...register("recipe")} name="recipe" rows="7" defaultValue={recipe} className="border rounded-xl p-5"></textarea>
                    </label>
                    <div className="mb-5">
                        <input {...register("image", { required: true })} type="file" className="file-input file-input-bordered w-full max-w-xs" />
                    </div>
                    <button className="btn bg-[#D1A054] text-white uppercase" type="submit" >Update Item<FaUtensils /></button>
                </form>
            </div>
        </div>
    );
};

export default UpdateItem;