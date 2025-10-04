"use client";
import FooterTopArrow from "@/components/icon/FooterTopArrow";
import { FaWhatsapp } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";

function FirstSection() {
  return (
    <div>
      <div className="900:block hidden h-44 w-full bg-slate-200 pt-5">
        <div className="900:block relative mr-auto ml-5 hidden size-[5rem] rounded-full bg-red-200/45">
          <span
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-mainbg absolute top-5 left-5"
          >
            <FooterTopArrow width={40} height={40} stroke="currentColor" />
          </span>
        </div>
      </div>
      <div className="bg-mainbg 900:-mt-9 mx-4 flex items-center justify-around rounded-lg px-2 py-4 font-bold text-white">
        <span className="640:hidden text-sm">نیاز به مشاوره دارید ؟</span>
        <span className="640:inline-block hidden text-sm font-semibold text-white">
          در خصوص سفارش خدمات نیاز به راهنمایی دارید؟
        </span>
        <div className="flex items-center gap-2">
          <a
            href=""
            className="text-mainbg 640:text-sm flex items-center justify-center gap-1 rounded-lg bg-white p-1 text-xs"
          >
            <span>پشتیبانی</span>
            <FaWhatsapp className="640:text-2xl text-xl" />
          </a>
          <div className="text-mainbg 640:text-sm flex items-center justify-center gap-1 rounded-lg bg-white p-1 text-xs">
            <a href="tel:+981391009113">01391009113</a>
            <IoCallSharp className="640:text-2xl text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstSection;
