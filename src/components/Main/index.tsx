import { GradBGHero } from "@/assets";
import Image from "next/image";
import Marquee from "react-fast-marquee";

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
				<h1 className="animate-pulse z-10 pt-5 text-sm md:text-lg cursor-pointer">
					[ Know More About Us ( &darr; ) ]
				</h1>
				<section className="absolute bottom-10">
					<Marquee className="bg-[#FFEA00] p-3 border-black border-y font-medium font-mono">
						We are an organisation fostering innovation and
						providing a platform for young coders to showcase their
						skills through open-source projects.&nbsp; &#10209; &nbsp;	
					</Marquee>
				</section>
			</section>

			<section className="border-b border-black h-screen w-full text-7xl flex items-center justify-center">
				ABOUT
			</section>
			<section className="border-b border-black h-screen w-full text-7xl flex items-center justify-center">
				OUR PRODUCTS
			</section>
			<section className="border-b border-black h-screen w-full text-7xl flex items-center justify-center">
				EVENTS
			</section>
			<section className="border-b border-black h-screen w-full text-7xl flex items-center justify-center">
				FOOTER
			</section>
		</main>
	);
}
