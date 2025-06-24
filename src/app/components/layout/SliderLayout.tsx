'use client'
import React, { PropsWithChildren } from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function SliderLayout(props: PropsWithChildren) {
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

                {props.children}
            </Slider>

        
    )
}
