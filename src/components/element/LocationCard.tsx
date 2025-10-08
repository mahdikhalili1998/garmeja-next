import { ILocationInfo } from "@/types/props";
import React, { FC } from "react";
import { TbOvalVertical } from "react-icons/tb";
import Image from "next/image";
import { formatNumber, shortText } from "@/functions/function";
import { TbOvalVerticalFilled } from "react-icons/tb";

const LocationCard: FC<ILocationInfo & { randomColor: string }> = ({
  comment,
  imag,
  price,
  title,
  option,
  randomColor,
  ownerImg,
  rate,
}) => {
  // console.log(rate);
  return (
    <div className="relative">
      <div className="bg-titleColor absolute -bottom-9 left-1 z-30 flex items-center justify-center rounded-full pb-[6px]">
        <Image
          src={ownerImg || "/image/person.png"}
          width={300}
          height={300}
          alt="owner image"
          priority
          // style={{ borderColor: randomColor }}
          className={`-mr-1 size-[3.5rem] translate-x-[-2px] rounded-full`}
        />
      </div>
      <div className="relative w-full">
        {/* عکس اقامتگاه */}
        <Image
          src={imag || "/image/logo.png"}
          width={300}
          height={300}
          alt={title}
          priority
          className="h-auto w-full rounded-lg"
        />
        {/* فید سفید-سفید */}
        <div className="absolute -bottom-10 left-0 z-10 h-24 w-full rounded-t-lg bg-gradient-to-b from-white/10 via-white to-white/10"></div>

        {/* فید آبی از پایین دقیقا اندازه عکس */}
        <div className="from-titleColor/80 absolute -bottom-24 left-0 z-10 h-48 w-full rounded-b-lg bg-gradient-to-t to-transparent"></div>
        <h1 className="absolute right-0 -bottom-1 z-20 -mt-5 mr-2 w-max pb-3 font-bold text-white">
          {shortText(title)}
        </h1>
      </div>

      {/* امکانات و ستاره */}
      <div className="-mt-1 flex flex-col bg-transparent">
        <div className="mt-2 flex items-center justify-between px-2">
          <ul className="divide-mainbg z-40 flex items-center justify-start divide-x text-sm font-semibold">
            {option?.map((item, index) => (
              <li key={index} className="px-2 text-white">
                {item}
              </li>
            ))}
          </ul>
          <div className="z-20 flex flex-col items-center gap-1 text-white">
            <span>{rate} از 5 </span>
            <div className="flex w-fit">
              <TbOvalVertical />
              <TbOvalVerticalFilled className="text-mainbg" />
              <TbOvalVerticalFilled className="text-mainbg" />
              <TbOvalVerticalFilled className="text-mainbg" />
              <TbOvalVerticalFilled className="text-mainbg" />
            </div>
          </div>
        </div>
        <p className="z-20 mt-6 flex items-center gap-1 px-4 text-sm font-bold text-white">
          <span> قیمت امشب</span>
          <span className="text-mainbg">{formatNumber(price)} </span>تومان{" "}
        </p>
      </div>
    </div>
  );
};

export default LocationCard;
