"use client";
import { Star } from "@/assets";
import {
  SubscribeModal,
  BreatheVatsavComponent,
  Countdown,
} from "@/components";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Teaser() {
  const [isModelOpen, setModelOpen] = useState<boolean>(false);
  const closeModel = () => setModelOpen(false);

  return (
    <main className="select-none font-filgen relative flex flex-col items-center justify-center min-h-screen w-full overflow-hidden bg-white px-8">
      <motion.section
        className="rounded-full blur-[150px] xl:blur-[750px] absolute bg-[#FCB7FF] xl:h-[750px] xl:w-[750px] w-96 h-96 top-0 right-0 xl:-top-48 xl:-right-40 "
        initial={{ x: 0, y: 0 }}
        animate={{
          x: [0, 100, -1000, -1000, 0],
          y: [0, 500, 500, 0, 0],
        }}
        transition={{ duration: 60, repeat: Infinity }}
      />
      <section className="rounded-full blur-[150px] xl:blur-[750px] absolute bg-[#FCB7FF] xl:h-[750px] xl:w-[750px] w-96 h-96 " />
      <motion.section
        className="rounded-full blur-[150px] xl:blur-[750px] absolute bg-[#FCB7FF] xl:h-[750px] xl:w-[750px] w-96 h-96 bottom-0 left-0 xl:-bottom-56 xl:-left-48"
        initial={{ x: 0, y: 0 }}
        animate={{
          x: [0, -100, 1000, 1000, 0],
          y: [0, -500, -500, 0, 0],
        }}
        transition={{ duration: 60, repeat: Infinity }}
      />
      <motion.section
        className="rounded-full blur-[150px] xl:blur-[750px] absolute bg-[#FC8B8B] xl:h-[750px] xl:w-[750px] w-96 h-96 -top-32 -left-32 xl:-top-96 xl:-left-96 "
        initial={{ x: 0, y: 0 }}
        animate={{
          x: [0, 1750, 1750, 0, 0],
          y: [-100, -100, 1000, 1000, -100],
        }}
        transition={{ duration: 60, repeat: Infinity }}
      />
      <motion.section
        className="rounded-full blur-[150px] xl:blur-[750px] absolute bg-[#B7D4FF] xl:h-[750px] xl:w-[750px] w-96 h-96 bottom-0 right-0 xl:-bottom-96 xl:-right-96"
        initial={{ x: 0, y: 0 }}
        animate={{
          x: [0, -1500, -1500, 0, 0],
          y: [0, 0, -1000, -1000, 0],
        }}
        transition={{ duration: 60, repeat: Infinity }}
      />

      <section className="relative  border w-full max-w-sm p-5 flex flex-col ">
        <section className="flex">
          <h1 className="text-4xl lg:text-[42px] leading-none">
            going online in
          </h1>

          <section className="flex p-3 space-x-3">
            <BreatheVatsavComponent />
            <BreatheVatsavComponent />
          </section>
          <Image
            width={60}
            height={60}
            className="absolute -top-[31px] -left-[31px]"
            alt="star"
            src={Star}
          />
          <Image
            width={60}
            height={60}
            className="absolute -bottom-[31px] -left-[31px]"
            alt="star"
            src={Star}
          />
          <Image
            width={60}
            height={60}
            className="absolute -bottom-[31px] -right-[31px]"
            alt="star"
            src={Star}
          />
          <Image
            width={60}
            height={60}
            className="absolute -top-[31px] -right-[31px]"
            alt="star"
            src={Star}
          />
        </section>

        <section className="flex items-center justify-center w-full py-3 border rounded-lg">
          <Countdown />
        </section>
      </section>

      <motion.button
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "tween" }}
        onClick={() => setModelOpen(true)}
        className="z-10 border rounded-md px-8 py-2 text-xl absolute bottom-32 bg-black text-white hover:text-black hover:bg-nocl transition-colors duration-500"
      >
        Notify Me
      </motion.button>

      {isModelOpen && <SubscribeModal closeModel={closeModel} />}
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "tween" }}
        className="absolute bottom-16 text-3xl"
      >
        :bitspace
      </motion.h1>
    </main>
  );
}
