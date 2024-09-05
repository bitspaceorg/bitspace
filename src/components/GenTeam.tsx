import { IconBrandGithubFilled, IconBrandLinkedin } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Props {
	name: string;
	links: Array<{
		url: string,
	}>,
	pic: {
		url: string,
		alt: string,
	},
	href: string,
}

export default function GeneralTeam({ name, links, pic, href }: Props) {
	const router = useRouter();
	return (
		<div className="flex flex-col items-center justify-center">
			<Image alt={pic.alt} src={pic.url} width={36} height={36} className="h-36 w-36 object-cover bg-black rounded-full saturate-0 border-[1px] border-black" />
			<h1 onClick={() => router.push("/profile/" + href)} className="text-3xl font-migha pt-2 leading-none cursor-pointer">{name}</h1>

			<div className="text-xl pt-2 flex">
				<Link href={links[0] ? links[0].url : "/"}><IconBrandGithubFilled href="" size={16} /></Link>
				<Link href={links[1] ? links[1].url : "/"}><IconBrandLinkedin href="" size={16} /></Link>
			</div>
		</div>
	);
}
