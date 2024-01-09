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

                        <SwiperSlide>

                        <div className=' h-[300px] w-[360px] md:h-[350px] md:w-[500px] bg-[#0019ff] rounded-[90px] text-white p-10 ml-auto mr-auto flex justify-center items-center '>

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
                        <div className=' h-[300px] w-[360px] md:h-[350px] md:w-[500px] bg-[#ff3928] rounded-[90px] text-white p-10 ml-auto mr-auto flex justify-center items-center '>
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
                        <div className=' h-[300px] w-[360px] md:h-[350px] md:w-[500px] bg-black rounded-[90px] text-white p-10 ml-auto mr-auto flex justify-center items-center '>
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
                        <div className=' h-[300px] w-[360px] md:h-[350px] md:w-[500px] bg-[#0019ff] rounded-[90px] p-10 ml-auto mr-auto  text-white flex justify-center items-center '>
                  
                        <h2 className=' text-4xl uppercase text-black font-bold bg-[white] p-2  '>Design Process</h2>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className=' h-[300px] w-[360px] md:h-[350px] md:w-[500px] bg-[#FF4D01] rounded-[90px] text-white p-10 ml-auto mr-auto flex justify-center items-center '>
                        <div className=' p-2 text-4xl'>
<ul >
<li className='text-2xl font-bold  '>1.Wireframing</li>
<li className='text-xl'>- Craft visual blueprints for aesthetic precision</li>
<li className='text-xl'>- Establish the project&apos;s skeletal elegance
</li>

</ul>
</div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className=' h-[300px] w-[360px] md:h-[350px] md:w-[500px] bg-[#0019ff] rounded-[90px] text-white p-10 ml-auto mr-auto flex justify-center items-center '>
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
                        <div className=' h-[300px] w-[360px] md:h-[350px] md:w-[500px] bg-[#ff3928] rounded-[90px] text-white p-10 ml-auto mr-auto flex justify-center items-center '>
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
                        <div className=' h-[300px] w-[360px] md:h-[350px] md:w-[500px] bg-black rounded-[90px] p-10  ml-auto mr-auto text-white flex justify-center items-center '>
                            
                        <h2 className=' text-4xl uppercase text-black bg-[#10e88a] p-2 font-bold '> DEvelopment Approach</h2>
</div>
                        </SwiperSlide>



                        <SwiperSlide>
                        <div className=' h-[300px] w-[360px] md:h-[350px] md:w-[500px] bg-[#ff3928] rounded-[90px] text-white p-10 ml-auto mr-auto flex justify-center items-center '>
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
                        <div className=' h-[300px] w-[360px] md:h-[350px] md:w-[500px] bg-black rounded-[90px] text-white p-10 ml-auto mr-auto flex justify-center items-center '>
                        <div className=' p-2 text-4xl'>
                        <ul >
<li className='text-2xl font-bold  '>2.  Iterative Development</li>
<li className='text-xl'>- Dance with iteration, refine in rhythm</li>
<li className='text-xl'>-Mold excellence with the sculptor&apos;s chisel of feedback
</li>

</ul>
</div>
</div>
                        </SwiperSlide>



                        <SwiperSlide>
                        <div className=' h-[300px] w-[360px] md:h-[350px] md:w-[500px] bg-[#FF4D01] rounded-[90px] text-white p-10 ml-auto mr-auto flex justify-center items-center '>
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
                        <div className=' h-[300px] w-[360px] md:h-[350px] md:w-[500px] bg-black rounded-[90px] text-white p-10 ml-auto mr-auto flex justify-center items-center '>
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
                        <div className=' h-[300px] w-[360px] md:h-[350px] md:w-[500px] bg-black rounded-[90px] p-10  ml-auto mr-auto text-white flex justify-center items-center '>
        
                        <h2 className=' text-4xl uppercase  text-black font-bold bg-[#10e88a] p-2'> Communication</h2>
</div>
                        </SwiperSlide>


                        <SwiperSlide>
                        <div className=' h-[300px] w-[360px] md:h-[350px] md:w-[500px] bg-[#FF4D01] rounded-[90px] text-white p-10 ml-auto mr-auto flex justify-center items-center '>
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
                        <div className=' h-[300px] w-[360px] md:h-[350px] md:w-[500px] bg-black rounded-[90px] text-white p-10 ml-auto mr-auto flex justify-center items-center '>
                        <div className=' p-2 text-4xl'>
                        <ul>
<li className='text-2xl font-bold  '>2.   Client Training</li>
<li className='text-xl'>- Conduct training serenades for mastery</li>
<li className='text-xl'>-Empower clients with the keys to long-term success
</li>

</ul>
</div>
</div>
                        </SwiperSlide>




                        <SwiperSlide>
                        <div className=' h-[300px] w-[360px] md:h-[350px] md:w-[500px] bg-[#FF4D01] rounded-[90px] text-white p-10 ml-auto  flex justify-center items-center '>
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


            
                    </div>

                </Swiper>
            </div>


        </>
    )
}

export default MethodSlider

