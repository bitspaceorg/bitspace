"use client";

import { IconBrandGithubFilled, IconBrandInstagram, IconBrandLinkedin, IconBrandTwitterFilled } from "@tabler/icons-react";
import Link from "next/link";

export default function Events() {
  return (
    <main className="min-h-screen w-full bg-cream flex flex-col items-center justify-center ">
      <section className="w-full lg:w-[900px] h-full pt-24 py-0">
        <h1 className="font-migha text-9xl lg:text-[300px] leading-none text-center lg:text-left">EVENTS</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 px-10 gap-y-10 justify-items-center bg-black py-10">

          <div className="relative min-h-[500px] max-w-[250px] h-full w-full bg-cream self-end p-4 py-8 flex flex-col justify-between">
            <h1 className="font-migha text-9xl">INDIA FOSS</h1>
            <div>
              <h1 className="text-8xl font-migha text-black leading-none">
                07-08
              </h1>
              <h1 className="text-md font-jet-uh leading-none uppercase w-full inline-flex  justify-between">
                <span>september</span> <span>2024</span>
              </h1>
            </div>
          </div>

          <div className="relative min-h-[500px] max-w-[250px] h-full w-full bg-cream self-end p-4 py-8 flex flex-col justify-between">
            <div>
              <h1 className="font-migha text-8xl">BC105</h1>
              <p className="uppercase font-jet-uh text-3xl leading-none">
                
                networking with linux
              </p>
            </div>
            <div>
              <h1 className="text-9xl font-migha text-black leading-none">
                
                03
              </h1>
              <h1 className="text-md font-jet-uh leading-none uppercase w-full inline-flex  justify-between">
                <span>march</span> <span>2024</span>
              </h1>
            </div>
          </div>

          <div className="relative min-h-[500px] max-w-[250px] h-full w-full bg-cream self-end p-4 py-8 flex flex-col justify-between">
            <div>
              <h1 className="font-migha text-8xl">BC104</h1>
              <p className="uppercase font-jet-uh text-3xl leading-none">
                
                networking with linux
              </p>
            </div>
            <div>
              <h1 className="text-9xl font-migha text-black leading-none">
                
                03
              </h1>
              <h1 className="text-md font-jet-uh leading-none uppercase w-full inline-flex  justify-between">
                <span>march</span> <span>2024</span>
              </h1>
            </div>
          </div>

          <div className="relative min-h-[500px] max-w-[250px] h-full w-full bg-cream self-end p-4 py-8 flex flex-col justify-between">
            <div>
              <h1 className="font-migha text-8xl">BC103</h1>
              <p className="uppercase font-jet-uh text-3xl leading-none">
                
                networking with linux
              </p>
            </div>
            <div>
              <h1 className="text-9xl font-migha text-black leading-none">
                
                03
              </h1>
              <h1 className="text-md font-jet-uh leading-none uppercase w-full inline-flex  justify-between">
                <span>march</span> <span>2024</span>
              </h1>
            </div>
          </div>

          <div className="relative min-h-[500px] max-w-[250px] h-full w-full bg-cream self-end p-4 py-8 flex flex-col justify-between">
            <div>
              <h1 className="font-migha text-8xl">BC102</h1>
              <p className="uppercase font-jet-uh text-3xl leading-none">
                
                networking with linux
              </p>
            </div>
            <div>
              <h1 className="text-9xl font-migha text-black leading-none">
                
                03
              </h1>
              <h1 className="text-md font-jet-uh leading-none uppercase w-full inline-flex  justify-between">
                <span>march</span> <span>2024</span>
              </h1>
            </div>
          </div>

          <div className="relative h-full w-full max-w-[250px] min-h-[500px] bg-cream self-end p-4 py-8 flex flex-col justify-between">
            <div>
              <h1 className="font-migha text-8xl">BC101</h1>
              <p className="uppercase font-jet-uh text-3xl leading-none"> an opensource odyssey </p>
            </div>

            <div>
              <h1 className="text-9xl font-migha text-black leading-none"> 23 </h1>
              <h1 className="text-md font-jet-uh leading-none uppercase w-full inline-flex justify-between">
                <span>september</span> <span>2023</span>
              </h1>
            </div>
          </div>
        </div>
      </section>


      <section className="w-full lg:w-[900px] mt-1 h-5 bg-black flex items-center justify-between text-cream px-4 text-xs uppercase font-jet-uh">
        <div className="flex space-x-3">
          <Link href="https://github.com/bitspaceorg"><IconBrandGithubFilled size={12} /></Link>
          <Link href="https://twitter.com/bitspaceorg"><IconBrandTwitterFilled size={12} /></Link>
          <Link href="https://www.linkedin.com/company/91385462"><IconBrandLinkedin size={12} /></Link>
          <Link href="https://www.instagram.com/bitspaceorg"><IconBrandInstagram size={12} /></Link>
        </div>
        <h1>2024 &copy; BITSPACE</h1>
      </section>

    </main>
  );
}
