
import { headers } from 'next/headers'

import Link from "next/link";
import React from "react";
export type propsTarif = {
    id: number;
    nama: string;
    deskripsi: string;
    harga: number;
    gambar:string;
}
export default async function TarifCard(props: propsTarif) {
    const headersList = await headers();
    const pathname = await headersList.get("x-pathname");
    const url = new URL(pathname ? pathname : "", process.env.FE_URL);
    url.searchParams.set("modal", "true");
    url.searchParams.set("id", props.id.toString());
    return (
        <div>
            <Link href={url.toString()} scroll={false} >
                <div className="bg-gray-100 p-3 md:p-12  text-center  rounded-2xl hover:bg-radial-[at_50%_50%] hover:-translate-y-1 hover:scale-100 hover:transition hover:duration-500 from-white via-amber-100 to-second to-90% " >
                    <div className="content">
                        <h1 className="text-sm md:text-2xl font-normal">
                            {props.nama}
                            
                        </h1>
                        <h1 className="text-md md:text-5xl text-second font-bold py-3">
                            {`Rp${props.harga.toLocaleString('id-ID')}`}
                        </h1>

                    </div>
                    <div className="rounded-full bg-main  w-7 h-7 md:w-10 md:h-10 relative md:top-18 top-8 inline-block  text-white ">
                        <svg viewBox="-9.6 -9.6 67.20 67.20" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect width="48" height="48" fill="white" fillOpacity="0.01"></rect> <path d="M19 11H37V29" stroke="#ffffff" strokeWidth="3.8400000000000007" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M11.5441 36.4559L36.9999 11" stroke="#ffffff" strokeWidth="3.8400000000000007" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                    </div>
                </div>
            </Link>
        </div>
    )
}
