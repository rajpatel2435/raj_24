import Head from 'next/head'
import React, { useEffect } from 'react'
import gsap from 'gsap';

function Brand_identity() {

    useEffect(() => {
      
   
      
        const categoriesWrapper = document.querySelector(
            ".reader_round"
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
                    left: posX - 100,
                    top: posY - 50,
                  },
                });
              },
            });
          });
  
      }, []);

  return (
<>

<Head>
    <title>Brand Identity</title>
    <meta name="description" content="Brief intro about the brand identity services"></meta>
    
</Head>


<div className='block reader_round   h-20 w-20 bg-green-50 opacity-50 rounded-full  absolute cursor-none' >

</div>
<div className='color-black h-screen overflow-hidden'>
<h1 className=' text-2xl md:text-6xl'>
Amplify Your Business Brilliance with Dynamic Digital Branding Services 🚀✨
</h1>

<div>

    <br/>
    <br/>
    <h2 className='text-xl md:text-4xl'>
    Elevate Your Brand Journey: Crafting Irresistible Designs, Captivating Motion, and Emotionally Resonant Experiences for Startups, Small Businesses, and Market Titans
    </h2>
</div>
<div className='flex w-full mt-10'>
    <div className=' w-1/3'>

    </div>
    <div className=' w-2/3 '>

    <div>
    <h2 className='text-2xl font-mono z-50'>Brand Strategy</h2>
    <p className='text-xl'>
    Crafting Effective Marketing and Positioning Strategies. If uncertainty clouds your business audience and positioning, a fresh start is essential. Uncover distinctive selling points for your product or service amidst competitors, and trust in our creative expertise for unparalleled success
    </p>
</div>
<br/>
<div>
<h2 className='text-2xl font-mono'> Logo && symbol</h2>
<p className='text-xl'>
    Elevating Your Brand Essence: Crafting Unique Logos, Symbols, and Visual Language. Our bespoke creations, from logos, typefaces, graphics, to marketing assets, redefine campaigns that leave a lasting impact on the market. Beyond aesthetics, we weave senses and messages into every visual element, shaping a brand experience that resonates
    </p> 
</div>

<div>
<br/>
<h2 className='text-2xl font-mono'>visual && branding</h2>
    <p className='text-xl'>
    Elevating Brands through Visual Mastery: Beyond logos and types, branding is the heartbeat of a company. It provides consumers with a relatable ground, forging connections beyond the product or service. A well-developed brand is not just a logo; it is s a promise cherished by customers.
    </p>
</div>
    </div>
</div>

</div>
</>
  )
}

export default Brand_identity