import React from 'react'
import { redirect } from "next/navigation";
import Link from 'next/link';

import apiTarif from './../../api/tarif.json'
import { propsTarif } from './TarifCard';

interface tarifModalProps {
	id?: string;
}

export default  function TarifModal({ id }: tarifModalProps) {
	if (!id || isNaN(parseInt(id))) {
		redirect("/");
	}
	// console.log(apiTarif["data"].find((item:any) => item.id === 4))
  // Filter data berdasarkan ID
  	const response = apiTarif["data"].find((item:propsTarif) => item.id === parseInt(id));

  return (
<div className="fixed inset-0 flex items-center justify-center z-10">
			<Link
				className="fixed inset-0 bg-black opacity-75 cursor-default"
				href="/"
				scroll={false}
			/>
            <div className="relative w-full max-w-5xl  p-12 bg-main rounded-3xl shadow-md">
				<div className="flex justify-between items-start">
					<Link
						className="absolute top-2.5 right-2.5 h-6 w-6 bg-black text-white rounded justify-center items-center flex pb-0.5"
						href="/"
						scroll={false}
					>
						&times;
						<span className="sr-only">Close Modal</span>
					</Link>
				</div>
				 <div className="     overflow-auto z-20">
                    <div className="">
                        
                        <div className="text-center ">
                            <div className="pb-2">
                                <h1 className='tracking-wide text-3xl font-bold text-white pb-1'>{response?.nama.toUpperCase()}</h1>
                            </div>
															

                            <div className="pb-5">
                                  <h1 className="text-md md:text-5xl text-second font-bold py-3">
                            {`Rp${response?.harga.toLocaleString('id-ID')}`}
                        </h1>
                            </div>
                            
                            <div className="pb-5">
                                <h1 className='tracking-wide text-xl text-white font-medium pb-1'>Deskripsi:</h1>
                                <p className='tracking-wide text-gray-200'>{response?.deskripsi}</p>
                            </div>
							<div className="flex justify-center gap-6">
								<div className="bg-second p-5 rounded-full">
								<img src={response?.gambar} className=" object-contain  w-72 h-72" alt="" srcSet="" />
								</div>
								
							</div>
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
