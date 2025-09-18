import React from 'react'
import apiBerita from '@/api/berita.json'
import { propsBerita } from '@/components/ui/CardBerita'
import Link from 'next/link'
export default async function detailBerita({
  params }: {
    params: Promise<{ slugBerita: string }>
  }) {
  const { slugBerita } = await params
  const response = apiBerita["data"].find((item) => item.slug === slugBerita);
  searchParams:
  return (
    <div className="max-w-5xl mx-auto  min-h-screen py-28 ">


      <div className=" px-2">
        <div>

          <img src={response?.gambar} className="w-full h-[250px] md:h-[500px] rounded-3xl " alt="" srcSet="" />
        </div>
        <div className="my-5">
          <ul className='text-lg dark:text-gray-900'>
            <li className="font-bold">
              DRAFT PRESS RELEASE
            </li >
            <li >
              PT Jasamarga Bali Tol
            </li>
            <li>

              Tanggal 07 Januari 2025
            </li>
            <li>

              No. 001/I/2025
            </li>
          </ul>
        </div>
        <div className="py-5">

          <h1 className='text-main text-2xl md:text-2xl tracking-wide font-bold '>        {response?.nama}</h1>
        </div>
        <div className="grid grid-cols-1 gap-8 ">
          <p className='whitespace-pre-line text-justify text-gray-900 tracking-wide leading-loose text-md md:text-xl'>{response?.deskripsi}</p>
        </div>
        {/* <div className='mt-12 '>
          <hr className="w-12 md:w-84 text-gray-900  border-t-2 md:border-t-2 " />

          <ul className='text-lg mt-2 dark:text-gray-900'>
            <li className="font-bold">
              Untuk informasi lebih lanjut, hubungi:
            </li >
            <li >

              I Ketut Adiputra Karang
            </li>
            <li>

              Direktur Utama PT Jasamarga Bali Tol
            </li>
            <li>
              Grha Bali Tol,
              Jalan Raya Pelabuhan Benoa No. 88,Pedungan 80222, Denpasar - Bali
            </li>
            <li>
              Telp. (0361) 725326, Faks. (0361) 725327
            </li>
          </ul>
        </div> */}
      </div>
      <section className=" py-20">
        <div className="py-8">
          <h1 className='text-main text-3xl leading-loose tracking-wide font-bold'>

            Berita Lainnya
          </h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

          {
            apiBerita["data"].filter(res => res.slug != response?.slug && res.id <= 4).map((res: propsBerita, idx: number) => (
              <div className='flex flex-col w-full  mx-auto' key={idx}>
                <div className="">
                  <img src={res.gambar} className="rounded-3xl h-[250px]" alt="" srcSet="" />
                </div>
                <div className="flex justify-between mt-5">
                  <div className="bg-second p-1 rounded-xl w-42 text-center">
                    <p className='text-gray-950 font-normal text-md tracking-normal'>{res.tanggal}</p>
                  </div>
                  {
                    res.link_published != null ? (<div className="">
                      <Link className='text-main font-normal tracking-light text-md' href="#">{res.link_published}</Link>
                    </div>) : ""
                  }

                </div>
                <h1 className='mt-5 text-xl tracking-wide font-semibold'>PT JBT Siapkan Rekayasa Lalu Lintas Antisipasi Kepadatan Kendaraan Selama Libur Nataru</h1>
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
