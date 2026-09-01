"use client";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import apiHeader from "./../../../api/headerberita.json";
export default function Jumbotron() {
	return (
		<Carousel
			showArrows={true}
			autoPlay
			infiniteLoop
			showIndicators={true}
			showThumbs={false}
			showStatus={false}
		>
			{apiHeader.data.map((item: any, index: number) => (
				<div className="relative bg-black/40 backdrop-brightness-75">
					<img
						src={`/image/berita/header/${item.image}`}
						className="w-full h-full object-fit inset-0  brightness-50"
						alt=""
						srcSet=""
					/>

					<div className="hidden md:block max-w-3xl  absolute top-20   ml-auto mr-auto left-80 -right-80  text-left  mt-10">
						{item.title != "" ||
							(item.deskripsi != "" && (
								<div className="">
									<div className="bg-second p-1 rounded-xl w-32 text-center mb-5">
										<p className="text-main font-normal text-md tracking-wide">
											Berita Terbaru
										</p>
									</div>
									<div className="max-w-3xl">
										<h1 className="text-white text-3xl font-bold">
											Tingkatkan Kepatuhan di Jalan Tol,
											PT Jasamarga Bali Temu Pelanggan
										</h1>
										<p className="text-gray-500 leading-normal text-lg text-white">
											Dengan standar keselamatan tinggi
											dan infrastruktur berkualitas, kami
											berkomitmen memberikan pengalaman
											berkendara terbaik untuk Anda.
										</p>
									</div>
								</div>
							))}
					</div>
				</div>
			))}

			{/* <div className="">

            <img src="/image/berita/cover-berita-dua.png" className='w-full h-full' alt="" srcSet="" />
          </div> */}
		</Carousel>
	);
}
