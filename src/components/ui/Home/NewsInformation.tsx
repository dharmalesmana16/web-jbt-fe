'use client'
import SliderLayout from '@/components/layout/SliderLayout'
import React, { useEffect, useState } from 'react'
import CardBerita, { propsBerita } from '../CardBerita'
import Link from 'next/link'

export default function NewsInformation() {
    const [dataBerita,setDataBerita]=useState<any>([])
    useEffect(()=>{
        async function getData(){

             const data =await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/berita`, { next: { revalidate: 60 } })

                const response = await data.json();
                setDataBerita(response["data"])
        }
        getData();
    },[])
    return (
        <div>
                <div className="px-4 mx-auto max-w-screen-lg text-center py-12 lg:py-24">
                                <h1 className="mb-4 text-2xl font-bold md:font-black tracking-tight leading-none text-white md:text-4xl">
                                    Berita Terkini
                                </h1>
                                <p className="mb-4 text-md font-normal text-gray-300 md:text-lg sm:px-16 lg:px-48">
                                    Kami menghadirkan layanan terpadu yang mendukung
                                    perjalanan lebih cepat, nyaman, dan aman di Tol Bali
                                    Mandara.
                                </p>
                                <div className="">
                                    <Link
                                        href="/berita"
                                        className="inline-flex justify-center bg-second hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base text-center text-main font-semibold rounded-lg  hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
                                    >
                                        Telusuri Berita Lainnya!
                                    </Link>
                                </div>
                            </div>
            <div className="p-4 md:p-12 ">
            <SliderLayout shown={4} infinite={true}>
                {dataBerita.map(
                    (res: propsBerita, idx: number) => (
                        <CardBerita key={idx} {...res} />
                    ),
                )}
            </SliderLayout>
        </div>
        </div>
    )
}
