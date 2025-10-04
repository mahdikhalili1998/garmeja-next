"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import { bioText, footerLink } from "@/constant/other";
import FooterBox from "@/components/element/FooterBox";

function ThirdSection() {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [modalValue, setModalValue] = useState<string>("");
  const [showMore, setShowMore] = useState(false);

  const openModalHandler = (value: string) => {
    setOpenModal((e) => !e);
    setModalValue(value);
  };

  return (
    <div>
      {/* برای دسکتاپ */}
      <div className="900:flex hidden items-center justify-around">
        {/* پارت 1 */}
        <div className="text-titleColor flex flex-col items-start gap-3">
          <h1 className="border-mainbg border-r-3 pr-2 text-lg font-semibold">
            موضوع 1
          </h1>
          {footerLink.map((item, index) => (
            <a
              key={index}
              className="text-blue hover:text-mainbg cursor-pointer text-sm font-semibold"
            >
              {item}
            </a>
          ))}
        </div>
        {/* پارت 2 */}
        <div className="text-titleColor flex flex-col items-start gap-3">
          <h1 className="border-mainbg border-r-3 pr-2 text-lg font-semibold">
            موضوع 2
          </h1>
          {footerLink.map((item, index) => (
            <a
              key={index}
              className="text-blue hover:text-mainbg cursor-pointer text-sm font-semibold"
            >
              {item}
            </a>
          ))}
        </div>
        {/* پارت 3 */}
        <div className="text-titleColor flex flex-col items-start gap-3">
          <h1 className="border-mainbg border-r-3 pr-2 text-lg font-semibold">
            موضوع 3
          </h1>
          {footerLink.map((item, index) => (
            <a
              key={index}
              className="text-blue hover:text-mainbg cursor-pointer text-sm font-semibold"
            >
              {item}
            </a>
          ))}
        </div>
        <FooterBox />
      </div>
      {/* برای موبایل */}
      <ul className="text-titleColor 900:hidden mt-5 text-sm">
        <li className="border-mainbg mx-5 border-b-[1px] border-solid py-3">
          {/* خدمات سفر */}
          <div
            onClick={() => openModalHandler("tripOptions")}
            className="flex items-center justify-between"
          >
            <h1 className="text-titleColor text-sm font-semibold">
              خدمات سایت
            </h1>
            <span
              className={`${openModal && modalValue === "tripOptions" ? "rotate-180" : "rotate-360"} transition-all duration-100`}
            >
              <FaChevronDown />
            </span>
          </div>
          <AnimatePresence>
            {openModal && modalValue === "tripOptions" && (
              <motion.ul
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="mt-4 grid grid-cols-2 gap-x-5 gap-y-2"
              >
                {footerLink.map((item, index) => (
                  <li key={index} className="text-blue font-semibold">
                    {item}
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </li>
        <li className="mx-5 py-3">
          {/* راهنمایی و پشتیبانی*/}
          <div
            onClick={() => openModalHandler("about-us")}
            className="flex items-center justify-between"
          >
            <h1 className="text-titleColor font-semibold">
              راهنمایی و پشتیبانی
            </h1>
            <span
              className={`${openModal && modalValue === "about-us" ? "rotate-180" : "rotate-360"} transition-all duration-100`}
            >
              <FaChevronDown />
            </span>
          </div>
          <AnimatePresence>
            {openModal && modalValue === "about-us" && (
              <motion.ul
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="mt-4 grid grid-cols-2 gap-x-5 gap-y-2"
              >
                {footerLink.map((item, index) => (
                  <li key={index} className="text-blue font-semibold">
                    {item}
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </li>
        <li className="mx-5 py-3">
          <h2 className="text-lg font-semibold">لبخند بزن و سفر کن!</h2>

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
        </li>
      </ul>
    </div>
  );
}

export default ThirdSection;
