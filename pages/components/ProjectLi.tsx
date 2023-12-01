// import React, { useEffect } from "react";
// import gsap from "gsap";
// import { Power4 } from "gsap";

// function ProjetcLi() {
//   useEffect(() => {
//     const liItems = document.querySelectorAll(".custom-li");

//     liItems.forEach((li, index) => {
//       const liInside = li.querySelector(".li_inside");

//       li.addEventListener("mouseover", () => {
//         const direction = index % 2 === 0 ? 1 : -1; // 1 for left to right, -1 for right to left

//         gsap.to(liInside, {
//           duration: 1,
//           ease: Power4.easeOut,
//           css: {
//             width: "100%",
//             background: "white",
//           },
//         });

//         gsap.to(liInside, {
//           duration: 1,
//           scaleX: direction,
//         });
//       });

//       li.addEventListener("mouseout", () => {
//         gsap.to(liInside, {
//           duration: 0.9,
//           css: {
//             width: "0%",
//             background: "black",
//           },
//         });

//         gsap.to(liInside, {
//           duration: 1,
//           scaleX: 1,
//         });
//       });
//     });
//   }, []);

//   return (
//     <>
//       <div className="bg-black text-white">
//         <ul className="li_container">
//           <li className="custom-li">
//             <div className="li_inside">
//               <h1 className="text-green-700 w-96  h1_raj">Awesome Text</h1>
//             </div>
//           </li>
//           <li className="custom-li">
//             <div className="li_inside">
//               <h1 className="text-green-700 w-96 h1_raj">Awesome Text</h1>
//             </div>
//           </li>

//           <li className="custom-li">
//             <div className="li_inside">
//               <h1 className="text-green-700 w-96 h1_raj">Awesome Text</h1>
//             </div>
//           </li>

//           <li className="custom-li">
//             <div className="li_inside">
//               <h1 className="text-green-700 w-96 h1_raj">Awesome Text</h1>
//             </div>
//           </li>
//           <li className="custom-li">
//             <div className="li_inside">
//               <h1 className="text-green-700 w-96 h1_raj">Awesome Text</h1>
//             </div>
//           </li>
//           {/* Add more li elements as needed */}
//         </ul>
//       </div>
//     </>
//   );
// }

// export default ProjetcLi;





import React, { useEffect } from "react";
import gsap from "gsap";
import { Power4 } from "gsap";
import { Expo } from "gsap";
import Link from "next/link";

function ProjetcLi() {
  useEffect(() => {
    const liItems = document.querySelectorAll(".custom-li");

    liItems.forEach((li, index) => {
      const liInside = li.querySelector(".li_inside");
      const liInside1 = li.querySelector(".rajjj");



      li.addEventListener("mouseover", () => {
        const direction = index % 2 === 0 ? 1 : -1; // 1 for left to right, -1 for right to left

            const audio=new Audio('/audio.wav');
            audio.play(); 
        
        gsap.to(liInside1, {
          color:"black"
        });

        gsap.to(liInside, {
          duration: 1,
          ease: Power4.easeOut,
          css: {
            width: "100%",
            background: "white",
          },
          onComplete: () => {
            gsap.set(liInside, { clearProps: "all" });
          },
        });

        gsap.to(liInside, {
          duration: 1,
          scaleX: direction,
        });

      });

      li.addEventListener("mouseout", () => {
        gsap.to(liInside, {
          duration: 0.9,
          css: {
            width: "0%",
          },
          onComplete: () => {
            gsap.set(liInside, { clearProps: "all" });
          },
        });

        gsap.to(liInside, {
          duration: 1,
          scaleX: 1,
        });
      });
    });
  }, []);



  useEffect(() => {
    let imgHoverLink = gsap.utils.toArray(".img-hover-effect-link");
    let imgWrap = document.querySelector('.img-wrapper');
    let imgItem = document.querySelector('.img-placeholder img');

    function moveImg(e) {
      let mouseX = e.clientX;
      let mouseY = e.clientY;
      let tl = gsap.timeline();
      tl.to(imgWrap, {
        duration: 1,
        x: mouseX,
        y: mouseY,
        ease: Expo.ease,
      });
    }

    function linkHover(e) {
      if (e.type === "mouseenter") {
        let imgSrc = e.target.dataset.src;
        let tl = gsap.timeline();

        tl.set(imgItem, {
          attr: { src: imgSrc } // update imgSrc as in data-src
        }).to(imgWrap, {
          autoAlpha: 1,
          scale: 1,
          zIndex:10000,
        });
      }

      if (e.type === "mouseleave") {
        let tl = gsap.timeline();
        tl.to(imgWrap, {
          autoAlpha: 0,
          scale: 0.3,
        });
      }
    }

    function initAnimation() {
      imgHoverLink.forEach((link) => {
        link.addEventListener('mouseenter', linkHover);
        link.addEventListener('mouseleave', linkHover);
        link.addEventListener('mousemove', moveImg);
      });
    }

    function init() {
      initAnimation();
    }

    init();
  }, []); // Empty dependency array ensures useEffect runs only on mount

  return (
    <>
      <div className="bg-black text-white relative block">

      <div className="img-wrapper">
      <div className="img-placeholder"> <img src="https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" /> </div>
    </div>
    <h1 className=" text-center text-8xl uppercase p-10">selected work</h1>
        <ul className="li_container">
          {/* <li className="custom-li">
            <div className="li_inside">
 
              <a className="img-hover-effect-link  rajjj" data-src="https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" href="#">Kitty</a>
            </div>
          </li>
          <li className="custom-li">
            <div className="li_inside">
         
              <a className="img-hover-effect-link rajjj h1_raj"  data-src="https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" href="#">Awesome Text</a>
            </div>
          </li>


       */}
          {/* <li className="custom-li">
            <Link href="/">
          <div className="li_inside">
          <div className="img-hover-effect-link li_inside h1_raj" data-src="https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" href="#">
 
              <h1 className="text-green-700 w-96 rajjj">PS</h1>
        
        
            </div>
            </div>
            </Link>
          </li>


          <li className="custom-li">
            <Link href="/">
          <div className="li_inside">
          <a className="img-hover-effect-link li_inside  h1_raj" data-src="https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" href="#">
 
              <h1 className="text-green-700 w-96 rajjj">Awesome Text</h1>
        
        
            </a>
            </div>
            </Link>
          </li> */}

<li className="custom-li">
            <a href="/">
          <div className="li_inside">
          <div className="img-hover-effect-link li_inside  h1_raj" data-src="https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" href="#">
 
              <h1 className="text-green-700 w-96 rajjj">Slots Paradise</h1>
        
        
            </div>
            </div>
            </a>
          </li>

<li className="custom-li">
            <a href="/">
          <div className="li_inside">
          <div className="img-hover-effect-link li_inside  h1_raj" data-src="https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" href="#">
 
              <h1 className="text-green-700 w-96 rajjj">MovieFy</h1>
        
        
            </div>
            </div>
            </a>
          </li>

          <li className="custom-li">
            <a href="/">
          <div className="li_inside">
          <div className="img-hover-effect-link li_inside  h1_raj" data-src="https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" href="#">
 
              <h1 className="text-green-700 w-96 rajjj">Vibrary</h1>
        
        
            </div>
            </div>
            </a>
          </li>

          <li className="custom-li">
          <a href="/">
          <div className="li_inside">
          <div className="img-hover-effect-link  h1_raj" data-src="https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" href="#">
 
              <h1 className="text-green-700 w-96 rajjj">PointsPread</h1>
        
        
            </div>
            </div>
            </a>
          </li>

          <li className="custom-li">
            <a href="/">
          <div className="li_inside">
          <div className="img-hover-effect-link li_inside  h1_raj" data-src="https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" href="#">
 
              <h1 className="text-green-700 w-96 rajjj">Insider Betting Digest</h1>
        
        
            </div>
            </div>
            </a>
          </li>
          {/* <li className="custom-li">
            <div className="li_inside">
              <h1 className="text-green-700 w-96 h1_raj">Awesome Text cbvnv</h1>
            </div>
          </li> */}
          <li className="custom-li">
            <a href="">
          <div className="li_inside">
          <div className="img-hover-effect-link  h1_raj" data-src="https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" href="#">
 
              <h1 className="text-green-700 w-96 rajjj">Betus</h1>
        
        
            </div>
            </div>
            </a>
          </li>


          {/* Add more li elements as needed */}
        </ul>
      </div>
    </>
  );
}

export default ProjetcLi;
