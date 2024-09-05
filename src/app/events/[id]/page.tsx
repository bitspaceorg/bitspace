"use client"

import { Loading } from "@/components";
import {
	IconBrandGithubFilled,
	IconBrandInstagram,
	IconBrandLinkedin,
	IconBrandTwitterFilled,
} from "@tabler/icons-react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

type eventType = {
	name: string;
	tag: string;
	till: {
		date: string;
		month: string;
		year: string;
	};
	when: {
		date: string;
		month: string;
		year: string;
	};
	description: string;
	gallery: Array<{
		url: string;
		alt: string;
	}>;
	header: {
		url: string;
		alt: string;
	};
	mentors: Array<{
		name: string;
		role: string;
	}>;
	link: string;
}

const Months = {
	1: "JANUARY",
	2: "FEBRUARY",
	3: "MARCH",
	4: "APRIL",
	5: "MAY",
	6: "JUNE",
	7: "JULY",
	8: "AUGUST",
	9: "SEPTEMBER",
	10: "OCTOBER",
	11: "NOVEMBER",
	12: "DECEMBER"
}

export default function Event() {
	const { id } = useParams();
	const [event, setEvent] = useState<eventType | null>(null);

	useEffect(() => {
		const GET = async () => {
			const { data } = await axios.get("/api/events/" + id);
			console.log(data);
			setEvent(data);
		};
		GET();
	}, []);

	if (!event) return <Loading />

	return (
		<main className=" w-full bg-cream flex flex-col items-center px-4">
			<section className="w-full lg:w-[900px] min-h-screen flex flex-col">
				<div className="h-52 bg-accent mb-5 relative" >
					<Image
						src={event.header.url} alt={event.header.alt}
						fill
						quality={100}
						className="object-cover" />
				</div>
				<h1 className="text-7xl lg:text-8xl font-migha leading-none">{event.name}</h1>
				<h1 className="text-xs lg:text-xl font-jet-uh uppercase leading-none inline-flex justify-between">
					<span className="font-bold">{event.tag}</span>
					<span className="font-bold">{event.when.date} {event.when.month} {event.when.year}</span>
				</h1>

				{parseInt(event.when.date) > new Date().getDate() &&
					// @ts-ignore
					event.when.month >= (Months[new Date().getMonth()]) &&
					parseInt(event.when.year) >= new Date().getFullYear()
					? <div className="w-full h-[300px] flex flex-col items-center justify-center">
						<div className="flex flex-col mt-10 items-center p-4 px-10 justify-center bg-black font-bold text-cream font-jet-uh">
							WE WILL UPDATE ONCE THE EVENT CONCLUDES
						</div>
					</div> :
					<>
						<p className="font-jet-uh uppercase text-justify pt-10 text-sm lg:text-base">
							{event.description}
						</p>
						<Link href="" className="font-jet-uh pt-5 font-bold">
							GITHUB SOURCE:
							<span className="underline text-blue">
								{event.link}
							</span>
						</Link>

						<h1 className="text-5xl font-migha pt-10">MENTORS && TOPICS</h1>
						<section className="pt-5">
							{event.mentors.map(({ name, role }, index) => (
								<section key={index} className="flex items-center justify-between font-jet-uh uppercase text-sm">
									<h1 className="font-bold">{name}</h1>
									<h1>{role}</h1>
								</section>
							))}
						</section>
						<h1 className="text-5xl font-migha pt-10">GALLERY</h1>
						{event.gallery.length == 0 ? <div className="w-full h-fit flex flex-col items-center justify-center">
							<div className="flex flex-col m-10 items-center p-4 px-10 justify-center bg-black font-bold text-cream font-jet-uh">
								NO IMAGES AVAILABLE AT THE MOMENT
							</div>
						</div> :
							<section className="grid grid-cols-2 lg:grid-cols-3 grid-rows-2 w-full h-[500px]">
								<><section className="lg:col-span-2 h-full w-full bg-pink"></section>
									<section className="h-full w-full bg-red lg:row-span-2"></section>
									<section className="h-full w-full bg-blue"></section>
									<section className="h-full w-full bg-accent"></section></>
							</section>
						}
					</>}
			</section>

			<section className="w-full lg:w-[900px] mt-1 h-5 bg-black flex items-center justify-between text-cream px-4 text-xs uppercase font-jet-uh">
				<div className="flex space-x-3">
					<IconBrandGithubFilled size={12} />
					<IconBrandTwitterFilled size={12} />
					<IconBrandLinkedin size={12} />
					<IconBrandInstagram size={12} />
				</div>
				<h1>2024 &copy; BITSPACE</h1>
			</section>
		</main>
	);
}
