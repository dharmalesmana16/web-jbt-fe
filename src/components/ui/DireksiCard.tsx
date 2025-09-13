'use client'
import Link from "next/link";
import { usePathname } from 'next/navigation';
import React from "react";
export type propsDireksi = {
    id: number;
    nama: string;
    jabatan: string;
    tempat_lahir?: string;
    tgl_lahir?: string;
    tipe_direksi: string;
    deskripsi?: string;
    file: string;
}
export default  function DireksiCard(props: propsDireksi) {

    const path = usePathname()
    const url = new URL(path ? path : "", process.env.NEXT_PUBLIC_FE_URL);

    url.searchParams.set("modal", "true");
    url.searchParams.set("id", props.id.toString());
    return (
             <div className=" max-w-[275px] ">
                <Link href={url.toString()} scroll={false} className='block group'>


                  <div className="mx-auto text-center pt-6 pl-6 pr-6 pb-2 border-1 h-[325px] md:h-[400px] lg:h-[475px] border-gray-200 shadow-lg hover:border-main  hover:scale-105 hover:transition hover:duration-200  bg-white  rounded-3xl overflow-hidden relative">
                    <img src={props.file} className=' mx-auto h-42 md:h-42 lg:h-64' alt="" srcSet="" />
                    <div className="hover:text-main text-left py-4 md:py-8">
                      <h1 className='text-gray-900  text-md md:text-md lg:text-xl font-semibold tracking-normal '>{props.nama}</h1>
                      <p className='text-sm text-gray-500'>{props.tipe_direksi == "d_komisaris" ? "" : props.jabatan}</p>
                    </div>
                  </div>
                </Link>
              </div>
    )
}
