import Link from "next/link";
import React from "react";

export type propsBerita = {
	id: number,
	nama: string,
	tanggal: string,
	deskripsi: any,
	gambar: string,
	link_published: string,
	slug: string
}

export default function CardBerita(props: propsBerita) {
	return (
		<div className="relative px-2 ">
			<img src={props.gambar} alt="" srcSet="" className=" rounded-lg h-[250px] brightness-50" />
			<div className="absolute bottom-0 left-0 right-0 px-4 py-5  opacity-80  w-full	 md:max-w-sm flex flex-col">
				<div className="h-full">

				<h5 className="mb-2 text-sm md:text-xl font-bold tracking-tight text-white">
					{props.nama.length > 100 ? `${props.nama.substring(0,95) + "..."}` : props.nama }
				</h5>
				</div>
				
				<div className="flex flex-col md:flex-row justify-between h-full">
		 			<div className="">
		 				<p className='text-white text-md m font-normal text-md tracking-normal'>{props.tanggal}</p>
		 			</div>
		 			{
		 				props.link_published != null ? (
		 					<div className="">
		 						<Link className='text-white font-normal tracking-light text-md' href="#">{props.link_published}</Link>
		 					</div>
		 				) : ""
		 			}

		 		</div>
					 		<div className="h-full">
		 			<Link href={`/berita/${props.slug}`}
		 				className="inline-flex items-center  text-sm font-medium py-2 px-3 bg-main text-white hover:bg-blue-950  rounded-lg hover:text-white   ">
		 				Selengkapnya
		 				<svg
		 					className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
		 					aria-hidden="true"
		 					xmlns="http:www.w3.org/2000/svg"
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
		</div>
		// <div  className="flex flex-col max-w-sm p-6 h-72 content-end  bg-[url('/image/sekilas-layanan.jpg')] bg-gray-400 bg-blend-multiply bg-cover bg-no-repeat rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
		// 	<div className="">
		// 		<div>
		// 			<h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-white">
		// 				{props.nama}
		// 			</h5>
		// 		</div>

		// 		<div className="flex justify-between ">
		// 			<div className="">
		// 				<p className='text-white font-normal text-md tracking-normal'>{props.tanggal}</p>
		// 			</div>
		// 			{
		// 				props.link_published != null ? (
		// 					<div className="">
		// 						<Link className='text-white font-normal tracking-light text-md' href="#">{props.link_published}</Link>
		// 					</div>
		// 				) : ""
		// 			}

		// 		</div>
		// 		<div className=" mt-5">
		// 			<Link href={`/berita/${props.slug}`}
		// 				className="inline-flex items-center  text-sm font-medium py-2 px-3 bg-main text-white hover:bg-blue-950  rounded-lg hover:text-white   ">
		// 				Selengkapnya
		// 				<svg
		// 					className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
		// 					aria-hidden="true"
		// 					xmlns="http://www.w3.org/2000/svg"
		// 					fill="none"
		// 					viewBox="0 0 14 10">
		// 					<path
		// 						stroke="currentColor"
		// 						strokeLinecap="round"
		// 						strokeLinejoin="round"
		// 						strokeWidth="2"
		// 						d="M1 5h12m0 0L9 1m4 4L9 9"
		// 					/>
		// 				</svg>
		// 			</Link>
		// 		</div>
		// 	</div>
		// </div>
	);
}
