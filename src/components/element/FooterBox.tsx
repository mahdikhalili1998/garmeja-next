import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";

function FooterBox() {
  return (
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
        <BiSupport className="text-lg" />
        <span>پشتیبانی به صورت 24 ساعته </span>
      </li>
    </ul>
  );
}

export default FooterBox;
