import { Star } from "@/assets";
import { BreatheVatsavComponent, Countdown } from "@/components";
import Image from "next/image";

export default function Teaser() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen w-full overflow-hidden bg-white px-8">
      <section className="rounded-full blur-[150px] xl:blur-[750px] absolute bg-[#FCB7FF] xl:h-[750px] xl:w-[750px] w-96 h-96 top-0 right-0 xl:-top-48 xl:-right-40 " />
      <section className="rounded-full blur-[150px] xl:blur-[750px] absolute bg-[#FCB7FF] xl:h-[750px] xl:w-[750px] w-96 h-96 " />
      <section className="rounded-full blur-[150px] xl:blur-[750px] absolute bg-[#FCB7FF] xl:h-[750px] xl:w-[750px] w-96 h-96 bottom-0 left-0 xl:-bottom-56 xl:-left-48" />
      <section className="rounded-full blur-[150px] xl:blur-[750px] absolute bg-[#FC8B8B] xl:h-[750px] xl:w-[750px] w-96 h-96 -top-32 -left-32 xl:-top-96 xl:-left-96 " />
      <section className="rounded-full blur-[150px] xl:blur-[750px] absolute bg-[#B7D4FF] xl:h-[750px] xl:w-[750px] w-96 h-96 bottom-0 right-0 xl:-bottom-96 xl:-right-96" />

      <section className="relative border w-full max-w-sm p-5 flex flex-col ">
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

      <h1 className="absolute bottom-16 text-3xl">:bitspace</h1>
    </main>
  );
}
