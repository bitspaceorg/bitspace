import { Sanjeevi } from "@/assets";
import Image from "next/image";

export default function LifeAtBitspace() {
  return (
    <main className="h-screen w-full flex justify-center bg-cream">
      <section className="w-[900px] h-full py-10">
        <h1 className="font-migha text-9xl">WE ARE BITSPACE</h1>

        <section className="bg-red h-full w-full flex overflow-hidden">

          <section className="flex flex-col bg-accent w-full overflow-hidden">
            <Image src={Sanjeevi} alt="" height={500} />
            <Image src={Sanjeevi} alt="" height={500} />
            <Image src={Sanjeevi} alt="" height={500} />
            <Image src={Sanjeevi} alt="" height={500} />
            <Image src={Sanjeevi} alt="" height={500} />
          </section>

          <section className="flex flex-col bg-accent w-full overflow-hidden -translate-y-28">
            <Image src={Sanjeevi} alt="" height={500} />
            <Image src={Sanjeevi} alt="" height={500} />
            <Image src={Sanjeevi} alt="" height={500} />
            <Image src={Sanjeevi} alt="" height={500} />
            <Image src={Sanjeevi} alt="" height={500} />
            <Image src={Sanjeevi} alt="" height={500} />
            <Image src={Sanjeevi} alt="" height={500} />
            <Image src={Sanjeevi} alt="" height={500} />
          </section>

          <section className="flex flex-col bg-accent w-full overflow-hidden">
            <Image src={Sanjeevi} alt="" height={500} />
            <Image src={Sanjeevi} alt="" height={500} />
            <Image src={Sanjeevi} alt="" height={500} />
            <Image src={Sanjeevi} alt="" height={500} />
            <Image src={Sanjeevi} alt="" height={500} />
          </section>

        </section>

      </section>
    </main>
  );
}
