'use client'
import React, { PropsWithChildren } from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
interface iProps {
    shown?:number | null;
    dots?:boolean| null
    center?:boolean|null
    infinite?:boolean | null
}

type Props = PropsWithChildren<iProps>;
export default function SliderLayout({  center,dots,shown,infinite,children }: Props) {
    const settingProjects = {
        className: "center",
        centerMode: center != null? center : true,
        infinite: infinite != null ? infinite : false,
        dots: dots ? dots : false,
        speed: 500,
        slidesToShow: shown != null ? shown : 3,
        slidesToScroll: 1,
        
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
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
        
            <Slider {...settingProjects}>

                {children}
            </Slider>

        
    )
}
