"use client";

import { initFlowbite } from "flowbite";
import {
	useEffect,
	useState,
} from "react";
import Logo from "./Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
	const [
		bgNav,
		setbgNav,
	] =
		useState(false);
	const path = usePathname();
	// console.log(path == "/" ? "yes":"no");
		useEffect(() => {
		initFlowbite();
		const handleScroll =
			() => {
				if (window.scrollY > 900) {
					setbgNav(
						true
					);
				} else {
					setbgNav(
						false
					);
				}
			};

		window.addEventListener(
			"scroll",
			handleScroll
		);
	}, []);

	return (
		<nav
			className={
				"dark:bg-gray-900 fixed w-full  z-20 top-0 start-0  p-5  md:rounded-b-[3rem] " +
				(path == "/" ? (bgNav
					? "bg-white transition duration-500 shadow-md"
					: "bg-opacity-0 bg-white transition duration-500") : "bg-white transition duration-500 shadow-md")
			}>
			<div className="container flex flex-wrap items-center justify-between mx-auto  ">
				
					     <Link
								href="/"
								className="flex items-center hidden md:block ">
								<img src="/image/logojbt.png" className="w-full h-10 " alt="Dalsfindo Logo" />
							  </Link>
				<button
					data-collapse-toggle="navbar-default"
					type="button"
					className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
					aria-controls="navbar-default"
					aria-expanded="false">
					<span className="sr-only">
						Open
						main
						menu
					</span>
					<svg
						className="w-5 h-5"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 17 14">
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M1 1h15M1 7h15M1 13h15"
						/>
					</svg>
				</button>
				<div
					className="hidden w-full md:block md:w-auto"
					id="navbar-default">
					<ul className="font-medium flex flex-col p-4 md:p-0 mt-4  rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0   ">
					

						<li className="py-2 md:py-0">
							 <Link
								href="/"
								className=" items-center md:hidden ">
								<img src="/image/logojbt.png" className="max-w-sm h-10 " alt="Dalsfindo Logo" />
							  </Link>
						</li>
						<li className="py-2 md:py-0">
							<Link
								href="/"
								className={"text-base text-main  rounded-sm dark:text-main md:dark:text-blue-500 font-normal " + (path == "/" ? "bg-gray-100 py-2 px-3 font-semibold" :" hover:border-2 hover:border-gray-200 border-gray-200 hover:duration-300 py-2 px-3" )}
								aria-current="page">
								Home
							</Link>
						</li>
						<li className="py-2 md:py-0">
							<Link
								href="/tentangkami"
								className={"text-base text-main  rounded-sm  " + (path == "/"  ? (bgNav ? "text-main " : "text-main ") : "text-main") + "dark:text-main md:dark:text-blue-500 font-normal " + (path == "/tentangkami" ? "bg-gray-100 py-2 px-3 font-semibold" : "border-2 border-transparent hover:border-2 hover:border-gray-200 border-gray-200 hover:duration-300 py-2 px-3" )}>
								Tentang
								Kami
							</Link>
						</li>
								<li className="py-2 md:py-0">
							<Link
								href="/layanan"
								className={"text-base text-main  rounded-sm  " + (path == "/"  ? (bgNav ? "text-main " : "text-main ") : "text-main") + "dark:text-main md:dark:text-blue-500 font-normal " + (path == "/layanan" ? "bg-gray-100 py-2 px-3 font-semibold" : "border-2 border-transparent hover:border-2 hover:border-gray-200 border-gray-200 hover:duration-300 py-2 px-3" )}>
								Layanan
							</Link>
						</li>
								<li className="py-2 md:py-0">
							<Link
								href="/laporantahunan"
								className={"text-base text-main  rounded-sm " + (path == "/"  ? (bgNav ? "text-main " : "text-main ") : "text-main") + "dark:text-main md:dark:text-blue-500 font-normal " + (path == "/laporantahunan" ? "bg-gray-100 py-2 px-3 font-semibold" : "border-2 border-transparent hover:border-2 hover:border-gray-200 border-gray-200 hover:duration-300 py-2 px-3" )}>
								Laporan
								Tahunan
							</Link>
						</li>
								<li className="py-2 md:py-0">
							<Link
								href="/berita"
								className={"text-base text-main  rounded-sm  " + (path == "/"  ? (bgNav ? "text-main " : "text-main ") : "text-main") +  "dark:text-main md:dark:text-blue-500 font-normal " + (path == "/berita" ? "bg-gray-100 py-2 px-3 font-semibold" : "border-2 border-transparent hover:border-2 hover:border-gray-200 border-gray-200 hover:duration-300 py-2 px-3" )}>
								Berita
								&
								Publikasi
							</Link>
						</li>
						{/* Mobile View */}
					
						{/* End Mobile View */}
					</ul>
				</div>

				<div className="hidden md:block">
					<a
						href="/"
						className="text-sm text-blue-800 font-semibold  bg-amber-300 p-3 rounded-xl">
						Hubungi
						Kami
					</a>
				</div>
			</div>
		</nav>
	);
}