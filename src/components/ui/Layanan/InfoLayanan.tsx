"use client"
import React, { Suspense } from 'react'
import { redirect, useSearchParams } from "next/navigation";


import TarifModal from '../TarifModal';
import { TarifLoading } from '../TarifLoading';
import Image from 'next/image';
import SliderLayout from '@/components/layout/SliderLayout';
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
                    slug == "layanan-operasi" && (
                        <div>
                            <h1 className='text-main font-black leading-loose text-xl md:text-3xl'>Layanan Operasi</h1>
                            <hr className="w-28 md:w-34 text-second  border-t-8 md:border-t-12 " />
                            <div className='py-5 '>

                                <SliderLayout center={false} shown={3} infinite={true} dots={true} >


                                    <div className="">
                                        <Image
                                            src={"/image/layanan/operasi/lalin-derek-3.jpg"}
                                            alt="derek"
                                            width={0}
                                            height={0}
                                            sizes='100vw'
                                            className="h-[175px] w-[300px] rounded-3xl shadow-xl"
                                        />
                                    </div>
                                    <div className="">
                                        <Image
                                            src={"/image/layanan/operasi/layanan-operasi-dua.jpeg"}
                                            alt="derek"
                                            width={0}
                                            height={0}
                                            sizes='100vw'
                                            className="h-[175px] w-[300px] rounded-3xl shadow-xl"
                                        />
                                    </div>
                                    <div className="">
                                        <Image
                                            src={"/image/layanan/operasi/layanan-operasi-tiga.jpg"}
                                            alt="derek"
                                            width={0}
                                            height={0}
                                            sizes='100vw'
                                            className="h-[175px] w-[300px] rounded-3xl shadow-xl"
                                        />
                                    </div>
                                    <div className="">
                                        <Image
                                            src={"/image/layanan/operasi/layanan-operasi-empat.JPG"}
                                            alt="derek"
                                            width={0}
                                            height={0}
                                            sizes='100vw'
                                            className="h-[175px] w-[300px] rounded-3xl shadow-xl"
                                        />
                                    </div>
                                    <div className="">
                                        <Image
                                            src={"/image/layanan/drivethru/gambar-satu.jpeg"}
                                            alt="derek"
                                            width={0}
                                            height={0}
                                            sizes='100vw'
                                            className="h-[175px] w-[300px] rounded-3xl shadow-xl"
                                        />
                                    </div>
                                    <div className="">
                                        <Image
                                            src={"/image/layanan/drivethru/gambar-dua.jpeg"}
                                            alt="derek"
                                            width={0}
                                            height={0}
                                            sizes='100vw'
                                            className="h-[175px] w-[300px] rounded-3xl shadow-xl"
                                        />
                                    </div>
                                    <div className="">
                                        <Image
                                            src={"/image/layanan/drivethru/gambar-tiga.jpeg"}
                                            alt="derek"
                                            width={0}
                                            height={0}
                                            sizes='100vw'
                                            className="h-[175px] w-[300px] rounded-3xl shadow-xl"
                                        />
                                    </div>

                                </SliderLayout>
                                <div className="py-5">
                                    <div className="bg-blue-100 p-1 rounded-3xl w-24">

                                        <p className="text-main tracking-wide text-sm font-bold text-center">Deskripsi</p>
                                    </div>
                                    <div className="py-5 ">

                                        <p className='text-gray-700 dark:text-gray-400'>Untuk memastikan pelayanan yang optimal bagi pengguna jalan, operasional Jalan Tol Bali Mandara mencakup tiga layanan utama:
                                        </p>
                                    </div>
                                    <div className="bg-main-100 p-1 rounded-3xl w-48 mb-3 ">

                                        <p className="text-main tracking-wide text-sm font-bold text-center">Layanan yang tersedia</p>
                                    </div>
                                    <ol className=" text-gray-700 list-decimal list-inside dark:text-gray-400">
                                        <li className="font-bold  items-top py-2 tracking-wide">
                                            Pelayanan Transaksi
                                            <p className='tracking-wide font-normal'>Meliputi pelayanan transaksi tol 24 jam, penyediaan perlengkapan transaksi, kendaraan operasional, pengamanan dan kebersihan gerbang tol, serta pemeliharaan fasilitas pendukung seperti AC dan genset. </p>
                                            <p className='tracking-wide font-normal'><br />Untuk memberikan kemudahan bagi pengguna jalan, sejak tanggal 1 Maret 2018, PT Jasamarga Bali Tol menghadirkan inovasi berupa layanan Drive Thru untuk pengisian ulang uang elektronik, yang dikenal dengan nama Drive Thru UNIK (Uang Elektronik)
                                                Layanan ini berlokasi di Pool Ruas PT Jasamarga Bali Tol, Jalan Pelabuhan Benoa, tepatnya di bawah Simpang Susun Benoa, dan beroperasi setiap hari mulai pukul 06.00 hingga 21.00 WITA.</p>
                                            <ul className=" text-gray-900 list-disc list-inside  dark:text-gray-400">
                                                <li className="flex items-center">
                                                    <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                                    </svg>
                                                    Isi Ulang Tunai
                                                </li>
                                                <ul className="ps-5 mt-2 space-y-1 list-disc list-inside font-normal">
                                                    <li>Mandiri (e-money dan produk co-branding-nya)</li>
                                                    <li>BNI (TapCash)</li>
                                                    <li>BCA (Flazz)</li>
                                                </ul>

                                                <li className="flex items-center">
                                                    <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                                    </svg>
                                                    Isi Ulang Non Tunai (Debit / Transfer)
                                                </li>
                                                <ul className="ps-5 mt-2 space-y-1 list-disc list-inside font-normal">
                                                    <li>Mandiri (e-money dan produk co-branding-nya)</li>
                                                    <li>BNI (TapCash)</li>
                                                    <li>BCA (Flazz)</li>
                                                </ul>





                                            </ul>
                                        </li>
                                        <li className="font-bold  items-top py-2 tracking-wide">
                                            Pelayanan Lalu Lintas
                                            <p className='tracking-wide font-normal'>Fokus pada pengaturan lalu lintas 24 jam, penyediaan kendaraan layanan (seperti patroli dan ambulans), serta dukungan satuan pengamanan.</p>
                                        </li>
                                        <li className="font-bold  items-top py-2 tracking-wide">
                                            Pelayanan Sisinfokom
                                            <p className='tracking-wide font-normal'>Menyediakan sistem teknologi operasional seperti CCTV, VMS (Variable Message Sign), sensor angin, dan pusat kontrol (Senkon) untuk mendukung pengawasan dan komunikasi jalan tol secara real-time.</p>
                                        </li>

                                    </ol>
                                </div>
                            </div>

                        </div>
                    )
                }
                {
                    slug == "layanan-pemeliharaan" && (
                        <div>
                            <div>
                                <h1 className='text-main font-black leading-loose text-xl md:text-3xl'>Layanan Pemeliharaan</h1>
                                <hr className="w-34 text-second  border-t-12 " />
                                <div className='py-5 '>
                                    <SliderLayout center={false} shown={3} infinite={true} dots={true} >

                                        <div className="">
                                            <Image
                                                src={"/image/layanan/pemeliharaan/pemeliharaan-satu.jpeg"}
                                                alt="derek"
                                                width={0}
                                                height={0}
                                                sizes='50vh'
                                                className="h-[175px] w-[300px] rounded-3xl shadow-xl"

                                            />
                                        </div>
                                        <div className="">
                                            <Image
                                                src={"/image/layanan/pemeliharaan/pemeliharaan-dua.jpeg"}
                                                alt="derek"
                                                width={0}
                                                height={0}
                                                sizes='100vw'
                                                className="h-[175px] w-[300px] rounded-3xl shadow-xl"
                                            />
                                        </div>
                                        <div className="">
                                            <Image
                                                src={"/image/layanan/pemeliharaan/pemeliharaan-tiga.jpeg"}
                                                alt="derek"
                                                width={0}
                                                height={0}
                                                sizes='100vw'
                                                className="h-[175px] w-[300px] rounded-3xl shadow-xl"
                                            />
                                        </div>
                                    </SliderLayout>
                                    <div className='py-2'>
                                        <div className="bg-blue-100 p-1 rounded-3xl w-24">

                                            <p className="text-main tracking-wide text-sm font-bold text-center">Deskripsi</p>
                                        </div>
                                        <div className="py-5 ">

                                            <p className='text-gray-700 dark:text-gray-400'>Pemeliharaan Jalan Tol Bali Mandara dilaksanakan secara rutin dan menyeluruh untuk memastikan infrastruktur tetap dalam kondisi optimal, aman, dan nyaman bagi pengguna jalan. Kegiatan ini mencakup tiga lingkup utama, yaitu:
                                            </p>
                                        </div>
                                        <div className="bg-main-100 p-1 rounded-3xl w-48 mb-3 ">

                                            <p className="text-main tracking-wide text-sm font-bold text-center">Layanan yang tersedia</p>
                                        </div>
                                        <ol className=" text-gray-700 list-decimal list-inside dark:text-gray-400">
                                            <li className="font-bold  items-top py-2 tracking-wide">
                                                Pemeliharaan Konstruksi
                                                <p className='tracking-wide font-normal'>Fokus terhadap perawatan fisik jalan dan elemen struktural pendukungnya. Lingkup ini mencakup pemeliharaan ruas jalan, gerbang tol, rambu lalu lintas, guide post, expansion joint, serta berbagai struktur pengaman. Tujuannya adalah untuk menjaga kekuatan dan keselamatan struktur jalan agar tetap layak digunakan.</p>
                                            </li>
                                            <li className="font-bold  items-top py-2 tracking-wide">
                                                Pemeliharaan Mekanikal Dan Elektrikal
                                                <p className='tracking-wide font-normal'>Fokus terhadap perawatan sistem penerangan dan instalasi kelistrikan di sepanjang jalan tol. Ini mencakup lampu Penerangan Jalan Umum (PJU) dan instalasinya, lampu di area gerbang tol, serta lampu tulisan “Jalan Tol Bali Mandara” yang berfungsi sebagai identitas jalan tol dan penunjang visual di malam hari.</p>
                                            </li>
                                            <li className="font-bold  items-top py-2 tracking-wide">
                                                Pemeliharaan Kebersihan Jalur Dan Lingkungan
                                                <p className='tracking-wide font-normal'>Fokus terhadap inspeksi dan pembersihan rutin terhadap seluruh area jalan tol. Kegiatan ini meliputi pembersihan jalur utama, saluran air (inlet dan outlet), rambu, gerbang tol, serta perawatan tanaman dan area hijau yang berada di sekitar ruas jalan tol. </p>
                                            </li>

                                        </ol>
                                    </div>
                                </div>
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
