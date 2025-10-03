"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

function ThirdSection() {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [modalValue, setModalValue] = useState<string>("");
  const [showMore, setShowMore] = useState(false);

  const text =
    "ایرانمون هم چهار فصله، هم ‍‍‌پر از خاطره، از شمال سرسبز با ییلاقات اولسبلنگاه، تا جنوب داغ با جزیره کیش، از اصفهان نصف جهان تا شیراز بی وصف و مثال. ما ایرانی‌ها رو به سفربازهای خفنی که اتفاقا کلی هم خاطره بازیم تبدیل کرده. ما‌ها که عادت کردیم از مسیر لذت ببریم همیشه، اما مقصد هم واسمون مهمه، گرمه‌جا یه وبسایت اجاره آنلاین اقامتگاست، پر از کلبه چوبی و جنگلی خفن با چشم اندازهای بی نظیر، ویلای استخردار یا ساحلی توپ که جون میده واسه آبتنی، ویلای ارزان و اقتصادی یا ویلای لوکس و لاکچری هر نوع مدل اقامتگاهی که دوست داری رو می تونی تو گرمه جا پیدا کنی، اینجا می‌تونی قیمت اقامتگاه‌های مشابه رو باهم بررسی کنی، نظر مهمون های قبلیش رو بخونی، یا بری سراغ اونایی که گرمه جا پیشنهاد میده تا اقامتگاه مطلوب خودت رو پیدا کنی، رزرو کنی و بری واسه جمع کردن کوله ت تا یه سفر خاطره انگیز دیگه بسازی، البته گرمه جا تا آخر این سفر تو هر روز هفته یا هر ساعتی از شبانه روز همراهته...";

  const openModalHandler = (value: string) => {
    setOpenModal((e) => !e);
    setModalValue(value);
  };

  return (
    <ul className="text-titleColor mt-5 text-sm">
      <li className="border-mainbg mx-5 border-b-[1px] border-solid py-3">
        {/* خدمات سفر */}
        <div
          onClick={() => openModalHandler("tripOptions")}
          className="flex items-center justify-between"
        >
          <h1 className="text-titleColor text-sm font-semibold">خدمات سایت</h1>
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
              <li className="text-blue font-semibold">کلبه سویسی</li>
              <li className="text-blue font-semibold">اقامتگاه شاخص</li>
              <li className="text-blue font-semibold">ویو بهشتی</li>
              <li className="text-blue font-semibold">ویو دریایی</li>
              <li className="text-blue font-semibold">ویو ویویی</li>
              <li className="text-blue font-semibold">جاده های شمال</li>
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
          <h1 className="text-titleColor font-semibold">راهنمایی و پشتیبانی</h1>
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
              <li className="text-blue font-semibold">پرسش های متداول</li>
              <li className="text-blue font-semibold">شرایط و مقررات</li>
              <li className="text-blue font-semibold">راهکار سازمانی</li>
              <li className="text-blue font-semibold">پیشنهاد و شکایات</li>
              <li className="text-blue font-semibold">در باره ما</li>
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
              {text}
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
  );
}

export default ThirdSection;
