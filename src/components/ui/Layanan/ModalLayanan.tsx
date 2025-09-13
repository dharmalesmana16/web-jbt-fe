import React from 'react'
import { redirect } from "next/navigation";
import Link from 'next/link';
import Image from 'next/image';
import { FaRegCheckCircle } from 'react-icons/fa';
import SliderLayout from '../../layout/SliderLayout';
interface formLayanan {
    idLayanan?: string;
}

export default function ModalLayanan({ idLayanan }: formLayanan) {
    if (!idLayanan) {
        redirect("/");
    }
    //  const response = apiLayanan["data"].find((item) => item.id === idLayanan);
    return (
        <div className="fixed inset-0 flex items-center justify-center z-20 max-h-xl">
            <Link
                className="fixed inset-0 bg-black opacity-75 cursor-default"
                href="/"
                scroll={false}
            />
            <div className="relative w-full max-w-5xl   p-12 bg-white rounded-3xl shadow-md">
                <div className="flex justify-between items-start">
                    <Link
                        className="absolute top-2.5 right-2.5 h-6 w-6 bg-black text-white rounded justify-center items-center flex pb-0.5"
                        href="/"
                        scroll={false}
                    >
                        &times;
                        <span className="sr-only">Close Modal</span>
                    </Link>
                </div>
                {
                    idLayanan == "1" && (

                        <div>
                            <h1 className='text-main font-black leading-loose text-xl md:text-3xl'>Isi Ulang Kartu E-Toll</h1>
                            <hr className="w-28 md:w-34 text-second  border-t-8 md:border-t-12 " />
                            <div className='py-5'>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    <div className="">
                                        <Image
                                            src={"/image/layanan/drivethru/gambar-satu.jpeg"}
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
                                            src={"/image/layanan/drivethru/gambar-dua.jpeg"}
                                            alt="derek"
                                            width={0}
                                            height={0}
                                            sizes='100vw'
                                            style={{ width: "100%", height: "100%", borderRadius: "20px" }}
                                        />
                                    </div>
                                    <div className="">
                                        <Image
                                            src={"/image/layanan/drivethru/gambar-tiga.jpeg"}
                                            alt="derek"
                                            width={0}
                                            height={0}
                                            sizes='100vw'
                                            style={{ width: "100%", height: "100%", borderRadius: "20px" }}
                                        />
                                    </div>
                                </div>
                                <div className="py-5  ">


                                    <div className="bg-main-100 p-1 rounded-3xl w-24 mb-5">

                                        <p className="text-main tracking-wide text-sm font-bold text-center">Deskripsi</p>
                                    </div>
                                    <div className="overflow-y-scroll  bg-white   scrollbar w-full max-h-[150px] md:max-h-[400px] md:no-scrollbar">
                                    <div className="py-5  ">

                                        <p className='text-gray-700 list-outside dark:text-gray-400'>Untuk memberikan kemudahan bagi pengguna jalan, sejak tanggal 1 Maret 2018, PT Jasamarga Bali Tol menghadirkan inovasi berupa layanan Drive Thru untuk pengisian ulang uang elektronik, yang dikenal dengan nama Drive Thru UNIK (Uang Elektronik)
                                            Layanan ini berlokasi di Pool Ruas PT Jasamarga Bali Tol, Jalan Pelabuhan Benoa, tepatnya di bawah Simpang Susun Benoa, dan beroperasi setiap hari mulai pukul 06.00 hingga 21.00 WITA.
                                        </p>
                                    </div>
                                    <div className="bg-main-100 p-1 rounded-3xl w-48 mb-3 ">

                                        <p className="text-main tracking-wide text-sm font-bold text-center">Layanan yang tersedia</p>
                                    </div>
                                    <ol className=" text-gray-900 list-decimal list-inside  dark:text-gray-400">
                                        <li className="font-bold">
                                            {/* <FaRegCheckCircle className="w-5 h-5  text-main font-bold text-4xl me-2 shrink-0" /> */}
                                            Isi Ulang Tunai
                                            <ul className="ps-5 mt-2 space-y-1 list-disc list-inside font-normal">
                                                <li>Mandiri (e-money dan produk co-branding-nya)</li>
                                                <li>BNI (TapCash)</li>
                                                <li>BCA (Flazz)</li>
                                            </ul>
                                        </li>
                                        <li className="font-bold">
                                            {/* <FaRegCheckCircle className="w-5 h-5  text-main font-bold text-4xl me-2 shrink-0" /> */}
                                            Isi Ulang Non Tunai (Debit / Transfer)
                                            <ul className="ps-5 mt-2 space-y-1 list-disc list-inside font-normal">
                                                <li>Mandiri (e-money dan produk co-branding-nya)</li>
                                                <li>BNI (TapCash)</li>
                                                <li>BCA (Flazz)</li>
                                            </ul>
                                        </li>





                                    </ol>
                                </div>
                                </div>
                            </div>

                        </div>
                    )
                }
                {
                    idLayanan == "2" && (
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
                                    </SliderLayout>
                                <div className="py-5">
                                    <div className="bg-blue-100 p-1 rounded-3xl w-24">

                                        <p className="text-main tracking-wide text-sm font-bold text-center">Deskripsi</p>
                                    </div>
                                <div className="overflow-y-scroll  bg-white   scrollbar w-full max-h-[150px] md:max-h-[400px] md:no-scrollbar">

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
                                            <p className='tracking-wide font-normal'>Meliputi pelayanan transaksi tol 24 jam, penyediaan perlengkapan transaksi, kendaraan operasional, pengamanan dan kebersihan gerbang tol, serta pemeliharaan fasilitas pendukung seperti AC dan genset.</p>
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

                        </div>
                    )
                }
                {
                    idLayanan == "3" && (

                        <div>
                            <div>
                                <h1 className='text-main font-black leading-loose text-xl md:text-3xl'>Layanan Pemeliharaan</h1>
                                <hr className="w-34 text-second  border-t-12 " />
                                    <SliderLayout center={false} shown={3} infinite={true} dots={true} >

                                    <div className="">
                                        <Image
                                            src={"/image/layanan/pemeliharaan/pemeliharaan-satu.jpeg"}
                                            alt="derek"
                                            width={0}
                                            height={0}
                                            sizes='50vh'
                                            className="h-[275px] w-100 rounded-3xl shadow-xl"
                                        />
                                    </div>
                                    <div className="">
                                        <Image
                                            src={"/image/layanan/pemeliharaan/pemeliharaan-dua.jpeg"}
                                            alt="derek"
                                            width={0}
                                            height={0}
                                            sizes='100vw'
                                            className="h-[275px] w-100 rounded-3xl shadow-xl"
                                        />
                                    </div>
                                    <div className="">
                                        <Image
                                            src={"/image/layanan/pemeliharaan/pemeliharaan-tiga.jpeg"}
                                            alt="derek"
                                            width={0}
                                            height={0}
                                            sizes='100vw'
                                            className="h-[275px] w-100 rounded-3xl shadow-xl"
                                        />
                                    </div>
</SliderLayout>
                                <div className='py-2'>
                                    <div className="bg-blue-100 p-1 rounded-3xl w-24">

                                        <p className="text-main tracking-wide text-sm font-bold text-center">Deskripsi</p>
                                    </div>
                                                                    <div className="overflow-y-scroll  bg-white   scrollbar w-full max-h-[150px] md:max-h-[400px] md:no-scrollbar">

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
                {
                    idLayanan == "4" && (

                        <div>
                            <h1 className='text-main font-black leading-loose text-3xl'>Teknologi Pemantauan Konstruksi yang Andal</h1>
                            <hr className="w-34 text-second  border-t-12 " />

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
                {
                    idLayanan == "5" && (

                        <div>
                            <SliderLayout shown={1}>
                                <div>
                                    <h1 className='text-main font-black leading-loose text-3xl'>Pengamanan Laut Infrastruktur Tol Bali Mandara</h1>
                                    <hr className="w-34 text-second  border-t-12 " />

                                    <div className="grid grid-cols-3 gap-2 py-8">
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

                                    <h1 className='text-main font-black leading-loose text-3xl'>Kebersihan Jalan Tol bali Mandara</h1>
                                    <hr className="w-34 text-second  border-t-12 " />
                                    <div className="grid grid-cols-3 gap-2 py-8 ">
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

                            </SliderLayout>
                        </div>
                    )
                }
            </div>

        </div>
    )
}
