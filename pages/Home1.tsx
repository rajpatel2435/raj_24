import { useEffect } from "react";
import Script from "next/script";
import Head from "next/head";
import $ from "jquery";
import gsap from "gsap";

import ProjetcLi from "./components/ProjectLi";
import WorkMethod from "./components/WorkMethod";
import ProjectsNew from "./components/ProjectsNew";
import Link from "next/link";
import HeaderMenu from "./headerMenu";

function Home() {
  useEffect(() => {
    $(window).scroll(() => {
      // selectors
      const $window: any = $(window);
      const $body = $("body");
      const $panel = $(".panel");

      // Change 33% earlier than scroll position so color is there when you arrive.
      const scroll = $window.scrollTop() + $window.height() / 3;
      console.log(scroll);
      $panel.each(function () {
        const $this: any = $(this);

        console.log($this);

        // if position is within the range of this panel.
        // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
        // Remember we set the scroll to 33% earlier in scroll var.
        if (
          $this.position().top <= scroll &&
          $this.position().top + $this.height() > scroll
        ) {
          // Remove all classes on body with color-
          $body.removeClass(function (index, css) {
            return (css.match(/(^|\s)color-\S+/g) || []).join(" ");
          });

          // Add class of the currently active div
          $body.addClass("color-" + $this.data("color"));
        }
      });
    });

    const skills_1 = document.querySelector(".skills") as HTMLDivElement;

    const skills_2 = document.querySelector(".skills_2") as HTMLDivElement;

    const skills_3 = document.querySelector(".skills_3") as HTMLDivElement;

    // skills_1?.addEventListener("mouseover", () => {
    //   gsap.to(skills_1, {
    //     duration: 0.018,
    //     css: {
    //       animationPlayState: "paused",
    //     },
    //   });
    // });

    // skills_1.addEventListener("mouseleave", () => {
    //   gsap.to(skills_1, {
    //     css: {
    //       animationPlayState: "running",
    //     },
    //   });
    // });
  }, []);

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Vina+Sans&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="../styles/marquee.css" />
        <link rel="stylesheet" href="../styles/projectLi.css" />

        <style>
  @import url('https://fonts.googleapis.com/css2?family=Audiowide&family=Monoton&display=swap');
</style>
      </Head>



      <div className="wrap">

        <div
          className="panel color-dark panel-black flex  flex-col min-h-screen justify-center"
          data-color="black"
        >

<div className="subline-home text-4xl flex-1">   
<Link href="/headerMenu">

<div className="w-10 p-2 absolute right-28 top-14">

  <div className="h-1 w-8 mt-1 ml-1   text-center bg-white rounded-md"></div>
  <div className="h-1 mt-2 mb-2 w-10 opacity-50 bg-white rounded-md"></div>
  <div className="h-1 w-8 mt-1 ml-1   text-center bg-white  rounded-md"></div>
</div>
</Link>
          </div>

<div className=" text-center align-middle items-center flex-1 content-home">


          <div className="md:text-6xl lg:text-7xl lg:mt-28 content-home">Designing & Developing <br/>Digital masterpieces <br/>
          from Montreal's Creative hub </div>
          {/* <p className="text-4xl">- where experience meets innovation, and every pixxel tells a story</p> */}
          <div className="container_punchLine">
        <div className="punch_line">
            &nbsp; &nbsp; Where experience meets innovation, and every pixel tells a story &nbsp; &nbsp; &nbsp;
            -where innovation embraces experience, and pixels whisper captivating stories &nbsp; &nbsp; &nbsp; 
            - where innovation and experience harmonize, and every pixel spins its unique narrative  &nbsp; &nbsp; &nbsp; 
            -where innovation dances with experience, and pixels weave tales &nbsp &nbsp; &nbsp; 

            &nbsp; &nbsp; Where experience meets innovation, and every pixel tells a story &nbsp; &nbsp; &nbsp;
            -where innovation embraces experience, and pixels whisper captivating stories &nbsp; &nbsp; &nbsp; 
            - where innovation and experience harmonize, and every pixel spins its unique narrative &nbsp; &nbsp; &nbsp; 
            -where innovation dances with experience, and pixels weave tales &nbsp &nbsp; &nbsp; 

        </div>
    </div>
        </div>
       
        <div className=" mr-10 flex-1">
        <ul className=" text-end mr-12 text-4xl mt-10">
                <li>Crafting digital dreams,</li>
                <li>where pixels meet profit</li>
            </ul>
        </div>

      
        </div>
        {/* <div className="home_punch">
        <div className="moving-text text-4xl">
            - where experience meets invoation, and every pixxel tells a story &nbs &nbsp; &nbsp; 
            -where innovation embraces experience, and pixels whisper captivating stories. &nbs &nbsp; &nbsp; 
            - where innovation and experience harmonize, and every pixel spins its unique narrative.&nbs &nbsp; &nbsp; 
            -where innovation dances with experience, and pixels weave tales. &nbs &nbsp; &nbsp; 
            </div>
          </div>
 */}



        {/* secnod div second page */}
        <div className="panel color-light" data-color="black">
          <h2 className="text-4xl">Unique Services </h2>
         <div className="skills_main">
            <div className="skills p-10">
             <span className=" border border-gray-400 rounded-full px-7 ">WEb development</span>  &nbsp; &nbsp;
             <span className=" border border-gray-400 rounded-full px-7 ">WEb design</span>  &nbsp; &nbsp;
             <span className=" border border-gray-400 rounded-full px-7">SEO</span> &nbsp; &nbsp;
             <span className=" border border-gray-400 rounded-full px-7">Game Designer</span>  &nbsp; &nbsp;

             <span className=" border border-gray-400 rounded-full px-7">Branding</span>  &nbsp; &nbsp;
             <span className=" border border-gray-400 rounded-full px-7">UI/UX</span>  &nbsp; &nbsp;
             <span className=" border border-gray-400 rounded-full px-7">3D Site developer</span>  &nbsp; &nbsp;



{/* REpeat the things */}
             <span className=" border border-gray-400 rounded-full px-7 ">WEb development</span>  &nbsp; &nbsp;
             <span className=" border border-gray-400 rounded-full px-7 ">WEb design</span>  &nbsp; &nbsp;
             <span className=" border border-gray-400 rounded-full px-7">SEO</span> &nbsp; &nbsp;
             <span className=" border border-gray-400 rounded-full px-7">Game Designer</span>  &nbsp; &nbsp;
       
             <span className=" border border-gray-400 rounded-full px-7">Branding</span>  &nbsp; &nbsp;
             <span className=" border border-gray-400 rounded-full px-7">UI/UX</span>  &nbsp; &nbsp;
             <span className=" border border-gray-400 rounded-full px-7">3D Site developer</span>  &nbsp; &nbsp;
       
            </div>
          </div>
          <h2 className="text-4xl ">Expertise</h2>
          <div className="skills_main">
            <div className="skills_2 p-10">
             <span className=" border border-gray-400 rounded-full px-7 ">React JS</span>  &nbsp; &nbsp;
             <span className=" border border-gray-400 rounded-full px-7 ">3 JS</span>  &nbsp; &nbsp;
             <span className=" border border-gray-400 rounded-full px-7">Next js</span> &nbsp; &nbsp;
             <span className=" border border-gray-400 rounded-full px-7">express js</span>  &nbsp; &nbsp;
             <span className=" border border-gray-400 rounded-full px-7">wordpress</span>  &nbsp; &nbsp;
             <span className=" border border-gray-400 rounded-full px-7">node</span>  &nbsp; &nbsp;
             <span className=" border border-gray-400 rounded-full px-7">php</span>  &nbsp; &nbsp;
             <span className=" border border-gray-400 rounded-full px-7">html</span>  &nbsp; &nbsp;
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
{/* 
Optimization - need to stay top in google ranking */}
<h2 className="text-4xl bg-white text-black w-[700px] ml-auto mr-auto p-2">
Stay on Top: Internet Optimization Experts!
</h2>

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

          {/* <div className="skills_main_2">
            <div className="skills_2 ">
              Web development &nbsp; &nbsp; &nbsp; Web development &nbsp; &nbsp;
              &nbsp; Web design &nbsp; &nbsp; &nbsp; Web skills &nbsp; &nbsp;
              &nbsp; Web optimization &nbsp; &nbsp; Reaact &nbsp; &nbsp; Web
              development &nbsp; &nbsp; &nbsp; Web development &nbsp; &nbsp;
              &nbsp; Web development &nbsp; &nbsp; &nbsp; Raj &nbsp; &nbsp;
              &nbsp; Web development &nbsp; &nbsp; &nbsp; Web development &nbsp;
              &nbsp; &nbsp; Web design &nbsp; &nbsp; &nbsp; Web skills &nbsp;
              &nbsp; &nbsp; Web optimization &nbsp; &nbsp; Reaact &nbsp; &nbsp;
              Web development &nbsp; &nbsp; &nbsp; Web development &nbsp; &nbsp;
              &nbsp; Web development &nbsp; &nbsp; &nbsp; Raj &nbsp; &nbsp;
              &nbsp;
            </div>
          </div>

          <div className="skills_main_3">
            <div className="skills">
       
              Web development &nbsp; &nbsp; &nbsp; Web development &nbsp; &nbsp;
              &nbsp; Web design &nbsp; &nbsp; &nbsp; Web skills &nbsp; &nbsp;
              &nbsp; Web optimization &nbsp; &nbsp; Reaact &nbsp; &nbsp; Web
              development &nbsp; &nbsp; &nbsp; Web development &nbsp; &nbsp;
              &nbsp; Web development &nbsp; &nbsp; &nbsp; Raj &nbsp; &nbsp;
              &nbsp; Web development &nbsp; &nbsp; &nbsp; Web development &nbsp;
              &nbsp; &nbsp; Web design &nbsp; &nbsp; &nbsp; Web skills &nbsp;
              &nbsp; &nbsp; Web optimization &nbsp; &nbsp; Reaact &nbsp; &nbsp;
              Web development &nbsp; &nbsp; &nbsp; Web development &nbsp; &nbsp;
              &nbsp; Web development &nbsp; &nbsp; &nbsp; Raj &nbsp; &nbsp;
              &nbsp;
            </div>
          </div> */}
        </div>
        <div className="panel color-dark" data-color="indigo">

          {/* <ProjetcLi /> */}
          <ProjectsNew/>
        </div>
  

        <div className="more_freelancing1212">
            <a
              href="#meeet"
        
              className="ribbon show"
              style={{}}
            >
              <div className="slider">
                <div
                  className="container animate"
                  style={{ width: "476px", animationDuration: "20s" }}
                >
                  {" "}
                  <span>
                    START A PROJECT &nbsp;
                    <span className="separator">&nbsp; :&nbsp; </span>
                  </span>{" "}
                  <span>
                    Any idea on your mind? &nbsp;
                    <span className="separator">:&nbsp; </span>
                  </span>
                  <span>
                    {" "}
                    START A PROJECT&nbsp;
                    <span className="separator">:&nbsp;</span>
                  </span>
                  <span>
                    START A PROJECT&nbsp;
                    <span className="separator">:&nbsp;</span>
                  </span>
                  <span>
                    START A PROJECT &nbsp;
                    <span className="separator"> :&nbsp; </span>
                  </span>{" "}
                  <span>
                    Any idea on your mind?&nbsp;
                    <span className="separator">:&nbsp; </span>
                  </span>
                  <span>
                    {" "}
                    START A PROJECT&nbsp;
                    <span className="separator">:&nbsp;</span>
                  </span>
                  <span>
                    START A PROJECT&nbsp;
                    <span className="separator">:&nbsp;</span>
                  </span>
                </div>
              </div>
            </a>
          </div> 
      

        <div className="panel color-light min-h-0" data-color="black">
        <div className="skills_main_home">
            <div className="skills_1" style={{ fontSize: "21vw",opacity:"0.5" }}>
           Welcome To digital World &nbsp; &nbsp; &nbsp; Web development &nbsp; &nbsp;
              &nbsp; Web design &nbsp; &nbsp; &nbsp; Web skills &nbsp; &nbsp;
              &nbsp; Web optimization &nbsp; &nbsp; Reaact &nbsp; &nbsp; Web
              development &nbsp; &nbsp; &nbsp; Web development &nbsp; &nbsp;
              &nbsp; Web development &nbsp; &nbsp; &nbsp; Raj &nbsp; &nbsp;
              &nbsp; Web development &nbsp; &nbsp; &nbsp; Web development &nbsp;
              &nbsp; &nbsp; Web design &nbsp; &nbsp; &nbsp; Web skills &nbsp;
              &nbsp; &nbsp; Web optimization &nbsp; &nbsp; Reaact &nbsp; &nbsp;
              Web development &nbsp; &nbsp; &nbsp; Web development &nbsp; &nbsp;
              &nbsp; Web development &nbsp; &nbsp; &nbsp; Raj &nbsp; &nbsp;
              &nbsp;
            </div>
          </div>
        </div>

      </div>



    </>
  );
}

export default Home;
