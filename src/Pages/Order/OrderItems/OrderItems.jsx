
import FoodCard from '../../../components/FoodCard/FoodCard';

const OrderItems = ({ items }) => {
    return (
        <div className="grid md:grid-cols-3 gap-5">
            {
                items.map(item => <FoodCard
                    key={item._id}
                    item={item}
                ></FoodCard>)
            }
        </div>
    );
};

export default OrderItems;