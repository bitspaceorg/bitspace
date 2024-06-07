import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const UpcomingEvents = () => {
	const url = [
		{
			img: "https://cdn.discordapp.com/attachments/1139036801764429835/1139045626903003186/MukeshKannan.jpg?ex=6663d767&is=666285e7&hm=1cf4a5fbc9f3eb262c24466461785e7e329a0a797de3d9b61756f59d072a1447&",
			h: {
				h1: "Bytecon-106",
				h2: "Intro AI and ML with Hugging Face",
			},
			at: {
				date: "12/12/2021",
				location: "Chennai, Tamil Nadu",
			},
		},
		{
			img: "https://cdn.discordapp.com/attachments/1139036801764429835/1139044330108112986/AlbertA.jpeg?ex=6663d632&is=666284b2&hm=ccda6bbeaa25ac178041b657e1478f79ed0948c1187e7daad44538b034cc8c10&",
			h: {
				h1: "Bytecon-106",
				h2: "Albert Anthony",
			},
			at: {
				date: "12/12/2021",
				location: "Chennai, Tamil Nadu",
			},
		},
	];

	return (
		<section className="w-full p-8 md:mt-14 mt-10">
			<section className="flex flex-col md:flex-row">
				<div className="basis-1/2 justify-start md:order-1 order-2">
					<h1 className="lg:text-5xl my-1 text-4xl md:font-semibold">
						Workshops
					</h1>
					<span className="my-2 text-sm">
						loren ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua.
					</span>
				</div>
				<div className="basis-1/2 md:text-right md:order-2 order-1">
					<h1 className="lg:text-5xl text-4xl font-semibold">
						Upcoming Events
					</h1>
				</div>
			</section>
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
					delay: 5000,
				}}
				className="md:w-full w-[85vw] md:h-[72vh] h-[66vh] mt-5"
			>
				{url.map((ele, idx) => {
					return (
						<SwiperSlide className="relative" key={idx}>
							<Image
								src={ele.img}
								alt="Image not found"
								fill
								quality={100}
								className="object-cover min-w-full min-h-full"
							/>
							<section
								className="relative text-white lg:opacity-0 hover:opacity-100 w-full h-full
                    img-gradient transition-all duration-300 ease-in-out"
							>
								<section className="absolute bottom-6 left-6 lg:text-5xl text-2xl font-medium lg:font-semibold">
									<div className="pb-2">{ele.h.h1}</div>
									<div>{ele.h.h2}</div>
								</section>
								<section className="absolute bottom-6 right-6 text-right text-xl font-medium hidden md:block">
									<div className="pb-1">{ele.at.date}</div>
									<div>{ele.at.location}</div>
								</section>
							</section>
						</SwiperSlide>
					);
				})}
			</Swiper>
			<section className="md:mt-20 mt-10">
        <section>
          <h1 className="lg:text-5xl text-4xl font-semibold">
            Past Events
          </h1>
        </section>
				<Swiper
					grabCursor={true}
					centeredSlides={true}
					slidesPerView={1.1}
					coverflowEffect={{
						rotate: 0,
						stretch: 0,
						depth: 100,
						modifier: 2,
						slideShadows: true,
					}}
					pagination={true}
					spaceBetween={40}
					modules={[EffectCoverflow, Autoplay]}
					autoplay={{
						delay: 5000,
					}}
					className="md:w-[90vw] w-[85vw] h-[66vh] mt-5"
				>
					{url.map((ele, idx) => {
						return (
							<SwiperSlide className="relative" key={idx}>
								<Image
									src={ele.img}
									alt="Image not found"
									fill
									quality={100}
									className="object-cover min-w-full min-h-full"
								/>
								<section
									className="relative text-white w-full h-full
                    img-gradient transition-all duration-300 ease-in-out"
								>
									<section className="absolute bottom-6 left-6 xl:text-4xl text-2xl font-medium lg:font-semibold">
										<div className="pb-2">{ele.h.h1}</div>
										<div>{ele.h.h2}</div>
									</section>
									<section className="absolute bottom-6 right-6 text-right text-xl font-medium hidden md:block">
										<div className="pb-1">
											{ele.at.date}
										</div>
										<div>{ele.at.location}</div>
									</section>
								</section>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</section>
		</section>
	);
};
export default UpcomingEvents;
