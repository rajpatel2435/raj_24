import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
function MethodSlider() {

    var settings = {
        dots: true,

        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };


    return (
        <>
            <div className=' bg-gray-100 work_swiper'>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
                    spaceBetween={'600vw'}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    navigation
                    breakpoints={{
                        320: {
                          slidesPerView: 1,
                          spaceBetween: 30,
                        },
                        640: {
                          slidesPerView: 1,
                          spaceBetween: 10,
                        },
                        768: {
                          slidesPerView: 1,
                          spaceBetween: 140,
                        },
                        1024: {
                          slidesPerView: 2,
                          spaceBetween: 140,
                        },
                        1600: {
                            slidesPerView: 3,
                            spaceBetween:400,
                          },
                      }}


                >
                    <div className='flex justify-center'>
                    <SwiperSlide>
                            <div className=' h-[400px] w-[375px] md:h-[400px] md:w-[700px] bg-black rounded-[90px] p-10 mr-10 ml-10 flex justify-center items-center '>
                            <h2 className=' text-4xl uppercase text-white  text-center  '>Our Approach</h2>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>

                        <div className=' h-[400px] w-[375px] md:h-[400px] md:w-[700px] bg-black rounded-[90px] text-white p-10  ml-10 flex justify-center items-center '>

                                <div className=' p-2 text-2xl  '>
                                    <ul >
                                        <li className='text-2xl font-bold  '>1. Discovery Phase</li>
                                        <li className=' text-xl md:text-2xl'>- Delve into business goals and audience dynamics</li>
                                        <li className=' text-xl md:text-2xl'>- Identify challenges and unveil opportunities
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=' h-[400px] w-[700px] bg-black rounded-[90px] p-10 mr-10 ml-10 text-white flex justify-center items-center '>
                            <div className=' p-2 text-4xl'>
    <ul >
        <li className='text-2xl font-bold  '>2. Research and Analysis</li>
        <li className='text-xl'>- Navigate through market intricacies</li>
        <li className='text-xl'>- Illuminate strategic pathways
        </li>

    </ul>
</div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className=' h-[400px] w-[700px] bg-black rounded-[90px] p-10 mr-10 ml-10 text-white flex justify-center items-center '>
                        <div className=' p-2 text-4xl'>
    <ul >
        <li className='text-2xl font-bold  '>3. Planning and Strategy</li>
        <li className='text-xl'>- Architect a detailed project blueprint</li>
        <li className='text-xl'>- Define milestones, set timelines, and chart KPIs
        </li>

    </ul>
</div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className=' h-[400px] w-[700px] bg-black rounded-[90px] p-10 mr-10 ml-10 text-white flex justify-center items-center '>
                        <h2 className=' text-4xl uppercase text-black font-bold bg-[#10e88a] p-2  '>Design Process</h2>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className=' h-[400px] w-[700px] bg-black rounded-[90px] p-10 mr-10 ml-10 text-white flex justify-center items-center '>
                        <div className=' p-2 text-4xl'>
<ul >
<li className='text-2xl font-bold  '>1.Wireframing</li>
<li className='text-xl'>- Craft visual blueprints for aesthetic precision</li>
<li className='text-xl'>- Establish the project's skeletal elegance
</li>

</ul>
</div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className=' h-[400px] w-[700px] bg-black rounded-[90px] p-10 mr-10 ml-10 text-white flex justify-center items-center '>
                        <div className=' p-2 text-4xl'>
<ul >
<li className='text-2xl font-bold  '>2.  Prototyping</li>
<li className='text-xl'>- Sculpt interactive prototypes for tangible vision</li>
<li className='text-xl'>- Carve refinement paths based on insightful feedback
</li>

</ul>
</div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className=' h-[400px] w-[700px] bg-black rounded-[90px] p-10 mr-10 ml-10 text-white flex justify-center items-center '>
                        <div className=' p-2 text-4xl'>
<ul >
<li className='text-2xl font-bold  '>3. User Experience (UX) Design</li>
<li className='text-xl'>- Weave intuitive user flows</li>
<li className='text-xl'>- Craft an engaging digital tapestry
</li>

</ul>
</div>
</div>
                        </SwiperSlide>


                        <SwiperSlide>
                        <div className=' h-[400px] w-[700px] bg-black rounded-[90px] p-10 mr-10 ml-10 text-white flex justify-center items-center '>
                        <h2 className='ml-28 text-4xl uppercase text-black bg-[#10e88a] p-2 font-bold '> DEvelopment Approach</h2>
</div>
                        </SwiperSlide>



                        <SwiperSlide>
                        <div className=' h-[400px] w-[700px] bg-black rounded-[90px] p-10 mr-10 ml-10 text-white flex justify-center items-center '>
                        <div className=' p-2 text-4xl'>
                        <ul >
<li className='text-2xl font-bold  '>1.Coding Standards</li>
<li className='text-xl'>- Adhere to industry commandments</li>
<li className='text-xl'>-Forge code: robust, reliable, and refined
</li>

</ul>
</div>
</div>
                        </SwiperSlide>



                        <SwiperSlide>
                        <div className=' h-[400px] w-[700px] bg-black rounded-[90px] p-10 mr-10 ml-10 text-white flex justify-center items-center '>
                        <div className=' p-2 text-4xl'>
                        <ul >
<li className='text-2xl font-bold  '>2.  Iterative Development</li>
<li className='text-xl'>- Dance with iteration, refine in rhythm</li>
<li className='text-xl'>-Mold excellence with the sculptor's chisel of feedback
</li>

</ul>
</div>
</div>
                        </SwiperSlide>



                        <SwiperSlide>
                        <div className=' h-[400px] w-[700px] bg-black rounded-[90px] p-10 mr-10 ml-10 text-white flex justify-center items-center '>
                        <div className=' p-2 text-4xl'>
                        <ul >
<li className='text-2xl font-bold  '>3. Testing Procedures</li>
<li className='text-xl'>- Engage in rigorous functional and security theatrics</li>
<li className='text-xl'>- Spot and swiftly vanquish lurking issues
</li>

</ul>
</div>
</div>
                        </SwiperSlide>



                        <SwiperSlide>
                        <div className=' h-[400px] w-[700px] bg-black rounded-[90px] p-10 mr-10 ml-10 text-white flex justify-center items-center '>
                        <div className=' p-2 text-4xl'>
                        <ul >
<li className='text-2xl font-bold  '>4.Deployment and Launch</li>
<li className='text-xl'>- Choreograph a secure and seamless debut</li>
<li className='text-xl'>- Stand vigilant, offering a post-launch curtain call
</li>

</ul>
</div>
</div>
                        </SwiperSlide>



                        <SwiperSlide>
                        <div className=' h-[400px] w-[700px] bg-black rounded-[90px] p-10 mr-10 ml-10 text-white flex justify-center items-center '>
                        <h2 className='ml-28 text-4xl uppercase  text-black font-bold bg-[#10e88a] p-2'> Communication</h2>
</div>
                        </SwiperSlide>


                        <SwiperSlide>
                        <div className=' h-[400px] w-[700px] bg-black rounded-[90px] p-10 mr-10 ml-10 text-white flex justify-center items-center '>
                        <div className=' p-2 text-4xl'>
                        <ul >
<li className='text-2xl font-bold  '>1. Transparent Collaboration:</li>
<li className='text-xl'>- Weave a tapestry of regular updates and progress reports</li>
<li className='text-xl'>-Utilize collaborative tools for a symphony of real-time feedback
</li>

</ul>
</div>
</div>
                        </SwiperSlide>



                        <SwiperSlide>
                        <div className=' h-[400px] w-[700px] bg-black rounded-[90px] p-10 mr-10 ml-10 text-white flex justify-center items-center '>
                        <div className=' p-2 text-4xl'>
                        <ul>
<li className='text-2xl font-bold  '>2.   Client Training::</li>
<li className='text-xl'>- Conduct training serenades for mastery</li>
<li className='text-xl'>-Empower clients with the keys to long-term success
</li>

</ul>
</div>
</div>
                        </SwiperSlide>




                        <SwiperSlide>
                        <div className=' h-[400px] w-[700px] bg-black rounded-[90px] p-10 mr-10 ml-10 text-white flex justify-center items-center '>
                        <div className=' p-2 text-4xl'>
                        <ul >
<li className='text-2xl font-bold  '>3. Testing Procedures:</li>
<li className='text-xl'>- Engage in rigorous functional and security theatrics</li>
<li className='text-xl'>- Spot and swiftly vanquish lurking issues
</li>

</ul>
</div>
</div>
                        </SwiperSlide>


                        <SwiperSlide>
    
                        </SwiperSlide>
                    </div>

                </Swiper>
            </div>


        </>
    )
}

export default MethodSlider