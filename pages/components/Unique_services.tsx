import Link from 'next/link'
import React from 'react'
import brand_identity from './brand_identity'
import oletter from "../../public/Images/o_letter.svg"
function Unique_services() {
    return (
        <>
        <div className=' min-h-screen flex justify-center flex-col bg-white'>


            <div className='services-h1'>
                <div className="services-h1-txt">Your <span className="left-bracket">(</span><span className="uni-span"> X<sup className="superscript r-sign"> ®</sup></span><span className="right-bracket">)</span>eptional</div>
                <div className="services-h1-txt">guide</div>


                <div className="t-arrow-txt-wrapper"><img src="https://assets-global.website-files.com/646b8bf4a94bf985be114231/65547e7a8200021136cd81b6_services-t-arrow.svg" loading="lazy" alt="" className="t-arrow-img" /><div className="services-h1-txt">in<span className="hidden-letter">t</span>o Virtual</div></div>


                <div className="txt-with-eye-wrapper">
                    <img src="/Images/o_letter.svg" loading="lazy" alt="" className="services-hero-eye" />
                    <div className="services-h1-txt world"> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; Gl <span className="hidden-letter">o</span>be</div></div>
            </div>


            <div className='flex justify-between services_title overflow-hidden'>
                <div>
                    <Link href={'/components/brand_identity'}>

                        <p className=' text-black'>1) Digital Branding</p>
                    </Link>

                </div>

                <div>
                    <Link href={'/components/Digital_products'}>

                        <p className='text-black'>2) Digital Services</p>
                    </Link>
                </div>
            </div>
            </div>
        </>
    )
}

export default Unique_services