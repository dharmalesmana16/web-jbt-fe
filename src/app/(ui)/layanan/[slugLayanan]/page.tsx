import React from 'react'
import apiTarif from '@/api/tarif.json'

import Link from 'next/link';
import { FaRegCheckCircle } from 'react-icons/fa';
import { propsTarif } from '@/components/ui/TarifCard';
export default async function page({
  params }: {
    params:  Promise<{slugLayanan:string}>
  }) {
    const {slugLayanan} = await params
  return (
    <div>
            <div className="bg-white p-12 rounded-3xl shadow-xl h-full">

      {
        slugLayanan == "drivethru" && (

          <div>
            <h1 className="text-main text-2xl tracking-wide leading-none font-semibold">Gerbang Tol dan Sistem Transaksi Elektronik</h1>
            <div className='py-5'>
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
        )
      }
      {
                    slugLayanan == "transaksi" && (
                        <div>
                            <h1 className="text-main text-2xl tracking-wide leading-none font-semibold">Gerbang Tol dan Sistem Transaksi Elektronik</h1>
                            <div className='py-5'>
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
                            <div className="py-2">
                                <div className="grid md:grid-cols-2 gap-5">
                                    <div>
                                        <div className="bg-main p-5 md:p-8 w-full h-full  text-left   rounded-2xl ">
                                            <img
                                                src="/image/icon/tarif.png"
                                                className="h-8 md:h-18"
                                                alt=""
                                            />
                                            <div className="content pt-20">
                                                <h1 className="text-md md:text-4xl font-bold text-white ">
                                                    Tarif
                                                    Tol
                                                    Bali
                                                    Mandara
                                                </h1>
                                                <p className="text-xs md:text-lg text-gray-300 font-light py-2">
                                                    Ketahui
                                                    tarif
                                                    tol
                                                    sesuai
                                                    golongan
                                                    kendaraan
                                                    anda
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-2 gap-4'>
                                        {
                                            apiTarif["data"].map((res: propsTarif, key: number) => (
                                                <Link key={key} href={""} scroll={false} >
                                                    <div className="bg-gray-100 p-2 md:p-5  text-center  rounded-2xl hover:bg-radial-[at_50%_50%] hover:-translate-y-1 hover:scale-100 hover:transition hover:duration-500 from-white via-amber-100 to-second to-90% " >
                                                        <div className="content">
                                                            <h1 className="text-sm md:text-xl font-normal">
                                                                {res.nama}
                                                            </h1>
                                                            <h1 className="text-md md:text-3xl text-second font-bold py-3">
                                                                {`Rp${res.harga.toLocaleString('id-ID')}`}
                                                            </h1>

                                                        </div>
                                                        <div className="rounded-full bg-main  w-7 h-7 md:w-10 md:h-10 relative md:top-10 top-8 inline-block  text-white ">
                                                            <svg viewBox="-9.6 -9.6 67.20 67.20" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect width="48" height="48" fill="white" fillOpacity="0.01"></rect> <path d="M19 11H37V29" stroke="#ffffff" strokeWidth="3.8400000000000007" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M11.5441 36.4559L36.9999 11" stroke="#ffffff" strokeWidth="3.8400000000000007" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                                                        </div>
                                                    </div>
                                                </Link>
                                            ))
                                        }
                                    </div>
                                </div>

                            </div>
                        </div>
                    )
                }
                {
                    slugLayanan == "lalulintas" && (

                        <div>
                            <h1 className="text-main text-2xl tracking-wide leading-none font-semibold">Layanan Lalu Lintas 24 Jam</h1>
                            <div className='py-5'>
                                <ul className=" text-gray-500 list-outside dark:text-gray-400">
                                    <li className="flex  items-top py-2 tracking-wide">
                                        <FaRegCheckCircle className="w-5 h-5  text-main font-bold text-4xl me-2 shrink-0" />

                                        Jalan Tol Bali Mandara memiliki armada yang standby selama 24 jam sehari ialah Patroli Jalan Tol, baik untuk jalur motor maupun mobil, Ambulance, Rescue, Derek. Jalan Tol Bali Mandara juga dikawal Polisi Jalan Raya (PJR) bekerjasama dengan Polda Bali.                                    </li>
                                    <li className="flex  items-top py-2 tracking-wide">
                                        <FaRegCheckCircle className="w-5 h-5  text-main font-bold text-4xl me-2 shrink-0" />


                                        Untuk pemantauan arus traffic telah dipasang kamera CCTV, dan untuk menjaga keselamatan pengguna jalan dari terpaan angin telah dipasang alat pengukur kecepatan angin (wind-speed) yang secara real time dapat dipantau langsung dari Sentral Komunikasi JBT yang beroperasi 24 jam melayani informasi melalui hotline service dan VMS (variable message service).                                        </li>

                                </ul>
                            </div>
                            <div className="grid grid-cols-3 gap-4"  >
                                <div className="flex p-5 flex-col max-w-xl rounded-3xl  h-full bg-white border border-gray-200  shadow-xl dark:bg-gray-800 dark:border-gray-700">
                                    <div className="relative ">
                                        <img className="w-full rounded-3xl " src="/image/office.jpg" alt="" />
                                    </div>
                                        <div className="py-2">
                                        <h5 className="text-xl font-bold tracking-tight text-main dark:text-white">Sentral Komunikasi</h5>
                                                                                  
                                        </div>
                                </div>
                                <div className="flex p-5 flex-col max-w-xl rounded-3xl  h-full bg-white border border-gray-200  shadow-xl dark:bg-gray-800 dark:border-gray-700">
                                    <div className="relative ">
                                        <img className="w-full rounded-3xl " src="/image/office.jpg" alt="" />
                                    </div>
                                        <div className="py-2">
                                        <h5 className="text-xl font-bold tracking-tight text-main dark:text-white">Sentral Komunikasi</h5>
                                                                                  
                                        </div>
                                </div>
                                <div className="flex p-5 flex-col max-w-xl rounded-3xl  h-full bg-white border border-gray-200  shadow-xl dark:bg-gray-800 dark:border-gray-700">
                                    <div className="relative ">
                                        <img className="w-full rounded-3xl " src="/image/office.jpg" alt="" />
                                    </div>
                                        <div className="py-2">
                                        <h5 className="text-xl font-bold tracking-tight text-main dark:text-white">Sentral Komunikasi</h5>
                                                                                  
                                        </div>
                                </div>
                                <div className="flex p-5 flex-col max-w-xl rounded-3xl  h-full bg-white border border-gray-200  shadow-xl dark:bg-gray-800 dark:border-gray-700">
                                    <div className="relative ">
                                        <img className="w-full rounded-3xl " src="/image/office.jpg" alt="" />
                                    </div>
                                        <div className="py-2">
                                        <h5 className="text-xl font-bold tracking-tight text-main dark:text-white">Sentral Komunikasi</h5>
                                                                                  
                                        </div>
                                </div>
                                <div className="flex p-5 flex-col max-w-xl rounded-3xl  h-full bg-white border border-gray-200  shadow-xl dark:bg-gray-800 dark:border-gray-700">
                                    <div className="relative ">
                                        <img className="w-full rounded-3xl " src="/image/office.jpg" alt="" />
                                    </div>
                                        <div className="py-2">
                                        <h5 className="text-xl font-bold tracking-tight text-main dark:text-white">Sentral Komunikasi</h5>
                                                                                  
                                        </div>
                                </div>
                                <div className="flex p-5 flex-col max-w-xl rounded-3xl  h-full bg-white border border-gray-200  shadow-xl dark:bg-gray-800 dark:border-gray-700">
                                    <div className="relative ">
                                        <img className="w-full rounded-3xl " src="/image/office.jpg" alt="" />
                                    </div>
                                        <div className="py-2">
                                        <h5 className="text-xl font-bold tracking-tight text-main dark:text-white">Sentral Komunikasi</h5>
                                                                                  
                                        </div>
                                </div>

                            </div>

                        </div>
                    )
                }
                {
                    slugLayanan == "keamanan-dan-kebersihan" && (

                        <div>
                            <h1 className="text-main text-2xl tracking-wide leading-none font-semibold">Pengamanan Laut Infrastruktur Jalan Tol</h1>
                            <div className='py-5'>
                                <ul className=" text-gray-500 list-outside dark:text-gray-400">
                                    <li className="flex  items-top py-2 tracking-wide">
                                        <FaRegCheckCircle className="w-5 h-5  text-main font-bold text-4xl me-2 shrink-0" />


                                        PT Jasamarga Bali Tol bekerja sama dengan Denpom Lanal Denpasar yang kemudian membentuk Satuan Tugas Pengamanan Laut Jalan Tol Bali Mandara untuk melakukan pemantauan rutin, khususnya untuk pengamanan struktur bawah jalan tol.                                    </li>
                                    <li className="flex  items-top py-2 tracking-wide">
                                        <FaRegCheckCircle className="w-5 h-5  text-main font-bold text-4xl me-2 shrink-0" />


                                        Dalam rangka mengoptimalkan pelayanan kepada masyarakat dan untuk menjaga kebersihan lajur dan lingkungan Jalan Tol Bali Mandara, PT Jasamarga Bali Tol melengkapi armada kebersihan dengan menyediakan 1 unit mobil Road Sweeper.                                         </li>

                                </ul>
                            </div>

                        </div>
                    )
                }
                {
                    slugLayanan == "konstruksi" && (

                        <div>
                            <h1 className="text-main text-2xl tracking-wide leading-none font-semibold">Teknologi Pemantauan Konstruksi yang Andal</h1>
                            <div className='py-5'>
                                <ul className=" text-gray-500 list-outside dark:text-gray-400">
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
    </div>
  )
}
