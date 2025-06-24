'use server'
import React from 'react'
import apiLaporan from '../api/laporan.json'
import Link from 'next/link';
import Image from 'next/image';
import { headers } from 'next/headers';
import { IoDocumentText } from 'react-icons/io5';

export type propsLaporan = {
    id: number;
    nama: string;
    deskripsi: string;
    tahun: string;
    size: number;
    ext: string;
    cover: string;
}


export default async function page({ searchParams }: any) {

    const headersList = await headers()
    const pathname = await headersList.get("x-pathname")
    console.log(pathname)
    const parameter = await searchParams
    const query =  parameter.id ? parameter.id : "1";
    const url = new URL(pathname ? pathname : "", process.env.FE_URL);
    console.log(query)
    const response = await apiLaporan["data"].find((item: propsLaporan) => item.id == query);
    // url.searchParams.set("id", response?.id);


    return (
        <div>
            <section className='bg-[#F8FAFF] rounded-br-[3rem]  pt-28 top-full shadow-xl relative z-10 '>
                <div className="mx-auto container">
                    <Image
                                                src={"/image/jumbotron-report.png"}
                                                alt="kantor"
                                                width={0}
                                                height={0}
                                                sizes="100vw"
                                                loading="lazy"
                                                className="w-full h-[25vh] md:h-full rounded-3xl"
                                                // style={{ width: "100%", height: "100%", borderRadius: "20px" }}
                                            />
                    <div className="px-4  py-12 grid md:grid-cols-6">
                        <div className="pb-2 max-w-xl  col-span-4">
                            <h1 className='text-main tracking-wide font-semibold text-xl md:text-4xl leading-8 md:leading-12'>Laporan Tahunan: Transparansi & Kinerja dalam Angka</h1>
                        </div>
                        <div className=" w-full col-span-2">
                            <p className='leading-normal text-gray-400 text-md'>Telusuri data, strategi, dan perkembangan terbaru dalam pengelolaan Tol Bali Mandara. Kami berkomitmen pada transparansi dan peningkatan layanan demi kenyamanan Anda </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='container mx-auto min-h-screen py-20'>
                <div className="">

                    <h1 className="font-medium text-3xl ">Laporan Tahunan</h1>
                    <hr className='text-second py-4 mt-4 font-bold h-12' />
                </div>
                <div className="flex flex-col md:flex-row gap-[20px]">
                    <div className="overflow-y-scroll scrollbar max-w-lg w-full max-h-[325px] md:max-h-[600px]">
                        {
                            apiLaporan["data"].map((res: any, idx: number) => (
                                <div key={idx} className="py-2">
                                    <Link href={{ pathname: url.toString(), query: { id: res.id } }} scroll={false}>
                                        <div className={"border-2 border-transparent hover:border-2 hover:border-second  p-6 rounded-3xl " + (response?.id == res.id ? "bg-second shadow-lg" : "bg-[#F4F4F4]")} >


                                            <li className="flex items-center ">
                                                <div className={"p-2  rounded-xl inline-block " + (response?.id == res.id ? "bg-[#FFE167]" : "bg-[#B8C5EF]")}>
                                                    <IoDocumentText className="inline-block w-7 h-7 text-main" />
                                                </div>
                                                <h1 className="text-main text-2xl font-semibold px-2">

                                                    {res.tahun}
                                                </h1>

                                            </li>

                                        </div>
                                    </Link>
                                </div>
                            ))
                        }

                    </div>
                    <div className="max-w-xl w-full">
                        <img src={response?.cover} className="w-full h-full" alt="" srcSet="" />
                    </div>
                    <div className="max-w-lg w-full px-5">
                        <div className="pb-8">
                            <h1 className='tracking-wide text-2xl text-gray-900 font-medium pb-2'>Nama File</h1>
                            <p className='tracking-wide text-gray-500'>{response?.nama}</p>
                        </div>
                        <div className="pb-8">
                            <h1 className='tracking-wide text-2xl text-gray-900 font-medium pb-2'>Tahun Laporan</h1>
                            <p className='tracking-wide text-gray-500'>{response?.tahun}</p>
                        </div>
                        <div className="pb-8">
                            <h1 className='tracking-wide text-2xl text-gray-900 font-medium pb-2'>Jenis File</h1>
                            <p className='tracking-wide text-gray-500'>{response?.ext.toUpperCase()}</p>
                        </div>
                        <div className="pb-8">
                            <h1 className='tracking-wide text-2xl text-gray-900 font-medium pb-2'>Ukuran File</h1>
                            <p className='tracking-wide text-gray-500'>{response?.size}</p>
                        </div>
                        <div className="pb-8">
                            <h1 className='tracking-wide text-2xl text-gray-900 font-medium pb-2'>Deskripsi</h1>
                            <p className='tracking-wide text-gray-500'>{response?.deskripsi}</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
