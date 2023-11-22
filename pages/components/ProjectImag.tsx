
import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { event } from "jquery";
import { Expo } from 'gsap';
import '@/styles/imgHover.module.css'


export default function ProjectImag(){


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
    
return(
    <>
   <section className="section-img">
  <nav>
    <div className="img-wrapper">
      <div className="img-placeholder"> <img src="https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" /> </div>
    </div>
    <ul>
      <li><a className="img-hover-effect-link" data-src="https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" href="#">Kitty</a></li>
      <li><a className="img-hover-effect-link" data-src="https://images.pexels.com/photos/10875180/pexels-photo-10875180.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" href="#">Doggie</a></li>
      <li><a className="img-hover-effect-link" data-src="https://images.pexels.com/photos/4001296/pexels-photo-4001296.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" href="#">Rabbit</a></li>
      <li><a className="img-hover-effect-link" data-src="https://images.pexels.com/photos/3432929/pexels-photo-3432929.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" href="#">Hamster</a></li>
    </ul>
  </nav>
</section>
    </>
)

}