'use server'
import React from 'react'
import apiLayanan from '../api/layanan.json'
import Link from 'next/link';
import { headers } from 'next/headers';
import InfoLayanan from '../components/ui/Layanan/InfoLayanan';
import Image from 'next/image';

export type propsLayanan = {
    id: number;
    nama: string;
    link: string;
    icon: string;
    deskripsi: string;
}


export default async function page({ searchParams }: any) {

    const headersList = await headers()
    const pathname = await headersList.get("x-pathname")
    const router = await searchParams
    const query = router.slug ? router.slug : "drivethru";
    const url = new URL(pathname ? pathname : "", process.env.FE_URL);
    // const formShown = parameter?.shown === "true";
    console.log(query)
    // const response = await apiLayanan["data"].find((item: propsLayanan) => item.id == query);
    // url.searchParams.set("id", response?.id);

    return (
        <div >
            <section className='bg-[#F8FAFF] rounded-br-[3rem]  pt-28 top-full shadow-xl relative z-10 '>
                <div className="mx-auto container">
                    <Image
                        src={"/image/jumbotron-layanan.png"}
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
                            <h1 className='text-main tracking-wide font-semibold text-xl md:text-4xl leading-8 md:leading-12'>Layanan Terbaik untuk Kelola Perjalanan Nyaman untuk Anda</h1>
                        </div>
                        <div className=" w-full col-span-2">
                            <p className='leading-normal text-gray-400 text-md'>Kami berkomitmen menghadirkan layanan yang mendukung kelancaran perjalanan Anda. Nikmati akses tol yang mudah, sistem pembayaran digital, serta informasi lalu lintas terkini agar perjalanan Anda semakin praktis dan efisien. </p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="bg-[url('/image/walpapperlayanan.png')] bg-cover bg-no-repeat min-h-[100vh] bg-center ">
                <section className='container mx-auto py-20'>
                    <div className="flex flex-col md:flex-row gap-[20px]">
                        <div className=" max-w-sm w-full mx-auto  ">
                            {
                                apiLayanan["data"].map((res: any, idx: number) => (
                                    <div key={idx} className="py-2">
                                        <Link href={{ pathname: url.toString(), query: { slug: res.link } }} scroll={false}>
                                            <div className={"border-2 border-transparent hover:border-2 hover:border-second  p-6 rounded-3xl " + (query == res.link ? "bg-second shadow-lg" : "bg-[#F4F4F4]")} >
                                                <li className="flex items-center ">
                                                    <div className={"p-4  rounded-xl inline-flex " + (query == res.link ? "bg-[#FFE167]" : "bg-[#B8C5EF]")}>
                                                        {/* <IoDocumentText className="inline-block w-7 h-7 text-main" /> */}
                                                        <img src={res.icon} className=' w-7 h-7 ' alt="" srcSet="" />
                                                    </div>
                                                    <h1 className="text-main text-xl md:text-2xl font-semibold px-2">
                                                        {res.nama}
                                                    </h1>

                                                </li>

                                            </div>
                                        </Link>
                                    </div>
                                ))
                            }

                        </div>
                        <div className="w-full ">
                            <InfoLayanan slug={query?.toString()} />

                        </div>

                    </div>
                </section>
            </div>

        </div>
    )
}
