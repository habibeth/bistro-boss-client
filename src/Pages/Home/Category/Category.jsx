import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css/bundle';
import { Pagination, Autoplay } from 'swiper/modules';

import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';
import SharedTitle from '../../../components/SharedTitle/SharedTitle';

const Category = () => { 
    return (
        <div className='mb-20'>       
            <SharedTitle
            heading={"ORDER ONLINE"}
            subheading={"From 11:00am to 10:00pm"}
            >

            </SharedTitle>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className='w-full h-3/4' src={slide1} alt="" />
                    <h2 className='text-3xl text-center text-white -mt-20 pb-20 uppercase'>Salad</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-3/4'  src={slide2} alt="" />
                    <h2 className='text-3xl text-center text-white -mt-20 pb-20 uppercase'>Soups</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-3/4'  src={slide3} alt="" />
                    <h2 className='text-3xl text-center text-white -mt-20 pb-20 uppercase'>Pizzas</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-3/4'  src={slide4} alt="" />
                    <h2 className='text-3xl text-center text-white -mt-20 pb-20 uppercase'>Dessert</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-3/4'  src={slide5} alt="" />
                    <h2 className='text-3xl text-center text-white -mt-20 pb-20 uppercase'>Salad</h2>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Category;