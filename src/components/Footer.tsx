import {
	IconBrandGithub,
	IconBrandLinkedin,
	IconBrandMeta,
	IconBrandX,
} from "@tabler/icons-react";
import Link from "next/link";

interface DuckElement {
	name: string;
	url: string;
}
interface DuckData {
	title: string;
	content: Array<DuckElement>;
}

function Duck(data: DuckData) {
	return (
		<div className="text-white flex flex-col">
			<span className="text-yellow text-3xl pb-2 font-extrabold font-filgen">
				{data["title"]}
			</span>
			{data["content"].map((element: DuckElement, i) => {
				return (
					<div key={i}>
						<Link href={element.url}>
							<span className="">{element.name}</span>
						</Link>
					</div>
				);
			})}
		</div>
	);
}

const eventsDuck: Array<DuckElement> = [
	{ name: "OS: Odyssey 101", url: "#" },
	{ name: "Networking with Kali", url: "#" },
	{ name: "ByteCon 101", url: "#" },
];

const projectDuck: Array<DuckElement> = [
	{ name: "URLShortner", url: "#" },
	{ name: "MD-Craft", url: "#" },
	{ name: "WeatherReporto", url: "#" },
	{ name: "Surface", url: "#" },
];

const legalDuck: Array<DuckElement> = [
	{ name: "Terms & Conditions", url: "#" },
	{ name: "Privacy Policy", url: "#" },
	{ name: "Cookie Policy", url: "#" },
];

export default function Footer() {
	return (
		<footer className="overflow-clip bg-[#b3a3f3] relative">
			<section className="flex items-start justify-center px-24 py-20 h-96 bg-accent">
				<div className="self-center lg:self-start">
					<h1 className="text-lpurple text-5xl font-glb font-bold">
						:bitspace
					</h1>
					<div className="flex space-x-1 pt-5 text-lpurple">
						<IconBrandX
							className="cursor-pointer bg-accent hover:bg-[#b3a3f3] p-3 rounded-full"
							size={44}
						/>
						<IconBrandGithub
							className="cursor-pointer bg-accent hover:bg-[#b3a3f3] p-3 rounded-full"
							size={44}
						/>
						<IconBrandLinkedin
							className="cursor-pointer bg-accent hover:bg-[#b3a3f3] p-3 rounded-full"
							size={44}
						/>
						<IconBrandMeta
							className="cursor-pointer bg-accent hover:bg-[#b3a3f3] p-3 rounded-full"
							size={44}
						/>
					</div>
				</div>

				<div className="hidden text-lpurple font-medium lg:flex lg:justify-end gap-x-16 lg:items-start flex-1">
					<Duck title="Projects" content={projectDuck} />
					<Duck title="Events" content={eventsDuck} />
					<Duck title="Legal" content={legalDuck} />
				</div>
			</section>

			<section className="text-white text-[10px] lg:text-[12px] ">
				<div className="md:flex md:justify-between py-3 ">
					<div className="flex justify-around px-10 py-2 text-center">
						<Link href="#" className="px-4">
							Terms and Conditions
						</Link>
						<Link href="#" className="px-4">
							Privacy Policy
						</Link>
						<Link href="#" className="px-4">
							Cookie Policy
						</Link>
					</div>
					<div className="flex justify-around px-10 py-2">
						<span> &copy; 2024 Bitspace. All Rights Reserved.</span>
					</div>
				</div>
			</section>

			<h1 className="opacity-40 -z-0 leading-none text-lpurple text-[36vw] -left-14 md:text-[25vw] absolute -bottom-14 md:-bottom-28 lg:-bottom-44 font-extrabold font-glb">
				:BITSPACE
			</h1>
		</footer>
	);
}
