"use client"
import React, { Suspense } from 'react'
import { redirect, useSearchParams } from "next/navigation";

import { FaRegCheckCircle } from 'react-icons/fa';
import TarifModal from '../TarifModal';
import { TarifLoading } from '../TarifLoading';
import Image from 'next/image';
interface formLayanan {
    slug?: string;
}

export default function InfoLayanan({ slug }: formLayanan) {
    if (!slug) {
        redirect("/layanan");
    }
    const router = useSearchParams();
    const modalTarif = router.get("modaltarif")
    const tarifID = router.get("id")
    // console.log(router.get("modal"))
    return (
        <div>
            <div className="bg-white p-12 rounded-3xl shadow-xl h-full">
                {
                    slug == "drivethru" && (

                        <div>
                            <h1 className='text-main font-black leading-loose text-xl md:text-3xl'>Isi Ulang Kartu E-Toll</h1>
                            <hr className="w-28 md:w-34 text-second  border-t-8 md:border-t-12 " />
                            <div className='py-5'>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    <div className="">
                                        <Image
                                            src={"/image/layanan/transaksi/transaksi-1.jpg"}
                                            alt="derek"
                                            width={0}
                                            height={0}
                                            sizes='100vw'
                                            className="w-full h-full rounded-3xl"
                                            // style={{ width: "100%", height: "100%", borderRadius: "20px" }}
                                        />
                                    </div>
                                    <div className="">
                                        <Image
                                            src={"/image/layanan/transaksi/transaksi-2.jpg"}
                                            alt="derek"
                                            width={0}
                                            height={0}
                                            sizes='100vw'
                                            style={{ width: "100%", height: "100%", borderRadius: "20px" }}
                                        />
                                    </div>
                                    <div className="">
                                        <Image
                                            src={"/image/layanan/transaksi/transaksi-3.jpg"}
                                            alt="derek"
                                            width={0}
                                            height={0}
                                            sizes='100vw'
                                            style={{ width: "100%", height: "100%", borderRadius: "20px" }}
                                        />
                                    </div>
                                </div>
                                <div className="py-5">


                                    <div className="bg-blue-100 p-1 rounded-3xl w-24">

                                        <p className="text-main tracking-wide text-sm font-bold text-center">Deskripsi</p>
                                    </div>

                                    <ul className=" text-gray-500 list-outside dark:text-gray-400">
                                        <li className="flex  items-top py-2 tracking-wide">
                                            <FaRegCheckCircle className="w-5 h-5  text-main font-bold text-4xl me-2 shrink-0" />


                                            Seiring dengan pemberlakuan 100% elektronifikasi Jalan Tol Bali Mandara, banyak penguna jalan tol kesulitan melakukan isi ulang maupun membeli uang elektronik. Hal tersebut mengakibatkan terjadinya antrian panjang di gerbang tol.                                    </li>
                                        <li className="flex  items-top py-2 tracking-wide">
                                            <FaRegCheckCircle className="w-5 h-5  text-main font-bold text-4xl me-2 shrink-0" />


                                            Mengatasi masalah tersebut, pada tanggal 1 Maret 2018 PT JBT berinovasi membangun layanan drive thru top up uang eletronik yang berlokasi di Pool Ruas PT Jasamarga Bali Tol, Jalan Pelabuhan Benoa atau di bawah Simpang Susun Benoa. Drive Thru UNIK beroperasi setap hari mulai pukul 06.00-21.00 WITA.
                                        </li>
                                        <li className="flex  items-top py-2 tracking-wide">
                                            <FaRegCheckCircle className="w-5 h-5  text-main font-bold text-4xl me-2 shrink-0" />


                                            Drive Thru Top Up UNIK melayani penjualan dan isi ulang uang elektronik secara tunai dan nontunai.Isi Ulang TunaiMandiri (e-money dan produk co-brandingnya), BNI (Tapcash), dan BCA (Flazz)Isi Ulang Non-Tunai Bank Mandiri (e-money dan produk co-brandingnya), BRI (Brizzi), BNI (Tapcash), dan BCA (Flazz)                                       </li>

                                    </ul>
                                </div>
                            </div>

                        </div>
                    )
                }
                {
                    slug == "transaksi" && (
                        <div>
                            <h1 className='text-main font-black leading-loose text-xl md:text-3xl'>Gerbang Tol dan Sistem Transaksi</h1>
                            <hr className="w-28 md:w-34 text-second  border-t-8 md:border-t-12 " />
                            <div className='py-5 '>

                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    <div className="">
                                        <Image
                                            src={"/image/layanan/transaksi/transaksi-1.jpg"}
                                            alt="derek"
                                            width={0}
                                            height={0}
                                            sizes='100vw'
                                            style={{ width: "100%", height: "100%", borderRadius: "20px" }}
                                        />
                                    </div>
                                    <div className="">
                                        <Image
                                            src={"/image/layanan/transaksi/transaksi-2.jpg"}
                                            alt="derek"
                                            width={0}
                                            height={0}
                                            sizes='100vw'
                                            style={{ width: "100%", height: "100%", borderRadius: "20px" }}
                                        />
                                    </div>
                                    <div className="">
                                        <Image
                                            src={"/image/layanan/transaksi/transaksi-3.jpg"}
                                            alt="derek"
                                            width={0}
                                            height={0}
                                            sizes='100vw'
                                            style={{ width: "100%", height: "100%", borderRadius: "20px" }}
                                        />
                                    </div>
                                </div>
                                <div className="py-5">
                                    <div className="bg-blue-100 p-1 rounded-3xl w-24">

                                        <p className="text-main tracking-wide text-sm font-bold text-center">Deskripsi</p>
                                    </div>

                                    <ul className=" text-gray-500 list-outside dark:text-gray-400">
                                        <li className="flex  items-top py-2 tracking-wide">
                                            <FaRegCheckCircle className="w-5 h-5  text-main font-bold text-4xl me-2 shrink-0" />

                                            Transaksi mudah dan cepat dengan sistem pembayaran elektronik di setiap gerbang tol, memastikan perjalanan tetap lancar tanpa hambatan.
                                        </li>
                                        <li className="flex  items-top py-2 tracking-wide">
                                            <FaRegCheckCircle className="w-5 h-5  text-main font-bold text-4xl me-2 shrink-0" />


                                            Pertanggal 1 Oktober 2017 keseluruhan Gardu Tol Bali Mandara
                                            hanya melayani transaksi elektronik mengunakan Uang Elektronik
                                            (Unik). Adapun kartu
                                            yang dapat digunakan transaksi tol adalah Bank Mandiri (e-money
                                            dan co-branding), BRI (Brizzi), BNI (Tapcash), dan BCA
                                            (Flazz).                                        </li>

                                    </ul>
                                </div>
                            </div>

                        </div>
                    )
                }

                {
                    slug == "lalulintas" && (

                        <div>
                            <div>
                                <h1 className='text-main font-black leading-loose text-xl md:text-3xl'>Sentral Komunikasi</h1>
                                <hr className="w-34 text-second  border-t-12 " />

                                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 py-5">
                                    <div className="">
                                        <Image
                                            src={"/image/layanan/lalin/lalin-kantorsenkom.jpeg"}
                                            alt="derek"
                                            width={0}
                                            height={0}
                                            sizes='100vw'
                                            style={{ width: "100%", height: "100%", borderRadius: "20px" }}
                                        />
                                    </div>
                                    <div className="">
                                        <Image
                                            src={"/image/layanan/lalin/lalin-senkom.jpg"}
                                            alt="derek"
                                            width={0}
                                            height={0}
                                            sizes='100vw'
                                            style={{ width: "100%", height: "100%", borderRadius: "20px" }}
                                        />
                                    </div>
                                    <div className="">
                                        <Image
                                            src={"/image/layanan/lalin/lalin-ws.jpg"}
                                            alt="derek"
                                            width={0}
                                            height={0}
                                            sizes='100vw'
                                            style={{ width: "100%", height: "100%", borderRadius: "20px" }}
                                        />
                                    </div>
                                </div>
                                <div className='py-5'>
                                    <div className="bg-blue-100 p-1 rounded-3xl w-24">
                                        <p className="text-main tracking-wide text-sm font-bold text-center">Deskripsi</p>
                                    </div>
                                    <ul className=" text-gray-500 list-outside dark:text-gray-400">
                                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                            <div className="text-justify ">

                                                <li className="flex  items-top py-2 tracking-wide">
                                                    <FaRegCheckCircle className="w-5 h-5  text-main font-bold text-4xl me-2 shrink-0" />

                                                    memantau dan mengelola lalu lintas di jalan tol, serta memberikan pelayanan informasi kepada pengguna jalan.
                                                </li>
                                                <li className="flex  items-top py-2 tracking-wide">
                                                    <FaRegCheckCircle className="w-5 h-5  text-main font-bold text-4xl me-2 shrink-0" />
                                                    Menggunakan CCTV dan sistem pemantauan lainnya untuk memonitor kondisi lalu lintas secara real-time di seluruh ruas jalan tol.
                                                </li>
                                            </div>
                                            <div className="text-justify ">
                                                <li className="flex  items-top py-2 tracking-wide ">
                                                    <FaRegCheckCircle className="w-5 h-5  text-main font-bold text-4xl me-2 shrink-0" />

                                                    Menanggapi pertanyaan, keluhan, dan saran dari pengguna jalan melalui berbagai saluran komunikasi, seperti hotline, media sosial, atau aplikasi.
                                                </li>
                                                <li className="flex  items-top py-2 tracking-wide">
                                                    <FaRegCheckCircle className="w-5 h-5  text-main font-bold text-4xl me-2 shrink-0" />
                                                    Mendeteksi dan menganalisis potensi gangguan lalu lintas, seperti kecelakaan, kendaraan mogok, atau kepadatan lalu lintas.
                                                </li>
                                            </div>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                            <div>

                                <h1 className='text-main font-black leading-loose text-xl md:text-3xl'>Patroli Jalan Tol</h1>
                                <hr className="w-34 text-second  border-t-12 " />
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 py-5 ">
                                    <div className="">
                                        <Image
                                            src={"/image/layanan/lalin/lalin-patroli.jpg"}
                                            alt="derek"
                                            width={0}
                                            height={0}
                                            sizes='100vw'
                                            style={{ width: "100%", height: "100%", borderRadius: "20px" }}
                                        />
                                    </div>
                                    <div className="">
                                        <Image
                                            src={"/image/layanan/lalin/lalulintas-2.jpg"}
                                            alt="derek"
                                            width={0}
                                            height={0}
                                            sizes='100vw'
                                            style={{ width: "100%", height: "100%", borderRadius: "20px" }}
                                        />
                                    </div>
                                    <div className="">
                                        <Image
                                            src={"/image/layanan/lalin/lalin-ws.jpg"}
                                            alt="derek"
                                            width={0}
                                            height={0}
                                            sizes='100vw'
                                            style={{ width: "100%", height: "100%", borderRadius: "20px" }}
                                        />
                                    </div>
                                </div>
                                <div className='py-5'>
                                    <ul className=" text-gray-500 list-outside dark:text-gray-400">
                                        <div className="bg-blue-100 p-1 rounded-3xl w-24">

                                            <p className="text-main tracking-wide text-sm font-bold text-center">Deskripsi</p>
                                        </div>
                                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 py-2">
                                            <div className="text-justify">


                                                <li className="flex  items-top py-2 tracking-wide">
                                                    <FaRegCheckCircle className="w-5 h-5  text-main font-bold text-4xl me-2 shrink-0" />

                                                    Melakukan pemantauan terhadap kondisi jalan dan asset jalan tol.
                                                </li>
                                                <li className="flex  items-top py-2 tracking-wide">
                                                    <FaRegCheckCircle className="w-5 h-5  text-main font-bold text-4xl me-2 shrink-0" />
                                                    Memberikan informasi dan edukasi kepada pengguna jalan mengenai keselamatan berlalu lintas.
                                                </li>
                                            </div>
                                            <div className="text-justify">
                                                <li className="flex  items-top py-2 tracking-wide">
                                                    <FaRegCheckCircle className="w-5 h-5  text-main font-bold text-4xl me-2 shrink-0" />

                                                    Memberikan pertolongan pertama pada korban kecelakaan, mengamankan lokasi kejadian, dan membantu proses evakuasi.
                                                </li>
                                                <li className="flex  items-top py-2 tracking-wide">
                                                    <FaRegCheckCircle className="w-5 h-5  text-main font-bold text-4xl me-2 shrink-0" />
                                                    Menindak pelanggaran lalu lintas seperti pelanggaran batas kecepatan, marka jalan, atau penggunaan bahu jalan.
                                                </li>
                                            </div>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                            <div>

                                <h1 className='text-main font-black leading-loose text-xl md:text-3xl'>Derek Jalan Tol</h1>
                                <hr className="w-34 text-second  border-t-12 " />
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-2  py-5">
                                    <div className="">
                                        <Image
                                            src={"/image/layanan/lalin/lalin-derek.jpg"}
                                            alt="derek"
                                            width={0}
                                            height={0}
                                            sizes='100vw'
                                            style={{ width: "100%", height: "100%", borderRadius: "20px" }}
                                        />
                                        {/* <img src="/image/layanan/lalin/lalin-derek.jpg" className='w-full h-[200px] rounded-3xl mx-auto' alt="" srcSet="" /> */}
                                    </div>
                                    <div className="">
                                        <Image
                                            src={"/image/layanan/lalin/lalin-derek-2.jpg"}
                                            alt="derek"
                                            width={0}
                                            height={0}
                                            sizes='100vw'
                                            style={{ width: "100%", height: "100%", borderRadius: "20px" }}
                                        />
                                    </div>
                                    <div className="">
                                        <Image
                                            src={"/image/layanan/lalin/lalin-derek-3.jpg"}
                                            alt="derek"
                                            width={0}
                                            height={0}
                                            sizes='100vw'
                                            style={{ width: "100%", height: "100%", borderRadius: "20px" }}
                                        />
                                    </div>
                                </div>
                                <div className='py-5'>
                                    <ul className=" text-gray-500 list-outside dark:text-gray-400">
                                        <div className="bg-blue-100 p-1 rounded-3xl w-24">

                                            <p className="text-main tracking-wide text-sm font-bold text-center">Deskripsi</p>
                                        </div>
                                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 py-2">
                                            <div className="text-justify">


                                                <li className="flex  items-top py-2 tracking-wide">
                                                    <FaRegCheckCircle className="w-5 h-5  text-main font-bold text-4xl me-2 shrink-0" />

                                                    Mengevakuasi kendaraan dari lokasi kejadian di jalan tol ke tempat yang lebih aman
                                                </li>
                                                <li className="flex  items-top py-2 tracking-wide">
                                                    <FaRegCheckCircle className="w-5 h-5  text-main font-bold text-4xl me-2 shrink-0" />
                                                    Memberikan bantuan awal, seperti membantu menyalakan kendaraan atau memberikan informasi mengenai bengkel terdekat.
                                                </li>
                                            </div>

                                        </div>
                                    </ul>
                                </div>
                            </div>
                            <div>

                                <h1 className='text-main font-black leading-loose text-xl md:text-3xl'>Patroli Jalan Raya</h1>
                                <hr className="w-34 text-second  border-t-12 " />
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-2  py-5">
                                    <div className="">
                                        <Image
                                            src={"/image/layanan/lalin/lalin-derek.jpg"}
                                            alt="derek"
                                            width={0}
                                            height={0}
                                            sizes='100vw'
                                            style={{ width: "100%", height: "100%", borderRadius: "20px" }}
                                        />
                                        {/* <img src="/image/layanan/lalin/lalin-derek.jpg" className='w-full h-[200px] rounded-3xl mx-auto' alt="" srcSet="" /> */}
                                    </div>
                                    <div className="">
                                        <Image
                                            src={"/image/layanan/lalin/lalin-derek-2.jpg"}
                                            alt="derek"
                                            width={0}
                                            height={0}
                                            sizes='100vw'
                                            style={{ width: "100%", height: "100%", borderRadius: "20px" }}
                                        />
                                    </div>
                                    <div className="">
                                        <Image
                                            src={"/image/layanan/lalin/lalin-derek-3.jpg"}
                                            alt="derek"
                                            width={0}
                                            height={0}
                                            sizes='100vw'
                                            style={{ width: "100%", height: "100%", borderRadius: "20px" }}
                                        />
                                    </div>
                                </div>
                                <div className='py-5'>
                                    <ul className=" text-gray-500 list-outside dark:text-gray-400">
                                        <div className="bg-blue-100 p-1 rounded-3xl w-24">

                                            <p className="text-main tracking-wide text-sm font-bold text-center">Deskripsi</p>
                                        </div>
                                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 py-2">
                                            <div className="text-justify">


                                                <li className="flex  items-top py-2 tracking-wide">
                                                    <FaRegCheckCircle className="w-5 h-5  text-main font-bold text-4xl me-2 shrink-0" />

                                                    Melakukan pengaturan lalu lintas di titik-titik rawan macet, simpang jalan, dan lokasi kegiatan masyarakat untuk menjaga kelancaran arus lalu lintas.
                                                </li>
                                                <li className="flex  items-top py-2 tracking-wide">
                                                    <FaRegCheckCircle className="w-5 h-5  text-main font-bold text-4xl me-2 shrink-0" />
                                                    Memberikan informasi dan edukasi kepada pengguna jalan mengenai keselamatan berlalu lintas.
                                                </li>
                                            </div>
                                            <div className="text-justify">
                                                <li className="flex  items-top py-2 tracking-wide">
                                                    <FaRegCheckCircle className="w-5 h-5  text-main font-bold text-4xl me-2 shrink-0" />

                                                    Menindak pelanggaran lalu lintas seperti pelanggaran batas kecepatan, menerobos lampu merah, dan pelanggaran lainnya.
                                                </li>
                                                <li className="flex  items-top py-2 tracking-wide">
                                                    <FaRegCheckCircle className="w-5 h-5  text-main font-bold text-4xl me-2 shrink-0" />
                                                    Melakukan pengawasan terhadap potensi tindak kriminalitas di jalan raya dan sekitarnya
                                                </li>
                                            </div>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                            <div>

                                <h1 className='text-main font-black leading-loose text-xl md:text-3xl'>Rescue Jalan Tol</h1>
                                <hr className="w-34 text-second  border-t-12 " />
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-2  py-5">
                                    <div className="">
                                        <Image
                                            src={"/image/layanan/lalin/lalin-derek.jpg"}
                                            alt="derek"
                                            width={0}
                                            height={0}
                                            sizes='100vw'
                                            style={{ width: "100%", height: "100%", borderRadius: "20px" }}
                                        />
                                        {/* <img src="/image/layanan/lalin/lalin-derek.jpg" className='w-full h-[200px] rounded-3xl mx-auto' alt="" srcSet="" /> */}
                                    </div>
                                    <div className="">
                                        <Image
                                            src={"/image/layanan/lalin/lalin-derek-2.jpg"}
                                            alt="derek"
                                            width={0}
                                            height={0}
                                            sizes='100vw'
                                            style={{ width: "100%", height: "100%", borderRadius: "20px" }}
                                        />
                                    </div>
                                    <div className="">
                                        <Image
                                            src={"/image/layanan/lalin/lalin-derek-3.jpg"}
                                            alt="derek"
                                            width={0}
                                            height={0}
                                            sizes='100vw'
                                            style={{ width: "100%", height: "100%", borderRadius: "20px" }}
                                        />
                                    </div>
                                </div>
                                <div className='py-5'>
                                    <ul className=" text-gray-500 list-outside dark:text-gray-400">
                                        <div className="bg-blue-100 p-1 rounded-3xl w-24">

                                            <p className="text-main tracking-wide text-sm font-bold text-center">Deskripsi</p>
                                        </div>
                                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 py-2">
                                            <div className="text-justify">


                                                <li className="flex  items-top py-2 tracking-wide">
                                                    <FaRegCheckCircle className="w-5 h-5  text-main font-bold text-4xl me-2 shrink-0" />

                                                    Melakukan patroli rutin untuk memantau kondisi jalan tol, mengidentifikasi potensi masalah, dan mencegah terjadinya kecelakaan.                                                 </li>
                                                <li className="flex  items-top py-2 tracking-wide">
                                                    <FaRegCheckCircle className="w-5 h-5  text-main font-bold text-4xl me-2 shrink-0" />
                                                    Memberikan bantuan teknis kepada pengendara yang membutuhkan, seperti perbaikan ringan atau penggantian ban                                                </li>
                                            </div>
                                            <div className="text-justify">
                                                <li className="flex  items-top py-2 tracking-wide">
                                                    <FaRegCheckCircle className="w-5 h-5  text-main font-bold text-4xl me-2 shrink-0" />

                                                    Berkoordinasi dengan instansi terkait, seperti kepolisian dan petugas medis, untuk penanganan situasi darurat.                                                 </li>

                                            </div>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )
                }
                {
                    slug == "keamanan-dan-kebersihan" && (

                        <div>
                            <div>
                                <h1 className='text-main font-black leading-loose text-xl md:text-3xl'>Pengamanan Laut Infrastruktur Tol Bali Mandara</h1>
                                <hr className="w-34 text-second  border-t-12 " />

                                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 py-8">
                                    <div className="">
                                        <Image
                                            src={"/image/layanan/kebersihan/patroli-lat.jpg"}
                                            alt="derek"
                                            width={0}
                                            height={0}
                                            sizes='100vw'
                                            style={{ width: "100%", height: "100%", borderRadius: "20px" }}
                                        />
                                    </div>

                                </div>
                                <div className='py-2'>
                                    <div className="bg-blue-100 p-1 rounded-3xl w-24">

                                        <p className="text-main tracking-wide text-sm font-bold text-center">Deskripsi</p>
                                    </div>
                                    <ul className=" text-gray-500 list-outside dark:text-gray-400">
                                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                            <div className="text-justify ">

                                                <li className="flex  items-top py-2 tracking-wide">
                                                    <FaRegCheckCircle className="w-5 h-5  text-main font-bold text-4xl me-2 shrink-0" />

                                                    memantau dan mengelola lalu lintas di jalan tol, serta memberikan pelayanan informasi kepada pengguna jalan.
                                                </li>
                                                <li className="flex  items-top py-2 tracking-wide">
                                                    <FaRegCheckCircle className="w-5 h-5  text-main font-bold text-4xl me-2 shrink-0" />
                                                    Menggunakan CCTV dan sistem pemantauan lainnya untuk memonitor kondisi lalu lintas secara real-time di seluruh ruas jalan tol.
                                                </li>
                                            </div>
                                            <div className="text-justify ">
                                                <li className="flex  items-top py-2 tracking-wide ">
                                                    <FaRegCheckCircle className="w-5 h-5  text-main font-bold text-4xl me-2 shrink-0" />

                                                    Menanggapi pertanyaan, keluhan, dan saran dari pengguna jalan melalui berbagai saluran komunikasi, seperti hotline, media sosial, atau aplikasi.
                                                </li>
                                                <li className="flex  items-top py-2 tracking-wide">
                                                    <FaRegCheckCircle className="w-5 h-5  text-main font-bold text-4xl me-2 shrink-0" />
                                                    Mendeteksi dan menganalisis potensi gangguan lalu lintas, seperti kecelakaan, kendaraan mogok, atau kepadatan lalu lintas.
                                                </li>
                                            </div>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                            <div>

                                <h1 className='text-main font-black leading-loose text-xl md:text-3xl'>Kebersihan Jalan Tol Bali Mandara</h1>
                                <hr className="w-28 md:w-34 text-second  border-t-8 md:border-t-12  " />
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 py-8 ">
                                    <div className="">
                                        <Image
                                            src={"/image/layanan/kebersihan/kebersihan-tol.jpg"}
                                            alt="derek"
                                            width={0}
                                            height={0}
                                            sizes='100vw'
                                            style={{ width: "100%", height: "100%", borderRadius: "20px" }}
                                        />
                                    </div>
                                    <div className="">
                                        <Image
                                            src={"/image/layanan/kebersihan/kebersihan-2.jpg"}
                                            alt="derek"
                                            width={0}
                                            height={0}
                                            sizes='100vw'
                                            style={{ width: "100%", height: "100%", borderRadius: "20px" }}
                                        />
                                    </div>
                                    <div className="">
                                        <Image
                                            src={"/image/layanan/kebersihan/kebersihan-3.jpg"}
                                            alt="derek"
                                            width={0}
                                            height={0}
                                            sizes='100vw'
                                            style={{ width: "100%", height: "100%", borderRadius: "20px" }}
                                        />
                                    </div>
                                </div>
                                <div className='py-2'>
                                    <ul className=" text-gray-500 list-outside dark:text-gray-400">
                                        <div className="bg-blue-100 p-1 rounded-3xl w-24">

                                            <p className="text-main tracking-wide text-sm font-bold text-center">Deskripsi</p>
                                        </div>
                                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 py-2">
                                            <div className="text-justify">


                                                <li className="flex  items-top py-2 tracking-wide">
                                                    <FaRegCheckCircle className="w-5 h-5  text-main font-bold text-4xl me-2 shrink-0" />

                                                    Melakukan pemantauan terhadap kondisi jalan dan asset jalan tol.
                                                </li>
                                                <li className="flex  items-top py-2 tracking-wide">
                                                    <FaRegCheckCircle className="w-5 h-5  text-main font-bold text-4xl me-2 shrink-0" />
                                                    Memberikan informasi dan edukasi kepada pengguna jalan mengenai keselamatan berlalu lintas.
                                                </li>
                                            </div>
                                            <div className="text-justify">
                                                <li className="flex  items-top py-2 tracking-wide">
                                                    <FaRegCheckCircle className="w-5 h-5  text-main font-bold text-4xl me-2 shrink-0" />

                                                    Memberikan pertolongan pertama pada korban kecelakaan, mengamankan lokasi kejadian, dan membantu proses evakuasi.
                                                </li>
                                                <li className="flex  items-top py-2 tracking-wide">
                                                    <FaRegCheckCircle className="w-5 h-5  text-main font-bold text-4xl me-2 shrink-0" />
                                                    Menindak pelanggaran lalu lintas seperti pelanggaran batas kecepatan, marka jalan, atau penggunaan bahu jalan.
                                                </li>
                                            </div>
                                        </div>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    )
                }
                {
                    slug == "konstruksi" && (

                        <div>
                            <h1 className='text-main font-black leading-loose text-xl md:text-3xl'>Teknologi Pemantauan Konstruksi yang Andal</h1>
                            <hr className="w-28 md:w-34 text-second  border-t-8 md:border-t-12 " />

                            <div className="grid grid-cols-3 gap-4 py-2">
                                <div className="">
                                    <Image
                                        src={"/image/layanan/konstruksi/konstruksi-1.jpg"}
                                        alt="derek"
                                        width={0}
                                        height={0}
                                        sizes='100vw'
                                        style={{ width: "100%", height: "100%", borderRadius: "20px" }}
                                    />
                                </div>
                                <div className="">
                                    <Image
                                        src={"/image/layanan/konstruksi/konstruksi-2.jpg"}
                                        alt="derek"
                                        width={0}
                                        height={0}
                                        sizes='100vw'
                                        style={{ width: "100%", height: "100%", borderRadius: "20px" }}
                                    />
                                </div>
                                <div className="">
                                    <Image
                                        src={"/image/layanan/konstruksi/konstruksi-3.jpg"}
                                        alt="derek"
                                        width={0}
                                        height={0}
                                        sizes='100vw'
                                        style={{ width: "100%", height: "100%", borderRadius: "20px" }}
                                    />
                                </div>
                            </div>
                            <div className='py-5'>
                                <div className="bg-blue-100 p-1 rounded-3xl w-24">
                                    <p className="text-main tracking-wide text-sm font-bold text-center">Deskripsi</p>
                                </div>
                                <ul className=" text-gray-500 list-outside dark:text-gray-400 py-2">
                                    <li className="flex  items-top py-2 tracking-wide">
                                        <FaRegCheckCircle className="w-5 h-5  text-main font-bold text-4xl me-2 shrink-0" />


                                        Konstruksi Jalan Tol Bali Mandara menggunakan pondasi tiang pancang yang berjumlah hampir 14.000 ribu titik pancang, termasuk struktur pondasi jembatan alur nelayan yang memerlukan pemantauan terus-menerus.
                                    </li>
                                    <li className="flex  items-top py-2 tracking-wide">
                                        <FaRegCheckCircle className="w-5 h-5  text-main font-bold text-4xl me-2 shrink-0" />


                                        Untuk mempermudah pemantauan, PT Jasamarga Bali Tol telah menerapkan Sistem Informasi Pemantauan dan Pemeliharaan. Sistem ini telah mengidentifikasi secara computerized penomoran tiang pancang sehingga memudahkan pemantauan apabila terjadi pergerakan atau masalah lain. Sedangkan untuk pemantauan struktur konstruksi jalan tol dilakukan dengan pemasangan Structural Health Monitoring System (SHMS). SHMS berfungsi mengukur lendutan vertikal dan kemiringan pier struktur jembatan mengunakan sensor tiltmeter. Sensor tiltmeter yang terpasang berjumlah 22 buah.                                       </li>
                                    <li className="flex  items-top py-2 tracking-wide">
                                        <FaRegCheckCircle className="w-5 h-5  text-main font-bold text-4xl me-2 shrink-0" />


                                        Sedangkan untuk pemantauan struktur konstruksi jalan tol dilakukan dengan pemasangan Structural Health Monitoring System (SHMS). SHMS berfungsi mengukur lendutan vertikal dan kemiringan pier struktur jembatan mengunakan sensor tiltmeter. Sensor tiltmeter yang terpasang berjumlah 22 buah.   </li>

                                </ul>
                            </div>

                        </div>
                    )
                }
            </div>
            {modalTarif && (
                <Suspense key={tarifID?.toString()} fallback={<TarifLoading />}>
                    <TarifModal id={tarifID?.toString()} />

                </Suspense>

            )}
        </div>
    )
}
