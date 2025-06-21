'use client'
import React from "react";
import apiContact from '../api/contact.json'
import Link from "next/link";
import { FaInstagram, FaLocationDot, FaSquarePhone, FaTiktok, FaYoutube } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { usePathname } from "next/navigation";
type contact = {
	id: number;
	nama: string;
	icon: string;
	deskripsi: string;
	link?: string;
}
export default function Footer() {
	const path = usePathname();
	// const headerList = await headers();
	// const pathname = headerList.get('x-pathname');
	const url = new URL(path ? path : "", "http://localhost:3000")
	// console.log(pathname)
	return (
		<footer className="bg-[#F4F4F4] shadow-lg w-[100%] top-full sticky ">
			<div className="mx-auto  w-full p-4 ">
				{
					path == "/" ? (
						<section className="py-18  container mx-auto">
							<div className=" rounded-3xl p-4 md:p-5 bg-main mx-auto text-center">
								<h1 className="text-white font-bold text-md md:text-3xl">Hubungi Kami, Kapan Saja</h1>
								<div className=" grid grid-cols-3 container mx-auto py-8">
									{
										apiContact["data"].map((res: contact, idx: number) => (
											<div key={idx} className=" w-full flex flex-col">
												<div className="p-2 md:p-3 bg-[#8EA0DA] rounded-2xl w-16 container mx-auto hover:bg-white hover:duration-500" >
													{
														res.link != "" ? (
													<a href={res.link} target="_blank">
														<img src={res.icon} className="w-8 h-8 text-center mx-auto" alt="" srcSet="" />
													</a>
														):(

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
							</div>
						</section>
					) : ""
				}

				<div className="md:flex md:justify-between container mx-auto py-20 ">
					<div className="mb-6 md:mb-0">
						<div className="md:pb-20">

						<img src="/image/logojbt.png" alt="" srcSet="" />
						</div>

						<div className="flex w-full justify-end">
							<div className="px-2">
								<div className="border-2 border-main p-2 rounded-full hover:bg-second duration-100">
									<a href="https://www.instagram.com/jasamargabalitol_official/" target="_blank" >
										<FaInstagram className="text-main text-2xl" />
									</a>
								</div>
							</div>
							<div className="px-2">

								<div className="border-2 border-main p-2 rounded-full hover:bg-second duration-100">
									<a href="https://www.tiktok.com/@jasamargabalitol?is_from_webapp=1&sender_device=pc" target="_blank" >
										<FaTiktok className="text-main text-2xl" />
									</a>
								</div>
							</div>
							<div className="px-2">

								<div className="border-2 border-main p-2 rounded-full hover:bg-second duration-100">
									<a href="https://www.youtube.com/@jasamargabalitol3838" target="_blank" >
										<FaYoutube className="text-main text-2xl" />
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="grid grid-cols-2 gap-4 sm:gap-12 ">
						<div>
							<h2 className="mb-6 text-sm md:text-lg font-semibold tracking-wide  text-main uppercase dark:text-white">
								KENALI JASAMARGA BALI TOL
							</h2>
							<ul className="text-gray-500 dark:text-gray-400 font-medium">
								<li className="mb-4">
									<Link
										href="/"
										className="hover:underline">
										Beranda
									</Link>
								</li>
								<li className="mb-4">
									<Link
										href="/tentangkami"
										className="hover:underline">
										Tentang Kami
									</Link>
								</li>
								<li className="mb-4">
									<Link
										href="/layanan"
										className="hover:underline">
										Layanan
									</Link>
								</li>
								<li>
									<Link
										href="/laporantahunan"
										className="hover:underline">
										Laporan Tahunan
									</Link>
								</li>
							</ul>
						</div>
						<div className="container">
							<h2 className="mb-6 text-sm md:text-lg tracking-wide font-semibold text-main uppercase dark:text-white">
								HUBUNGI KAMI
							</h2>
							<ul className="text-gray-500 dark:text-gray-400 font-medium">
								<li className="mb-4">
									<Link
										href="#"
										className="group hover:text-gray-900 text-sm tracking-light ">
										<FaLocationDot className="text-lg inline-block group-hover:text-second duration-200" /> Jl Raya Pelabuhan Benoa No.88 Kota Denpasar, Bali 80222
									</Link>
								</li>
								<li className="mb-4">
									<Link
										href="#"
										className="group hover:text-gray-900 text-sm tracking-light ">
										<FaSquarePhone className="text-lg inline-block group-hover:text-second duration-200" /> 14080 (Call Center)
									</Link>
								</li>
								<li className="mb-4">
									<Link
										href="#"
										className="group hover:text-gray-900 text-sm tracking-light ">
										<MdEmail className="text-lg inline-block group-hover:text-second duration-200 group-hover:scale-105" /> humas@jasamargabalitol.co.id
									</Link>
								</li>
								<li className="mb-4 ">
									<Link
										href="#"
										className="group hover:text-gray-900  text-sm tracking-light ">
										<FaSquarePhone className="text-lg inline-block group-hover:text-second duration-200 " /> 0361 725326
									</Link>
								</li>

							</ul>
						</div>

					</div>
				</div>
				<hr className="my-6 border-gray-300 container sm:mx-auto dark:border-gray-700 lg:my-8" />
				<div className="container sm:flex sm:items-center sm:justify-between  mx-auto">
					<span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">

						<Link
							href="/"
							className="hover:underline">
							PT. Jasamarga Bali Tol
						</Link>

					</span>
				
				</div>
			</div>
		</footer>
	);
}
