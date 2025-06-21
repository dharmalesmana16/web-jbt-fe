import React from 'react'
import apiBerita from '../../api/berita.json'
export default async function detailBerita({
  params }: {
    params: { slugBerita: string }
  }) {
  const response = apiBerita["data"].find((item) => item.slug === params.slugBerita);

  return (
    <div className="py-28 ">
      <div className="container mx-auto min-h-screen">
        <div>
          <img src={response?.gambar} className="w-full h-[600px] rounded-3xl " alt="" srcSet="" />
        </div>
        <div className="py-12">
          <div className="bg-second p-1 rounded-xl w-42 text-center mb-5">
            <p className='text-gray-950 font-normal text-md tracking-normal'>15 Desember 2025</p>
          </div>
          <h1 className='text-main text-4xl tracking-wide font-medium '>        {response?.nama}</h1>
        </div>
     <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <p className='text-justify text-gray-900 tracking-wide leading-loose text-xl'>{response?.deskripsi}</p>
          <p className='text-justify text-gray-900 tracking-wide leading-loose text-xl'>{response?.deskripsi}</p>
        </div>
      </div>

    </div>
  )
}
