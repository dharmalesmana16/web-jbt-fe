import React from "react";
import SubHeader from "./ui/SubHeader";
import Image from "next/image";

export default function HeaderPage({ cover, textLeft, textRight }: any) {
	return (
		<div>
			<section className="bg-[#F8FAFF] rounded-br-[3rem]  pt-28 top-full shadow-xl relative z-10 ">
				<div className="mx-auto container">
					{cover ? (
						<Image
							src={`/image/${cover}`}
							alt="kantor"
							width={0}
							height={0}
							sizes="100vw"
							loading="lazy"
							className="w-full h-[25vh] md:h-full rounded-3xl"
							// style={{ width: "100%", height: "100%", borderRadius: "20px" }}
						/>
					) : (
						""
					)}

					<div className="px-4  py-12 grid md:grid-cols-6">
						<div className="pb-2 max-w-2xl  col-span-4">
							<h1 className="text-main tracking-wide font-semibold text-xl md:text-4xl">
								{textLeft}
							</h1>
						</div>
						<div className=" w-full col-span-2">
							<SubHeader value={textRight} />
							{/* <p className="leading-normal text-gray-500 text-md ">
								{" "}
							</p> */}
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
