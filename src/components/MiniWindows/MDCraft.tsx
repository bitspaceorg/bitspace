import { AlbieTheGuide } from "@/assets";
import Image from "next/image";

export default function MDCraft() {
	return (
		<>
			<h1 className="font-glb">MD-CRAFT</h1>
			<p className="font-light text-sm">
				MdCraft is an open-source web app that serves as an in-browser
				Markdown editor and previewer. It allows users to create,
				organize, and edit Markdown notes with a live HTML preview and
				code highlighting. It's a convenient tool for taking notes
				during programming tutorials and more.
			</p>
			<Image
				height={100}
				width={100}
				src={AlbieTheGuide}
				alt="placeholder-image"
			/>
		</>
	);
}
