"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function RangePriceSlider() {
  const [minPrice, setMinPrice] = useState(2000000);
  const [maxPrice, setMaxPrice] = useState(8000000);
  const min = 0;
  const max = 10000000;
  const step = 500000;

  const formatPrice = (num) =>
    num.toLocaleString("fa-IR", { maximumFractionDigits: 0 });

  return (
    <div
      dir="rtl"
      className="mx-auto flex w-full max-w-sm flex-col items-center p-4"
    >
      <h2 className="mb-6 text-xl font-bold text-gray-900">بازه قیمت</h2>

      <div className="relative flex h-6 w-full items-center">
        {/* نوار زمینه */}
        <div className="absolute h-2 w-full rounded-full bg-gray-300"></div>
        {/* محدوده انتخاب‌شده */}
        <div
          className="absolute h-2 rounded-full bg-blue-500"
          style={{
            right: `${(minPrice / max) * 100}%`,
            left: `${100 - (maxPrice / max) * 100}%`,
          }}
        ></div>
        {/* دستگیره حداقل */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={minPrice}
          onChange={(e) =>
            setMinPrice(Math.min(Number(e.target.value), maxPrice - step))
          }
          className="absolute top-0 h-2 w-full cursor-pointer appearance-none bg-transparent"
          style={{ zIndex: 30, direction: "rtl" }}
        />
        {/* دستگیره حداکثر */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={maxPrice}
          onChange={(e) =>
            setMaxPrice(Math.max(Number(e.target.value), minPrice + step))
          }
          className="absolute top-0 h-2 w-full cursor-pointer appearance-none bg-transparent"
          style={{ zIndex: 20, direction: "rtl" }}
        />
        {/* Tooltip حداقل */}
        {/* <motion.div
          className="absolute -top-9"
          animate={{
            right: `calc(${(minPrice / max) * 100}% - 24px)`,
          }}
          transition={{ type: "spring", stiffness: 250, damping: 25 }}
        >
          <div className="rounded-md bg-blue-600 px-2 py-0.5 text-[11px] whitespace-nowrap text-white shadow">
            {formatPrice(minPrice)}
          </div>
        </motion.div> */}
        {/* Tooltip حداکثر */}
        {/* <motion.div
          className="absolute -top-9"
          animate={{
            left: `calc(${(maxPrice / max) * 100}% - 24px)`,
          }}
          transition={{ type: "spring", stiffness: 250, damping: 25 }}
        >
          <div className="rounded-md bg-blue-600 px-2 py-0.5 text-[11px] whitespace-nowrap text-white shadow">
            {formatPrice(maxPrice)}
          </div>
        </motion.div> */}
      </div>

      {/* نمایش بازه انتخابی */}
      <div className="mt-6 text-center text-sm font-medium text-gray-800">
        از {formatPrice(minPrice)} تا {formatPrice(maxPrice)} تومان
      </div>

      {/* استایل دستگیره‌ها */}
      <style jsx>{`
        input[type="range"] {
          height: 2px;
        }

        input[type="range"]::-webkit-slider-thumb {
          appearance: none;
          width: 18px;
          height: 18px;
          background: #2563eb;
          border-radius: 50%;
          border: 2px solid white;
          box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
          cursor: pointer;
          margin-top: -8px;
        }

        input[type="range"]::-moz-range-thumb {
          width: 18px;
          height: 18px;
          background: #2563eb;
          border-radius: 50%;
          border: 2px solid white;
          box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
          cursor: pointer;
        }

        input[type="range"]::-webkit-slider-runnable-track {
          height: 2px;
          background: transparent;
        }
      `}</style>
    </div>
  );
}
