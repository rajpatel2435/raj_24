import React, { useEffect } from "react";

import gsap from "gsap";
import { Power4 } from "gsap";

function ProjetcLi() {
  useEffect(() => {
    const li_1 = document.querySelector(".ul");
    const li_inside = document.querySelector(".li_raj");
    const raj = document.querySelector(".h1_raj");
    const li__inside = document.querySelector(".li_inside");
    const randomValue = Math.floor(Math.random() * 100) + 1;

    li_1?.addEventListener("mouseover", () => {
      gsap.to(li__inside, {
        duration: 1,
        ease: Power4.easeOut,
        css: {
          width: "100%",
          background: "white",
          color: "black",
        },
      });

      gsap.to(raj, {
        duration: 1,
        ease: Power4.easeIn,
        css: {
          color: "black",
        },
      });
    });

    //     li_inside?.addEventListener("mouseover", () => {
    //       gsap.to(li_inside, {
    //         duration: 0.8,
    //         css: {
    //           flex: "1",
    //           background: "green",
    //         },
    //       });

    //       gsap.to(raj,{
    //         duration:0.8,
    //         css:{
    //           width:"100%",
    //           background: "white",
    //           color:"black",
    //           fontSize:"50px"
    //         }
    //       })

    //     });

    li_1?.addEventListener("mouseout", () => {
      gsap.to(li__inside, {
        duration: 0.9,

        css: {
          width: "0%",
    
        },
      });

      gsap.to(raj, {
        duration: 1,
        css: {
          color: "green",
        },
      });
      //       gsap.to(li_inside, {
      //         duration: 0.8,
      //         css: {

      // flex:"0.3"
      //         },
      //       });

      //       gsap.to(li_inside, {
      //         delay: 0.9,
      //         duration:0.8,
      //         css: {

      // background:"unset",
      //         },
      //       });

      // gsap.fromTo(li_1, { backgroundSize: "100% 100%" },{ backgroundSize: `100% 0%`, duration: 0.8})
    });
  });
  return (
    <>
    <div className="bg-black text-white">
      <ul className="li_container">
        {/* <li className='li_1 '>
        <div className=' flex justify-start  align-middle h-36 bg-slate-50 text-center items-center text-8xl projectLi '> <p className='ml-16'>Raj </p></div> 
        </li> */}
        <li className="ul">
          <div className="li_inside absolute">
            <h1 className=" text-green-700 w-96 h1_raj ">Awesome Text</h1>
          </div>
        </li>
   
      </ul>

      <ul className="li_container">
        {/* <li className='li_1 '>
        <div className=' flex justify-start  align-middle h-36 bg-slate-50 text-center items-center text-8xl projectLi '> <p className='ml-16'>Raj </p></div> 
        </li> */}
        <li className="ul">
          <div className="li_inside absolute">
            <h1 className=" text-green-700 w-96 h1_raj ">Awesome Text</h1>
          </div>
        </li>
   
      </ul>

    </div>



    </>
    
  );
}

export default ProjetcLi;
