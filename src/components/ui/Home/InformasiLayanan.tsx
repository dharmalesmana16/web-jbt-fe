import Link from "next/link";
import React from "react";
import ResponsiveLayout from "../../layout/ResponsiveLayout";
import CardLayanan, { propsLayanan } from "../CardLayanan";
import apiLayanan from "@/api/layanan.json";

export default function InformasiLayanan() {
	return (
		<section className="bg-center mx-auto  container bg-cover bg-no-repeat bg-[url('/image/sekilas-layanan.jpg')] bg-blue-900 bg-blend-multiply rounded-4xl my-12">
			<div className="px-4 mx-auto max-w-screen-lg text-center py-12 lg:py-24">
				<h1 className="mb-4 text-2xl font-bold tracking-tight leading-none text-white md:text-4xl">
					Layanan Terintegrasi untuk Perjalanan yang Lebih Baik
				</h1>
				<p className="mb-4 text-md font-normal text-gray-300 md:text-lg sm:px-16 lg:px-48">
					Kami menghadirkan layanan terpadu yang mendukung perjalanan
					lebih cepat, nyaman, dan aman di Tol Bali Mandara.
				</p>
				<div className="">
					<Link
						href="/layanan"
						className="inline-flex justify-center bg-second duration-200 hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base text-center text-main font-semibold rounded-lg  hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
					>
						Selengkapnya
					</Link>
				</div>
			</div>
			<div className="pb-5 px-5 md:pb-12 md:px-12 ">
				<ResponsiveLayout>
					{apiLayanan["data"].map(
						(res: propsLayanan, idx: number) => (
							<CardLayanan key={idx} {...res} />
						),
					)}
				</ResponsiveLayout>
			</div>
		</section>
	);
}
