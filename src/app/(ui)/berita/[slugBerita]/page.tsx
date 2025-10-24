import React from "react";

export default async function detailBerita({
  params,
}: {
  params: Promise<{ slugBerita: string }>;
}) {
  const { slugBerita } = await params;
  const resp = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/berita/${slugBerita}`)
  const data = await resp.json()
  const slug = data["data"];
  
  return (
    <div className="max-w-5xl mx-auto  min-h-screen py-28 ">
      <div className=" px-2">
        <div>
          <img
            src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/storage/image/berita/${slug?.cover}`}
            className="w-full h-[250px] md:h-[500px] rounded-3xl "
            alt=""
            srcSet=""
          />
        </div>
        {/* <div className="my-5">
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
        </div> */}
        <div className="pt-4">

          <div className="bg-second p-1 rounded-xl w-42 text-center my-2">
            <p className='text-gray-950 font-normal text-md tracking-normal'>{new Date(slug?.tanggal).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>
          <h1 className="text-main text-2xl md:text-2xl tracking-wide font-bold ">
            {" "}
            {slug?.judul}
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-2 py-4 ">
          <div dangerouslySetInnerHTML={{ __html: slug.deskripsi }} className="" style={{ lineHeight: '1.5' }} />

          {/* <p className="whitespace-pre-line text-justify text-gray-900 tracking-wide leading-loose text-md md:text-xl"> */}
          {/* {slug?.deskripsi} */}
          {/* </p> */}
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
          <h1 className="text-main text-3xl leading-loose tracking-wide font-bold">
            Berita Lainnya
          </h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          
        </div>
      </section>
    </div>
  );
}
