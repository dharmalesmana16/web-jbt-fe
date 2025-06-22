import React from 'react'
import apiBerita from '../../api/berita.json'
import  { propsBerita } from '@/app/components/ui/CardBerita'
import Link from 'next/link'
export default async function detailBerita({
  params }: {
    params:  Promise<{slugBerita:string}>
  }) {
    const { slugBerita } = await params
  const response = apiBerita["data"].find((item) => item.slug === slugBerita);
searchParams: 
  return (
    <div className="container mx-auto w-full min-h-screen py-28 ">
      <div className=" px-2">
        <div>
         
          <img src={response?.gambar} className="w-full h-[250px] md:h-[600px] rounded-3xl " alt="" srcSet="" />
        </div>
        <div className="py-12">
          <div className="bg-second p-1 rounded-xl w-42 text-center mb-5">
            <p className='text-gray-950 font-normal text-md tracking-normal'>15 Desember 2025</p>
          </div>
          <h1 className='text-main text-2xl md:text-4xl tracking-wide font-medium '>        {response?.nama}</h1>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <p className='text-justify text-gray-900 tracking-wide leading-loose text-md md:text-xl'>{response?.deskripsi}</p>
          <p className='text-justify text-gray-900 tracking-wide leading-loose text-md md:text-xl'>{response?.deskripsi}</p>
        </div>
      </div>
      <section className=" py-20">
        <div className="py-8">
          <h1 className='text-main text-3xl leading-loose tracking-wide font-bold'>

          Berita Lainnya
          </h1>
        </div>
        <div className="grid grid-cols-3">
  
          {
            apiBerita["data"].filter(res => res.slug != response?.slug && res.id <=4 ).map((res: propsBerita, idx: number) => (
           <div className='flex flex-col w-96 block mx-auto' key={idx}>
                      <div className="">
                        <img src={res.gambar} className="rounded-3xl h-[250px]" alt="" srcSet="" />
                      </div>
                      <div className="flex justify-between mt-5">
                        <div className="bg-second p-1 rounded-xl w-42 text-center">
                          <p className='text-gray-950 font-normal text-md tracking-normal'>{res.tanggal}</p>
                        </div>
                        {
                          res.link_published != null ? ( <div className="">
                          <Link className='text-main font-normal tracking-light text-md' href="#">{res.link_published}</Link>
                        </div>):""
                        }
                       
                      </div>
                      <h1 className='mt-5 font-normal text-xl tracking-wide font-semibold'>PT JBT Siapkan Rekayasa Lalu Lintas Antisipasi Kepadatan Kendaraan Selama Libur Nataru</h1>
                      <div className="py-5">
                        <Link href={`/berita/${res.slug}`}
                          className="inline-flex items-center  text-sm font-medium  text-main  rounded-lg hover:text-blue-900   ">
          
                          Selengkapnya
                          <svg
                            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10">
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
            ))
          }
               </div>
      </section>
    </div>
  )
}
