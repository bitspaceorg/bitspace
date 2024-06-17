"use client";
import { IconX } from "@tabler/icons-react";
import { motion, useDragControls } from "framer-motion";
import { ReactNode, RefObject } from "react";

interface prop {
	componentRef: RefObject<HTMLElement>;
	children: ReactNode;
}

export default function MiniWindow({ componentRef, children }: prop) {
	const controls = useDragControls();

	return (
		<motion.section
			drag
			dragControls={controls}
			dragListener={false}
			dragConstraints={componentRef}
			className="flex flex-col h-52 w-[500px] absolute z-10 border-4 border-accent rounded-xl backdrop-blur"
		>
			<section
				onPointerDown={e => controls.start(e)}
				className="bg-accent h-10 flex items-center cursor-move"
			>
				<div className="h-5 w-5 bg-red rounded-full flex items-center justify-center cursor-pointer">
					<IconX size={18} className="text-lpurple" />
				</div>
			</section>

			<section className=" flex-1 overflow-scroll p-2">
				{children}
			</section>
		</motion.section>
	);
}
