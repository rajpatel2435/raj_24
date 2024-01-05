import React, { useEffect } from 'react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import $ from 'jquery'
function TextBig() {

    useEffect(()=>{


        $(window).scroll(function() {
            var scroll:any = $(window).scrollTop();
            console.log("scroll"+scroll);

                $(".box").css({
             

                    fontSize: (scroll/40)+25 + "px",
            
                });

            
            
              });
      

        gsap.registerPlugin(ScrollTrigger);
        let box=document.getElementsByClassName('box');
 let tl=gsap.timeline();
//  console.log(tl);

        ScrollTrigger.create({
            trigger: ".box-2",
            start: "top center",
            end: "+=1000",
            scrub:1,
            onUpdate: (self) =>
            { 
            //   console.log(self);
            let fontS= Math.round(self.progress*2000)+10;
            // console.log("progress:", fontS)

            }

          });
         

          return () => {            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
          };
        
    },[])
    return (
        <div className='grid place-content-center h-[100vh] bg-[#0a0a0c] text-white text-8xl overflow-hidden whitespace-nowrap box-2 color-black'>
            <div className='box'>
                We make better websites,isn&apos;t it?
            </div>
        </div>
    )
}

export default TextBig