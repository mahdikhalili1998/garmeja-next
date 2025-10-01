"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { lottieFileJson } from "@/constant/other";
import Lottie from "react-lottie-player";
import { Autoplay } from "swiper/modules";

export default function SiteFeature() {
  return (
    <>
      <Swiper
        slidesPerView={1.8}
        spaceBetween={30}
        modules={[Autoplay]} // فعال کردن ماژول
        autoplay={{
          delay: 1000, // هر 2.5 ثانیه
          disableOnInteraction: false, // وقتی کاربر اسلاید رو لمس کنه متوقف نشه
        }}
        loop={true}
      >
        {lottieFileJson.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center justify-center gap-2 rounded-lg p-2">
              <Lottie
                animationData={item.icon}
                loop
                play
                style={{
                  width: 120,
                  height: 70,
                }}
              />
              <span className="text-titleColor text-sm font-bold">
                {item.title}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
