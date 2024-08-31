import { IconBrandGithubFilled, IconBrandLinkedin } from "@tabler/icons-react";
import Link from "next/link";

interface Props {
  name: string;
  linkedin: string;
  github: string;
}

export default function GeneralTeam({ name, linkedin, github }: Props) {

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="h-36 w-36 bg-black rounded-full"></div>
      <h1 className="text-3xl font-migha pt-2 leading-none">{name}</h1>

      <div className="text-xl pt-2 flex">
        <Link href=""><IconBrandGithubFilled href="" size={16} /></Link>
        <Link href=""><IconBrandLinkedin href="" size={16} /></Link> 
      </div>
    </div>
  );
}
