import { Sanjeevi } from "@/assets";
import Image from "next/image";
import Link from "next/link";


interface Prop {
  name: string,
  github: string,
  linkedin: string,
  designation: string
};

export default function Team({name, github, linkedin, designation}: Prop) {
  return (
    <section className="min-h-[200px] lg:max-h-[500px] font-jet-uh w-full flex border p-5 justify-between">
      <section className="w-full flex flex-col justify-between">
        <section className="pr-4">
          <h1 className="font-migha text-8xl">{name}</h1>
          <p className="font-jet-uh uppercase text-sm font-extralight">&quot;Boku no ochinchin wa chisayeee !!! code like the maintainer of your repository is a serial killer who knows where you are living&quot;</p>
        </section>

        <section className="flex-grow w-[300px] relative h-full min-h-[250px] flex flex-col justify-end lg:hidden">
          <Image src={Sanjeevi} className="grayscale" layout="fill" objectFit="cover" objectPosition="center" loading="lazy"  alt=""/>
          <h1 className="w-full font-migha text-3xl text-center h-fit justify-end z-10 text-cream uppercase">
          {designation}
          </h1>
        </section>

        <section>
          <p className="font-jet-uh"> GITHUB: <Link href="">{github}</Link></p>
          <p className="font-jet-uh"> LINKEDIN: <Link href="">{linkedin}</Link></p>
        </section>
      </section>

      <section className="flex-grow w-[300px] relative h-full min-h-[250px] lg:flex flex-col justify-end hidden">
        <Image src={Sanjeevi} className="grayscale" layout="fill" objectFit="cover" objectPosition="center" loading="lazy"  alt=""/>
        <h1 className="w-full font-migha text-3xl text-center h-fit justify-end z-10 text-cream uppercase"> {designation} </h1>
      </section>
    </section>
  );
}
