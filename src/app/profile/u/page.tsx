"use client"
import { nx4_the_mascot } from "@/assets";
import { IconBrandGithubFilled, IconBrandDiscordFilled } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// const IS_LOGGED = 0;
// const HAS_DISCORD = 0;

const not_logged = () => {
	return (
		<div className="flex flex-col items-center gap-12">
			<Image width={300} alt="nx4-the-mascot" src={nx4_the_mascot} />
			<div className="flex flex-row items-center justify-center gap-4">
				<IconBrandGithubFilled size={44} />
				<div className="underline font-bold"> Sign Up with Github </div>
			</div>
		</div>
	)
}

const main = (HD: boolean) => {
	return (
		<div className="flex flex-col md:flex-row items-center gap-12">
			<Image height={250} width={250} alt="nx4-the-mascot" src={"https://github.com/RahulNavneeth.png"} />
			<div className="flex flex-col items-start justify-around h-full md:gap-0 gap-16">
				<div>
					<div className="text-5xl font-black">Rahul M. Navneeth</div>
					<div className="text-xl font-bold"> President </div>
				</div>
				<div className="flex flex-col gap-2 text-md">
					<div className="flex flex-row items-center font-bold gap-2">
						<IconBrandGithubFilled size={24} />
						<Link className="underline text-2xl" href="https://github.com/RahulNavneeth">RahulNavneeth</Link>
					</div>
					{!HD ? (
						<div className="flex flex-row items-center font-bold gap-2">
							<IconBrandDiscordFilled size={24} />
							<Link className="underline text-2xl" href="https://github.com/RahulNavneeth">Join our discord server!!!</Link>
						</div>
					) : (
						<div className="flex flex-row font-bold gap-2 text-2xl">uwu) - points or something</div>
					)}
				</div>
			</div>
		</div >
	)
}

const Profile = () => {
	const [IS_LOGGED, SET_LOGGED] = useState<boolean>(false);
	const [HAS_DISCORD, SET_DISCORD] = useState<boolean>(false);
	return (
		<>
			<main className="w-full h-screen flex flex-col justify-center items-center px-8 graph-paper">
				<div className="absolute top-[15%]">
					&#8725; &#8725; please remove after testing
					<div className="flex gap-4">
						<button onClick={() => SET_LOGGED(!IS_LOGGED)} className="font-bold border-2 border-black px-8 py-2 bg-white"> toggle auth </button>
						<button onClick={() => SET_DISCORD(!HAS_DISCORD)} className="font-bold border-2 border-black px-8 py-2 bg-white"> toggle discord</button>
					</div>
				</div>
				{!IS_LOGGED ? not_logged() : main(HAS_DISCORD)}
				<button className="absolute bottom-[15%] font-bold border-2 border-black px-10 py-2 bg-white">
					logout?
				</button>
			</main>
		</>
	)
}

export default Profile;
