import type { Viewport } from "next";
import { Inter, Space_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { isTeaser } from "@/libs/utils";
import Terminal from "@/components/Terminal";

const inter = Inter({ subsets: ["latin"] });
const space_mono = Space_Mono({
	subsets: ["latin"],
	weight: "400",
	variable: "--mono-font",
});

export const viewport: Viewport = {
	themeColor: "#9D8AE9",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${space_mono.variable} ${inter.className} `}>
				{!isTeaser && <NavBar />}
				{!isTeaser && <Terminal />}
				{children}
			</body>
		</html>
	);
}
