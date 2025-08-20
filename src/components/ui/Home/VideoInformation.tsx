import React from 'react'
import Link from 'next/link'
export default function VideoInformation() {
  return (
    <div><video
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
				</div></div>
  )
}
