'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { FaCheckCircle } from 'react-icons/fa'

export default function AchievementInformation() {
    const [gambar,setGambar] = useState("gambar_satu");
  return (
    <div>
        <section className="py-8 md:py-20 container mx-auto">
				<div className="grid md:grid-cols-2  ">
					<div className="md:px-5 ">
						<h1 className="text-lg md:text-3xl font-semibold text-gray-950">Sebagai bagian dari Jasamarga Group, kami menghadirkan solusi transportasi modern di bali melalui Tol Bali Mandara</h1>
						<p className="text-gray-400 text-md py-5">Dengan standar keselamatan tinggi dan infrastruktur berkualitas kami berkomitmen memberikan pengalaman berkendara terbaik untuk Anda</p>
						<div onMouseEnter={()=>setGambar("gambar_satu")} onClick={()=>setGambar("gambar_satu")} className="bg-gray-100 mb-3 p-4 md:p-8 rounded-3xl border-2 border-transparent hover:border-2 hover:border-main hover:transition-transform hover:scale-102">
							<p className="text-gray-950 text-md md:text-lg tracking-wide inline-flex">
								<FaCheckCircle className=" text-main text-md md:text-2xl md:mr-5 items-center inline-flex" />
								Jalan Tol di Atas Laut Terpanjang di Indonesia
							</p>
						</div>
						<div onMouseEnter={()=>setGambar("gambar_dua")} onClick={()=>setGambar("gambar_dua")} className="bg-gray-100 mb-3 p-4 md:p-8 rounded-3xl border-2 border-transparent hover:border-2 hover:transition-transform hover:border-main  hover:scale-102">
							<p className="text-gray-950 text-md md:text-lg tracking-wide inline-flex">
								<FaCheckCircle className=" text-main text-2xl md:text-2xl md:mr-5 inline-flex" />
								Jalan Tol Pertama yang Memasang Pembangkit Listrik Tenaga Surya (PLTS)
							</p>
						</div>
						<div onMouseEnter={()=>setGambar("gambar_tiga")} onClick={()=>setGambar("gambar_tiga")} className="bg-gray-100 mb-3 p-4 md:p-8 rounded-3xl border-2 border-transparent hover:border-2 hover:border-main hover:transition-transform hover:scale-102">
							<p className="text-gray-950 text-md md:text-lg tracking-wide inline-flex">
								<FaCheckCircle className=" text-main text-2xl md:text-2xl md:mr-5" />
								Meraih Predikat “GOLD” dalam Sertifikasi Green Toll Road Indonesia
							</p>
						</div>

					</div>
					<div className="  ">
							<div className="px-2">
                                
								<Image
									src={gambar == "gambar_satu" ? "/image/konstruksi-2.jpg" : (gambar == "gambar_dua" ? "/image/plts.jpg" : "/image/konstruksi-3.jpg")}
									alt="kantor"
									width={0}
									height={0}
									sizes="100vh"
                                    className='transition ease-in-out  duration-300 h-full w-full rounded-3xl'
									// style={{ width: "100%", height: "100%", borderRadius: "20px" }}
								/>
							</div>
							{/* <div className={"px-2 "+ (gambar == "gambar_dua" ? " transition delay-150 " : "opacity-0 hidden")}>
								<Image
									src={"/image/plts.jpg"}
									alt="kantor2"
									width={0}
									height={0}
									sizes="100vw"

									style={{ width: "100%", height: "100%", borderRadius: "20px" }}
								/>
							</div>
							<div className="px-2 hidden">
								<Image
									src={"/image/konstruksi-3.jpg"}
									alt="kantor3"
									width={0}
									height={0}
									sizes="100vw"

									style={{ width: "100%", height: "100%", borderRadius: "20px" }}
								/>
							</div> */}
					</div>
				</div>
			</section>
    </div>
  )
}
