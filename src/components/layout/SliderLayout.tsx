'use client'
import React, { PropsWithChildren } from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';

interface iProps {
    shown?: number | null;
    shownMobile?: number | null;
    dots?: boolean | null
    center?: boolean | null
    infinite?: boolean | null
    infiniteMobile?: boolean | null
    centerMobile?: boolean | null
}

type Props = PropsWithChildren<iProps>;
export default function SliderLayout({ center, centerMobile, dots, shown, shownMobile, infinite, infiniteMobile, children }: Props) {
    function SampleNextArrow(props: any) {
        const { className, onClick } = props;
        return (
            <div onClick={onClick} className={`arrow ${className}`} >
                <RiArrowRightSLine className="arrows" style={{ color: "white" }} />
            </div>
        );
    }
    function SamplePrevArrow(props: any) {
        const { className, onClick } = props;
        return (
            <div onClick={onClick} className={`arrow ${className}`} >
                <RiArrowLeftSLine className="arrows" style={{ color: "white" }} />
            </div>
        );
    }
    const settingProjects = {
        className: "slides",
        centerMode: center != null ? center : true,
        infinite: infinite != null ? infinite : false,
        dots: dots ? dots : false,
        speed: 500,
        slidesToShow: shown != null ? shown : 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow to="next" />,
        prevArrow: <SamplePrevArrow to="prev" />,
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
                    slidesToShow: shownMobile != null ? shownMobile : 1,
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
