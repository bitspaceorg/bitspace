"use client";

import { cn } from "@/libs/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
	let [isOpen, setOpen] = useState<boolean>(false);

	return (
		<nav className="flex justify-between items-center w-full p-8 fixed top-0 z-[999]">
			<h1 className="text-3xl font-extrabold">:bs</h1>
			<section
				className={cn(
					!isOpen ? "-right-[1000px]" : "right-0",
					"top-0 absolute md:static bg-white md:bg-nocl h-screen w-full md:w-auto md:h-auto flex items-end justify-center transition-all p-8 md:p-0",
					"text-right text-6xl md:text-xl md:space-x-3 flex-col md:flex-row",
				)}
			>
				<Link href="/about">
					<h1>About</h1>
				</Link>
				<Link href="/events">
					<h1>Events</h1>
				</Link>
				<Link href="/upcoming">
					<h1>Upcoming</h1>
				</Link>
				<Link href="/socials">
					<h1>Socials</h1>
				</Link>
				<Link href="/team">
					<h1>Team</h1>
				</Link>
			</section>
			<button className="hidden text-xl md:block">[ Log In ]</button>
			<h1
				onClick={() => setOpen(!isOpen)}
				className="cursor-pointer text-3xl md:hidden z-[1000]"
			>
				{isOpen ?
					<IconX />
					: <IconMenu2 />}
			</h1>
		</nav>
	);
}
