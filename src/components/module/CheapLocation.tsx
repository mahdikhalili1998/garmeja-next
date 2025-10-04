"use client";
import { landMarkPlace } from "@/constant/landMarkPlace";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "@/styles/landMark.module.css";
import Image from "next/image";
import { shortText, formatNumber } from "@/functions/function";
import { FaStar } from "react-icons/fa";
import { Navigation } from "swiper/modules";

function CheapLocation() {
  return (
    <div id="forest">
      <h1 className="text-titleColor mt-4 mr-3 text-lg font-bold">
        اقامتگاه های مقرون به صرفه
      </h1>
      <h3 className="text-iconColor mt-2 mr-3 mb-4 text-sm font-medium">
        اﻗﺎﻣﺘﮕﺎه‌ﻫﺎی متفاوت و جذاب ﺑﺮای اﻓﺮاد ﺧﺎص{" "}
      </h3>
      <Swiper
        slidesPerView={1.2}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          440: {
            slidesPerView: 1.8,
          },
          540: {
            slidesPerView: 2.2,
          },
          740: {
            slidesPerView: 3.2,
          },
        }}
        spaceBetween={30}
      >
        {landMarkPlace.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="space-y-2">
              <div className="relative inline-block w-fit">
                <Image
                  src={item.img}
                  width={300}
                  height={300}
                  alt={item.title}
                  priority
                  className="h-auto rounded-lg"
                />

                {/* فید آبی از پایین دقیقا اندازه عکس */}
                <div className="absolute bottom-0 left-0 h-16 w-full rounded-b-lg bg-gradient-to-t from-blue-700/80 to-transparent"></div>

                {/* متن روی فید */}
                <span className="absolute bottom-2 left-2 text-sm font-bold text-white">
                  {formatNumber(30000000000)} تومان
                </span>
              </div>

              <h2 className="text-titleColor pr-1 text-sm font-bold">
                {shortText(item.title)}
              </h2>
              <ul className="mt-3 flex">
                {item.option.map((items, index) => (
                  <li
                    className={`px-1 text-xs ${
                      index === 1 ? "border-r-2 border-l-2 border-gray-500" : ""
                    }`}
                    key={index}
                  >
                    {items}
                  </li>
                ))}
              </ul>
              <div className="mt-3 flex items-center gap-5">
                <span className="block pr-1 text-xs">23 نظر</span>
                <div className="flex items-center justify-center gap-1 text-xs">
                  <FaStar className="text-iconColor -mt-[5px] text-sm" />
                  <span className="">10/10</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CheapLocation;
