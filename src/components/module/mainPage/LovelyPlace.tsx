"use client";
import { fakeLocation } from "@/constant/header";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "@/styles/lovelyPlace.module.css";
import Image from "next/image";
import type { Swiper as SwiperClass } from "swiper";
import styles from "@/styles/lovelyPlace.module.css";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Link from "next/link";

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
      <div className="900:w-[80%] relative mx-auto w-[90%]">
        {/* فاصله برای نقطه‌ها */}
        <div className="relative pb-10">
          <Swiper
            onSwiper={setSwiperRef}
            modules={[Pagination]}
            pagination={{
              clickable: true,
              el: `.${styles.mahdiPagination}`, // 👈 وصل شدن به el
            }}
            slidesPerView={2}
            breakpoints={{
              440: { slidesPerView: 3 },
              900: { slidesPerView: 5 },
            }}
            spaceBetween={30}
            className={`${styles.mySwiper} mySwiper`}
          >
            {chunked.map((group, index) => (
              <SwiperSlide key={index}>
                <div className="grid w-[10rem] grid-cols-1 gap-4">
                  {group.map((item, i) => (
                    <Link
                      href={`/location/${decodeURIComponent(item.location)}`}
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
                    </Link>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={`${styles.mahdiPagination} -mt-3`}></div>
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
