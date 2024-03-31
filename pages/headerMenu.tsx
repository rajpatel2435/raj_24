import { gsap } from "gsap";
import { useEffect } from "react";
import { useLayoutEffect, useRef } from "react";
function HeaderMenu() {
  useEffect(() => {
    const element = document.querySelector("ul") as HTMLUListElement;
    const liElement = document.querySelectorAll(".navbar_right li ");
    let more_freelancing = document.querySelector(".more_freelancing12");

    let text_p = document.querySelector(".text_p") as HTMLParagraphElement;


    let close_button = document.querySelector(".close");

    close_button?.addEventListener("click", () => {
      history.back();
    });

    close_button?.addEventListener('mouseover',()=>{
      gsap.to(categoriesWrapper,{
        duration:0.018,
        css:{
          height:50,
          width:50,
          background:'none',
          border:'2px solid white'
        }
      })
    })


    close_button?.addEventListener('mouseout',()=>{
      gsap.to(categoriesWrapper,{
        duration:0.018,
        css:{
          height:24,
          width:24,
          
    
        }
      })
    })
    const categoriesWrapper = document.querySelector(
      ".small_point"
    ) as HTMLUListElement;
    let mouseX = 0;
    let mouseY = 0;
    let posX = 0;
    let posY = 0;

    document.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });
    window.addEventListener("mouseover", (e) => {
      // gsap.to(categoriesWrapper, {
      //   // move images to mouse position
      //   duration:0.0018,
      //   x: e.x,
      //   y: e.y,

      //   // transform origin of images to center

      //   // stagger subsequent images by 50ms
      //   stagger: 0.05,
      // });
      gsap.to(categoriesWrapper, {
        duration: 0.018,
        repeat: -1,
        onRepeat: function () {
          posX += (mouseX - posX) / 8;
          posY += (mouseY - posY) / 8;

          gsap.set(categoriesWrapper, {
            css: {
              left: posX - 1,
              top: posY - 2,
            },
          });
        },
      });
    });

    gsap.utils.toArray(liElement).forEach((category, index) => {
      let lis: any = category;

      lis.addEventListener("mouseover", () => {
        let selectore = lis.textContent.trim();

        //console.log(index, lis.textContent.trim());

        text_p.textContent = selectore;

        gsap.set(categoriesWrapper, {
          duration: 0.001,
          css: {
            height: 0,
            width: 0,
          },
        });
        gsap.set(more_freelancing, {
          duration: 0.018,
          css: {
            height: "100px",
            width: "100px",
            borderRadius: "50%",
            opacity:1,
          },
        });

        gsap.to(more_freelancing, {
          duration: 0.018,
          repeat: -1,
          onRepeat: function () {
            posX += (mouseX - posX) / 8;
            posY += (mouseY - posY) / 8;

            gsap.set(more_freelancing, {
              css: {
                left: posX - 1,
                top: posY - 2,
              },
            });
          },
        });
      });

      lis.addEventListener("mouseout", () => {
        gsap.set(categoriesWrapper, {
          duration: 0.018,
          css: {
            height: "20px",
            width: "20px",
            borderRadius: "50%",
          },
        });

        // gsap.set(more_freelancing, {
        //   duration: 0.018,
        //   css: {
        //     height: "0px",
        //     width: "0px",
        //     fontSize:"0px",
        //   },
        // });

        gsap.set(more_freelancing, {
          opacity: 0,
          duration: 0.3, // Adjust the duration as needed
          ease: 'power2.inOut',
        });

      });
    });

    element.addEventListener("mouseout", (e) => {
      gsap.set(categoriesWrapper, {
        css: {
          height: "20px",
          width: "20px",
          transformOrigin: "-% 50%",
          borderRadius: "0",
        },
      });


  
    });
  }, []);

  return (
    <>

      <div className=" hidden md:block">
        <div className=" fixed top-0 left-0 w-6 h-6 bg-white small_point"></div>
        <div className="flex justify-center items-center  fixed top-0 left-0 bg-white h-0 w-0 text-center align-middle rounded-full more_freelancing12 ">
          <p className="text-black text_p font-bold text-2xl "></p>
        </div>
      </div>
<div className="bg-[rgb(34,34,34)] h-screen">
      <section className="flex w-screen items-center h-[80vh] md:h-screen bg-[rgb(34,34,34)] text-white font-bold cursor-none header-container-menu overflow-hidden">
        <div className="md:h-[33.796vw] flex-col justify-between flex items-center  md:w-1/2 ">
          <div className="grid place-content-center md:text-[20px]"></div>

          <div className="ml-auto mr-auto md:text-[20px]">
            <ul className="text-center md:text-left  ">
              <li>new Projects</li>
              <li>rajpatel2435@gmail.com</li>
            </ul>
            <ul className="   md:mt-40 md:mb-5 lg:mb-[80px]">
            
              <li>portfolio 2022</li>
            </ul>
          </div>
        </div>

        <div className="  flex justify-center items-center p-10   text-[7vh] md:w-1/2">
          <ul className="navbar_right">
            <li> About</li>
            <li>Projects</li>
            <li>Resume</li>
            <li>Works</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className=" absolute top-20 right-20 close p-10">
          <img src="https://assets-global.website-files.com/640256f45361e5c4782b15ad/642b581080142521a19355b8_Close.svg" alt="cancle"/>
        </div>
      </section>
      </div>

    </>
  );
}

export default HeaderMenu;
