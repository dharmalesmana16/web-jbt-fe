'use client'
import React, { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import axios from '@/app/lib/utils/axios';
export default function Jumbotron() {
    const [dataCarousel,setDataCarousel] = useState<any>([])
    useEffect(() => {
    async function getData(){

             const data =await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/carousel`, { next: { revalidate: 60 } })
  // useEffect(() => {
                const response = await data.json();
                setDataCarousel(response["data"])
        }
      
    }, [])
    
  return (
    							


 <Carousel showArrows={true} autoPlay infiniteLoop showIndicators={true} showThumbs={false} showStatus={true}    >
    {
        dataCarousel.map((res:any,idx:number)=>(

                <div className='' key={idx}>
                    <img src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/storage/image/carousel/${res.file}`} className='h-[300px] md:h-[675px] rounded-3xl' />
                </div>
        ))
    }
                {/* <div className=''>
                    <img src="/image/sekilas-layanan.jpg" className='h-[300px] md:h-[675px] rounded-3xl' />
                </div> */}
               
            </Carousel>
  )
}
