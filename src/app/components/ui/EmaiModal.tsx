import React from 'react'
import { redirect } from "next/navigation";
import Link from 'next/link';


interface formModal {
	shown?: string;
}

export default async function EmailModal({ shown }: formModal) {
	if (!shown) {
		redirect("/");
	}
	
	return (
		<div className="fixed inset-0 flex items-center justify-center z-10 ">
			<Link
				className="fixed inset-0 bg-black opacity-75 cursor-default"
				href="/"
				scroll={false}
			/>
			<div className="relative w-full max-w-5xl bg-main rounded-3xl shadow-md">
				<div className="flex justify-between items-start">
					<Link
						className="absolute top-2.5 right-2.5 h-6 w-6 bg-black text-white rounded justify-center items-center flex "
						href="/"
						scroll={false}
					>
						&times;
						<span className="sr-only">Close Modal</span>
					</Link>
				</div>
				<div className=" rounded-lg  mx-auto  z-20">

					<div className="grid md:grid-cols-2 ">
						<div className=" mix-blend-multiply   ">
							<img src="/image/walpapper-dummy.jpg" className="h-[600px] max-h-full w-full rounded-tr-3xl "  alt="" srcSet="" />
						</div>
						<div className="p-5 h-full items-center">
							<h1 className='font-medium text-xl text-white'>Butuh Bantuan?</h1>
							<h1 className='font-semibold text-xl text-white'>Hubungi Kami !</h1>
							<p className='text-gray-300 font-normal text-sm '>Ada pertanyaan seputar Tol Bali Mandara? Isi formulir di bawah ini atau hubungi kami langsung.</p>
							<form className="max-w-lg pt-12">
								<div className="mb-5">
									<label className="block mb-2 text-sm font-medium  text-white">Nama</label>
									<input type="nama" id="nama" name="nama" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
								</div>
								<div className="mb-5 grid md:grid-cols-2 gap-2">
									<div className="">

										<label className="block mb-2 text-sm font-medium  text-white">Email</label>
										<input type="email" id="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
									</div>
									<div className="">

										<label className="block mb-2 text-sm font-medium  text-white">No. Telepon</label>
										<input type="telp" id="telp" name='telp' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
									</div>
								</div>
								<div className="">
									<label className="block mb-2 text-sm font-medium  text-white">Pesan</label>
									<textarea id="message" rows={4} name='pesan' className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
								</div>
								<div className="mt-5 text-end">

								<button type="submit" className="text-main font-bold bg-second hover:scale-105 duration-500 focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Kirim</button>
								</div>
							</form>
						</div>
					</div>
				</div>
				
			</div>
		</div>
	)
}
