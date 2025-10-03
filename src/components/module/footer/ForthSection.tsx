import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io5";
import Image from "next/image";

function ForthSection() {
  return (
    <div>
      <div className="mx-3 my-6 flex items-center justify-around gap-3">
        <Image
          src="/image/enamad.png"
          alt="anadam"
          width={300}
          height={300}
          priority
          className="size-[5rem]"
        />
        <Image
          src="/image/gardeshgari.jpg"
          alt="gardeshgari"
          width={300}
          height={300}
          priority
          className="size-[5rem]"
        />
        <Image
          src="/image/park.png"
          alt="park"
          width={300}
          height={300}
          priority
          className="size-[5rem]"
        />
      </div>
      <ul className="bg-mainbg mx-3 flex flex-col gap-5 rounded-md p-4 text-xs font-semibold text-white">
        <li className="flex items-center gap-[10px] border-r-[3px] border-solid border-white px-[10px] font-bold">
          <IoLocationOutline className="text-lg" />
          <span>آدرس: گیلان ، آستانه اشرفیه ، پارک ساحلی</span>
        </li>
        <li className="flex items-center gap-[10px] border-r-[3px] border-solid border-white px-[10px] font-bold">
          <BsTelephone className="text-lg" />
          <span>شماره تماس : 01391009113</span>
        </li>
        <li className="flex items-center gap-[10px] border-r-[3px] border-solid border-white px-[10px] font-bold">
          <IoLogoWhatsapp className="text-lg" />
          <span>پشتیبانی آنلاین : 09118327158</span>
        </li>
        <li className="flex items-center gap-[10px] border-r-[3px] border-solid border-white px-[10px] font-bold">
          <span>شنبه تا چهارشنبه: 8 الی 16 - پنجشنبه: 8 الی 13</span>
        </li>
      </ul>
      <p className="bg-mainbg my-6 w-full px-3 py-3 text-center text-sm font-medium text-white">
        تمامی حقوق این سایت متعلق به سایت{" "}
        <span className="font-semibold text-blue-600">گرمه جا</span> میباشد
      </p>
    </div>
  );
}

export default ForthSection;
