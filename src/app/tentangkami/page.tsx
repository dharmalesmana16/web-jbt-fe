import React, { Suspense } from 'react'
import CardMisi from '../components/ui/CardMisi'
import CardTataNilai from '../components/ui/CardTataNilai'
import apiDireksi from '../api/direksi.json';
import apiSejarah from '../api/sejarah.json';
import DireksiModal from '../components/ui/DireksiModal';
import DireksiCard, { propsDireksi } from '../components/ui/DireksiCard';
import { DireksiLoading } from '../components/ui/DireksiLoading';
import CardPrestasi from '../components/ui/CardPrestasi';
import PrestasiModal from '../components/ui/PrestasiModal';
import Link from 'next/link';
import { FaCircle } from 'react-icons/fa6';
import { headers } from 'next/headers';
export default async function page({
  searchParams
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const parameter = await searchParams;
  const id = parameter?.id;
  const modal = parameter?.modal === "true";
  const prestasiModal = parameter?.prestasi === "true";
  const headersList = await headers()
  const pathname = await headersList.get("x-pathname")

  const query = parameter.slug ? parameter.slug : "sejarah2013";
  const url = new URL(pathname ? pathname : "", process.env.FE_URL);
  const response = await apiSejarah["data"].find((item) => item.slug == query);

  return (
    <div>
      <section className='bg-[#F8FAFF] rounded-br-[3rem]  pt-28 top-full shadow-xl relative z-10 '>
        <div className="mx-auto container">
          <img src="/image/gtngr.png" className='md:rounded-xl w-full h-[200px] md:h-full' alt="" srcSet="" />
          <div className="px-4  py-12 grid md:grid-cols-6">
            <div className="pb-2 max-w-2xl  col-span-4">
              <h1 className='text-main tracking-wide font-semibold text-xl md:text-4xl'>Tentang Kami dalam Mewujudkan Konektivitas Terbaik di Bali</h1>
            </div>
            <div className=" w-full col-span-2">
              <p className='leading-normal text-gray-500 text-md '>Sebagai bagian dari Jasa Marga Group, kami menghadirkan solusi transportasi modern di Bali melalui Tol Bali Mandara. Dengan standar keselamatan tinggi dan infrastruktur berkualitas, kami berkomitmen memberikan pengalaman berkendara terbaik untuk Anda. </p>
            </div>
          </div>
        </div>
      </section>
      <section className=" bg-scroll bg-cover bg-bottom  bg-no-repeat   w-full bg-[url('/image/tbm.png')] min-h-[100vh] relative z-0   mb-12">
        <div className="max-w-xl md:container mx-auto  ">
          <div className="text-center">
            <div className="   py-12 lg:py-12 ">
              <h1 className='text-main font-semibold text-lg tracking-normal'>VISI</h1>
              <h1 className='text-main text-2xl md:text-5xl font-bold py-5'>“Menjadi Perusahaan Pengelola jalan tol terkemuka di Indonesia”</h1>
            </div>
            <h1 className='text-main font-semibold text-lg tracking-normal pb-5 '>MISI</h1>
          </div>
          <CardMisi />
          <div className="text-center mx-auto py-12">
            <h1 className='text-main font-semibold text-lg tracking-normal py-4'>TATA NILAI</h1>
            <img src="/image/akhlak.png" className=' mx-auto py-8 h-42' alt="" srcSet="" />
          </div>
          <CardTataNilai />
        </div>
      </section>
      {/* Section Sejarah */}
      <section className="bg-center mx-auto w-full p-12 md:p-24 min-h-[100vh] bg-cover bg-no-repeat  bg-[#F4F4F4] shadow-t-xl  rounded-t-4xl">
         
  
          <div className="container mx-auto border-b-4 border-b-second ">

                        <h1 className='font-black text-3xl text-main leading-7'>Sejarah Jasamarga Bali Tol</h1>
                        <p className="text-gray-500 py-5 text-base tracking-wide">Sekilas sejarah pembangunan Tol Bali Mandara dan Kantor Jasamarga Bali Tol</p>
          </div>
        <div className="container mx-auto">
          <div className="flex flex-col items-center  md:flex-row md:gap-[20px] ">
            <div className="   max-w-32 w-full  mt-10 md:mt-20   md:border-r-2 border-gray-200">
              <ul className="list-outside">

                {
                  apiSejarah["data"].map((res: any, key: number) => (
                    <li key={key} className="flex flex-col md:flex-row  items-center py-12 hover:scale-102 hover:translate-1 duration-200">
                      
                      <div className="text-end">

                        <Link href={{ pathname: url.toString(), query: { slug: res.slug } }} scroll={false} className="text-main text-3xl font-black ">
                          {res.nama}
                        </Link>
                      </div>
                      {response?.slug == res.slug ?
                        (

                          <FaCircle className='md:ml-5 text-second' />
                        ) : ""
                      }

                    </li>
                  ))
                }
              </ul>
            </div>
            
            <div className="w-full text-center md:text-left">

              <div className="py-5">

                <h1 className='text-main text-6xl font-black'>{response?.nama}</h1>
              </div>
              <div className="">

                <p className='text-main tracking-wide text-lg md:text-2xl'>{response?.deskripsi}</p>
              </div>

            </div>
            <div className="w-full ">

              <div className="py-5">

              <img src={response?.gambar} className="h-full w-full rounded-3xl" alt="" srcSet="" />
              </div>
              
            </div>
          </div>
        </div>
        {/* <div className="px-4 md:px-8 mx-auto py-12 lg:py-24">
          <div className=" md:flex md:flex-row justify-between gap-12">
            <div className="text-left py-2">
              <h1 className="text-white  text-2xl md:text-4xl font-bold items-end align-bottom	 ">

                {`Sekilas Sejarah PT  Jasamarga Bali Tol`}
              </h1>
              <p className="text-xs font-light text-gray-400">
                Dengan standar keselamatan tinggi dan infrastruktur berkualitas. kami berkomitmen memberikan pengalaman berkendara terbaik untuk anda
              </p>
            </div>
            <div className="overflow-y-scroll no-scrollbar px-5 max-h-[600px]" >
              <div className="py-2">
                <div className="bg-white p-5 rounded-3xl w-full max-w-5xl">

                  <div className="flex justify-between gap-8">
                    <div className="">
                      <div className="flex items-center">
                        <div className="">

                          <h1 className='text-main text-2xl font-bold'>2009</h1>
                        </div>
                        <div className="rounded-full bg-second  w-5 h-5 md:w-5 md:h-5 relative md:top-0  right-21 z-20  inline-block  text-white "></div>
                      </div>
                    </div>
                    <div className="">

                      <h1>
                        Bali dinobatkan sebagai World’s Best Island oleh Travel and Leisure dan menjadi destinasi terbaik dunia versi TripAdvisor pada 2017.
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-2">
                <div className="bg-white p-5 rounded-3xl w-full max-w-5xl">

                  <div className="flex justify-between gap-8">
                    <div className="">
                      <div className="flex items-center">
                        <div className="">

                          <h1 className='text-main text-2xl font-bold'>2010</h1>
                        </div>
                        <div className="rounded-full bg-second  w-5 h-5 md:w-5 md:h-5 relative  md:top-0  right-20  inline-block  text-white "></div>
                      </div>
                    </div>
                    <div className="">

                      <h1>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate voluptatum veritatis, fuga temporibus sunt saepe quo possimus. Laboriosam, corrupti porro, in, debitis deleniti labore rem dicta nostrum repellendus inventore dolore quidem praesentium. Amet magnam quam facere magni tempore dolore ad.
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-2">
                <div className="bg-white p-5 rounded-3xl w-full max-w-5xl">

                  <div className="flex justify-between gap-8">
                    <div className="">
                      <div className="flex items-center">
                        <div className="">

                          <h1 className='text-main text-2xl font-bold'>2010</h1>
                        </div>
                        <div className="rounded-full bg-second  w-5 h-5 md:w-5 md:h-5 relative md:top-0  right-21  inline-block  text-white "></div>
                      </div>
                    </div>
                    <div className="">

                      <h1>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate voluptatum veritatis, fuga temporibus sunt saepe quo possimus. Laboriosam, corrupti porro, in, debitis deleniti labore rem dicta nostrum repellendus inventore dolore quidem praesentium. Amet magnam quam facere magni tempore dolore ad.
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-2">
                <div className="bg-white p-5 rounded-3xl w-full max-w-5xl">

                  <div className="flex justify-between gap-8">
                    <div className="">
                      <div className="flex items-center">
                        <div className="">

                          <h1 className='text-main text-2xl font-bold'>2010</h1>
                        </div>
                        <div className="rounded-full bg-second  w-5 h-5 md:w-5 md:h-5 relative md:top-0  right-21  inline-block  text-white "></div>
                      </div>
                    </div>
                    <div className="">

                      <h1>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate voluptatum veritatis, fuga temporibus sunt saepe quo possimus. Laboriosam, corrupti porro, in, debitis deleniti labore rem dicta nostrum repellendus inventore dolore quidem praesentium. Amet magnam quam facere magni tempore dolore ad.
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-2">
                <div className="bg-white p-5 rounded-3xl w-full max-w-5xl">

                  <div className="flex justify-between gap-8">
                    <div className="">
                      <div className="flex items-center">
                        <div className="">

                          <h1 className='text-main text-2xl font-bold'>2010</h1>
                        </div>
                        <div className="rounded-full bg-second  w-5 h-5 md:w-5 md:h-5 relative md:top-0  right-21  inline-block  text-white "></div>
                      </div>
                    </div>
                    <div className="">

                      <h1>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate voluptatum veritatis, fuga temporibus sunt saepe quo possimus. Laboriosam, corrupti porro, in, debitis deleniti labore rem dicta nostrum repellendus inventore dolore quidem praesentium. Amet magnam quam facere magni tempore dolore ad.
                      </h1>
                    </div>
                  </div>
                </div>
              </div>



            </div>
          </div>
        </div> */}
      </section>
      {/* End Section Sejarah */}
      {/* Section Dewan Direksi */}
      <section className='py-12 container mx-auto '>
        <h1 className='text-main text-2xl tracking-wide text-center font-bold py-12'>DEWAN KOMISARIS</h1>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-[20px] md:gap-[20px]">
          {
            apiDireksi["data"].filter(res => res.tipe_direksi === "d_komisaris").map((res: propsDireksi, idx: number) => (
              <DireksiCard key={idx} {...res} />
            ))
          }
        </div>


      </section>
      <section className='py-12 container mx-auto '>
        <h1 className='text-main text-2xl tracking-wide text-center font-bold py-12'>DEWAN DIREKSI</h1>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-[20px] md:gap-[20px]">
          {
            apiDireksi["data"].filter(res => res.tipe_direksi === "d_direksi").map((res: propsDireksi, idx: number) => (
              <DireksiCard key={idx} {...res} />
            ))
          }
        </div>

      </section>

      {/* End Section Dewan Direksi */}
      <section className='py-12 container mx-auto '>
        <h1 className='text-main text-2xl tracking-wide text-center font-bold py-12'>PIAGAM DAN PENGHARGAAN</h1>
        <div className="p-5 border-2 border-border rounded-3xl">
          <CardPrestasi />
        </div>
      </section>
      {modal && (
        <Suspense key={id?.toString()} fallback={< DireksiLoading />}>
          <DireksiModal id={id?.toString()} />
        </Suspense>

      )}
      {prestasiModal && (
        <Suspense key={id?.toString()} fallback={< DireksiLoading />}>
          <PrestasiModal id={id?.toString()} />
        </Suspense>
      )}
    </div>
  )
}
