"use client";
import { fakeLocations } from "@/constant/header";
import styles from "@/styles/categoryPlaces.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "@/styles/categoryPlaces.module.css";
import Image from "next/image";
import type { Swiper as SwiperClass } from "swiper";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function CategoryPlaces() {
  const [swiperRef, setSwiperRef] = useState<SwiperClass | null>(null);
  return (
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
            900: { slidesPerView: 6 },
          }}
          spaceBetween={30}
          className={`${styles.mySwiper} mySwiper`}
        >
          {fakeLocations.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex w-[10rem] items-center gap-2 rounded-lg text-black">
                <Image
                  src={item.img}
                  width={120}
                  height={120}
                  alt={item.location}
                  className="border-borderColor size-[4.7rem] rounded-2xl border-2 border-solid"
                  priority
                />
                <div className="flex flex-col items-start gap-1">
                  <span className="text-xs font-bold text-orange-600">
                    {item.location}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={`${styles.mahdiPagination} -mt-3`}></div>
      {/* فلش چپ */}
      <button
        onClick={() => swiperRef?.slidePrev()}
        className="hover:bg-mainbg bg-mainbg/40 900:block absolute top-10 left-[-3rem] z-10 hidden -translate-y-1/2 rounded-full p-2 text-white transition"
      >
        <FaChevronLeft size={20} />
      </button>

      {/* فلش راست */}
      <button
        onClick={() => swiperRef?.slideNext()}
        className="bg-mainbg/40 hover:bg-mainbg 900:block absolute top-10 right-[-3rem] z-10 hidden -translate-y-1/2 rounded-full p-2 text-white transition"
      >
        <FaChevronRight size={20} />
      </button>
    </div>
  );
}

export default CategoryPlaces;
