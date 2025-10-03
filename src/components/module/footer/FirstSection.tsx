"use client";
import { FaWhatsapp } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";

function FirstSection() {
  return (
    <div className="bg-mainbg mx-4 flex items-center justify-around rounded-lg px-2 py-4 font-bold text-white">
      <span className="text-sm">نیاز به مشاوره دارید ؟</span>
      <div className="flex items-center gap-2">
        <a
          href=""
          className="text-mainbg flex items-center justify-center gap-1 rounded-lg bg-white p-1 text-xs"
        >
          <span>پشتیبانی</span>
          <FaWhatsapp className="text-xl" />
        </a>
        <div className="text-mainbg flex items-center justify-center gap-1 rounded-lg bg-white p-1 text-xs">
          <a href="tel:+981391009113">01391009113</a>
          <IoCallSharp className="text-xl" />
        </div>
      </div>
    </div>
  );
}

export default FirstSection;
