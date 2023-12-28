import React from 'react'

function meet() {
    return (
        <div>
            <div>
                <div className=' absolute h-52 w-52 bg-green-300 border-4   rounded-full text-center text-4xl items-center flex flex-col justify-center meet-arrow'>
                    <div className='text-xl mb-4'>
                        Raj
                    </div>
                    <div className='text-center rounded-full'>
                        Let's meet and review
                    </div>
                    <div className='text-xl mt-4'>
                        Patel
                    </div>
                </div>
            </div>






<div className='grid grid-cols-1 md:grid-cols-2 gap-2 ' id='meeet'>
            <div className='  bg-black h-screen  text-white flex justify-center'>
        <p className='block mt-auto mb-auto text-2xl  tracking-wider  p-5 ' style={{  }}> 
                       Congratulations on making it this far! Now, let's elevate the excitement—how about we rendezvous in the digital realm of Google Meet, Teams, or Zoom? We're eager to dive into the unique tapestry of your agency's needs and dazzle you with our tailored, success-proven solutions. Ready to embark on a transformative journey with just one click? Your agency's next chapter is waiting to be penned in brilliance!
                        {/* Congrats on reaching this point! Let's spice things up—how about a digital rendezvous on Google Meet, Teams, or Zoom? Excited to explore your agency's needs and dazzle you with our tailored solutions. Ready for a transformative journey with just one click? Your agency's next chapter awaits in brilliance! */}
                 </p>
            </div>
            <div className='flex justify-center'>
            <div className='   bg-white text-2xl lg:text-4xl uppercase items-center justify-center flex flex-col text-center'>
                    <h2 className='mb-10 mt-10 text-black'> Let's Work together!! </h2>
                    <form>
                        <input type='text' placeholder="What's your name?" className=' w-3/4 bg-transparent text-black border-collapse appearance-none p-2 py-4 focus:outline-none placeholder:text-teal-500 border-b border-teal-500 leading-tight' />
                        <input type='email' placeholder='Email' className='w-3/4 bg-transparent text-black  border-collapse appearance-none p-2 py-4  placeholder:text-teal-500  focus:outline-none border-b border-teal-500 leading-tight' />
                        <input type='textarea' placeholder='How can we help?' className='w-3/4 bg-transparent text-black  border-collapse appearance-none p-2 py-4  placeholder:text-teal-500  focus:outline-none border-b border-teal-500 leading-tight' />
                        <input type="submit" value="SEND IT!" data-wait="Please wait..." className=" w-3/4 submit-button-cf2 mt-10 ml-10 lg:ml-28 w-button block p-2 border border-black rounded-3xl hover:bg-black text-teal-500 hover:text-white " />
                    </form>
                </div>
            </div>
      
        </div>
        </div>
    )
}

export default meet