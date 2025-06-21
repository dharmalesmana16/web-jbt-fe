import Link from 'next/link'
import React from 'react'
import apiLaporan from '../../api/laporan.json'
import { headers } from 'next/headers'
import { propsLaporan } from '@/app/laporantahunan/page'
export default async function ReportLayout(props:propsLaporan) {
    const headersList = await headers()
  const pathname = headersList.get('x-pathname')

    const url = new URL(pathname ? pathname : "", "http://localhost:3000");
    url.searchParams.set("modal", "true");
    url.searchParams.set("id", props.id.toString());
    
  return (

<div className="flex flex-col md:flex-row gap-[20px]">
                    <div className="overflow-y-scroll scrollbar max-w-lg w-full md:max-h-[600px]">
                        {
                            apiLaporan["data"].reverse().map((res: any, idx: number) => (
                                <div key={idx} className="py-2">
                                    <Link href={url.toString()} scroll={false} >
                                        <div className={" p-6 rounded-3xl " + (response?.id == res.id ? "bg-second shadow-lg" : "bg-gray-200")} >
                                            <h1 className='text-main text-3xl font-semibold tracking-wide'>{res.tahun}</h1>
                                        </div>
                                    </Link>
                                </div>
                            ))
                        }

                    </div>
                    <div className="max-w-xl w-full">
                        <img src="/image/report/2024.png" className="w-full h-full" alt="" srcSet="" />
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

  
  )
}
