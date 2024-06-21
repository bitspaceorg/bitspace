import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import { EventCategoryType, EventType } from "./types";
import { EVENTS_DATA_URL } from "@/libs/utils";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";


const EventsHome = () => {
  const [upEvents, setUpEvents] = useState<EventCategoryType>({
    ws: [],
    comp: [],
  });
  const [pastEvents, setPastEvents] = useState<Array<EventType>>([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(EVENTS_DATA_URL);
      const data = await res.json();
      const date = new Date();
      const today = date.getTime();
      data.forEach((ele: EventType) => {
        const eventDate = new Date(ele.at.date).getTime();
        if (eventDate > today) {
          if (ele.type === "ws") {
            setUpEvents(prev => {
              return { ...prev, ws: [...prev.ws, ele] };
            });
          } else {
            setUpEvents(prev => {
              return { ...prev, comp: [...prev.comp, ele] };
            });
          }
        } else {
          setPastEvents(prev => [...prev, ele]);
        }
      });
    };
    getData();
  }, []);

  return (
    <section className="w-full px-8 pt-20 md:pt-24 pb-10">
      {
        <section>
          <div className="md:text-right">
            <h1 className="lg:text-5xl text-4xl font-semibold mb-[0.3rem]">
              Upcoming Events
            </h1>
          </div>
          {upEvents.ws.length === 0 && upEvents.comp.length === 0 ?
            <NoUpCommpingEvents />
            : <section
              className={` ${upEvents.ws.length > 0 && upEvents.comp.length > 0 && "md:grid grid-cols-2 gap-4"} `}
            >
              {upEvents.ws && upEvents.ws.length > 0 && (
                <Carosel events={upEvents.ws} type="ws" />
              )}
              {upEvents.comp && upEvents.comp.length > 0 && (
                <Carosel events={upEvents.comp} type="comp" />
              )}
            </section>
          }
          <section>
            <h1 className="md:text-right mr-8 lg:text-5xl text-4xl font-semibold">
              Previous Events
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
            {pastEvents.map((ele, idx) => {
              return (
                <SwiperSlide className="relative" key={idx}>
                  <Image
                    src={ele.img[0]}
                    alt="Image not found"
                    fill
                    quality={100}
                    className="object-cover min-w-full min-h-full"
                  />
                  <Link href={`/events/${ele.id}`} key={idx}>
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
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </section>
      }
    </section>
  );
};

const Carosel = ({
  events,
  type,
}: {
  events: Array<EventType>;
  type: string;
}) => {
  const isComp = type === "comp" ? true : false;
  return (
    <>
      {events.length > 0 && (
        <section className="md:mb-20 mb-10">
          <section>
            <h1 className="lg:text-5xl my-[0.32rem] text-4xl md:font-semibold">
              {isComp ? "Competitions" : "Workshops"}
            </h1>
            <span className="my-2 md:font-normal md:text-base text-sm font-regular">
              {isComp ?
                "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat." :
                "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."}
            </span>
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
            {events.map((ele, idx) => {
              return (
                <SwiperSlide className="relative" key={idx}>
                  <Image
                    src={ele.img[0]}
                    alt="Image not found"
                    fill
                    quality={100}
                    className="object-cover min-w-full min-h-full"
                  />
                  <Link href={`/events/${ele.id}`} key={idx}>
                    <section
                      className="relative text-white lg:opacity-0 hover:opacity-100 w-full h-full
                      img-gradient transition-all duration-300 ease-in-out"
                    >
                      <section className="absolute bottom-6 left-6 lg:text-4xl text-xl font-medium lg:font-semibold">
                        <div className="pb-2">
                          {ele.h.h1}
                        </div>
                        <div>{ele.h.h2}</div>
                      </section>
                      <section className="absolute top-6 text-black right-6 text-right text-xl font-medium hidden md:block">
                        <div className="pb-1">
                          {ele.at.date}
                        </div>
                      </section>
                    </section>
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </section>
      )}
    </>
  );
};

const NoUpCommpingEvents = () => {
  return (
    <section className="md:mb-20 mb-10">
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
        <SwiperSlide className="relative">
          <Image
            src="https://f005.backblazeb2.com/file/conversion-mep/RahulMNavneet.jpg"
            alt="Image not found"
            fill
            quality={100}
            className="object-cover min-w-full min-h-full"
          />
          <section
            className="relative text-white lg:opacity-0 hover:opacity-100 w-full h-full
                    img-gradient transition-all duration-300 ease-in-out"
          >
            <section className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center font-semibold md:text-4xl text-xl">
              <div className="pb-2">Sorry, No Upcoming Events</div>
              <div>Scroll down for past events</div>
            </section>
          </section>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default EventsHome;
