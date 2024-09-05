"use client";

import { useState, useEffect, useRef } from "react";
import axios from "axios";
import Image from "next/image";

export default function LifeAtBitspace() {
	const [lifeAtBitspace, setLifeAtBitspace] = useState<
		Array<{ url: string; alt: string }>
	>([]);
	const imagesRef = useRef<Array<HTMLImageElement | null>>([]);
	let globalIndex = 0;
	let last = { x: 0, y: 0 };

	useEffect(() => {
		const GET = async () => {
			const { data } = await axios.get("/api/lifeatbitspace");
			setLifeAtBitspace(data.gallery);
		};
		GET();
	}, []);

	const distanceFromLast = (x: number, y: number) =>
		Math.hypot(x - last.x, y - last.y);

	const activate = (image: HTMLImageElement | null, x: number, y: number) => {
		if (!image) return;
		image.style.left = `${x}px`;
		image.style.top = `${y}px`;
		image.style.zIndex = String(globalIndex);
		image.dataset.status = "active";
		last = { x, y };
	};

	const handleOnMove = (e: MouseEvent | TouchEvent) => {
		const clientX = e instanceof MouseEvent ? e.clientX : e.touches[0].clientX;
		const clientY = e instanceof MouseEvent ? e.clientY : e.touches[0].clientY;

		if (distanceFromLast(clientX, clientY) > window.innerWidth / 20) {
			const lead = imagesRef.current[globalIndex % imagesRef.current.length];
			const tail =
				imagesRef.current[(globalIndex - 5) % imagesRef.current.length];

			activate(lead, clientX, clientY);

			if (tail) tail.dataset.status = "inactive";

			globalIndex++;
		}
	};

	useEffect(() => {
		window.addEventListener("mousemove", handleOnMove);
		window.addEventListener("touchmove", handleOnMove);

		return () => {
			window.removeEventListener("mousemove", handleOnMove);
			window.removeEventListener("touchmove", handleOnMove);
		};
	}, [lifeAtBitspace]);

	return (
		<main
			className="h-screen w-full flex justify-center items-center bg-cream overflow-hidden relative"
		>
			<section className="w-[900px] h-full py-10 flex flex-col items-center justify-center">
				<h1 className="font-migha text-9xl">WE ARE BITSPACE</h1>
			</section>

			{lifeAtBitspace.map((image, index) => (
				<Image
					key={index}
					src={image.url}
					alt={image.alt}
					width={700}
					height={700}
					ref={(el: any) => (imagesRef.current[index] = el)}
					className="image"
					data-status="inactive"
				/>
			))}
		</main>
	);
}
