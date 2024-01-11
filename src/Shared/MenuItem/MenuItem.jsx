

const MenuItem = ({item}) => {
    const {name, recipe, image, price} = item;
    return (
        <div className="flex space-y-1">
            <img style={{borderRadius: "0px 200px 200px 200px"}} className="w-[118px] mr-8" src={image} alt="" />
            <div className="">
                <h2>{name}------------------</h2>
                <p>{recipe}</p>
            </div>
            <p className="text-orange-600">${price}</p>
        </div>
    );
};

export default MenuItem;