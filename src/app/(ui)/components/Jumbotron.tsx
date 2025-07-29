'use client'
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
export default function Jumbotron() {
  return (
    							


 <Carousel showArrows={true} autoPlay infiniteLoop showIndicators={true} showThumbs={false} showStatus={true}    >
                <div className=''>
                    <img src="/image/travoy.png" className='h-[300px] md:h-[675px] rounded-3xl' />
                </div>
                <div className=''>
                    <img src="/image/sekilas-layanan.jpg" className='h-[300px] md:h-[675px] rounded-3xl' />
                </div>
               
            </Carousel>
  )
}
