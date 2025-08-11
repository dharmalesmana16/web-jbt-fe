import Link from "next/link";
import React, { Suspense } from "react";
import apiTarif from '@/api/tarif.json'
import apiLayanan from '@/api/layanan.json'
import apiBerita from '@/api/berita.json'
import CardBerita, { propsBerita } from '@/components/ui/CardBerita';
import { TarifLoading } from "@/components/ui/TarifLoading";
import TarifModal from "@/components/ui/TarifModal";
import TarifCard, { propsTarif } from "@/components/ui/TarifCard";
import Jumbotron from "@/components/Jumbotron";
import EmailModal from "@/components/ui/EmaiModal";
import SliderLayout from "@/components/layout/SliderLayout";
import CardLayanan, { propsLayanan } from "@/components/ui/CardLayanan";
import ModalLayanan from "@/components/ui/Layanan/ModalLayanan";
import Image from "next/image";
import apiContact from '@/api/contact.json'
import { headers } from "next/headers";
import { contact } from "@/components/Footer";
import ResponsiveLayout from "@/components/layout/ResponsiveLayout";
import { IoDocumentText } from "react-icons/io5";
import CardOffice from "@/components/ui/CardOffice";
import CardTravoy from "@/components/ui/CardTravoy";
import InfoTol from "@/components/ui/Home/InfoTol";

export type Props =
	{
		searchParams:
		| Record<
			string,
			string
		>
		| null
		| undefined;
	};
export default async function Home({
	searchParams
}: {
	searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
	const parameter = await searchParams;
	const tarifID = parameter?.id;
	const tarifModal = parameter?.tarifmodal === "true";
	// const formModal = parameter?.id;
	const modalLayanan = parameter?.layanan === "true";
	const idlayanan = parameter?.idlayanan;
	const contactmodal = parameter?.shown === "true";
	const formShown = parameter?.shown === "true";
	const headerList = await headers();
	const pathname = headerList.get('x-pathname');
	const url = new URL(pathname ? pathname : "", process.env.FE_URL)

	return (
		<div>
			<section className="pt-18 md:pt-0">


				<video
					src="/video/videojbt.mp4"
					className=" min-h-full w-full brightness-50"
					autoPlay={
						true
					}
					loop
					muted></video>
				<div className="hidden md:block container  absolute top-20  mx-auto left-0 right-0  text-left  mt-10">
					<div className="max-w-3xl">

						<h2 className="text-4xl font-bold  text-white ">
							Solusi Mobilitas Andal untuk Perjalanan Tanpa Kendala
						</h2>
						<p className="text-gray-200 leading-normal text-lg py-2">Tol Bali Mandara hadir untuk mendukung pertumbuhan ekonomi dan pariwisata dengan jalur transportasi yang efisien, aman, dan berstandar internasional.</p>
					</div>
					<div className="py-20">

						<Link href={"/tentangkami"} className="inline-flex items-center border-2 border-white py-2 px-2.5 text-white hover:bg-second hover:border-second hover:text-main duration-200 font-bold rounded-lg">
							Tentang Kami
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
				<div className="  container relative bottom-1 md:bottom-25  left-0 right-0 ml-auto mr-auto  ">
					<div className="bg-main p-4 rounded-b-3xl md:rounded-4xl container mx-auto">
						<div className="pb-5">

							<p className="text-sm md:text-md text-gray-200 font-light tracking-wide text-center">Sekilas mengenai informasi dan fasilitas Tol Bali Mandara</p>
						</div>
						<div className="md:flex md:flex-row grid grid-cols-2 items-center justify-center gap-[20px] md:divide-x-4 border-white py-4">
							<div className="flex justify-between gap-[20px] px-4 border-white">
								<div className="">
									<img src="/image/Icon/motorway.png" className="h-12 md:h-16" alt="" srcSet="" />
								</div>
								<div>
									<h1 className="text-white font-bold text-xl md:text-4xl pb-4">12,8 KM</h1>
									<p className="text-white font-light text-md w-full tracking-wide">Panjang Jalan</p>
								</div>
							</div>
							<div className="flex justify-between gap-[20px] px-4  border-white">
								<div className="">
									<img src="/image/Icon/toll-road.png" className="h-12 md:h-16" alt="" srcSet="" />
								</div>
								<div>
									<h1 className="text-white font-bold text-xl md:text-4xl pb-4">3</h1>
									<p className="text-white font-light text-md w-full tracking-wide">Gerbang Tol</p>
								</div>
							</div>
							<div className="flex justify-between gap-[20px] px-4 border-white">
								<div className="">
									<img src="/image/Icon/cctv-camera.png" className="h-12 md:h-16" alt="" srcSet="" />
								</div>
								<div>
									<h1 className="text-white font-bold text-xl md:text-4xl pb-4">90</h1>
									<p className="text-white font-light text-md w-full tracking-wide">Kamera CCTV</p>
								</div>
							</div>
							<div className="flex justify-between gap-[20px] px-4 border-white">
								<div className="">
									<img src="/image/Icon/screen.png" className="h-12 md:h-16" alt="" srcSet="" />
								</div>
								<div>
									<h1 className="text-white font-bold text-xl md:text-4xl pb-4">10</h1>
									<p className="text-white font-light text-md w-full tracking-wide">DMS / VMS</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<InfoTol/>
			<section className="bg-center mx-auto  container bg-cover bg-no-repeat bg-[url('/image/sekilas-layanan.jpg')] bg-blue-900 bg-blend-multiply rounded-4xl my-12">
				<div className="px-4 mx-auto max-w-screen-lg text-center py-12 lg:py-24">
					<h1 className="mb-4 text-2xl font-bold tracking-tight leading-none text-white md:text-4xl">
						Layanan Terintegrasi untuk Perjalanan yang Lebih Baik
					</h1>
					<p className="mb-4 text-md font-normal text-gray-300 md:text-lg sm:px-16 lg:px-48">
						Kami menghadirkan layanan terpadu yang mendukung perjalanan lebih cepat, nyaman, dan aman di Tol Bali Mandara.
					</p>
					<div className="">
						<Link
							href="/layanan"
							className="inline-flex justify-center bg-second duration-200 hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base text-center text-main font-semibold rounded-lg  hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
							Selengkapnya
						</Link>
					</div>
				</div>
				<div className="pb-5 px-5 md:pb-12 md:px-12 ">

					<ResponsiveLayout>

						{
							apiLayanan["data"].map((res: propsLayanan, idx: number) => (
								<CardLayanan key={idx} {...res} />
							))
						}

					</ResponsiveLayout>

				</div>

			</section>
			<section className="py-24 bg-top w-full md:bg-cover min-h-screen  bg-no-repeat   bg-[url('/image/frameTarif.jpg')]">
				<div className=" mx-auto  text-center py-12 lg:py-24 container md:container px-5">
					<div className="md:flex md:justify-between gap-4 ">
						<div className="bg-main p-5 md:p-8 md:w-[60%] lg:w-[30%] text-left   rounded-2xl flex flex-col  ">
							<div className="py-2">
								<img
									src="/image/Icon/tarif.png"
									className="h-8 w-8 md:h-24 md:w-24"
									alt=""
								/>
								<h1 className="text-md md:text-4xl font-bold text-white ">
									Tarif
									Tol
									Bali
									Mandara
								</h1>
							</div>
							<div className="h-full">
								<div className="border-2 border-white rounded-3xl p-5">

									<p className="text-sm md:text-base text-justify text-gray-200 tracking-wide font-light align-top md:pb-4 ">
										Berdasarkan Keputusan Menteri Pekerjaan Umum dan Perumahan Rakyat Nomor: 769/KPTS/M/2024,  tentang Penyesuaian Tarif Tol pada Jalan Tol Bali Mandara (Nusa Dua – Ngurah Rai – Benoa), maka terhitung mulai Sabtu, 27 April 2024, pukul 00:00 Wita, Jalan Tol Bali Mandara memberlakukan tarif baru sebagai berikut:
									</p>
									<div className="flex md:flex-row items-center content-center">

										<div className={"p-2  rounded-xl bg-[#B8C5EF]"}>
											<IoDocumentText className="inline-block w-7 h-7 text-main" />
										</div>
										<div className="md:px-3">

											<a className=" border-b-2 border-transparent hover:border-b-2 hover:border-white text-base md:text-base inline-flex items-center text-gray-100 tracking-wide font-bold " target="_blank" href={"/doc/setariftol.pdf"}>
												769/KPTS/M/2024
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
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className="content">

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
						<div className="grid grid-cols-3 gap-2 gap-y-6 md:gap-6 py-2">
							{
								apiTarif["data"].map((res: propsTarif, key: number) => (
									<TarifCard key={key} {...res} />
								))
							}


						</div>
					</div>
				</div>
				<div className="md:container md:mx-auto items-center justify-center flex  py-8">
					<Jumbotron />
				</div>
			</section>
			<section className="bg-center mx-auto w-full  md:container bg-cover bg-no-repeat bg-[url('/image/sekilas-layanan.jpg')] bg-blue-900 bg-blend-multiply rounded-4xl my-12">
				<div className="px-4 mx-auto max-w-screen-lg text-center py-12 lg:py-24">
					<h1 className="mb-4 text-2xl font-bold md:font-black tracking-tight leading-none text-white md:text-4xl">
						Berita
						Terkini
					</h1>
					<p className="mb-4 text-md font-normal text-gray-300 md:text-lg sm:px-16 lg:px-48">
						Kami
						menghadirkan
						layanan
						terpadu
						yang
						mendukung
						perjalanan
						lebih
						cepat,
						nyaman,
						dan aman
						di Tol
						Bali
						Mandara.
					</p>
					<div className="">
						<Link
							href="/berita"
							className="inline-flex justify-center bg-second hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base text-center text-main font-semibold rounded-lg  hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
							Telusuri
							Berita
							Lainnya!
						</Link>
					</div>
				</div>
				<div className="p-4 md:p-12 ">
					<SliderLayout shown={4} infinite={true}>
						{
							apiBerita["data"].map((res: propsBerita, idx: number) => (

								<CardBerita key={idx} {...res} />
							))
						}
					</SliderLayout>

				</div>

			</section>
			<section className="bg-center mx-auto w-full  md:container bg-cover bg-no-repeat bg-[url('/image/sekilas-layanan.jpg')] bg-blue-900 bg-blend-multiply rounded-4xl my-12">
				<div className="px-4 mx-auto max-w-screen-lg text-center py-12 lg:py-24">
					<h1 className="mb-4 text-2xl font-bold md:font-black tracking-tight leading-none text-white md:text-4xl">
						Pengumuman Tender
					</h1>
					<p className="mb-4 text-md font-normal text-gray-300 md:text-lg sm:px-16 lg:px-48">
						Pengumuman Tender Jasamarga Bali Tol dapat mengunjungi situs berikut:
					</p>
					<div className="">
						<a
							href="https://drp.jasamargabalitol.co.id/pengumuman"
							target="_blank"
							className="inline-flex justify-center bg-second hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base text-center text-main font-semibold rounded-lg  hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
							DRP Jasamarga Bali Tol
						</a>
					</div>
				</div>


			</section>
			<section className="rounded-t-3xl md:py-20 bg-[#F4F4F4]">
				<div className="container mx-auto md:grid md:grid-cols-6 gap-4 ">
					<div className="md:col-span-2">
						<CardOffice />
					</div>
					<div className="md:col-span-4 py-2 ">
						<iframe className="rounded-3xl w-full h-[50vh] md:h-full" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Jl.%20Raya%20Pelabuhan%20Benoa%20No.88,%20Pedungan,%20Denpasar%20Selatan,%20Kota%20Denpasar,%20Bali+(Grha%20Bali%20Tol)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
					</div>
				</div>
				<section className="py-2  container mx-auto">
					<div className="py-18">
						<a className="" href={""} target="_blank">

							<Image
								src={"/image/Travoy.png"}
								alt="travoy"
								width={0}
								height={0}
								sizes="100vw"
								className="w-full h-[30vh] md:h-[70vh] "
							/>
						</a>
					</div>
					<div className="grid md:grid-cols-2 gap-4">
						<CardTravoy />
						<div className=" ">
							<div className="rounded-3xl p-5 bg-main-900 mx-auto w-full h-full shadow-xl">
								<h1 className="text-white font-black text-md md:text-2xl text-center">Hubungi Kami</h1>
								<div className=" py-2">
									{
										apiContact["data"].map((res: contact, idx: number) => (
											<div key={idx} className=" flex flex-row gap-4 py-4">
												<div className="p-2 md:p-3 bg-second rounded-2xl w-14 h-14 container  hover:bg-white hover:duration-500" >
													{
														res.link == "-" ? (
															<Link href={"#"} scroll={false} >
																<Image
																	src={res.icon}
																	alt="test"
																	width={0}
																	height={0}
																	sizes="100vw"
																	className="w-8 h-8 text-center mx-auto"
																/>
																{/* <img src={res.icon} className="w-8 h-8 text-center mx-auto" alt="" srcSet="" /> */}
															</Link>
														) : (

															<Link href={{ pathname: url.toString(), query: { shown: true } }} scroll={false}>
																<Image
																	src={res.icon}
																	alt="test"
																	width={0}
																	height={0}
																	sizes="100vw"
																	className="w-8 h-8 text-center mx-auto"
																/>
															</Link>
														)
													}
												</div>
												<div className="div-hubungi-kami  ">
													<h1 className="text-second text-sm md:text-2xl font-bold tracking-wide">{res.nama}</h1>
													<p className=" text-md font-normal tracking-wide leading-none text-second  md:text-2xl">{res.deskripsi}</p>
												</div>
											</div>
										))
									}
								</div>
							</div>
						</div>
					</div>
					{/* <div className=" rounded-3xl p-4 md:p-5 bg-main mx-auto text-center">
						<h1 className="text-white font-bold text-md md:text-3xl">Hubungi Kami, Kapan Saja</h1>
						<div className=" grid md:grid-cols-3 container mx-auto py-8">
							{
								apiContact["data"].map((res: contact, idx: number) => (
									<div key={idx} className=" w-full flex flex-col">
										<div className="p-2 md:p-3 bg-[#8EA0DA] rounded-2xl w-16 container mx-auto hover:bg-white hover:duration-500" >
											{
												res.link != "" ? (
													<a href={res.link} target="_blank">
														<img src={res.icon} className="w-8 h-8 text-center mx-auto" alt="" srcSet="" />
													</a>
												) : (

													<Link href={{ pathname: url.toString(), query: { shown: true } }} scroll={false}>
														<img src={res.icon} className="w-8 h-8 text-center mx-auto" alt="" srcSet="" />
													</Link>
												)
											}
										</div>
										<div className="content py-8">
											<h1 className="text-white text-sm md:text-2xl font-bold tracking-wide">{res.nama}</h1>
											<p className=" text-md font-normal tracking-wide leading-none text-gray-200 py-4 md:text-2xl">{res.deskripsi}</p>
										</div>
									</div>
								))
							}
						</div>
					</div> */}
				</section>
			</section>
			{tarifModal && (
				<Suspense key={tarifID?.toString()} fallback={<TarifLoading />}>
					<TarifModal id={tarifID?.toString()} />
				</Suspense>

			)}
			{contactmodal && (
				<Suspense key={formShown?.toString()} fallback={<TarifLoading />}>
					<EmailModal shown={formShown?.toString()} />

				</Suspense>

			)}
			{modalLayanan && (
				<Suspense key={idlayanan?.toString()} fallback={<TarifLoading />}>
					<ModalLayanan idLayanan={idlayanan?.toString()} />

				</Suspense>

			)}
		</div>
	);
}
