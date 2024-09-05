import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation"


interface Prop {
	name: string,
	links: Array<{
		url: string,
	}>
	quote: string,
	pic: {
		url: string,
		alt: string,
	},
	href: string,
	type: string
};

export default function Team({ name, links, type, quote, pic, href }: Prop) {
	const router = useRouter();
	return (
		<section className="min-h-[200px] lg:max-h-[500px] font-jet-uh w-full flex border p-5 justify-between">
			<section className="w-full flex flex-col justify-between">
				<section className="pr-4">
					<h1 onClick={() => router.push("/profile/" + href)} className="cursor-pointer font-migha text-8xl">{name}</h1>
					<p className="font-jet-uh uppercase text-sm font-extralight">&quot;{
						quote.length > 200 ? quote.slice(0, 200) + "..." : quote
					}&quot;</p>
				</section>

				<section className="flex-grow w-[300px] relative h-full min-h-[250px] flex flex-col justify-end lg:hidden">
					<Image src={pic.url} className="grayscale" layout="fill" objectFit="cover" objectPosition="center" loading="lazy" alt={pic.alt} />
					<h1 className="w-full font-migha text-3xl text-center h-fit bg-black pt-2 justify-end z-10 text-cream uppercase">
						{type}
					</h1>
				</section>

				<section>
					{links.slice(0, 2).map(({ url }, index) => (
						<p key={index} className="font-jet-uh"><Link href={url}>{url}</Link></p>
					))}
				</section>
			</section>

			<section className="flex-grow w-[300px] relative h-full min-h-[250px] lg:flex flex-col justify-end hidden">
				<Image src={pic.url} className="grayscale" layout="fill" objectFit="cover" objectPosition="center" loading="lazy" alt={pic.alt} />
				<h1 className="w-full font-migha text-3xl text-center bg-black pt-2  h-fit justify-end z-10 text-cream uppercase"> {type} </h1>
			</section>
		</section>
	);
}
