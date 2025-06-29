'use client'
import React, { useEffect, useState } from 'react'
import { FaClock, FaClockRotateLeft, FaLocationDot, FaNewspaper, FaPhone } from 'react-icons/fa6'
import { IoDocumentText } from 'react-icons/io5'

export default function CardOffice() {
    const [type, setType] = useState("desc");
    const [isOpen, setIsOpen] = useState(true);
    useEffect(()=>{
        const d = new Date();
        const hour = d.getHours();
        const day = d.getDay();
        if((hour > 8 && hour < 18) && (day >=1 && day <=5 )){
            setIsOpen(true)
        }else{
            setIsOpen(false)
        }
    },[])
    return (
        <div><div className="flex p-2 flex-col max-w-xl rounded-3xl  h-full bg-white border border-gray-200  shadow-xl dark:white dark:border-white">
            <div className="relative ">
                <img className="w-full rounded-t-3xl " src="/image/office.jpg" alt="" />
            </div>
            <div className="rounded-t-3xl -top-28   duration-1000  bg-white p-5 h-[225px] hover:-top-20 hover:duration-500 relative z-10">
                <h5 className=" text-xl text-left font-black tracking-tight text-main ">Grha Bali Tol</h5>
                <div className="py-2">

                    <div className="border-t-2 border-b-2 p-2 pl-0 flex flex-row">
                        <div className="px-2">

                            <button onClick={() => setType("desc")} className={"border-2   rounded-3xl text-left  p-2 inline-flex items-center  text-gray-900 cursor-pointer  " + (type == "desc" ? "border-main" : "font-normal border-main-100")}>
                                <FaNewspaper className="inline-flex mr-2 w-5 h-5 text-main " />
                                Deskripsi
                            </button>
                        </div>
                        <div className="px-2">


                            <button onClick={() => setType("opr")} className={"border-2   rounded-3xl text-left  p-2 inline-flex items-center  text-gray-900 cursor-pointer  " + (type == "opr" ? "border-main" : "font-normal border-main-100")}>
                                <FaClockRotateLeft className="inline-flex mr-2 w-5 h-5 text-main " />
                                Operasional
                            </button>
                        </div>
                    </div>
                </div>
                {
                    type == "desc" && (
                        <div className="py-2">

                            <div className="pb-3 ">

                                <p className=" font-normal text-lg  dark:text-gray-600 leading-loose  font-medium text-gray-500">Grha Bali Tol merupakan nama kantor dari perusahaan PT. Jasamarga Bali Tol yang diresmikan pada tanggal 28 Agustus 2024</p>
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
                    type == "opr" && (
                        <div className="py-2">


                            <div className="pb-3 ">
                                <div className=" flex flex-row items-center gap-2">
                                    <div className={"p-2  rounded-xl bg-main-100"}>
                                        <FaLocationDot className=" text-main text-lg inline-flex " />
                                    </div>

                                    <p className=" font-normal  dark:text-gray-600 leading-loose  font-medium text-gray-600">
                                        Jl Raya Pelabuhan Benoa No.88 Kota Denpasar
                                    </p>
                                </div>
                            </div>
                            <div className="pb-3">

                                <div className=" flex flex-row items-center gap-2">
                                    <div className={"p-2  rounded-xl bg-main-100"}>
                                        <FaClock className=" text-main text-lg inline-flex " />
                                    </div>
                                    <div>

                                        <p className=" font-normal  dark:text-gray-600 leading-loose  text-gray-600">
                                            Senin - Jumat, 08.00 - 17.00
                                        </p>
                                    </div>
                                    <div>
                                        {
                                            isOpen ==true ? (

                                        <div className="bg-lime-400 p-1 rounded-3xl w-16">
                                            <p className="text-white tracking-wide text-sm font-normal text-center">Buka</p>
                                        </div>
                                            ) :
                                            (
                                                 <div className="bg-red-400 p-1 rounded-3xl w-16">
                                            <p className="text-white tracking-wide text-sm font-normal text-center">Tutup</p>
                                        </div> 
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="pb-3 ">

                                <div className=" flex flex-row items-center gap-2">
                                    <div className={"p-2  rounded-xl bg-main-100"}>
                                        <FaPhone className=" text-main text-lg inline-flex " />
                                    </div>

                                    <p className=" font-normal  dark:text-gray-600 leading-loose  font-medium text-gray-600">
                                        (0361) 725 326
                                    </p>
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
