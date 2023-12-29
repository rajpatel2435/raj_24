import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


function ScrollSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-650vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
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
    <section className="scroll-section-outer">
      {/* The section up act just as a wrapper. If the trigger (below) is the
      first jsx element in the component, you get an error on route change */}

      {/* The div below act just as a trigger. As the doc suggests, the trigger and 
      the animation should alway be two separated refs */}
      <div ref={triggerRef}>

        <div ref={sectionRef} className="scroll-section-inner">
        <h2 className='ml-28 text-2xl uppercase  text-white font-bold  p-2 align-middle'> our Approach</h2>

          <div className="scroll-section">

            <div className=' w-2/3 h-60      md:w-[110%]  p-2 text-4xl first__design mt-0 '>
              <ul className="p-6">
                <li className='text-2xl font-bold lg:text-4xl  '>1. Discovery Phase</li>
                <li className='text-2xl mt-2  lg:text-2xl p-2'> a) Delve into business goals and audience dynamics</li>
                <li className='text-2xl  lg:text-2xl  '> b) Identify challenges and unveil opportunities
                </li>

              </ul>
            </div>
          </div>

          <div className="scroll-section p-2 mb-2">
            <div className=' w-2/3  md:w-[90%] p-2 text-4xl first__design_2 ml-[-20px] '>
              <ul className="p-6">
                <li className='text-2xl font-bold lg:text-4xl   '>2. Research and Analysis</li>
                <li className='text-2xl mt-6  lg:text-2xl p-2'>- Navigate through market intricacies</li>
                <li className='text-2xl  lg:text-2xl   '>-Illuminate strategic pathways
                </li>

              </ul>
            </div>


          </div>

          <div className="scroll-section">
          <div className=' w-2/3  md:w-[90%]  p-2 text-4xl first__design_2 mt-0 ml-[-100px] '>
              <ul className="p-6">
                <li className='text-2xl font-bold lg:text-4xl    '>3. Planning and Strategy</li>
                <li className='text-2xl mt-6  lg:text-2xl p-2'>- Architect a detailed project blueprint</li>
                <li className='text-2xl  lg:text-2xl  '>- Define milestones, set timelines, and chart KPIs
                </li>

              </ul>
            </div>

          </div><h2 className='ml-28 text-2xl uppercase  text-white font-bold  p-2 align-middle'> DEsign process</h2>
          <div className="scroll-section">
          <div className=' w-2/3  md:w-[90%]  p-2 text-4xl first__design mt-0 '>
              <ul className="p-6" >
                <li className='text-2xl font-bold lg:text-4xl '>1.Wireframing</li>
                <li className='text-2xl mt-6  lg:text-2xl p-2'>- Craft visual blueprints for aesthetic precision</li>
                <li className='text-2xl  lg:text-2xl  '>- Establish the project's skeletal elegance
                </li>

              </ul>
            </div>

          </div>

          <div className="scroll-section">

          <div className=' w-2/3  md:w-[90%] p-2 text-4xl first__design_2 ml-[-20px] '>
              <ul className="p-6" >
                <li className='text-2xl font-bold lg:text-4xl  '>2.  Prototyping</li>
                <li className='text-2xl mt-6  lg:text-2xl p-2'>- Sculpt interactive prototypes for tangible vision</li>
                <li className='text-2xl  lg:text-2xl  '>- Carve refinement paths based on insightful feedback
                </li>

              </ul>
            </div>

          </div>


          <div className="scroll-section">
          <div className=' w-2/3  md:w-[90%]  p-2 text-4xl first__design_2 mt-0 ml-[-100px] '>
              <ul className="p-6" >
                <li className='text-2xl font-bold lg:text-4xl   '>3.User Experience (UX) Design</li>
                <li className='text-2xl mt-6  lg:text-2xl p-2'>- Weave intuitive user flows</li>
                <li className='text-2xl  lg:text-2xl  '>- Craft an engaging digital tapestry
                </li>

              </ul>
            </div>


</div>

<h2 className='ml-28 text-2xl uppercase  text-white font-bold  p-2 align-middle'> DEvelopment Approach</h2>
<div className="scroll-section">

<div className=' w-2/3  md:w-[90%]  p-2 text-4xl first__design mt-0 '>
  <ul className="p-6" >
    <li className='text-2xl font-bold lg:text-4xl  '>1.Coding Standards</li>
    <li className='text-2xl mt-6  lg:text-2xl p-2'>-Adhere to industry commandments</li>
    <li className='text-2xl  lg:text-2xl  '>- Forge code: robust, reliable, and refined
    </li>

  </ul>
</div>

</div>

<div className="scroll-section">

<div className=' w-2/3  md:w-[90%] p-2 text-4xl first__design_2 ml-[-20px] '>
  <ul className="p-6" >
    <li className='text-2xl font-bold lg:text-4xl  '>2.Iterative Development</li>
    <li className='text-2xl mt-6  lg:text-2xl p-2'>- Dance with iteration, refine in rhythm</li>
    <li className='text-2xl  lg:text-2xl  '>- Mold excellence with the sculptor&apos;s chisel of feedback
    </li>

  </ul>
</div>

</div>



<div className="scroll-section">

<div className=' w-2/3  md:w-[90%]  p-2 text-4xl first__design_2 mt-0 ml-[-100px] '>
  <ul className="p-6" >
    <li className='text-2xl font-bold lg:text-4xl  '>3.Testing Procedures</li>
    <li className='text-2xl mt-6  lg:text-2xl p-2'>-Engage in rigorous functional and security theatrics</li>
    <li className='text-2xl  lg:text-2xl  '>-Spot and swiftly vanquish lurking issues
    </li>

  </ul>
</div>

</div>

<div className="scroll-section">

<div className=' w-2/3  md:w-[90%] p-2 text-4xl first__design_2 ml-[-180px] '>
  <ul className="p-6" >
    <li className='text-2xl font-bold lg:text-4xl  '>4.Deployment and Launch</li>
    <li className='text-2xl mt-6  lg:text-2xl p-2'>- Choreograph a secure and seamless debut</li>
    <li className='text-2xl  lg:text-2xl  '>-- Stand vigilant, offering a post-launch curtain call
    </li>

  </ul>
</div>

</div>
<h2 className='ml-28 text-2xl uppercase  text-white font-bold  p-2 align-middle'> Communication</h2>
<div className="scroll-section">

<div className=' w-2/3  md:w-[100%]  p-2 text-4xl first__design mt-0 '>
  <ul className="p-6" >
    <li className='text-2xl font-bold lg:text-4xl  '>1.Transparent Collaboration</li>
    <li className='text-2xl mt-6  lg:text-2xl'>- Weave a tapestry of regular updates and progress reports</li>
    <li className='text-2xl  lg:text-2xl  '>-Utilize collaborative tools for a symphony of real-time feedback
    </li>

  </ul>
</div>

</div>


<div className="scroll-section">

<div className=' w-2/3  md:w-[90%] p-2 text-4xl first__design_2 ml-[-20px] '>
  <ul className="p-6" >
    <li className='text-2xl font-bold lg:text-4xl  '>2.Client Training</li>
    <li className='text-2xl mt-6  lg:text-2xl p-2'>- Choreograph a secure and seamless debut</li>
    <li className='text-2xl  lg:text-2xl  '>- Stand vigilant, offering a post-launch curtain call
    </li>

  </ul>
</div>

</div>



        </div>


      </div>
    </section>
  );
}

export default ScrollSection;