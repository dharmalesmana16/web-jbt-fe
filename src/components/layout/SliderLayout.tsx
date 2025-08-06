'use client'
import React, { PropsWithChildren } from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
interface iProps {
    shown?:number | null;
    shownMobile?:number | null;
    dots?:boolean| null
    center?:boolean|null
    infinite?:boolean | null
    infiniteMobile?:boolean | null
    centerMobile?:boolean | null
}

type Props = PropsWithChildren<iProps>;
export default function SliderLayout({  center,centerMobile,dots,shown,shownMobile,infinite,infiniteMobile,children }: Props) {
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
                    center: centerMobile != null ? centerMobile : true,
                    infinite: infiniteMobile != null ? infiniteMobile : false,
                    dots: true,
                    arrows: false,
                    slidesToShow: shownMobile != null ? shownMobile :1,
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
