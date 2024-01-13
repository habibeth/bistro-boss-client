

const FoodCard = ({ item }) => {
    const { name, recipe, image, price } = item;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" className="w-full" /></figure>
            <p className="text-white bg-black absolute right-0 mr-4 mt-4 px-4 py-2 rounded-lg">${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="flex justify-center pb-10">
                    <button className="btn btn-outline mt-5 border-0 border-b-4 uppercase text-yellow-600 bg-slate-100">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;