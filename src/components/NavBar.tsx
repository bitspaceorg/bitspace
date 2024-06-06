"use client";

import { cn } from "@/libs/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
	let [isOpen, setOpen] = useState<boolean>(false);

	return (
		<nav className="flex justify-between items-center w-full p-8 fixed top-0 z-[999]">
			<h1>BITSPACE</h1>
			<section
				className={cn(
					!isOpen ? "-right-[1000px]" : "right-0",
					"top-0 absolute md:static bg-white md:bg-nocl h-screen w-full md:w-auto md:h-auto flex items-center justify-end transition-all p-8 md:p-0",
				)}
			>
				<section className="md:flex text-right text-6xl md:text-lg md:space-x-3">
					<Link href="/about">
						<h1>ABOUT</h1>
					</Link>
					<Link href="/events">
						<h1>EVENTS</h1>
					</Link>
					<Link href="/upcoming">
						<h1>UPCOMING</h1>
					</Link>
					<Link href="/socials">
						<h1>SOCIALS</h1>
					</Link>
					<Link href="/team">
						<h1>TEAM</h1>
					</Link>
				</section>
			</section>
			<button className="hidden md:block border px-3 p-2 rounded-md">
			Log In
			</button>
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
