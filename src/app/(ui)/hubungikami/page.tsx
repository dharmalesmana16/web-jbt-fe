import CardOffice from '@/components/ui/CardOffice'
import CardTravoy from '@/components/ui/CardTravoy'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import apiContact from '@/api/contact.json'
import { contact } from '@/components/Footer'
import { headers } from "next/headers";

export default async function Home({
    searchParams
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
    	const parameter = await searchParams;
    const headerList = await headers();
    const pathname = headerList.get('x-pathname');
    const url = new URL(pathname ? pathname : "", process.env.FE_URL)
  return (
    <div>
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
    </div>
  )
}
