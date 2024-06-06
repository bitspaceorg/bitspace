import { GradBGHero } from "@/assets";
import Image from "next/image";

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
				<h1 className="z-10 pt-10 text-sm md:text-lg cursor-pointer">
					[{" "}
					<span className="animate-pulse">
						Know More About Us ( &darr; )
					</span>{" "}
					]
				</h1>
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
