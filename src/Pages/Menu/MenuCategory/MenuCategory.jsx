import { Link } from "react-router-dom";
import Cover from "../../../Shared/Cover/Cover";
import MenuItem from "../../../Shared/MenuItem/MenuItem";


const MenuCategory = ({ items, title, subTitle, coverImg }) => {
    return (
        <div>
            <div className="">
                {title && <Cover img={coverImg} title={title} subTitle={subTitle}></Cover>}
            </div>
            <div className="grid md:grid-cols-2 gap-7 mb-12 mt-20">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <Link to={`/order/${title}`}>
                <div className="flex justify-center pb-10">
                    <button className="btn btn-outline mt-5 border-0 border-b-4 uppercase">ORDER YOUR FAVOURITE FOOD</button>
                </div>
            </Link>
        </div>
    );
};

export default MenuCategory;