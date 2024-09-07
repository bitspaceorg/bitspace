"use client"

import { Loading } from "@/components";
import Footer from "@/components/Footer";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

type profileType = {
	name: string;
	aka: string;
	body: {
		height: string;
		weight: string
	};
	contact: Record<string, string>;
	gallery: Array<{
		url: string;
		alt: string;
	}>;
	"hit ratio": string;
	links: Array<{
		name: string;
		url: string;
	}>;
	maintaining: Array<{
		"project name": string;
		"repo url": string;
	}>;
	pic: {
		url: string;
		alt: string;
	};
	type: string;
	quote: string;
	skills: Array<{
		name: string;
		level: string;
	}>;
	skincolor: string;
}

export default function Profile() {
	const { id } = useParams();
	const [profile, setProfile] = useState<profileType | null>(null);

	useEffect(() => {
		const GET = async () => {
			const { data } = await axios.get("/api/profile/" + id);
			console.log(data);
			setProfile(data);
		};
		GET();
	}, []);

	if (!profile) return <Loading />

	return (
		<main className=" w-full bg-cream flex flex-col items-center px-4 text-xs lg:text-base overflow-hidden">
			<section className="w-full lg:w-[900px] min-h-screen flex flex-col gap-8 mt-10">

				<div className="flex lg:flex-row justify-between gap-6 flex-col">
					<div className="flex flex-col justify-between gap-4 w-full">
						<div>
							<h1 className="font-migha text-5xl lg:text-[100px] leading-none text-center lg:text-left">{profile.name}</h1>
							<h1 className="font-bold font-jet-uh uppercase leading-none text-center lg:text-left">aka. {profile.aka}</h1>
						</div>
						<div className="w-full flex flex-col gap-1">
							<h1 className="font-bold flex flex-row justify-between items-center font-jet-uh uppercase leading-none text-center lg:text-left relative">
								<span className="bg-cream z-0">Height</span>
								<span className="relative flex-grow mx-2 custom-dots"></span>
								<span>{profile.body.height}</span>
							</h1>
							<h1 className="font-bold flex flex-row justify-between items-center font-jet-uh uppercase leading-none text-center lg:text-left relative">
								<span className="bg-cream z-0">Weight</span>
								<span className="relative flex-grow mx-2 custom-dots"></span>
								<span>{profile.body.weight}</span>
							</h1>
							<h1 className="font-bold flex flex-row justify-between items-center font-jet-uh uppercase leading-none text-center lg:text-left relative">
								<span className="bg-cream z-0">HIT RATIO</span>
								<span className="relative flex-grow mx-2 custom-dots"></span>
								<span>{profile["hit ratio"]}</span>
							</h1>
							<h1 className="font-bold flex flex-row justify-between items-center font-jet-uh uppercase leading-none text-center lg:text-left relative">
								<span className="bg-cream z-0">SKIN COLOR</span>
								<span className="relative flex-grow mx-2 custom-dots"></span>
								<span>{profile.skincolor}</span>
							</h1>
						</div>
					</div>
					<section className="w-[250px] flex relative h-full min-h-[250px] flex-col justify-end self-center">
						<Image src={profile.pic.url} className="grayscale" layout="fill" objectFit="cover" objectPosition="center" loading="lazy" alt={profile.pic.alt} />
						<h1 className="w-full font-migha text-3xl text-center h-fit bg-black pt-2 justify-end z-10 text-cream uppercase">
							{profile.type}
						</h1>
					</section>
				</div>


				<div className="font-jet-uh uppercase font-semibold justify-center">
					<div className="font-jet-uh uppercase font-black">
						FAV QUOTE
					</div>
					{profile.quote}
				</div>
				<div className="font-jet-uh uppercase font-semibold justify-center">
					<div className="font-jet-uh uppercase font-black">
						SKILLS
					</div>
					{profile.skills.map((skill, i) => (
						<div key={i} className="flex flex-row justify-between items-center">
							<span>{skill.name}</span>
							<span className="relative flex-grow mx-2 custom-dots"></span>
							<span>{skill.level}</span>
						</div>
					))}
				</div>
				<div className="font-jet-uh uppercase font-semibold justify-center">
					<div className="font-jet-uh uppercase font-black">
						MAINTAINING
					</div>
					{profile.maintaining.map((maintain, i) => (
						<div key={i} className="flex flex-row justify-between items-center">
							<span>{maintain["project name"]}</span>
							<span className="relative flex-grow mx-2 custom-dots"></span>
							<Link href={maintain["repo url"]}>({maintain["repo url"]})</Link>
						</div>
					))}
				</div>
				<div className="font-jet-uh uppercase font-semibold justify-center">
					<div className="font-jet-uh uppercase font-black">
						CONTACT
					</div>
					{Object.entries(profile.contact).map(([key, value], i) => (
						<div key={i} className="flex flex-row justify-between items-center">
							<span>{key}</span>
							<span className="relative flex-grow mx-2 custom-dots"></span>
							<span className="normal-case">{value}</span>
						</div>
					))}
				</div>
			</section >
    <Footer/>
		</main >
	);
}
