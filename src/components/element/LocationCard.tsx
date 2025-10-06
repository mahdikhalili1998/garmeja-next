import { ILocationInfo } from "@/types/props";
import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "@/styles/LocationCard.module.css";
import { EffectFlip, Navigation } from "swiper/modules";
import Image from "next/image";
import { shortText } from "@/functions/function";

const LocationCard: FC<ILocationInfo & { randomColor: string }> = ({
  comment,
  imag,
  price,
  title,
  option,
  randomColor,
  ownerImg,
}) => {
  return (
    <div className="relative">
      <h1 className="-mt-5 mr-auto w-max font-bold text-white">
        {shortText(title)}
      </h1>
      <div className="absolute -top-14 right-2">
        <Image
          src={ownerImg || "/image/person.png"}
          width={300}
          height={300}
          alt="owner image"
          priority
          style={{ backgroundColor: randomColor }}
          className={`-mr-1 size-[4.6rem] rounded-full p-2`}
        />
      </div>
      <Swiper
        effect={"flip"}
        grabCursor={true}
        // pagination={true}
        navigation={true}
        modules={[EffectFlip, Navigation]}
        className="mySwiper mt-5"
      >
        {imag.map((item, index) => (
          <SwiperSlide key={index}>
            <Image
              src={item || "/image/logo.png"}
              width={300}
              height={300}
              alt={title}
              priority
              className="rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <ul className="flex items-center divide-x divide-black">
        {option?.map((item, index) => (
          <li key={index} className="px-2">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LocationCard;
