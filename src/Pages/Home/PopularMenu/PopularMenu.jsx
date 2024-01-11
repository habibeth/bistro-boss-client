import { useEffect, useState } from "react";
import SharedTitle from "../../../components/SharedTitle/SharedTitle";
import MenuItem from "../../../Shared/MenuItem/MenuItem";


const PopularMenu = () => {
    const [menu, setMenu] = useState([])
    useEffect(()=>{
        fetch('menu.json')
        .then(res=> res.json())
        .then(data=> {
            const popularItem = data.filter(item=> item.category === 'popular');
            setMenu(popularItem)
        })
    },[])
    return (
        <section>
            <SharedTitle
            heading={"Check it out"}
            subheading={"FROM OUR MENU"}
            ></SharedTitle>
            <div className="grid md:grid-cols-2 gap-7 mb-12">
                {
                    menu.map(item=> <MenuItem
                    key={item._id}
                    item={item}
                    ></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;