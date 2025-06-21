'use client'
import React from 'react'
import Slider from 'react-slick';
import apiTataNilai from '../../api/tatanilai.json'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export type propsTataNilai = {
    id: number;
    nama: string;
    deskripsi: string;

}

export default function CardTataNilai() {
    const settingProjects = {
        className: "center",
        centerMode: true,
        infinite: true,
        dots: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,

        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },

            {
                breakpoint: 480,
                settings: {
                    className: "center",
                    centerMode: true,
                    infinite: true,
                    dots: true,
                    arrows: false,
                    slidesToShow: 1,
                    swipeToSlide: true,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <Slider {...settingProjects}>
                {
                    apiTataNilai["data"].map((res: propsTataNilai, key: number) => (
                        <div key={key} className="p-4">

                        <div className="rounded-3xl p-5 h-[125px] max-w-sm bg-white text-center shadow-lg pointer-none hover:translate-y-1 hover:scale-105 hover:transition hover:duration-500 hover:text-main">
                                <h1 className='text-main font-semibold text-2xl'>{res?.nama.toUpperCase()}</h1>
                                <p className='inline-block text-sm text-gray-500 tracking-wide'>{res?.deskripsi}</p>
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </>
    )
}
