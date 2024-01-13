import { Helmet } from "react-helmet-async";
import menuIMG from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'

import SharedTitle from "../../../components/SharedTitle/SharedTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
import useMenu from "../../../hooks/useMenu";
import Cover from "../../../Shared/Cover/Cover";


const Menu = () => {
    const [menu] = useMenu();
    const offered = menu.filter(item => item.category === 'offered');
    const desserts = menu.filter(item => item.category === 'dessert');
    const pizzas = menu.filter(item => item.category === 'pizza');
    const salads = menu.filter(item => item.category === 'salad');
    const soups = menu.filter(item => item.category === 'soup');
    return (
        <div className="">
            <Helmet>
                <title>Bisrto Boss || Menu </title>
            </Helmet>

            {/* MAIN Menu ITEMS*/}
            <Cover img={menuIMG} title="OUR MENU" subTitle= "Would you like to try a dish?"></Cover>
            <SharedTitle heading="TODAY'S OFFER" subheading="Don't miss"></SharedTitle>
            <MenuCategory items={offered}></MenuCategory>

            {/* Desserts Menu ITEMS*/}
            <MenuCategory 
            coverImg={dessertImg} 
            items={desserts}
            title="dessert"
            subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            ></MenuCategory>

            {/* pizzas Menu ITEMS*/}
            <MenuCategory 
            coverImg={pizzaImg} 
            items={pizzas}
            title="pizza"
            subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            ></MenuCategory>

            {/* salads Menu ITEMS*/}
            <MenuCategory 
            coverImg={saladImg} 
            items={salads}
            title="salad"
            subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            ></MenuCategory>

            {/* salads Menu ITEMS*/}
            <MenuCategory 
            coverImg={soupImg} 
            items={soups}
            title="soup"
            subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            ></MenuCategory>
        </div>

    );
};

export default Menu;