
import SharedTitle from "../../../components/SharedTitle/SharedTitle";
import MenuItem from "../../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";


const PopularMenu = () => {
    const [menu] = useMenu();
    const popularItem = menu.filter(item => item.category === 'popular');
    
    return (
        <section>
            <SharedTitle
                heading={"Check it out"}
                subheading={"FROM OUR MENU"}
            ></SharedTitle>
            <div className="grid md:grid-cols-2 gap-7 mb-12">
                {
                    popularItem.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="flex justify-center pb-10">
                <button className="btn btn-outline mt-5 border-0 border-b-4 uppercase">View Full Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;