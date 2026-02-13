import React, { Suspense } from 'react'
import CardMisi from '@/components/ui/CardMisi'
import CardTataNilai from '@/components/ui/CardTataNilai'
import apiDireksi from '@/api/direksi.json';
import apiSejarah from '@/api/sejarah.json';
import DireksiModal from '@/components/ui/DireksiModal';
import DireksiCard, { propsDireksi } from '@/components/ui/DireksiCard';
import { DireksiLoading } from '@/components/ui/DireksiLoading';
import CardPrestasi from '@/components/ui/CardPrestasi';
import PrestasiModal from '@/components/ui/PrestasiModal';
import Link from 'next/link';
import { FaCircle } from 'react-icons/fa6';
import { headers } from 'next/headers';
import Image from 'next/image';
import YearSejarah from '@/components/layout/Responsive/YearSejarah';
import TableSaham from './../../../components/ui/TableSaham';
export default async function page({ searchParams }: any) {
  const parameter = await searchParams;
  const id = parameter?.id;
  const modal = parameter?.modal === "true";
  const prestasiModal = parameter?.prestasi === "true";
  const headersList = await headers()
  const pathname = await headersList.get("x-pathname")
  const url = new URL(pathname ? pathname : "", process.env.FE_URL);
  const query = parameter.slug ? parameter.slug : "sejarah2013";
  const response = await apiSejarah["data"].find((item) => item.slug == query);
  return (
    <div>
      <section className='bg-[#F8FAFF] rounded-br-[3rem]  pt-28 top-full shadow-xl relative z-10 '>
        <div className="mx-auto container">
          <Image
            src={"/image/bgtentangkami.png"}
            alt="kantor"
            width={0}
            height={0}
            sizes="100vw"
            loading="lazy"
            className="w-full h-[25vh] md:h-full rounded-3xl"
          // style={{ width: "100%", height: "100%", borderRadius: "20px" }}
          />
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
              <h1 className='text-main font-bold md:font-black text-xl tracking-normal py-2'>Visi</h1>
              <hr className="w-16 md:w-24 text-second  mx-auto  border-t-8 md:border-t-12 " />
              <h1 className='text-main text-2xl md:text-5xl font-bold py-5'>“Menjadi Perusahaan Pengelola jalan tol terkemuka di Indonesia”</h1>
            </div>
            <h1 className='text-main font-bold md:font-black text-xl tracking-normal   py-2'>Misi</h1>
            <hr className="w-16 md:w-24 text-second  mx-auto  border-t-8 md:border-t-12 " />
          </div>
          <CardMisi />
          <div className="text-center mx-auto py-12">
            <h1 className='text-main font-bold md:font-black text-xl tracking-normal py-2'>Tata Nilai</h1>
            <hr className="w-16 md:w-24 text-second  mx-auto  border-t-8 md:border-t-12 " />
            <Image
              src="/image/akhlak.png"
              alt="akhlak"
              sizes="100vw"
              height={0}
              width={0}
              className="mx-auto w-96 h-48 py-4"
            />
          </div>
          <CardTataNilai />
        </div>
      </section>
      <section className="container mx-auto w-full p-12 md:p-12 min-h-[100vh] bg-cover bg-no-repeat  bg-white shadow-t-xl  rounded-t-4xl">
        <div className="text-center mx-auto py-8">
          <h1 className='text-main font-bold md:font-black text-xl tracking-normal py-2'>Jasamarga MOVE</h1>
          <hr className="w-16 md:w-24 text-second  mx-auto  border-t-8 md:border-t-12 " />
          <img src="/image/move.png" className="mx-auto rounded-t-[4rem] w-full h-[500px] md:h-[1000px] py-4" />
        </div>
      </section>
      {/* Section Sejarah */}
      <section className="bg-center mx-auto w-full p-4 md:p-12 min-h-[100vh] bg-cover bg-no-repeat  bg-white shadow-t-xl  rounded-t-4xl">


        <div className="container mx-auto  ">

          <h1 className='font-black text-3xl text-main leading-9 text-center'>Sejarah Jasamarga Bali Tol</h1>
          <p className="text-gray-500 py-5 text-base tracking-wide text-center">Sekilas sejarah pembangunan Tol Bali Mandara dan Kantor Jasamarga Bali Tol</p>
          <hr className="w-28 md:w-34 text-second  mx-auto  border-t-8 md:border-t-12 " />

        </div>
        <div className="container mx-auto">
          <div className="flex flex-col items-center  md:flex-row md:gap-[20px] ">
            <div className=" md:max-w-32 w-full  mt-10 md:mt-20   md:border-r-2 border-gray-200">
              <ul className="list-outside">
                <YearSejarah>

                  {
                    apiSejarah["data"].map((res: any, key: number) => (
                      <li key={key} className="md:flex md:flex-row  md:items-center md:py-12 md:hover:scale-102 md:hover:transition-transform md:duration-200">

                        <div className="text-center md:text-end">

                          <Link href={{ pathname: url.toString(), query: { slug: res.slug } }} scroll={false} className="text-main text-3xl font-black ">
                            {res.nama}
                          </Link>
                        </div>
                        {response?.slug == res.slug ?
                          (

                            <FaCircle className='md:ml-5 mx-auto  text-second' />
                          ) : ""
                        }

                      </li>
                    ))
                  }
                </YearSejarah>
              </ul>
            </div>

            <div className="w-full text-center md:text-left py-12 md:py-0">

              <div className="py-5">

                <h1 className='text-main text-6xl font-black'>{response?.nama}</h1>
              </div>
              <div className="">

                <p className='text-main tracking-wide text-lg md:text-2xl whitespace-pre-line'>{response?.deskripsi}</p>
              </div>

            </div>
            <div className="w-full ">

              <div className="py-5">

                <img src={response?.gambar} className="h-full w-full rounded-3xl" alt="" srcSet="" />
              </div>

            </div>
          </div>
        </div>

      </section>
      <section className="bg-center mx-auto w-full p-12 md:p-24 min-h-[100vh] bg-cover bg-no-repeat  bg-white shadow-t-xl  rounded-t-4xl">


        <div className="container mx-auto  ">

          <h1 className='font-black text-3xl text-main leading-9 text-center'>Susunan Pemegang Saham</h1>
          <p className="text-gray-500 py-5 text-base tracking-wide text-center">Ikhtisiar Pemegang Saham PT Jasamarga Bali Tol</p>
          <hr className="w-28 md:w-34 text-second  mx-auto  border-t-8 md:border-t-12 " />

        </div>
        <div className="container mx-auto py-5">
          <TableSaham />
        </div>

      </section>
      {/* End Section Sejarah */}
      {/* Section Dewan Direksi */}
      <div className="bg-[url('/image/bg-tentangkami.png')] bg-scroll bg-position-[center_top_-15rem] bg-cover  bg-no-repeat rounded-t-[3rem]">
        <section className='py-12 container mx-auto px-5 md:px-0  '>
          <h1 className='text-main text-2xl tracking-wide text-center font-bold md:font-black py-2 '>Dewan Komisaris</h1>
          <hr className="w-28 md:w-34 text-second  border-t-10 md:border-t-12 py-4 mx-auto" />

          <div className="grid grid-cols-2 md:flex md:justify-center gap-4 md:gap-4 ">
            {
              apiDireksi["data"].filter(res => res.tipe_direksi === "d_komisaris").map((res: propsDireksi, idx: number) => (
                <DireksiCard key={idx} {...res} />
              ))
            }
          </div>


        </section>
        <section className='py-12 container mx-auto px-5 md:px-0'>
          <h1 className='text-main text-2xl tracking-wide text-center font-bold md:font-black py-2'>Dewan Direksi</h1>
          <hr className="w-28 md:w-34 text-second  border-t-10 md:border-t-12 py-4 mx-auto" />
          <div className="mx-auto text-center">


            <div className="flex justify-center  gap-4 md:gap-4">
              {
                apiDireksi["data"].filter(res => res.tipe_direksi === "d_direksi").map((res: propsDireksi, idx: number) => (
                  <DireksiCard key={idx} {...res} />
                ))
              }
            </div>
          </div>
        </section>

        <section className='container mx-auto py-12'>
          <h1 className='text-main text-2xl tracking-wide text-center font-bold md:font-black py-2 text-u'>STRUKTUR ORGANISASI</h1>
          <hr className="w-28 md:w-34 text-second  border-t-10 md:border-t-12 py-4 mx-auto" />
          <div className="">
            <Image
              src={"/image/sojbtnew.jpg"}
              alt='sojbt'
              width={0}
              height={0}
              sizes='100vw'
              className='w-full mx-auto'
            />
          </div>
        </section>
      </div>
      {/* End Section Dewan Direksi */}
      <section className='py-12 container mx-auto '>
        <h1 className='text-main text-2xl tracking-wide text-center font-bold md:font-black py-8'>PIAGAM DAN PENGHARGAAN</h1>
        <div className="p-5 border-4 border-second rounded-3xl">
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
          <PrestasiModal id={id} />
        </Suspense>
      )}
    </div>
  )
}
