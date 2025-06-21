'use client'
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
export default function Jumbotron() {
    return (



        <Carousel showArrows={true} autoPlay infiniteLoop showIndicators={true} showThumbs={false} showStatus={false}    >
            <div className="relative">


                    <img src="/image/berita/cover-berita-satu.png" className='w-full h-full' alt="" srcSet="" />
              
                <div className="hidden md:block max-w-3xl  absolute top-40  ml-auto mr-auto left-80 -right-80  text-left  mt-10">
                      <div className="bg-second p-1 rounded-xl w-32 text-center mb-5">
                    <p className='text-main font-normal text-md tracking-wide'>Berita Terbaru</p>
                    </div>
                    <div className="max-w-3xl">
                        <h1 className="text-main text-3xl font-bold">Tingkatkan Kepatuhan di Jalan Tol, PT Jasamarga Bali Temu Pelanggan</h1>
                        <p className="text-gray-500 leading-loose text-lg">Dengan standar keselamatan tinggi dan infrastruktur berkualitas, kami berkomitmen memberikan pengalaman berkendara terbaik untuk Anda.</p>
                    </div>
                </div>
            </div>
            <div className="relative">


                    <img src="/image/berita/cover-berita-dua.png" className='w-full h-full' alt="" srcSet="" />
              
                <div className="hidden md:block max-w-3xl  absolute top-40  ml-auto mr-auto left-80 -right-80  text-left  mt-10">
                      <div className="bg-second p-1 rounded-xl w-32 text-center mb-5">
                    <p className='text-main font-normal text-md tracking-wide'>Berita Terbaru</p>
                    </div>
                    <div className="max-w-3xl">
                        <h1 className="text-main text-3xl font-bold">Tingkatkan Kepatuhan di Jalan Tol, PT Jasamarga Bali Temu Pelanggan</h1>
                        <p className="text-gray-500 leading-loose text-lg">Dengan standar keselamatan tinggi dan infrastruktur berkualitas, kami berkomitmen memberikan pengalaman berkendara terbaik untuk Anda.</p>
                    </div>
                </div>
            </div>
            {/* <div className="">

            <img src="/image/berita/cover-berita-dua.png" className='w-full h-full' alt="" srcSet="" />
          </div> */}

        </Carousel >
    )
}
