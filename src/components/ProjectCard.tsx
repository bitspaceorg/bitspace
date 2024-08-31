import Link from "next/link";

interface Prop {
  title: string;
  description: string;
  link: string;
};

export default function ProjectCard({ link, title, description }: Prop) {
  return (
    <section className="h-full flex lg:flex-row flex-col space-x-3 p-5 font-migha items-center justify-between">
      <Link href={link} className="text-8xl lg:text-9xl font-bold"> {title} </Link>
      <p className="font-jet-uh text-xs text-center lg:text-right w-full max-w-sm font-extralight uppercase">
        {description}
      </p>
    </section>
  );
}
