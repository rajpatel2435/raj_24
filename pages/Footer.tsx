import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


function Footer() {
    return (
        <>


         



            <div className='flex p-10 bg-black'>
                <div className='flex justify-around flex-row-reverse flex-1'>
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
                        <div className=' text-center font-bold'>Follow us on </div>
                        <div className='flex'><FontAwesomeIcon icon={faInstagram} style={{ fontSize: 50, padding: 10,color:'green' }} />
               
                        <FontAwesomeIcon icon={faFacebook} style={{ fontSize: 50,color:'green'}} />
          
          
          
                                        <FontAwesomeIcon icon={faLinkedinIn} style={{ fontSize: 50, padding: 10,color:'' }} />
                                    

                                        
                        </div>


                    </div>

                    <div>
                    <div className="newsletter"><h4 className='text-center font-bold'>Subscribe to our newsletter</h4><div className="form_wrapper"><form action="" className="form"><div className="field">
                            <input placeholder="E-Mail address" className=' border-dashed border-2 border-sky-100 p-2' type="email" value="" />
                            <button className='p-2 mt-5 bg-black text-white'><span>Subscribe</span></button></div></form></div></div>
                    
                </div>

                    </div>
                </div>
            
        </>

    )
}

export default Footer