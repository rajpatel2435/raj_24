import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";


function ProjectsNew() {
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {


        const isMobile = window.innerWidth < 768;
        const pin = gsap.fromTo(
            sectionRef.current,
            {
                translateX: 0,
            },
            {
                translateX: isMobile ? "-400vw" : "-200vw", 
                ease: "none",
                duration: 1,
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: 0.6,
                    pin: true,
                },
            }
        );
        return () => {
            {/* A return function for killing the animation on component unmount */ }
            pin.kill();
        };
    }, []);
    return (
        <div className='homepage-clients' ref={triggerRef}>

            <div id='div_block-634-19' className='scroll-section-inner' ref={sectionRef}>




                <div className='first_project_nl flex-col' id="div_block-635-19">
                    <div className="text-white mt-10 text-6xl md:text-[25vh] uppercase opacity-10 text-center  ">
                        Projects
                    </div>
                    <div className="skills_main">
                        <div className="skills p-10">
                            <span className=" border border-gray-400 rounded-full px-7 ">website speed</span>  &nbsp; &nbsp;
                            <span className=" border border-gray-400 rounded-full px-7 ">code and script</span>  &nbsp; &nbsp;
                            <span className=" border border-gray-400 rounded-full px-7">server</span> &nbsp; &nbsp;
                            <span className=" border border-gray-400 rounded-full px-7">database</span>  &nbsp; &nbsp;
                            <span className=" border border-gray-400 rounded-full px-7">Mobile</span>  &nbsp; &nbsp;
                            <span className=" border border-gray-400 rounded-full px-7">Performance</span>  &nbsp; &nbsp;
                            <span className=" border border-gray-400 rounded-full px-7">image and media</span>  &nbsp; &nbsp;
                            <span className=" border border-gray-400 rounded-full px-7">cro</span>  &nbsp; &nbsp;
                            <span className=" border border-gray-400 rounded-full px-7">css</span>  &nbsp; &nbsp;
                            <span className=" border border-gray-400 rounded-full px-7">scss</span>  &nbsp; &nbsp;
                            <span className=" border border-gray-400 rounded-full px-7">tailwind</span>  &nbsp; &nbsp;
                            <span className=" border border-gray-400 rounded-full px-7">tailwind</span>  &nbsp; &nbsp;
                            <span className=" border border-gray-400 rounded-full px-7">typescript</span>  &nbsp; &nbsp;
                            <span className=" border border-gray-400 rounded-full px-7">tailwind</span>  &nbsp; &nbsp;
                            <span className=" border border-gray-400 rounded-full px-7">shopify</span>  &nbsp; &nbsp;
                            <span className=" border border-gray-400 rounded-full px-7">ASTRO</span>  &nbsp; &nbsp;

                        </div>
                    </div>
                    <div className="text-white mt-10 text-6xl mt md:text-[25vh]  uppercase text-center ">
                        Projects
                    </div>
                </div>


                <div className='div_block-643-19'>
                    <div className=" flex-row flex gap-6">
                        <div className=" text-2xl md:text-6xl text-white pro_new_text">websites & seo </div>
                        <div className="  text-2xl md:text-3xl align-bottom text-white"><br />buildig amazing gambling site that gives up to date info in gambling industry</div>
                    </div>


                    <div className=" flex  w-full md:h-[50%] mt-4  justify-center">
                        <Image src="/Images/PS-christmass.svg" alt="PS" width={800} height={200} />


                    </div>

                    <div className=" flex  justify-center h-16 md:mt-[-40px]">
                        <Image src="/Images/PS_logo.svg" alt="PS" width={200} height={200} className=" h-20 w-auto md:h-[200px] md:w-[200px] mt-10 rounded-full bg-white" />
                    </div>
                </div>

                <div className="third_project">

                    <div className=" flex-row flex gap-6 w-full h-[20%]">
                        <div className="text-2xl md:text-6xl text-white w-[50%] text-center justify-center items-center flex pro_new_text">web-application</div>
                        <div className="text-xl md:text-3xl align-bottom text-white md:w-[50%] flex justify-center"><br />
                            {/* Explore a dynamic web app with movie listings, a 'like' button, and favorite functionality for personalized entertainment */}
                            MovieFy: Your Personalized Movie Hub with Intuitive Design and Seamless Development

                        </div>
                    </div>
                    <div className=" flex gap-6 w-full h-[50%] mt-28 ml-auto mr-auto justify-center">
                        <video autoPlay muted playsInline loop>
                            <source src="/videos/movieFy.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>



                <div className="fourth_project">

                    <div className=" flex-row flex gap-6 w-full h-[20%]">
                    <div className="text-2xl md:text-6xl text-white w-[50%] text-center justify-center items-center flex pro_new_text">web-application</div>
                    <div className="text-2xl md:text-3xl align-bottom text-white md:w-[50%] flex justify-center"><br />
                            {/* Explore a dynamic web app with movie listings, a 'like' button, and favorite functionality for personalized entertainment */}
                            vibrary:Library Managment for School, colleges

                        </div>
                    </div>
                    <div className=" flex gap-6 w-full h-[50%] mt-28 ml-auto mr-auto justify-center">
                        <video autoPlay muted playsInline loop >
                            <source src="/videos/vib.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>

                <div className="third_project grid place-content-center ">

                    <div className=" text-2xl  flex justify-center md:text-6xl text-white items-center">
                    Unlocking potential, your project could be the next chapter in our creative journey
                      
                    </div>
                    <div className="skills_main text-xl">
                        <div className="skills text-4xl md:text-6xl p-10">
                            <span className=" border border-gray-400 rounded-full px-7 bg-black">Contact US</span>  &nbsp; &nbsp;
                            <span className=" border border-black rounded-full px-7 bg-white text-black ">Meet us</span>  &nbsp; &nbsp;
                            <span className=" border border-gray-400 rounded-full px-7 bg-black">Contact US</span> &nbsp; &nbsp;
                            <span className=" border border-black rounded-full px-7 bg-white text-black">Meet us</span>  &nbsp; &nbsp;
                            <span className=" border border-gray-400 rounded-full px-7 bg-black">Contact US</span>  &nbsp; &nbsp;
                            <span className=" border border-black rounded-full px-7 bg-white text-black">Meet us</span>  &nbsp; &nbsp;
                            <span className=" border border-gray-400 rounded-full px-7 bg-black">Contact US</span>  &nbsp; &nbsp;
                            <span className=" border border-black rounded-full px-7 bg-white text-black">Meet us</span>  &nbsp; &nbsp;


                            <span className=" border border-gray-400 rounded-full px-7 bg-black">Contact US</span>  &nbsp; &nbsp;
                            <span className=" border border-black rounded-full px-7 bg-white text-black ">Meet us</span>  &nbsp; &nbsp;
                            <span className=" border border-gray-400 rounded-full px-7 bg-black">Contact US</span> &nbsp; &nbsp;
                            <span className=" border border-black rounded-full px-7 bg-white text-black">Meet us</span>  &nbsp; &nbsp;
                            <span className=" border border-gray-400 rounded-full px-7 bg-black">Contact US</span>  &nbsp; &nbsp;
                            <span className=" border border-black rounded-full px-7 bg-white text-black">Meet us</span>  &nbsp; &nbsp;
                            <span className=" border border-gray-400 rounded-full px-7 bg-black">Contact US</span>  &nbsp; &nbsp;
                            <span className=" border border-black rounded-full px-7 bg-white text-black">Meet us</span>  &nbsp; &nbsp;
                      

                        </div>
                    </div>

                    
                </div>

                

            </div>
        </div>

    )
}

export default ProjectsNew