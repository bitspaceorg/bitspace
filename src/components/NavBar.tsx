'use client'

import { cn } from "@/libs/utils";
import { IconMenu2 } from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [isOpen, setOpen] = useState<Boolean >(false)

	return (
		<nav className="w-full fixed top-0 flex justify-end z-[999]">
      { !isOpen ? <IconMenu2 className="m-4 z-[1000]" size={32}  onClick={() => setOpen(true)}/> : <h1 className="m-4 z-[1000] font-jet-uh text-3xl" onClick={() => setOpen(false)}>x</h1> }
      { 
        <section className={cn("bg-cream flex  items-center justify-end lg:p-24 p-8 h-screen w-full absolute top-0 transition-all duration-1000 ease-in-out", isOpen ? "right-0" : " -right-[10000px]")}>
          <div className="flex flex-col text-right font-migha font-bold text-5xl lg:text-[200px]">
            <Link href="teams" className="leading-none cursor-pointer hover:text-accent">TEAMS</Link>
            <Link href="events" className="leading-none cursor-pointer hover:text-accent">EVENTS</Link>
            <Link href="life" className="leading-none cursor-pointer hover:text-accent">LIFE at BITSPACE</Link>
          </div>
        </section> 
      }
    </nav>
	);
}
