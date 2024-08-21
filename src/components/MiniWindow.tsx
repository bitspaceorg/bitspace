"use client";
import { IconX } from "@tabler/icons-react";
import { motion, useDragControls } from "framer-motion";
import { ReactNode, RefObject } from "react";

interface prop {
	componentRef: RefObject<HTMLElement>;
	children: ReactNode;
	closeIt: () => void;
}

export default function MiniWindow({ componentRef, children, closeIt }: prop) {
	const controls = useDragControls();

	return (
		<motion.section
			drag
			dragControls={controls}
			dragListener={false}
			dragConstraints={componentRef}
			dragElastic={0}
			dragMomentum={false}
			className="flex flex-col h-52 w-[500px] absolute z-10 border-4 border-[#B9504F] rounded-xl backdrop-blur"
		>
			<section
				onPointerDown={e => controls.start(e)}
				className="bg-[#B9504F] h-10 flex items-center p-2 cursor-move"
			>
				<div
					onClick={() => closeIt()}
					className="h-5 w-5 bg-red rounded-full flex items-center justify-center cursor-pointer"
				>
					<IconX size={18} className="text-lpurple" />
				</div>
			</section>

			<section className=" flex-1 overflow-scroll p-2">
				{children}
			</section>
		</motion.section>
	);
}
