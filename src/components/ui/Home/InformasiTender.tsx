import React from "react";
import SubHeader from "../SubHeader";

export default function InformasiTender() {
	return (
		<section className="bg-center mx-auto w-full  md:container bg-cover bg-no-repeat bg-[url('/image/sekilas-layanan.jpg')] bg-blue-900 bg-blend-multiply rounded-4xl my-12">
			<div className="px-4 mx-auto max-w-screen-lg text-center py-12 lg:py-24">
				<h1 className="mb-4 text-2xl font-bold md:font-black tracking-tight leading-none text-white md:text-4xl">
					Pengumuman Tender
				</h1>
				<SubHeader
					value="Pengumuman Tender Jasamarga Bali Tol dapat mengunjungi
            situs berikut:"
					className="mb-4"
					bgWhite={false}
				/>
				{/* <p className="mb-4 text-md font-normal text-gray-300 md:text-lg sm:px-16 lg:px-48">
            Pengumuman Tender Jasamarga Bali Tol dapat mengunjungi
            situs berikut:
        </p> */}
				<div className="">
					<a
						href="https://drp.jasamargabalitol.co.id/pengumuman"
						target="_blank"
						className="inline-flex justify-center bg-second hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base text-center text-main font-semibold rounded-lg  hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
					>
						DRP Jasamarga Bali Tol
					</a>
				</div>
			</div>
		</section>
	);
}
