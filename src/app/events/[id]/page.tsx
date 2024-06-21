"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import { usePathname } from "next/navigation";
import { EventType } from "@/components/Events/types";
import { EVENTS_DATA_URL } from "@/libs/utils";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

export default function IndividualEvents() {
	const [active, setActive] = useState("description");
	const [eventData, setEventData] = useState<EventType>();
	const [pastEvent, setPastEvent] = useState(false);
	const [notfound, setNotFound] = useState(false);

	const eventId = usePathname().split("/")[2];

	useEffect(() => {
		const getData = async () => {
			if (eventId) {
				const res = await fetch(EVENTS_DATA_URL);
				try {
					const data: Array<EventType> = await res.json();
					const event = data.find(item => item.id === eventId);
					setEventData(event);
					if (event) {
						const currDate = new Date();
						const eventDate = new Date(event.at.date);
						if (eventDate < currDate) {
							setPastEvent(true);
						}
					} else {
						setNotFound(true);
					}
				} catch (err) {
					console.log("Error fetching event data:" + err);
				}
			}
		};
		getData();
	}, [eventId]);

	if (pastEvent) {
		return (
			<>
				<main className="md:px-8 bggreen graph-paper select-none min-h-screen w-full flex items-center text-7xl font-bold">
					<section className="w-full px-8 md:mt-20 mt-16">
						<Swiper
							grabCursor={true}
							centeredSlides={true}
							slidesPerView={1}
							coverflowEffect={{
								rotate: 0,
								stretch: 0,
								depth: 100,
								modifier: 2,
								slideShadows: true,
							}}
							pagination={true}
							spaceBetween={0}
							modules={[EffectCoverflow, Autoplay]}
							autoplay={{
								delay: 2000,
							}}
							className="md:w-full w-[85vw] md:h-[60vh] h-[50vh] mt-5 overflow-none"
						>
							{eventData?.img.map((ele, idx) => {
								return (
									<SwiperSlide className="relative" key={idx}>
										<Image
											src={ele}
											alt="Image not found"
											fill
											quality={100}
											className="object-cover min-w-full min-h-full"
										/>
									</SwiperSlide>
								);
							})}
						</Swiper>
						<ReactMarkdown
							className="prose mt-5"
							remarkPlugins={[remarkGfm]}
						>
							{eventData?.md}
						</ReactMarkdown>
					</section>
				</main>
			</>
		);
	}

	if (eventData === null) {
		return (
			<>
				<main className="md:px-8 bggreen graph-paper select-none min-h-screen w-full grid grid-cols-2 items-center text-7xl font-bold">
					Loading...
				</main>
			</>
		);
	}

	if (notfound) {
		return (
      <div className="graph-paper h-[100vh] w-[100vw] flex flex-col justify-center items-center md:text-xl text-center font-semibold">
        <div>
          Event Not Found
        </div>
        <div className="my-5">
          <div>
          Dont try to play fool with me nigesh. 
          </div>
          <div>
          <b>NO</b>, its very Bad.
          </div>
        </div>
        <Image
          src="https://f005.backblazeb2.com/file/conversion-mep/no-no-no-nope-unscreen.gif"
          alt="404"
          width={200}
          height={200}
        />
      </div>
		);
	}

	return (
		<>
			<main className="md:px-8 bggreen graph-paper select-none min-h-screen w-full grid grid-cols-2 items-center text-7xl font-bold">
				<section className="mx-5  lg:mt-32 col-span-2 md:col-span-1 content-start">
					<div className="w-full">
						<h1 className="w-full p-2 text-left text-3xl sm:text-5xl">
							{eventData?.h.h1}
						</h1>
						<h1 className="w-full p-2 text-left text-3xl sm:text-5xl">
							{eventData?.h.h2}
						</h1>
					</div>
					<div className="w-full mt-6 p-2 text-base sm:text-xl">
						<div className="w-full flex flex-row justify-start gap-6">
							<button
								className={
									"underline-animation " +
									(active === "description" ? "active" : "")
								}
								onClick={() => setActive("description")}
							>
								Description
							</button>
							<button
								className={
									"underline-animation " +
									(active === "rules" ? "active" : "")
								}
								onClick={() => setActive("rules")}
							>
								Rules
							</button>
							<button
								className={
									"underline-animation " +
									(active === "others" ? "active" : "")
								}
								onClick={() => setActive("others")}
							>
								Others
							</button>
						</div>
						<div className="w-full mt-4 pr-2 flex flex-col justify-start font-medium">
							{active === "description" && (
								<div className="flex flex-col justify-between min-h-[48vh]">
									<div className="text-start">
										{eventData?.description}
									</div>
									<button className="mt-6 border-4 border-black-500 p-2 w-40 font-bold bg-white">
										RSVP
									</button>
								</div>
							)}

							{active === "rules" && (
								<div className="flex flex-col justify-between min-h-[48vh]">
									<div className="text-start">
										{eventData?.rules}
									</div>
									<button className="mt-6 border-4 border-black-500 p-2 w-40 font-bold bg-white">
										RSVP
									</button>
								</div>
							)}

							{active === "others" && (
								<div className="flex flex-col justify-between min-h-[48vh]">
									<div className="text-start">
										{eventData?.others}
									</div>
									<button className="mt-6 border-4 border-black-500 p-2 w-40 font-bold bg-white">
										RSVP
									</button>
								</div>
							)}
						</div>
					</div>
				</section>

				{/* Right Section */}
				<section className="mx-5 hidden min-h-100 md:block md:col-span-1 items-start">
					<div className="h-full w-full grid grid-cols-3 gap-8">
						<div className="relative h-60 col-span-2">
							{eventData && (
								<Image
									className="absolute inset-0 object-cover"
									src={eventData.img[0] || ""}
									layout="fill"
									alt="Image 1"
								/>
							)}
						</div>
						<div className="relative h-60">
							{eventData && (
								<Image
									className="absolute inset-0 object-cover"
									src={eventData.img[1] || ""}
									layout="fill"
									alt="Image 2"
								/>
							)}
						</div>
						<div className="relative h-44 col-span-3">
							{eventData && (
								<Image
									className="absolute inset-0 object-cover"
									src={eventData.img[0] || ""}
									layout="fill"
									alt="Image 3"
								/>
							)}
						</div>
					</div>
				</section>
			</main>
		</>
	);
}
