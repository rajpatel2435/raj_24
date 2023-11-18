import React, { useEffect } from "react";

import gsap from "gsap";

function ProjetcLi() {
  useEffect(() => {



    const li_1 = document.querySelector(".ul");
    const li_inside = document.querySelector(".li_inside");
    const randomValue = Math.floor(Math.random() * 100) + 1;
    li_inside?.addEventListener("mouseover", () => {
      gsap.to(li_inside, {
        duration: 0.8,
        css: {
          flex: "1",
          background: "green",
        },
      });
    });

    li_inside?.addEventListener("mouseout", () => {
      gsap.to(li_inside, {
        duration: 0.8,
        css: {

flex:"0.3"
        },
      });

      gsap.to(li_inside, {
        delay: 0.9,
        duration:0.8,
        css: {

background:"unset",
        },
      });

      // gsap.fromTo(li_1, { backgroundSize: "100% 100%" },{ backgroundSize: `100% 0%`, duration: 0.8})
    });
  });
  return (
    <div className="bg-black text-white">
      <ul className="">
        {/* <li className='li_1 '>
        <div className=' flex justify-start  align-middle h-36 bg-slate-50 text-center items-center text-8xl projectLi '> <p className='ml-16'>Raj </p></div> 
        </li> */}
        <li className="ul">
          <div className="li_inside w-52">
            <h1 className="text-white w-full">Awesome Text</h1>
          </div>
        </li>
      </ul>




    </div>
  );
}

export default ProjetcLi;
