import { Ribbon, ImportantStar, WeLoveOpenSource, WhoRV } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import ProjectCard from "../ProjectCard";
import Footer from "../Footer";

export default function Main() {
	return (
		<main className="min-h-screen w-full  bg-cream flex flex-col items-center">
			{/*------------------------*/}
			<section className="h-full mt-4 p-4 pt-28 lg:p-24 lg:pt-20 overflow-clip w-full select-none flex flex-col items-start lg:items-center leading-none 2xl:justify-end">
				<h1 className="text-[120px] lg:text-[250px] font-bold font-migha lg:block hidden">
					{" "}
					BITSPACE{" "}
				</h1>

				<div className="text-[160px] font-migha lg:hidden block">
					<h1>BIT</h1> <h1>SPACE</h1>
				</div>

				<Image src={WeLoveOpenSource} alt="" className="" width={900} />
			</section>

			<br />

			{/*-------------------------*/}
			<section className="min-h-screen w-full lg:w-[900px] py-10 flex flex-col justify-between items-stretch bg-black text-cream p-8 select-none">
				<div className="flex flex-col lg:flex-row space-x-2 justify-between ">
					<div className="text-9xl font-migha">
						<h1>WHO</h1> <h1 className="italic ">are</h1>{" "}
						<h1>WE?</h1>
					</div>

					<div className="relative">
						<Image
							className="absolute z-10"
							src={Ribbon}
							height={375}
							alt="who are we bitspace"
						/>
						<Image
							className="grayscale"
							src={WhoRV}
							height={375}
							alt="who are we bitspace"
						/>
					</div>
				</div>

				<section className="text-justify text-md font-medium font-jet-uh uppercase ">
					We are an open-source community that thrive on empowering
					young coders to showcase their skills through transformative
					open-source projects. We champion a culture of open
					collaboration and knowledge sharing, encouraging the
					creation of cutting-edge technology solutions that uplift
					the global community. Our mission is to offer enriching
					learning experiences and invaluable resources, sparking
					inspiration in the next generation of software developers
					and entrepreneurs. At the heart of{" "}
					<span className="font-bold">:bitspace</span> is a passionate
					<Link href="/team"> team </Link> that values quality,
					transparency, and accountability. We&apos;re a
					community-driven organization perfect for developers at any
					stage of their journey*.
				</section>
			</section>

			{/*-------------------------*/}
			<section className="min-h-screen h-auto lg:h-screen lg:min-h-max flex flex-col w-full lg:w-[900px] space-y-5 py-5 select-none">
				<ProjectCard
					title="ZIDE"
					description="Zide is a cross-platform pixel art editor offering a minimalistic, user-friendly interface. It provides essential tools for artists to create anything from simple sprites to intricate animations, making pixel art creation straightforward and accessible."
					link="https://github.com/bitspaceorg/zide"
				/>
				<ProjectCard
					title="Plaudren"
					description="Plaudren is an open-source, zero-dependency HTTP router designed for full compatibility with Go’s standard net/http package. It provides lightweight, efficient routing with no global state and explicit handler registration. Optimized for low overhead, with middleware chaining, and method-based handlers."
					link="https://github.com/bitspaceorg/plaudren"
				/>
				<ProjectCard
					title="MDCRAFT"
					description=" MdCraft is an open-source web app providing an in-browser Markdown editor with live HTML preview and code highlighting. It’s ideal for creating, organizing, and editing notes, especially during programming tutorials."
					link="https://github.com/bitspaceorg/mdcraft"
				/>

				<section className="h-full flex lg:flex-row flex-col space-x-3 p-5 font-migha items-center justify-between">
					<Link
						href="https://github.com/orgs/bitspaceorg/repositories"
						className="text-8xl lg:text-9xl font-bold text-center"
					>
						PROJECTS
					</Link>
					<h1 className="text-6xl font-black font-jet-uh hidden lg:block">
						@
					</h1>
				</section>
			</section>

			{/*-------------------------*/}
			<section className="flex flex-col min-h-screen bg-black lg:w-[900px] relative">
				<Link
					href="/events"
					className="text-cream font-migha text-9xl lg:text-[200px] p-5 pt-10 leading-none"
				>
					EVENTS
				</Link>

				<div className="min-h-screen flex-grow w-full flex flex-col items-center justify-center space-y-5 lg:space-x-5 p-5">
					{/*----*/}
					<div className="relative min-h-[500px] h-full w-full bg-cream self-end p-4 py-8 flex flex-col justify-between">
						<div className="-left-20 -top-16 absolute">
							<Image
								src={ImportantStar}
								alt=""
								height={150}
								width={150}
								className="rotate-star"
							/>
							<h1 className="text-5xl text-cream absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2">
								{" "}
								!!!{" "}
							</h1>
						</div>

						<Link
							href="/events/Foss-HACK"
							className="font-migha text-9xl"
						>
							FOSS HACK
						</Link>
						<div>
							<h1 className="text-9xl font-migha text-black leading-none">
								{" "}
								22-23
							</h1>
							<h1 className="text-md font-jet-uh leading-none uppercase w-full inline-flex  justify-between">
								<span>february</span> <span>2025</span>
							</h1>
						</div>
					</div>

					{/*----*/}
					<div className="relative min-h-[500px] h-full w-full bg-cream self-end p-4 py-8 flex flex-col justify-between">
						<div className="-left-20 -top-16 absolute">
							<h1 className="text-5xl text-cream absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2">
								{" "}
								!!!{" "}
							</h1>
						</div>

						<Link
							href="/events/India Foss"
							className="font-migha text-9xl"
						>
							INDIA FOSS
						</Link>
						<div>
							<h1 className="text-9xl font-migha text-black leading-none">
								{" "}
								07-08{" "}
							</h1>
							<h1 className="text-md font-jet-uh leading-none uppercase w-full inline-flex  justify-between">
								<span>september</span> <span>2024</span>
							</h1>
						</div>
					</div>

					{/*----*/}
					<div className="relative h-full w-full min-h-[500px] bg-cream self-end p-4 py-8 flex flex-col justify-between">
						<div>
							<Link
								href="events/Bytecon-102"
								className="font-migha text-8xl"
							>
								Bytecon-102
							</Link>
							<p className="uppercase font-jet-uh text-3xl leading-none">
								{" "}
								an opensource odyssey{" "}
							</p>
						</div>

						<div>
							<h1 className="text-9xl font-migha text-black leading-none">
								{" "}
								23{" "}
							</h1>
							<h1 className="text-md font-jet-uh leading-none uppercase w-full inline-flex justify-between">
								<span>september</span> <span>2023</span>
							</h1>
						</div>
					</div>
				</div>
			</section>

			{/*---FOOTER---*/}
			<Footer />
		</main>
	);
}
