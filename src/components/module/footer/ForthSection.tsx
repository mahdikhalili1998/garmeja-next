"use client";
import React, { useState } from "react";
import Image from "next/image";
import FooterBox from "@/components/element/FooterBox";
import { bioText } from "@/constant/other";
import { motion, AnimatePresence } from "framer-motion";
import SocialMedia from "@/components/element/SocialMedia";
function ForthSection() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div>
      {/* مجوز ها و توضیح برای دستکتاپ */}
      <div className="mt-6 flex items-center justify-around">
        {/* توضیح  */}
        <div className="900:block hidden w-1/2">
          <div className="flex items-center gap-2">
            <Image
              src={"/image/logo.png"}
              width={300}
              height={300}
              priority
              alt="logo"
              className="size-[4rem]"
            />
            <h1 className="text-titleColor font-bold">
              شرکت امی کوچ گیل ( گرمه جا )
            </h1>
          </div>
          <div className="">
            <AnimatePresence initial={false}>
              <motion.div
                key={showMore ? "expanded" : "collapsed"}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="overflow-hidden"
              >
                <p
                  className={`mt-5 text-sm/8 text-slate-500 transition-all duration-500 ${
                    showMore ? "" : "line-clamp-3"
                  }`}
                >
                  {bioText}
                </p>
              </motion.div>
            </AnimatePresence>
            <div className="mx-auto w-max">
              {" "}
              <button
                onClick={() => setShowMore((prev) => !prev)}
                className="bg-mainbg mt-2 rounded-lg px-2 py-1 text-xs font-semibold text-white"
              >
                {showMore ? "بستن متن" : "مشاهده بیشتر"}
              </button>
            </div>
          </div>
        </div>
        {/* مجوزها */}
        <div className="900:gap-10 mx-3 my-6 flex items-center justify-around gap-3">
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
      </div>
      <span className="900:hidden">
        <FooterBox />
      </span>
      <p className="bg-mainbg 900:hidden my-6 w-full px-3 py-3 text-center text-sm font-medium text-white">
        تمامی حقوق این سایت متعلق به سایت{" "}
        <span className="font-semibold text-blue-600">گرمه جا</span> میباشد
      </p>
      <div className="900:flex mt-8 hidden items-center justify-between bg-gray-600 p-4">
        <p className="font-bold text-white">
          تمام حقوق مادی و معنوی این سایت متعلق به شرکت{" "}
          <span className="text-mainbg text-sm font-semibold">گرمه جا </span> می
          باشد .
        </p>
        <div>
          <SocialMedia />
        </div>
      </div>
    </div>
  );
}

export default ForthSection;
