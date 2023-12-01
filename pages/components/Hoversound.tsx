import React, { useEffect } from 'react'


function Hoversound() {

    useEffect(()=>{
        const hoverText= document.querySelector('.hoverText');

        hoverText?.addEventListener("mouseover", () => {
            const audio=new Audio('/audio.wav');
            audio.play(); 

        });

    })
  return (
    <div>

        <div className='hoverText'>Play a sound</div>

    </div>
  )
}

export default Hoversound