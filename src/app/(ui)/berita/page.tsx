import React from 'react'
import Link from 'next/link'
import Jumbotron from '@/components/ui/Berita/JumbotronBerita';
import apiBerita from '@/api/berita.json'

export default function page() {
  return (
    <div>
      <section className='bg-[#F8FAFF] rounded-br-[3rem]  pt-28 top-full shadow-xl relative z-10 '>
        <div className="mx-auto container">
          <div className="px-4  py-12 grid md:grid-cols-6">
            <div className="pb-2 max-w-xl  col-span-4">
              <h1 className='text-main tracking-wide font-semibold text-xl md:text-4xl leading-8 md:leading-12'>Kabar & Informasi Terkini Jalan Tol Bali Mandara</h1>
            </div>
            <div className=" w-full col-span-2">
              <p className='leading-normal text-gray-500 text-md '>Baca berita terbaru tentang proyek, layanan, serta inovasi yang kami hadirkan untuk meningkatkan pengalaman berkendara Anda. </p>
            </div>
          </div>
        </div>
      </section>
      <section className='pt-28'>

        <Jumbotron />
      </section>
      <section className='container mx-auto py-12'>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-4 mx-auto w-sm md:w-full '>

          {
            apiBerita["data"].map((res: any, idx: number) => (
              <div className='flex flex-col md:w-96 w-full  mx-auto' key={idx}>
                <div className="">
                  <img src={res.gambar} className="rounded-3xl w-full h-[200px] md:h-[250px]" alt="" srcSet="" />
                </div>
                <div className="flex flex-col md:flex-row md:justify-between mt-5">
                  <div className="bg-second p-1 rounded-xl w-42 text-center">
                    <p className='text-gray-950 font-normal text-md tracking-normal'>{res.tanggal}</p>
                  </div>
                  {
                    res.link_published != null ? (<div className="">
                      <Link className='text-main font-normal tracking-light text-md' href="#">{res.link_published}</Link>
                    </div>) : ""
                  }

                </div>
                <h1 className='mt-5 font-normal text-md md:text-xl tracking-wide font-semibold dark:text-gray-900'>{res.nama}</h1>
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
