"use client";
import { fakeLocation } from "@/constant/header";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "@/styles/lovelyPlace.module.css";
import Image from "next/image";
import type { Swiper as SwiperClass } from "swiper";
import styles from "@/styles/lovelyPlace.module.css";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function LovelyPlace() {
  const chunked = [];
  for (let i = 0; i < fakeLocation.length; i += 2) {
    chunked.push(fakeLocation.slice(i, i + 2));
  }

  const [swiperRef, setSwiperRef] = useState<SwiperClass | null>(null);
  return (
    <>
      <h1 className="text-titleColor my-4 mr-3 text-lg font-bold">
        مقصد های محبوب
      </h1>
      <div className="900:w-[80%] relative mx-auto">
        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={2}
          breakpoints={{
            440: {
              slidesPerView: 3,
            },
          }}
          spaceBetween={30}
          className="mySwiper"
        >
          {chunked.map((group, index) => (
            <SwiperSlide className={`${styles.swiperSlide}`} key={index}>
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
                      className="border-borderColor size-[4.7rem] rounded-2xl border-2 border-solid"
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
        {/* فلش چپ */}
        <button
          onClick={() => swiperRef?.slidePrev()}
          className="hover:bg-mainbg bg-mainbg/40 900:block absolute top-1/2 left-[-3rem] z-10 hidden -translate-y-1/2 rounded-full p-2 text-white transition"
        >
          <FaChevronLeft size={20} />
        </button>

        {/* فلش راست */}
        <button
          onClick={() => swiperRef?.slideNext()}
          className="bg-mainbg/40 hover:bg-mainbg 900:block absolute top-1/2 right-[-3rem] z-10 hidden -translate-y-1/2 rounded-full p-2 text-white transition"
        >
          <FaChevronRight size={20} />
        </button>
      </div>
    </>
  );
}
