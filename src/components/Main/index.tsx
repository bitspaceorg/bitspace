import { GradBGHero } from "@/assets";
import { IconArrowUpRight } from "@tabler/icons-react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import Footer from "../Footer";

export default function Main() {
	return (
		<main className="min-h-screen w-full bggreen graph-paper select-none">
			<section className="border-b border-black h-screen w-full flex flex-col items-center justify-center relative overflow-clip">
				<Image
					alt="gradient-for-hero-section"
					src={GradBGHero}
					className="absolute scale-150 md:transform-none bottom-0 md:top-28 -left-40"
				/>
				<h1 className="font-filgen text-7xl md:text-9xl z-10">
					BITSPACE
				</h1>
				<h1 className="text-lg md:text-2xl z-10">
					&quot; Every Bit is Open to All &quot;
				</h1>
				<h1 className="animate-pulse font-mono z-10 pt-5 text-sm md:text-lg cursor-pointer">
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

			<section className="border-b border-black h-screen w-full text-7xl flex items-center justify-center">
				ABOUT
			</section>

			<section className="border-b border-black min-h-screen h-full w-full text-7xl flex flex-col p-20 px-6 items-center justify-center">
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
