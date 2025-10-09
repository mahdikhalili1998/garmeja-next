import { ILocationInfo } from "@/types/props";
import React, { FC } from "react";
import { TbOvalVertical } from "react-icons/tb";
import Image from "next/image";
import { formatNumber, shortText } from "@/functions/function";
import { TbOvalVerticalFilled } from "react-icons/tb";

const LocationCard: FC<ILocationInfo> = ({
  comment,
  imag,
  price,
  title,
  option,
  ownerImg,
  rate,
}) => {
  return (
    <div className="bg-titleColor relative rounded-lg pb-4">
      {/* عکس صاحب اقامتگاه   */}
      <div className="absolute -bottom-9 left-1 flex items-center justify-center rounded-full pb-[6px]">
        <Image
          src={ownerImg || "/image/person.png"}
          width={300}
          height={300}
          alt="owner image"
          priority
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
        <div className="absolute -bottom-10 left-0 z-10 h-24 w-full rounded-t-lg bg-gradient-to-b from-white/[4px] via-white/85 to-white/[4px] backdrop-blur-[0.2px]"></div>

        <h1 className="text-titleColor absolute right-0 -bottom-1 z-20 -mt-5 mr-4 w-max pb-3 font-bold">
          {shortText(title)}
        </h1>
      </div>

      {/* امکانات و ستاره */}
      <div className="-mt-1 flex justify-around">
        <ul className="divide-mainbg flex items-center justify-start divide-x text-sm font-semibold">
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
      <p className="z-20 mt-3 flex items-center gap-1 px-6 text-sm font-bold text-white">
        <span> قیمت امشب</span>
        <span className="text-mainbg">{formatNumber(price)} </span>تومان{" "}
      </p>
    </div>
  );
};

export default LocationCard;
