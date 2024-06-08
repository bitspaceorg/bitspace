"use client"
import { useState } from "react";
import Image from "next/image";

export default function IndividualEvents() {
  const [active, setActive] = useState('description');

  return (
    <>
      <main className="md:px-8 bggreen graph-paper select-none min-h-screen w-full grid grid-cols-2 items-center text-7xl font-bold">
        {/* Left Section */} 
        <section className="mx-5 my-32 lg:mt-32 col-span-2 md:col-span-1 content-start">
          <div className="w-full">
            <h1 className="w-full p-2 text-left text-3xl sm:text-5xl">Bytecon 420</h1>
            <h1 className="w-full p-2 text-left text-3xl sm:text-5xl">Workshop Name</h1>
          </div>
          <div className="w-full mt-6 p-2 text-base sm:text-xl">
            <div className="w-full flex flex-row justify-start gap-6">
              <button 
                className={"underline-animation " + (active === "description" ? "active" : "") } 
                onClick={() => setActive('description')}>
                Description
              </button>
              <button 
                className={"underline-animation " + (active === "rules" ? "active" : "") } 
                onClick={() => setActive("rules")}>
                Rules
              </button>
              <button 
                className={"underline-animation " + (active === "others" ? "active" : "") } 
                onClick={() => setActive("others")}>
                Others
              </button>
            </div>
            <div className="w-full mt-4 pr-2 flex flex-col justify-start font-medium">
              {active === "description" && (
                <div className="flex flex-col justify-between min-h-[48vh]"> 
                  <div className="text-start"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nullam ac erat ante. Pellentesque ac risus in ipsum hendrerit aliquet non nec lacus. Phasellus volutpat, nulla sit amet varius cursus, enim lectus sollicitudin elit, at dictum ex nulla non augue. Ut fringilla, massa et fermentum volutpat, libero turpis fermentum leo, nec scelerisque nulla lorem vel orci. Morbi auctor nulla at libero aliquet, non elementum urna tempor. Proin vel ultricies augue. Donec auctor, justo a interdum venenatis, arcu libero condimentum massa.
                </div>
              <button className="mt-6 border border-4 border-black-500 p-2 w-40 font-bold">RSVP</button>
              </div>
              )}

              {active === "rules" && (
                <div className="flex flex-col justify-between min-h-[48vh]"> 
                  <div className="text-start">
                    Rules come here
                 </div>
                <button className="mt-6 border border-4 border-black-500 p-2 w-40 font-bold">RSVP</button>
                </div>
              )}

              {active === "others" && (
                <div className="flex flex-col justify-between min-h-[48vh]"> 
                 <div className="text-start">
                  Other details
                 </div>
                <button className="mt-6 border border-4 border-black-500 p-2 w-40 font-bold">RSVP</button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Right Section */}
        <section className="mx-5 hidden min-h-100 md:block md:col-span-1 items-start">
          <div className="h-full w-full grid grid-cols-3 gap-8">
            <div className="relative h-60 col-span-2">
              <Image
                className="absolute inset-0 object-cover"
                src="https://media.discordapp.net/attachments/1139036801764429835/1139046595871113216/SrivatsavAuswin.jpg?ex=6664810e&is=66632f8e&hm=f47e29010f294059b67b1e95489d2b69d9ed5c0fafb8b9b00599116f92928fb0&"
                layout="fill"
                alt="Image 1"
              />
            </div>
            <div className="relative h-60">
              <Image
                className="absolute inset-0 object-cover"
                src="https://media.discordapp.net/attachments/1139036801764429835/1139046595871113216/SrivatsavAuswin.jpg?ex=6664810e&is=66632f8e&hm=f47e29010f294059b67b1e95489d2b69d9ed5c0fafb8b9b00599116f92928fb0&"
                layout="fill"
                alt="Image 2"
              />
            </div>
            <div className="relative h-44 col-span-3">
              <Image
                className="absolute inset-0 object-cover"
                src="https://media.discordapp.net/attachments/1139036801764429835/1139046595871113216/SrivatsavAuswin.jpg?ex=6664810e&is=66632f8e&hm=f47e29010f294059b67b1e95489d2b69d9ed5c0fafb8b9b00599116f92928fb0&"
                layout="fill"
                alt="Image 3"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
