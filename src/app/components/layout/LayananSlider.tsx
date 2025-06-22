'use client'
import React, { PropsWithChildren } from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function LayananSlider(props: PropsWithChildren) {
    const settingProjects = {
        className: "center",
        centerMode: false,
        infinite: true,
        dots: true,
        speed: 500,
            autoplay: true,
cssEase: "linear",
        slidesToShow: 1,
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
        <div>
            <Slider {...settingProjects}>

                {props.children}
            </Slider>

        </div>
    )
}
