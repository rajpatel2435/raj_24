import Head from 'next/head'
import React from 'react'
import $ from 'jquery';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import moviefy from "../../public/Images/moviefy3.png"
import vib from "../../public/Images/vibrary.png"
import Image from 'next/image'

var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    
  };

function sliderAnimation() {

  return (
    <>
  <div className='bg-black text-white'>
      Hello World.
      <Slider {...settings} className=' w-[800px] mr-auto ml-auto'>
        <div>
            <div className='w-[800px] h-[500px]'>

    <Image src={moviefy} alt='moviefy'/>
  
       </div>
        </div>
        <div className='flex justify-center align-middle  '>
          <h3>MITS: Montreal IT&apos;s Hub</h3>
        </div>
        <div>
    
          <Image src={vib} alt='Vibrary'/>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
    </>
  )
}

export default sliderAnimation