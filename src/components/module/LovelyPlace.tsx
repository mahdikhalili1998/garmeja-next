"use client";
import { fakeLocation } from "@/constant/header";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";

export default function LovelyPlace() {
  return (
    <Swiper
      slidesPerView={2} // تعداد اسلایدهای افقی
      spaceBetween={30}
      pagination={{ clickable: true }}
      //   modules={[Pagination]}
      className="mySwiper"
    >
      {fakeLocation.map((item, index) => (
        <SwiperSlide key={index}>
          {/* container عمودی برای دو کارت */}
          <div className="flex flex-col gap-4">
            {/* کارت اول */}
            <div className="flex items-center gap-2 rounded-lg text-black">
              <Image
                src={item.img}
                width={120}
                height={120}
                alt={item.location}
                className="size-[5rem] rounded-full"
                priority
              />
              <div className="flex flex-col items-start gap-1">
                <span className="text-xs">اجاره ویلا در</span>
                <span className="text-xs font-bold">{item.location}</span>
                <span className="text-xs">10097 اقامتگاه</span>
              </div>
            </div>

            {/* کارت دوم */}
            <div className="flex items-center gap-2 rounded-lg text-black">
              <Image
                src={item.img}
                width={120}
                height={120}
                alt={item.location}
                className="size-[5rem] rounded-4xl"
                priority
              />
              <div className="flex flex-col items-start gap-1">
                <span className="text-xs">اجاره ویلا در</span>
                <span className="text-xs font-bold">{item.location}</span>
                <span className="text-xs">10097 اقامتگاه</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
