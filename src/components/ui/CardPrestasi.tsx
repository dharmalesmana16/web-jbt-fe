import React from 'react'
import SliderLayout from '../layout/SliderLayout'
import apiPrestasi from '@/api/prestasi.json'
import Link from 'next/link'
import { headers } from 'next/headers';
export type propsPrestasi = {
    id: number;
    nama: string;
    deskripsi: string;
    tahun:string;
    file: string;
    ext?: string;
}

export default async function CardPrestasi() {
    const headerList = await headers();
    const pathname = headerList.get('x-pathname');
    const url = new URL(pathname ? pathname : "",process.env.FE_URL)
    return (
        <SliderLayout shown={3} center={true} infinite={true} dots={true}>
                {
                    apiPrestasi["data"].map((res: propsPrestasi, idx: number) => (
                        <div key={idx} className="hover:translate-tranform hover:scale-102 hover:duration-300 p-2">
                            <Link href={{ pathname: url.toString(), query: { prestasi:true,id: res.id } }} scroll={false}>
                            <img src={res.file} alt="" srcSet="" className="h-36 md:h-52" />
                            </Link>
                        </div>
                    ))
                }
            </SliderLayout>

    )
}
