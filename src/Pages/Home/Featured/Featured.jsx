import SharedTitle from "../../../components/SharedTitle/SharedTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'


const Featured = () => {
    return (
        <div className="text-white featured bg-fixed bg-cover mb-10">
            <div className="p-20 bg-black bg-opacity-30">
                <SharedTitle
                    subheading="Check it out"
                    heading={"FROM OUR MENU"}
                >
                </SharedTitle>
                <div className="md:grid md:grid-cols-2 items-center gap-10">
                    <div className="">
                        <img src={featuredImg} alt="" />
                    </div>
                    <div className="">
                        <h2>March 20, 2023</h2>
                        <h3>WHERE CAN I GET SOME?</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis inventore quod autem? Corporis natus, similique beatae qui autem dicta repellat veniam necessitatibus magnam sint perspiciatis id debitis voluptates doloremque voluptas explicabo voluptatem nobis libero porro? Dolor deserunt laborum recusandae, magni provident dolore repellendus maxime vitae. Quas eligendi placeat atque dignissimos?</p>
                        <button className="btn btn-outline mt-5 text-white border-0 border-b-4">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;