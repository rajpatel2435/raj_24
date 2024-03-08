import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
function SwiperPosts() {

    var settings = {
        dots: true,

        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };


    return (
        <>
            <div className=' bg-white py-10 work_swiper '>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
              
                    onSlideChange={() => console.log('')}
                    onSwiper={(swiper) => console.log('')}
                    loop={true}
                    navigation
                    breakpoints={{
                        320: {
                          slidesPerView: 1,
                          spaceBetween: 30,
                        },
                        640: {
                          slidesPerView: 2,
                          spaceBetween: 140,
                        },
                        768: {
                          slidesPerView: 2,
                          spaceBetween: 140,
                        },
                        1024: {
                          slidesPerView: 2,
                          spaceBetween: 100,
                        },
                        1500: {
                            slidesPerView: 3,
                            spaceBetween:140,
                          },
                        1800: {
                            slidesPerView: 3,
                            spaceBetween:140,
                          },
                      }}


                >
                    <div className='flex justify-center '>
                    <SwiperSlide>
                            <div className=' h-[300px] w-[360px] md:h-[350px] md:w-[500px]  bg-black rounded-[90px] p-10 ml-auto mr-auto  flex justify-center items-center '>
                            <h2 className=' text-4xl uppercase text-white  text-center  '>Our Approach</h2>
                            </div>
                        </SwiperSlide>

     
           






     


            
                    </div>

                </Swiper>
            </div>


        </>
    )
}

export default SwiperPosts;

