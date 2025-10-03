import Image from "next/image";
import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { IoCallSharp } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";

function SecondSection() {
  return (
    <div>
      {/* لوگو و راه های ارتباطی */}
      <div className="flex flex-col items-center justify-center gap-2">
        <div>
          <Image
            src={"/image/logo.png"}
            alt="logo"
            width={300}
            height={300}
            priority
            className="size-[3rem]"
          />
        </div>
        <p className="text-sm font-medium">شرکت امی کوچ گیل ( گرمه جا )</p>
        <div className="flex items-center justify-between gap-3">
          <a
            className="bg-mainbg rounded-lg p-2 text-white"
            href="https://wa.me/989389668917"
          >
            <IoLogoWhatsapp />
          </a>
          <a
            className="bg-mainbg rounded-lg p-2 text-white"
            href="https://instagram.com/mahdi_lhj"
          >
            <RiInstagramFill />
          </a>
          <a
            className="bg-mainbg rounded-lg p-2 text-white"
            href="https://t.me/mahdi_lhjj"
          >
            <FaTelegramPlane />
          </a>
          <a
            className="bg-mainbg rounded-lg p-2 text-white"
            href="tel:+91391009113"
          >
            <IoCallSharp />
          </a>
        </div>
      </div>
    </div>
  );
}

export default SecondSection;
