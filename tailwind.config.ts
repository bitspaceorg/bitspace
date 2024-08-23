import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		colors: {
			pwhite: "#fff",
			java: "#000",
			white: "#F0F0F0",
			accent: "#9482DA",
			lpurple: "#E7E1FF",
			black: "#001001",
			nocl: "#00000000",
			bsprime: "#191919",
			blue: "#6287E7",
			pink: "#E98AB8",
			green: "#8AE9B0",
			yellow: "#E9DF8A",
			red: "#E98A8A",
		},
		fontFamily: {
			filgen: "fligen",
			mono: "var(--mono-font)",
			glb: "glacial",
		},
		extend: {
			screens: {
				ps: "375px",
			},
		},
	},
	plugins: [],
};
export default config;
