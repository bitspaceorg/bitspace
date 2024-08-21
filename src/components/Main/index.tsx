"use client";

import { IconArrowUpRight, IconInfoCircle } from "@tabler/icons-react";
import Marquee from "react-fast-marquee";
import Footer from "../Footer";
import Image from "next/image";
import { AboutUSCover } from "@/assets";
import Link from "next/link";
import MiniWindow from "../MiniWindow";
import { ReactNode, useRef, useState } from "react";
import Zide from "../MiniWindows/Zide";
import Surface from "../MiniWindows/Surface";
import WeatherReportoNvim from "../MiniWindows/WeatherReportoNvim";
import Stand from "../MiniWindows/Stand";

export interface PopProp {
	zide: ReactNode;
	stand: ReactNode;
	weather_reporto: ReactNode;
	surface: ReactNode;
	[key: string]: ReactNode;
}

export default function Main() {
	const componentRef = useRef(null);

	const [popups, setPopups] = useState<PopProp>({
		zide: null,
		stand: null,
		weather_reporto: null,
		surface: null,
	});

	return (
		<main className="min-h-screen font-inter w-full bg-[#fbfbf2]  select-none">
			<section className="border-b border-black h-screen w-full flex flex-col justify-center relative overflow-clip">
				<h1 className="font-inter font-semibold text-7xl md:text-[150px] z-10 pl-10">
					:bitspace
				</h1>
				<p className="absolute bottom-10 right-0 font-inter font-medium text-[75px]  p-10 animate-pulse">
					↓
				</p>
				<section className="absolute bottom-10">
					<Marquee className="bg-[#FFEA00] p-2 w-full border-black border-y font-medium font-filgen">
						Every Bit is Open to All - Every Bit is Open to All -
						Every Bit is Open to All - Every Bit is Open to All -
						Every Bit is Open to All - Every Bit is Open to All -
						Every Bit is Open to All - Every Bit is Open to All
						-&nbsp;
					</Marquee>
				</section>
			</section>

			<section className="border-b border-black hscreen min-h-screen w-full text-7xl flex items-center justify-center px-10 md:px-24 md:h-screen p-10">
				<p className="text-2xl md:text-5xl leading-loose font-inter text-justify">
					We are an open-source community that thrive on empowering
					young coders to showcase their skills through transformative
					open-source projects. We champion a culture of open
					collaboration and knowledge sharing, encouraging the
					creation of cutting-edge technology solutions that uplift
					the global community. Our mission is to offer enriching
					learning experiences and invaluable resources, sparking
					inspiration in the next generation of software developers
					and entrepreneurs. At the heart of <b>:bitspace</b> is a
					passionate{" "}
					<Link href="/team" className="text-[#a9403f]">
						{" "}
						team
					</Link>{" "}
					that values quality, transparency, and accountability. We're
					a community-driven organization perfect for developers at
					any stage of their journey*.
				</p>
			</section>

			<section
				ref={componentRef}
				className="relative border-b border-black min-h-screen h-full w-full text-7xl flex flex-col p-20 px-6 items-center justify-center"
			>
				{Object.entries(popups).map(([k, v]) => {
					if (v !== null) {
						const close = () => {
							setPopups(prev => {
								let newState = { ...prev };
								newState[k] = null;
								return newState;
							});
						};

						return (
							<MiniWindow
								key={k}
								componentRef={componentRef}
								closeIt={close}
							>
								{v}
							</MiniWindow>
						);
					}
				})}

				<h1 className="font-inter font-semibold pb-10 text-center">
					Our Products
				</h1>
				<section className="text-xl grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 grid-row-2 items-stretch  flex-grow md:flex-grow-0">
					<section className="bg-pwhite relative flex items-center justify-center h-36 w-36 rounded-3xl md:col-start-3 md:w-auto md:h-56 lg:w-56">
						<h1 className="text-2xl font-inter font-semibold">
							stand
						</h1>
						<Link
							href="https://github.com/bitspaceorg/STAND-FOSSHACK"
							className="border rounded-3xl p-1 absolute bottom-5 left-5 flex"
						>
							<IconArrowUpRight />
						</Link>
						<div
							onClick={() => {
								setPopups(prev => ({
									...prev,
									url_shortner: <Stand />,
								}));
							}}
							className="cursor-pointer text-black p-1 absolute top-5 right-5 flex"
						>
							<IconInfoCircle />
						</div>
					</section>

					<section className="relative bg-pwhite drop-shadow flex items-center justify-center w-36 row-span-2 rounded-3xl md:row-start-1 md:col-span-2 md:row-span-1 md:w-auto md:h-56">
						<h1 className="text-2xl font-inter font-semibold">
							zide
						</h1>
						<Link
							href="https://github.com/bitspaceorg/zide"
							className="border rounded-3xl p-1 absolute bottom-5 left-5 flex"
						>
							<IconArrowUpRight />
						</Link>
						<div
							onClick={() => {
								setPopups(prev => ({
									...prev,
									zide: <Zide />,
								}));
							}}
							className="cursor-pointer text-black p-1 absolute top-5 right-5 flex"
						>
							<IconInfoCircle />
						</div>
					</section>

					<section className="relative bg-pwhite flex items-center justify-center h-36 w-36 rounded-3xl md:col-span-2 md:col-start-2 md:w-auto md:h-56">
						<h1 className="text-2xl font-inter font-semibold">
							weather reporto
						</h1>
						<Link
							href="https://github.com/bitspaceorg/weather-reporto.nvim"
							className="border rounded-3xl p-1 absolute bottom-5 left-5 flex"
						>
							<IconArrowUpRight />
						</Link>
						<div
							onClick={() => {
								setPopups(prev => ({
									...prev,
									weather_reporto: <WeatherReportoNvim />,
								}));
							}}
							className="cursor-pointer text-black p-1 absolute top-5 right-5 flex"
						>
							<IconInfoCircle />
						</div>
					</section>

					<section className="relative bg-pwhite flex items-center justify-center h-36 rounded-3xl col-span-2 md:col-start-4 md:row-start-1 md:col-span-1 md:row-span-2 md:h-auto md:w-auto lg:w-56">
						<h1 className="text-2xl font-inter font-semibold">
							surface
						</h1>
						<Link
							href="https://github.com/bitspaceorg/surface"
							className="border rounded-3xl p-1 absolute bottom-5 left-5 flex"
						>
							<IconArrowUpRight />
						</Link>
						<div
							onClick={() => {
								setPopups(prev => ({
									...prev,
									surface: <Surface />,
								}));
							}}
							className="cursor-pointer text-black p-1 absolute top-5 right-5 flex"
						>
							<IconInfoCircle />
						</div>
					</section>

					<section className="relative bg-pwhite flex items-center justify-center h-36 rounded-3xl col-span-2 md:col-span-1 md:row-start-2 md:h-56 md:w-auto lg:w-56">
						<h1 className="text-2xl font-inter font-semibold">
							others...
						</h1>
						<Link
							href="https://github.com/orgs/bitspaceorg/repositories"
							className="border rounded-3xl p-1 absolute bottom-5 left-5 flex"
						>
							<IconArrowUpRight />
						</Link>
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
