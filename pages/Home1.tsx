import { useEffect } from "react";
import Script from "next/script";
import Head from "next/head";
import $ from "jquery";
import gsap from "gsap";

import ProjetcLi from "./components/ProjectLi";

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

    skills_1.addEventListener("mouseover", () => {
      gsap.to(skills_1, {
        duration: 0.018,
        css: {
          animationPlayState: "paused",
        },
      });
    });

    skills_1.addEventListener("mouseleave", () => {
      gsap.to(skills_1, {
        css: {
          animationPlayState: "running",
        },
      });
    });
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
      </Head>



      <div className="wrap">

    

        <div
          className="panel color-dark panel-black flex  flex-col min-h-screen justify-center"
          data-color="black"
        >

<div className="subline-home text-4xl flex-1">   
   
          </div>

<div className=" text-center align-middle items-center flex-1">


          <div className=" text-8xl mt-36">Designing & Developing <br/>Digital masterpieces <br/>
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
          <div className="skills_main">
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
          </div>

          <div className="skills_main_2">
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
          </div>
        </div>
        <div className="panel color-dark" data-color="indigo">
          <h2>Blue panel</h2>
          <ProjetcLi />
        </div>
        <div className="panel color-light" data-color="black">
          <h2>Green panel</h2>

          <div className="more_freelancing1212">
            <a
              href="/index.html"
              target="_blank"
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
        </div>
        <div className="panel color-dark" data-color="indigo">
          <h2>Yellow panel</h2>
          <div className="skills_main_home">
            <div className="skills_1" style={{ fontSize: "21vw" }}>
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
        </div>
        <div className="panel color-light" data-color="black">
          <h2>Orange panel</h2>
        </div>
        <div className="panel color-dark" data-color="indigo">
          <h2>Red panel</h2>
        </div>
      </div>
    </>
  );
}

export default Home;
