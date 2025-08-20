import SliderLayout from '@/components/layout/SliderLayout'
import React from 'react'

export default function BarInformation() {
    return (
        <div>
            <div className="container relative bottom-1 md:bottom-25  left-0 right-0 ml-auto mr-auto  ">
                                                <SliderLayout shown={1} center={false} infinite={false} dots={true}>

                <div className="bg-main p-4 rounded-b-3xl md:rounded-4xl container mx-auto">
                    <div className="pb-5">

                        <p className="text-sm md:text-md text-gray-200 font-light tracking-wide text-center">Sekilas mengenai informasi dan fasilitas Tol Bali Mandara</p>
                    </div>
                    <div className="md:flex md:flex-row grid grid-cols-2 items-center justify-center gap-[20px] md:divide-x-4 border-white py-4">
                        
                        <div className="flex justify-between gap-[20px] px-4 border-white">
                            <div className="">
                                <img src="/image/Icon/motorway.png" className="h-12 md:h-16" alt="" srcSet="" />
                            </div>
                            <div>
                                <h1 className="text-white font-bold text-xl md:text-4xl pb-4">12,8 KM</h1>
                                <p className="text-white font-light text-md w-full tracking-wide">Panjang Jalan</p>
                            </div>
                        </div>
                       
                        <div className="flex justify-between gap-[20px] px-4  border-white">
                            <div className="">
                                <img src="/image/Icon/gate.png" className="h-12 md:h-16" alt="" srcSet="" />
                            </div>
                            <div>
                                <h1 className="text-white font-bold text-xl md:text-4xl pb-4">3</h1>
                                <p className="text-white font-light text-md w-full tracking-wide">Gerbang Tol</p>
                            </div>
                        </div>
                        <div className="flex justify-between gap-[20px] px-4 border-white">
                            <div className="">
                                <img src="/image/Icon/toll-road.png" className="h-12 md:h-16" alt="" srcSet="" />
                            </div>
                            <div>
                                <h1 className="text-white font-bold text-xl md:text-4xl pb-4">22</h1>
                                <p className="text-white font-light text-md w-full tracking-wide">Gardu Tol</p>
                            </div>
                        </div>
                        <div className="flex justify-between gap-[20px] px-4 border-white">
                            <div className="">
                                <img src="/image/Icon/poles.png" className="h-12 md:h-16" alt="" srcSet="" />
                            </div>
                            <div>
                                <h1 className="text-white font-bold text-xl md:text-4xl pb-4">13.991</h1>
                                <p className="text-white font-light text-md w-full tracking-wide">Tiang Pancang</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-main p-4 rounded-b-3xl md:rounded-4xl container mx-auto">
                    <div className="pb-5">

                        <p className="text-sm md:text-md text-gray-200 font-light tracking-wide text-center">Sekilas mengenai informasi dan fasilitas Tol Bali Mandara</p>
                    </div>
                    <div className="md:flex md:flex-row grid grid-cols-2 items-center justify-center gap-[20px] md:divide-x-4 border-white py-4">
                        
                        <div className="flex justify-between gap-[20px] px-4 border-white">
                            <div className="">
                                <img src="/image/Icon/anemometer.png" className="h-12 md:h-16" alt="" srcSet="" />
                            </div>
                            <div>
                                <h1 className="text-white font-bold text-xl md:text-4xl pb-4">6</h1>
                                <p className="text-white font-light text-md w-full tracking-wide">Anemometer</p>
                            </div>
                        </div>
                       
                        <div className="flex justify-between gap-[20px] px-4  border-white">
                            <div className="">
                                <img src="/image/Icon/street-lamp.png" className="h-12 md:h-16" alt="" srcSet="" />
                            </div>
                            <div>
                                <h1 className="text-white font-bold text-xl md:text-4xl pb-4">549</h1>
                                <p className="text-white font-light text-md w-full tracking-wide">Penerangan Jalan Umum</p>
                            </div>
                        </div>
                        <div className="flex justify-between gap-[20px] px-4 border-white">
                            <div className="">
                                <img src="/image/Icon/cctv-camera.png" className="h-12 md:h-16" alt="" srcSet="" />
                            </div>
                            <div>
                                <h1 className="text-white font-bold text-xl md:text-4xl pb-4">115</h1>
                                <p className="text-white font-light text-md w-full tracking-wide">Kamera CCTV</p>
                            </div>
                        </div>
                        <div className="flex justify-between gap-[20px] px-4 border-white">
                            <div className="">
                                <img src="/image/Icon/screen.png" className="h-12 md:h-16" alt="" srcSet="" />
                            </div>
                            <div>
                                <h1 className="text-white font-bold text-xl md:text-4xl pb-4">10</h1>
                                <p className="text-white font-light text-md w-full tracking-wide">DMS / VMS</p>
                            </div>
                        </div>
                    </div>
                </div>
                </SliderLayout>
            </div>
        </div>
    )
}
