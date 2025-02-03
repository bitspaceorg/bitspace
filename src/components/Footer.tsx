import Link from 'next/link';
import { IconBrandDiscord, IconBrandGithubFilled, IconBrandInstagram, IconBrandLinkedin, IconBrandTwitterFilled } from "@tabler/icons-react";

export default function Footer() {
  return (
    <>
    <section className="mt-4 w-full lg:w-[900px] mt-1 h-8 bg-black flex items-center justify-between text-cream px-4 text-xs uppercase font-jet-uh">
    <div className="flex space-x-3">
    <Link href="https://github.com/bitspaceorg"><IconBrandGithubFilled size={16} /></Link>
    <Link href="https://twitter.com/bitspaceorg"><IconBrandTwitterFilled size={16} /></Link>
    <Link href="https://discord.com/invite/Z3PdY9YmHZ"><IconBrandDiscord size={16} /></Link>
    <Link href="https://www.linkedin.com/company/91385462"><IconBrandLinkedin size={16} /></Link>
    <Link href="https://www.instagram.com/bitspaceorg"><IconBrandInstagram size={16} /></Link>
    </div>
    <h1>2025 &copy; BITSPACE</h1>
    </section>
    </>
  );
}
