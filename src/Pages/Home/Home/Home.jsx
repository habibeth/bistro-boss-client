import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import ReviewItems from "../ReviewItems/ReviewItems";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bisrto Boss || Home </title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <ReviewItems></ReviewItems>
        </div>
    );
};

export default Home;