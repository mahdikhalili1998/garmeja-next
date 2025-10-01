"use client";
import { fakeLocation } from "@/constant/header";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

export default function LovelyPlace() {
  const chunked = [];
  for (let i = 0; i < fakeLocation.length; i += 2) {
    chunked.push(fakeLocation.slice(i, i + 2));
  }

  return (
    <>
      <h1 className="text-titleColor my-4 mr-3 text-lg font-bold">
        مقصد های محبوب
      </h1>
      <Swiper slidesPerView={2} spaceBetween={30}>
        {chunked.map((group, index) => (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-1 gap-4">
              {group.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 rounded-lg text-black"
                >
                  <Image
                    src={item.img}
                    width={120}
                    height={120}
                    alt={item.location}
                    className="border-borderColor size-[5rem] rounded-full border-2 border-solid"
                    priority
                  />
                  <div className="flex flex-col items-start gap-1">
                    <span className="text-xs">اجاره ویلا در</span>
                    <span className="text-xs font-bold text-orange-600">
                      {item.location}
                    </span>
                    <span className="text-xs">10097 اقامتگاه</span>
                  </div>
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
