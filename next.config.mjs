/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "media.discordapp.net",
				port: "",
				pathname: "/attachments/**",
			},
			{
				protocol: "https",
				hostname: "cdn.discordapp.com",
			},
			{
				protocol: "https",
				hostname: "avatars.githubusercontent.com",
			},
			{
				protocol: "https",
				hostname: "raw.githubusercontent.com",
			}, {
				protocol: "https",
				hostname: "scontent.fmaa3-3.fna.fbcdn.net",
			}
		],
		domains: ["github.com", "media.discordapp.net", "cdn.discordapp.com"],
	},
};

export default nextConfig;
