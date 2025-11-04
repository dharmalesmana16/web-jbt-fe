'use client'
import React, { useEffect, useState } from 'react'
import { redirect } from "next/navigation";
import Link from 'next/link';

import axios from 'axios';

export default function PrestasiModal({ id }: any) {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState<any>([])
    if (!id || isNaN(parseInt(id))) {
        redirect("/tentangkami");
    }
    useEffect(() => {
            //   const apiKey = process.env.NEXT_PUBLIC_BACKEND_URL;
        // console.log(apiKey)
        axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/prestasi/${id}`)
            .then(function (resp) {
                setLoading(true)
                setData(resp.data.data);
                setLoading(false);
                // console.log(resp.data.data)
            })
    }, [])


    // const response = apiPrestasi["data"].find((item: propsPrestasi) => item.id === parseInt(id));
    return (
        <div className="fixed inset-0 flex items-center justify-center z-20">
            <Link
                className="fixed inset-0 bg-black opacity-75 cursor-default"
                href="/tentangkami"
                scroll={false}
            />
            <div className="relative w-full max-w-5xl  p-20 bg-gradient-to-r from-main-500 via-main-600 to-main-700 rounded-3xl shadow-md">
                <div className="flex justify-between items-center">
                    <Link
                        className="absolute top-2.5 right-2.5 h-6 w-6 bg-red-500 text-white rounded-lg justify-center items-center flex pb-0.5"
                        href="/tentangkami"
                        scroll={false}
                    >
                        &times;
                        <span className="sr-only">Close Modal</span>
                    </Link>
                </div>
                <div className="  overflow-none z-20">
                    {
                        loading == true ?
                            (

                                <div role="status" className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center">
                                    <div className="flex items-center justify-center w-full h-[275px] bg-gray-300 rounded-sm sm:w-96 dark:bg-gray-700">
                                        <svg className="w-full h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                                        </svg>
                                    </div>
                                    <div className="w-full">
                                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
                                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
                                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
                                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                                    </div>
                                    <span className="sr-only">Loading...</span>
                                </div>


                            ) :
                            (
                                <div className="flex flex-col gap-4  p-2  md:flex-row md:w-full  ">
                                    <div className="">
                                        <img
                                            className="  block mx-auto rounded-t-lg w-18 h-48 md:h-auto md:w-[400px] md:rounded-none md:rounded-s-lg"
                                            src={
                                                `${process.env.NEXT_PUBLIC_BACKEND_URL}/storage/image/prestasi/${data.file}`
                                            }
                                            alt=""
                                        />
                                    </div>
                                    <div className="flex flex-col leading-normal">
                                        <div className="">
                                            <h1 className="mb-2 text-md md:text-xl font-semibold tracking-wide text-white ">
                                                {data?.nama}
                                            </h1>
                                            <div className="bg-second p-1 rounded-xl w-42 text-center">
                                                <p className='text-gray-950 font-normal text-md tracking-normal'>Tahun : {new Date(
                                                    data?.tanggal
                                                ).toLocaleDateString("id-ID", {
                                                     "numeric",
                                                })}</p>
                                            </div>
                                            <div className="py-8">
                                                <p className='text-white font-normal text-md tracking-wide'>{data.deskripsi}</p>
                                            </div>

                                        </div>

                                    </div>

                                </div>
                            )
                    }

                </div>
            </div>
        </div>
    )
}
