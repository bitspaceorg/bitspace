"use client"
import { nx4_the_mascot } from "@/assets";
import GitHubLogin from "@/components/GitHubLogin";
import { User, useUser } from "@/libs/store";
import { IconBrandGithubFilled, IconBrandDiscordFilled, IconCoins } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

// const IS_LOGGED = 0;
// const HAS_DISCORD = 0;

const not_logged = () => {
	return (
		<div className="flex flex-col items-center gap-12 z-[1000]">
			<Image width={300} alt="nx4-the-mascot" src={nx4_the_mascot} />
			{GitHubLogin({ size: "big", profile: true })}
		</div>
	)
}

const main = (HD: boolean, user: User, removeUser: () => void) => {
	return (
		<div className="flex flex-col md:flex-row items-center gap-12">
			<Image height={250} width={250} alt="nx4-the-mascot" src={user.avatar_url} />
			<div className="flex flex-col items-start justify-around h-full md:gap-0 gap-16">
				<div>
					<div className="text-5xl font-black">{user.name}</div>
					<div className="text-xl font-bold"> (role here) </div>
				</div>
				<div className="flex flex-col gap-2 text-md">
					<div className="flex flex-row items-center font-bold gap-2">
						<IconBrandGithubFilled size={24} />
						<Link className="underline text-2xl" href="https://github.com/RahulNavneeth">{user.login}</Link>
					</div>
					{!HD ? (
						<div className="flex flex-row items-center font-bold gap-2">
							<IconBrandDiscordFilled size={24} />
							<Link className="underline text-2xl" href="https://join.bitspace.org.in">Join our discord server!!!</Link>
						</div>
					) : (
						<div className="flex flex-row items-center font-bold gap-2">
							<IconCoins size={24} />
							<div className="flex flex-row font-bold gap-2 text-2xl">(points here)</div>
						</div>
					)}
				</div>
			</div>
			<button onClick={removeUser} className="absolute bottom-[15%] left-[45%] font-bold border-2 border-black px-10 py-2 bg-white">
				logout?
			</button>
		</div >
	)
}

const Profile = () => {
	const { user, removeUser } = useUser(state => state);
	return (
		<>
			<main className="w-full h-screen flex flex-col justify-center items-center px-8 graph-paper">
				{!user ? not_logged() : main(true, user, removeUser)}
			</main>
		</>
	)
}

export default Profile;
