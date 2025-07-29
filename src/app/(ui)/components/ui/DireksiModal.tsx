import React from 'react'
import { redirect } from "next/navigation";
import Link from 'next/link';

import apiDireksi from './../../api/direksi.json'
import { propsDireksi } from './DireksiCard';
interface direksiModal {
	id?: string;
}

export default async function DireksiModal({ id }: direksiModal) {
	if (!id || isNaN(parseInt(id))) {
		redirect("/tentangkami");
	}
	// console.log(apiDireksi["data"].find((item:any) => item.id === 4))
	// Filter data berdasarkan ID
	const response = apiDireksi["data"].find((item: propsDireksi) => item.id === parseInt(id));
	return (
		<div className="fixed inset-0 flex items-center justify-center z-20">
			<Link
				className="fixed inset-0 bg-black opacity-75 cursor-default"
				href="/tentangkami"
				scroll={false}
			/>
            <div className="relative w-full max-w-5xl  p-20 bg-white rounded-xl shadow-md">
				<div className="flex justify-between items-start">
					<Link
						className="absolute top-2.5 right-2.5 h-6 w-6 bg-black text-white rounded justify-center items-center flex pb-0.5"
						href="/tentangkami"
						scroll={false}
					>
						&times;
						<span className="sr-only">Close Modal</span>
					</Link>
				</div>
				<div className="bg-white     overflow-auto z-20">
					<div className="grid  md:grid-cols-2 ">
						<div className="mx-auto">
							 <img src={response?.file} className=' md:h-[375px]   ' alt="" srcSet="" />
						</div>
						<div className="text-left mx-auto">
							<h1 className="font-bold text-2xl ">
								{response?.nama}
							</h1>
							<h1 className="font-medium text-lg text-gray-400  ">
								{response?.jabatan}
							</h1>
					
							<p className="text-md  my-8 ">{response?.deskripsi}</p>
							{/* <span className="inline-block bg-blue-200 text-blue-800 text-xs px-2 rounded-full uppercase font-semibold tracking-wide">
								{response.category}
							</span> */}
						</div>
					</div>
				</div>
				<div className="pb-3 px-3">
					{/* <button className="h-11 bg-secondary text-secondary-foreground hover:bg-secondary/80 justify-center flex text-center w-full border rounded py-2 text-white hover:bg-white transition-colors duration-300 hover:text-zinc-900 border-zinc-300 hover:border-zinc-900">
						Buy Now
					</button> */}
				</div>
			</div>
		</div>
	)
}
