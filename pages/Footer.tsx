import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


function Footer() {
    return (
        <>


         



            <div className='md:flex p-10 bg-black'>
                <div className='md:flex justify-around flex-row-reverse flex-1 text-center'>
                    <div>
                        <div>
                            <ul>
                                <li className='font-bold'>Montreal&apos;s HeadOffice</li>
                                <li> <br/></li>
                                <li>Suite 6,4620 Avenue Plamondon</li>
                                <li>Montreal,QC H3W 1E5</li>
                            </ul>
                        </div>

                    </div>


                    <div>
                    <div className="newsletter"><h4 className='text-center font-bold'>Subscribe to our newsletter</h4><div className="form_wrapper"><form action="" className="form"><div className="field">
                            <input placeholder="E-Mail address" className='  border-2 border-green-200 rounded-[20px] bg-black p-2' type="email"  />
                            <button className='p-2 mt-5 bg-green-400 sm:ml-2   md:ml-4 rounded-[20px] text-white'><span>Subscribe</span></button></div></form></div></div>
                    
                </div>

                    </div>
                </div>
                <div className='bg-white text-black md:flex justify-between p-5 uppercase items-end'>
                    <div className=' text-center'>
                    © 2024 your agency
                        </div>

                        <div className=' gap-5 flex md:gap-20 justify-center'>
                            <div className='md:flex md:gap-20'>

                          
                            <div>Facebook <div className='arrow-cross'></div></div>
                            <div>LinkedIn <div className='arrow-cross'></div></div>

                            </div>

                            <div className='md:flex md:gap-20'>
                            <div>InstaGram <div className='arrow-cross'></div></div>
                            <div className=' mr-10'>github <div className='arrow-cross'></div></div>

                            </div>
                        </div>

                </div>
            
        </>

    )
}

export default Footer