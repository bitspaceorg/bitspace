"use client";

import { motion } from "framer-motion";
import { AlbieTheGuide } from "@/assets";
import { CommandTerminalDisplay, useTerminal } from "@/libs/store";
import { cn } from "@/libs/utils";
import Image from "next/image";
import useTerminalInteract from "@/hooks/useTerminalInteract";

export default function Terminal() {
	const { isOn, terminal_command: commands } = useTerminal(state => state);
	const { terminalText, setTerminalText, inpTag } = useTerminalInteract();

	if (!isOn) return <></>;

	return (
		<main className="h-screen flex flex-col justify-end w-full fixed bottom-0 bg-[#000000aa] z-[1000]">
			<input
				ref={inpTag}
				onChange={e => setTerminalText(e.target.value)}
				className="absolute -z-[99999] opacity-0"
			/>
			<motion.section
				initial={{ opacity: 0 }}
				animate={{ opacity: 100 }}
				className="flex-grow flex flex-col justify-end text-2xl font-mono text-white px-10 py-5"
			>
				{commands.map((cmd, i) => (
					<TerminalMessage
						key={i}
						command={cmd.command}
						message={cmd.message}
						status={cmd.status}
					/>
				))}
			</motion.section>

			<motion.section
				initial={{ y: 100 }}
				animate={{ y: 0 }}
				transition={{ ease: "easeIn", duration: 0.5 }}
				className="w-full pl-10 text-2xl font-mono items-center flex h-16 bg-black  border-t border-white"
			>
				<h1 className="text-white pr-4">&gt;</h1>
				<h1
					onClick={() => inpTag.current?.focus()}
					className="text-white font-mono text-2xl flex items-center w-full h-full "
				>
					<WhatToDisplay terminalText={terminalText} />
				</h1>
			</motion.section>
			<motion.section
				initial={{ y: 400 }}
				animate={{ y: 0 }}
				transition={{ delay: 1, ease: "easeIn", duration: 0.5 }}
				className="absolute right-0 bottom-0 h-96 w-96 -z-10"
			>
				<Image alt="albie-the-guide" src={AlbieTheGuide} />
			</motion.section>
		</main>
	);
}

function TerminalMessage({ command, status, message }: CommandTerminalDisplay) {
	return (
		<div className="py-3 border-b border-black">
			<h1>&gt; {command}</h1>
			<p
				className={cn(
					status == "Sucess" ? "text-green" : "text-red",
					"text-xl",
				)}
			>
				{message}
			</p>
		</div>
	);
}

interface prop {
	terminalText: String;
}

function WhatToDisplay({ terminalText }: prop) {
	const valid_commands = ["cd", "ls", "clear", "exit"];

	if (terminalText.length === 0)
		return <span className="opacity-50 font-mono">enter a command to continue</span>;

	let f_space = terminalText.search(" ");
	let ind = f_space === -1 ? terminalText.length : f_space;
	return (
		<>
			<span
				className={cn(
					(
						valid_commands.includes(
							terminalText.slice(0, ind).toLowerCase(),
						)
					) ?
						"text-green"
					:	"text-red",
				)}
			>
				{terminalText.slice(0, ind)}
			</span>
			<span>&nbsp;{terminalText.slice(ind + 1)}</span>
		</>
	);
}
