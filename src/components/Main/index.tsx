"use client";

import { IconArrowRight, IconArrowUpRight } from "@tabler/icons-react";
import Marquee from "react-fast-marquee";
import Footer from "../Footer";
import Image from "next/image";
import { AboutUSCover } from "@/assets";
import Link from "next/link";
import MiniWindow from "../MiniWindow";
import { useRef } from "react";
import MDCraft from "../MiniWindows/MDCraft";
import Surface from "../MiniWindows/Surface";
import WeatherReportoNvim from "../MiniWindows/WeatherReportoNvim";
import URLShortner from "../MiniWindows/UrlShortner";

export default function Main() {
	const componentRef = useRef(null);

	return (
		<main className="min-h-screen w-full bggreen graph-paper select-none">
			<section className="border-b border-black h-screen w-full flex flex-col items-center justify-center relative overflow-clip">
				<h1 className="font-filgen text-7xl md:text-[150px] z-10">
					BITSPACE
				</h1>
				<h1 className="animate-pulse font-mono z-10 text-sm md:text-lg cursor-pointer">
					[ Know More About Us ( &darr; ) ]
				</h1>
				<section className="absolute bottom-10">
					<Marquee className="bg-[#FFEA00] p-3 border-black border-y font-medium font-mono">
						We are an organisation fostering innovation and
						providing a platform for young coders to showcase their
						skills through open-source projects.&nbsp; &#10209;
						&nbsp;
					</Marquee>
				</section>
			</section>

			<section className="border-b border-black hscreen min-h-screen w-full text-7xl flex items-center justify-center px-10 md:px-24 md:h-screen p-10">
				<section className=" flex flex-col items-start justify-center flex-[2]  md:px-10 md:border-x border-black min-h-screen">
					<h1 className="font-filgen text-center md:text-7xl text-6xl">
						About Us
					</h1>
					<section className="flex flex-col gap-y-2 text-lg font-light">
						<p>
							<span className="font-bold font-glb">
								:bitspace{" "}
							</span>
							🌟 is an innovative organization by design. We
							thrive on{" "}
							<span className="font-bold">empowering</span> young
							coders to showcase their skills through
							transformative open-source projects.
						</p>
						<p>
							We champion a culture of{" "}
							<span className="font-bold">
								open collaboration{" "}
							</span>
							and
							<span className="font-bold">
								{" "}
								knowledge sharing
							</span>
							, encouraging the creation of cutting-edge
							technology solutions that uplift the global
							community. ✨
						</p>
						<p>
							Our mission 🚀 is to offer enriching learning
							experiences and invaluable resources, sparking
							<span className="font-bold"> inspiration </span>in
							the next generation of software developers and
							entrepreneurs.
						</p>
						<p>
							At the heart of :bitspace 🩷 is a passionate team
							that values{" "}
							<span className="font-bold">
								{" "}
								quality, transparency, and accountability.{" "}
							</span>
							We’re a community-driven organization perfect for
							developers at any stage of their journey💥.
						</p>
					</section>

					<Link
						href="/about"
						className="bg-accent p-2 px-5 text-lpurple text-xl inline-flex items-center justify-center mt-5"
					>
						Know More <IconArrowRight />
					</Link>

					<section className="flex items-center  border-x-8 border-accent p-2 mt-5">
						<h1 className=" font-glb md:text-[200px] leading-none text-8xl">
							WE
						</h1>
						<section className="font-glb text-xl  md:text-5xl">
							<h1>Learn.</h1>
							<h1>Collabrate.</h1>
							<h1>Grow.</h1>
						</section>
					</section>
				</section>

				<section className=" flex-[1] relative border-x border-black min-h-screen hidden lg:block">
					<Image
						src={AboutUSCover}
						alt="about-us-cover"
						fill
						className="object-cover"
					/>
				</section>
			</section>

			<section
				ref={componentRef}
				className="relative border-b border-black min-h-screen h-full w-full text-7xl flex flex-col p-20 px-6 items-center justify-center"
			>
				<MiniWindow componentRef={componentRef}>
					<MDCraft />
				</MiniWindow>
				<MiniWindow componentRef={componentRef}>
					<Surface />
				</MiniWindow>
				<MiniWindow componentRef={componentRef}>
					<WeatherReportoNvim />
				</MiniWindow>
				<MiniWindow componentRef={componentRef}>
					<URLShortner />
				</MiniWindow>

				<h1 className="font-filgen pb-10 text-center">Our Products</h1>
				<section className="text-xl grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 grid-row-2 items-stretch  flex-grow md:flex-grow-0">
					<section className="bg-pwhite relative flex items-center justify-center h-36 w-36 rounded-3xl md:col-start-3 md:w-auto md:h-56 lg:w-56">
						<h1 className="text-2xl font-glb">URL SHORTHER</h1>
						<div className="border rounded-3xl p-1 absolute bottom-5 left-5 flex">
							<IconArrowUpRight />
						</div>
					</section>

					<section className="relative bg-pwhite drop-shadow flex items-center justify-center w-36 row-span-2 rounded-3xl md:row-start-1 md:col-span-2 md:row-span-1 md:w-auto md:h-56">
						<h1 className="text-2xl font-glb">MD-CRAFT</h1>
						<div className="border rounded-3xl p-1 absolute bottom-5 left-5 flex">
							<IconArrowUpRight />
						</div>
					</section>

					<section className="relative bg-pwhite flex items-center justify-center h-36 w-36 rounded-3xl md:col-span-2 md:col-start-2 md:w-auto md:h-56">
						<h1 className="text-2xl font-glb">WEATHER REPORTO</h1>
						<div className="border rounded-3xl p-1 absolute bottom-5 left-5 flex">
							<IconArrowUpRight />
						</div>
					</section>

					<section className="relative bg-pwhite flex items-center justify-center h-36 rounded-3xl col-span-2 md:col-start-4 md:row-start-1 md:col-span-1 md:row-span-2 md:h-auto md:w-auto lg:w-56">
						<h1 className="text-2xl font-glb">SURFACE</h1>
						<div className="border rounded-3xl p-1 absolute bottom-5 left-5 flex">
							<IconArrowUpRight />
						</div>
					</section>

					<section className="relative bg-pwhite flex items-center justify-center h-36 rounded-3xl col-span-2 md:col-span-1 md:row-start-2 md:h-56 md:w-auto lg:w-56">
						<h1 className="text-2xl font-glb">COMMING SOON</h1>
						<div className="border rounded-3xl p-1 absolute bottom-5 left-5 flex">
							<IconArrowUpRight />
						</div>
					</section>
				</section>
			</section>

			<section className="border-b border-black h-screen w-full text-7xl flex items-center justify-center">
				EVENTS
			</section>
			<Footer />
		</main>
	);
}
