import ourFoodImg from '../../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu';
import Cover from '../../../Shared/Cover/Cover'; 
import OrderItems from '../OrderItems/OrderItems';
import { useState } from 'react';
import { useParams } from 'react-router-dom';


const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const {category} = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    
    // console.log(category)
    const [menu] = useMenu();
    const drinks = menu.filter(item => item.category === 'drinks');
    const desserts = menu.filter(item => item.category === 'dessert');
    const pizzas = menu.filter(item => item.category === 'pizza');
    const salads = menu.filter(item => item.category === 'salad');
    const soups = menu.filter(item => item.category === 'soup');
    return (
        <div>
            <Cover
                img={ourFoodImg}
                title={"OUR SHOP"}
                subTitle={"Would you like to try a dish?"}
            ></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className="uppercase">
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soups</Tab>
                    <Tab>Desserts</Tab>
                    <Tab>Drinks</Tab>
                </TabList>

                <TabPanel>
                    <OrderItems items={salads}></OrderItems>
                </TabPanel>
                <TabPanel>
                    <OrderItems items={pizzas}></OrderItems>
                </TabPanel>
                <TabPanel>
                    <OrderItems items={soups}></OrderItems>
                </TabPanel>
                <TabPanel>
                    <OrderItems items={desserts}></OrderItems>
                </TabPanel>
                <TabPanel>
                    <OrderItems items={drinks}></OrderItems>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;