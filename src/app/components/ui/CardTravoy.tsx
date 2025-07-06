'use client'
import React, { useState } from 'react'
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { FaClockRotateLeft, FaNewspaper } from 'react-icons/fa6'
import { BiLogoPlayStore } from "react-icons/bi";
import { FaApple } from "react-icons/fa";
export default function CardTravoy() {
    const [type, setType] = useState("desc");

    return (
        <div>
            <div className="flex flex-col md:flex-row p-5 rounded-3xl  h-full bg-white border border-gray-200  shadow-xl dark:white dark:border-white">
                <div className="md:basis-64">
                    <img className="  rounded-t-3xl mx-auto " src="/image/logo-travoy.png" alt="" />
                </div>
                <div className="md:basis-128 ">

                    <h5 className=" text-xl text-left font-bold md:font-black tracking-tight text-main ">Travoy</h5>
                    <div className="py-2">

                        <div className="border-t-2 border-b-2 border-[#F4f4f4] p-2 pl-0 flex flex-row">
                            <div className="px-2">

                                <button onClick={() => setType("desc")} className={"border-2   rounded-3xl text-left  p-2 inline-flex items-center  text-gray-900 cursor-pointer  " + (type == "desc" ? "border-main" : "font-normal border-main-100")}>
                                    <FaNewspaper className="inline-flex mr-2 w-5 h-5 text-main " />
                                    Deskripsi
                                </button>

                            </div>
                            <div className="px-2">

                                <button onClick={() => setType("down")} className={"border-2 hover:border-second hover:text-main  rounded-3xl text-left  p-2 inline-flex items-center  text-gray-900 cursor-pointer  " + (type == "opr" ? "border-main" : "font-normal border-main-100")}>
                                    <FaArrowAltCircleRight className="inline-flex mr-2 w-5 h-5 text-main " />
                                    Download
                                </button>
                                {/* <a href='https://play.google.com/store/apps/details?id=com.jm.travoy' className={"border-2 hover:border-second hover:text-main  rounded-3xl text-left  p-2 inline-flex items-center  text-gray-900 cursor-pointer  " + (type == "opr" ? "border-main" : "font-normal border-main-100")}>
                                    <FaArrowAltCircleRight className="inline-flex mr-2 w-5 h-5 text-main " />
                                    Download
                                </a> */}
                            </div>
                        </div>
                    </div>
                    {
                        type == "desc" && (
                            <div className="py-2 w-full ">

                                <div className="pb-3 ">

                                    <p className=" font-normal text-lg  dark:text-gray-600 leading-loose  font-medium text-gray-500">Travoy adalah aplikasi digital dari Jasa Marga yang dirancang untuk memudahkan pengguna jalan tol di Indonesia. Aplikasi ini berperan sebagai asisten digital yang memberikan informasi dan fitur-fitur terkait perjalanan di jalan tol </p>
                                </div>

                                {/* <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
									Read more
									<svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
										<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
									</svg>
								</a> */}
                            </div>
                        )
                    }
                    {
                        type == "down" && (
                            <div className="py-2 w-full ">
                                <div className='py-2'>
                                    <div className=" group hover:border-second  bg-main border-2 rounded-3xl w-64 md:w-1/2">
                                        <a
                                            href="https://play.google.com/store/apps/details?id=com.jm.travoy"
                                            target="_blank"
                                            className=" font-bold group-hover:text-white text-white  p-4  text-lg tracking-light inline-flex items-center px-2 ">
                                            <BiLogoPlayStore className="text-3xl  group-hover:text-white text-white duration-200 mr-2" />
                                            Get it on Play Store
                                        </a>

                                        {/* <p className=" font-normal text-lg  dark:text-gray-600 leading-loose  font-medium text-gray-500">Travoy adalah aplikasi digital dari Jasa Marga yang dirancang untuk memudahkan pengguna jalan tol di Indonesia. Aplikasi ini berperan sebagai asisten digital yang memberikan informasi dan fitur-fitur terkait perjalanan di jalan tol </p> */}
                                    </div>
                                </div>
                                <div className='py-3'>
                                    <div className=" group hover:border-second bg-main border-2 rounded-3xl w-64 md:w-1/2">
                                        <a
                                            href="https://apps.apple.com/id/app/travoy/id1494817947"
                                            target="_blank"
                                            className=" font-bold group-hover:text-white text-white  p-4  text-lg tracking-light inline-flex items-center px-2 ">
                                            <FaApple className="text-3xl  group-hover:text-white text-white duration-200 mr-2" />
                                            Get it on App Store
                                        </a>

                                        {/* <p className=" font-normal text-lg  dark:text-gray-600 leading-loose  font-medium text-gray-500">Travoy adalah aplikasi digital dari Jasa Marga yang dirancang untuk memudahkan pengguna jalan tol di Indonesia. Aplikasi ini berperan sebagai asisten digital yang memberikan informasi dan fitur-fitur terkait perjalanan di jalan tol </p> */}
                                    </div>
                                </div>
                                {/* <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
									Read more
									<svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
										<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
									</svg>
								</a> */}
                            </div>
                        )
                    }



                </div>
            </div>
        </div>
    )
}
