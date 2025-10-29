"use client"
import React, { useEffect, useState } from 'react'
import SliderLayout from '../layout/SliderLayout'
import Link from 'next/link'
import axios from 'axios';
export type propsPrestasi = {
    id: number;
    nama: string;
    deskripsi: string;
    tahun:string;
    file: string;
    ext?: string;
}

export default function CardPrestasi() {
    const [data,setData] = useState<any>([])
    // const headerList = await headers();
    // const pathname = headerList.get('x-pathname');
    // const url = new URL(pathname ? pathname : "",process.env.FE_URL)

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/prestasi`).then(function(res){
            setData(res.data.data);
        })
    }, [])
    

    return (
        <SliderLayout shown={3}  infinite={true} dots={true}>
                {
                    data.map((res: propsPrestasi, idx: number) => (
                        <div key={idx} className="hover:translate-tranform hover:scale-102 hover:duration-300 p-2 ">
                            <Link href={{ pathname: `${process.env.NEXT_PUBLIC_DEVELOPMENT == 'local' ? "http://localhost:3000" : process.env.NEXT_PUBLIC_FE_URL}/tentangkami`, query: { prestasi:true,id: res.id } }}   scroll={false}>
                                <img src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/storage/image/prestasi/${res.file}`} alt="" srcSet="" className="w-52 h-72 md:h-72" />
                            </Link>
                        </div>
                    ))
                }
            </SliderLayout>

    )
}
