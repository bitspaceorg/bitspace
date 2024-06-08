"use client";

import { cn } from "@/libs/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";
import ProfileIcon from "./ProfileIcon";
import GitHubLogin from "./GitHubLogin";

export default function NavBar() {
	const [isOpen, setOpen] = useState<boolean>(false);
	const [activeNav, setActiveNav] = useState<boolean>(false);

	const handleScroll = () => {
		if (window.scrollY >= 50) setActiveNav(true);
		else setActiveNav(false);
	};

	if (typeof window !== "undefined")
		window.addEventListener("scroll", handleScroll);

	return (
		<nav
			className={cn(
				"flex justify-between items-center w-full p-8 fixed top-0 z-[999] bg-nocl font-filgen ",
				activeNav &&
				"bg-white drop-shadow-md transition-all duration-200 ease-in",
			)}
		>
			<Link href="/" className="text-3xl font-extrabold font-glb">
				:bs
			</Link>

			<section
				className={cn(
					!isOpen ? "-right-[1000px]" : "right-0",
					"top-0 absolute md:static bg-white md:bg-nocl h-screen w-full md:w-auto md:h-auto flex items-end justify-center transition-all p-8 md:p-0",
					"text-right text-6xl md:text-xl md:space-x-3 flex-col md:flex-row",
				)}
			>
				<Link href="/about">
					<h1 className="hover:text-accent">About</h1>
				</Link>
				<Link href="/events">
					<h1 className="hover:text-accent">Events</h1>
				</Link>
				<Link href="/upcoming-events">
					<h1 className="hover:text-accent">Upcoming</h1>
				</Link>
				<Link href="/socials">
					<h1 className="hover:text-accent">Socials</h1>
				</Link>
				<Link href="/team">
					<h1 className="hover:text-accent">Team</h1>
				</Link>
				<div className="md:hidden block">
					<GitHubLogin size="big" />
				</div>
			</section>

			<div className="flex items-center gap-x-2">
				<ProfileIcon />
				<div className="hidden md:block">
					<GitHubLogin />
				</div>
				<h1
					onClick={() => setOpen(!isOpen)}
					className="cursor-pointer text-3xl md:hidden z-[1000]"
				>
					{isOpen ?
						<IconX size={36} />
						: <IconMenu2 size={36} />}
				</h1>
			</div>
		</nav>
	);
}
