import React from 'react'
import { redirect } from "next/navigation";
import Link from 'next/link';

import apiPrestasi from './../../api/prestasi.json'
import { propsPrestasi } from './CardPrestasi';
interface prestasiModal {
    id?: string;
}

export default async function PrestasiModal({ id }: prestasiModal) {
    if (!id || isNaN(parseInt(id))) {
        redirect("/tentangkami");
    }
    // console.log(apiPrestasi["data"].find((item: any) => item.id === parseInt(id)))
    // Filter data berdasarkan ID
    const response = apiPrestasi["data"].find((item: propsPrestasi) => item.id === parseInt(id));
    return (
        <div className="fixed inset-0 flex items-center justify-center z-20">
            <Link
                className="fixed inset-0 bg-black opacity-75 cursor-default"
                href="/tentangkami"
                scroll={false}
            />
            <div className="relative w-full max-w-5xl  p-20 bg-white rounded-3xl shadow-md">
                <div className="flex justify-between items-start">
                    <Link
                        className="absolute top-2.5 right-2.5 h-8 w-8 bg-second rounded-3xl text-2xl font-bold text-white rounded justify-center items-center flex pb-0.5"
                        href="/tentangkami"
                        scroll={false}
                    >
                        &times;
                        <span className="sr-only">Close Modal</span>
                    </Link>
                </div>
                <div className="bg-white     overflow-auto z-20">
                    <div className="grid  md:grid-cols-2 ">
                        <div className="mx-auto container">
                            <img src={response?.file} className=' md:h-72  ' alt="" srcSet="" />
                        </div>
                        <div className="text-left mx-auto">
                            <div className="pb-5">
                                <h1 className='tracking-wide text-xl text-gray-900 font-medium pb-1'>Nama Penghargaan</h1>
                                <p className='tracking-wide text-gray-500'>{response?.nama}</p>
                            </div>
                            <div className="pb-5">
                                <h1 className='tracking-wide text-xl text-gray-900 font-medium pb-1'>Tanggal Penghargaan</h1>
                                <p className='tracking-wide text-gray-500'>{response?.tahun}</p>
                            </div>
                            <div className="pb-5 hidden md:block    ">
                                <h1 className='tracking-wide text-xl text-gray-900 font-medium pb-1'>Jenis File</h1>
                                <p className='tracking-wide text-gray-500'>{response?.ext.toUpperCase()}</p>
                            </div>
                            <div className="pb-5 hidden md:block    ">
                                <h1 className='tracking-wide text-xl text-gray-900 font-medium pb-1'>Ukuran File</h1>
                                <p className='tracking-wide text-gray-500'>{response?.size} Mb</p>
                            </div>
                            <div className="pb-5">
                                <h1 className='tracking-wide text-xl text-gray-900 font-medium pb-1'>Deskripsi</h1>
                                <p className='tracking-wide text-gray-500'>{response?.deskripsi}</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="pb-3 px-3">
                    {/* <button className="h-11 bg-secondary text-secondary-foreground hover:bg-secondary/80 justify-center flex text-center w-full border rounded py-2 text-white hover:bg-white transition-colors duration-300 hover:text-zinc-900 border-zinc-300 hover:border-zinc-900">
						Buy Now
					</button> */}
                </div>
            </div>
        </div>
    )
}
