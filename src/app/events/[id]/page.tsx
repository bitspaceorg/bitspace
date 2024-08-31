import {
	IconBrandGithubFilled,
	IconBrandInstagram,
	IconBrandLinkedin,
	IconBrandTwitterFilled,
} from "@tabler/icons-react";
import Link from "next/link";

export default function Event() {
	return (
		<main className=" w-full bg-cream flex flex-col items-center px-4">
			<section className="w-full lg:w-[900px] min-h-screen flex flex-col">
				<div className="h-52 bg-red mb-5"></div>
				<h1 className="text-7xl lg:text-9xl font-migha leading-none">BYTECON101</h1>
				<h1 className="text-xs lg:text-xl font-jet-uh uppercase leading-none inline-flex justify-between">
					<span>an opensource odyssey</span>
					<span>29 september 2024</span>
				</h1>

				<p className="font-jet-uh uppercase text-justify pt-10 text-sm lg:text-base">
					In this workshop, which we conducted at the Chennai Institute of Technology,
					we focused on equipping students with practical skills in
					open-source collaboration, version control using Git and
					GitHub, and full-stack development. The workshop was
					designed to be highly interactive, covering essential topics
					such as the significance of open-source communities,
					hands-on Git and GitHub training, and building a full-stack
					app from scratch, all while integrating DevOps principles.
					Our team of experts facilitated each section, ensuring
					active engagement and a hands-on approach throughout the
					session. The participants, who were primarily
					community-driven student innovators and tech enthusiasts,
					were highly involved, working on real-world tasks that
					provided them with valuable experience in developing and
					deploying applications. At the end of the workshop, everyone
					who completed the hands-on tasks received a certificate,
					marking their first open-source contribution. The feedback
					was overwhelmingly positive, with attendees gaining new
					skills and a deeper understanding of innovation,
					collaboration, and real-world tech challenges.
				</p>
				<Link href="" className="font-jet-uh pt-5 font-bold">
					GITHUB SOURCE:
					<span className="underline text-blue">
						www.github.com/zide-desktop/zide
					</span>
				</Link>

				<h1 className="text-5xl font-migha pt-10">MENTORS && TOPICS</h1>
				<section className="pt-5">
					<section className="flex items-center justify-between font-jet-uh uppercase text-sm">
						<h1>Aswath</h1>
						<h1>Machine Learning</h1>
					</section>
					<section className="flex items-center justify-between font-jet-uh uppercase text-sm">
						<h1>Java Sanjeevi</h1>
						<h1>Black Lives Matter</h1>
					</section>
					<section className="flex items-center justify-between font-jet-uh uppercase text-sm">
						<h1>Mukesh Kannan</h1>
						<h1>Bible</h1>
					</section>
					<section className="flex items-center justify-between font-jet-uh uppercase text-sm">
						<h1>Rahul M Navneeth</h1>
						<h1>mastercard</h1>
					</section>
					<section className="flex items-center justify-between font-jet-uh uppercase text-sm">
						<h1>Srivatsav Auswin</h1>
						<h1>Cheif Communication</h1>
					</section>
				</section>

				<h1 className="text-5xl font-migha pt-10">GALLERY</h1>
				<section className="grid grid-cols-2 lg:grid-cols-3 grid-rows-2 h-[500px]">
					<section className="lg:col-span-2 h-full w-full bg-pink"></section>
					<section className="h-full w-full bg-red lg:row-span-2"></section>
					<section className="h-full w-full bg-blue"></section>
					<section className="h-full w-full bg-accent"></section>
				</section>
			</section>

			<section className="w-full lg:w-[900px] mt-1 h-5 bg-black flex items-center justify-between text-cream px-4 text-xs uppercase font-jet-uh">
				<div className="flex space-x-3">
					<IconBrandGithubFilled size={12} />
					<IconBrandTwitterFilled size={12} />
					<IconBrandLinkedin size={12} />
					<IconBrandInstagram size={12} />
				</div>
				<h1>2024 &copy; BITSPACE</h1>
			</section>
		</main>
	);
}
