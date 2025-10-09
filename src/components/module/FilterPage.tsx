"use client";
import { IFilter } from "@/types/props";
import React, { FC, useEffect, useState } from "react";
import { FaAnglesRight, FaFilter } from "react-icons/fa6";
import { GrSort } from "react-icons/gr";

const FilterPage: FC<IFilter> = ({
  openFilter,
  openSort,
  setOpenFilter,
  setOpenSort,
}) => {
  const anyModalOpen = openFilter || openSort;

  // بستن مودال با کلیک بیرون
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const modal = document.getElementById("modal-container");
      if (modal && !modal.contains(e.target as Node)) {
        setOpenFilter(false);
        setOpenSort(false);
      }
    };
    if (anyModalOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [anyModalOpen]);

  // جلوگیری از اسکرول هنگام باز بودن مودال
  useEffect(() => {
    document.body.style.overflow = anyModalOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [anyModalOpen]);

  return (
    <>
      {/* دکمه‌های فیلتر و مرتب‌سازی */}
      <div className="border-mainbg text-mainbg mx-auto mt-6 flex w-max items-center justify-around gap-28 rounded-2xl border-1 px-2 py-3 text-sm font-bold">
        <span
          onClick={() => setOpenFilter((prev) => !prev)}
          className="flex cursor-pointer items-center gap-2"
        >
          <FaFilter className="text-xl" />
          فیلتر
          <FaAnglesRight className="animate-move-left rotate-90" />
        </span>

        <span
          onClick={() => setOpenSort((prev) => !prev)}
          className="flex cursor-pointer items-center gap-2"
        >
          <GrSort className="text-xl" />
          مرتب‌سازی
          <FaAnglesRight className="animate-move-left rotate-90" />
        </span>
      </div>

      {/* MODAL & OVERLAY */}
      {anyModalOpen && (
        <div className="fixed inset-0 z-[1000] flex items-start justify-center">
          {/* پس‌زمینه تار */}

          {/* محتوای مودال */}
          <div
            id="modal-container"
            className="animate-fadeIn relative z-[1001] mx-3 mt-20 w-[90%] max-w-md rounded-2xl bg-white p-6 shadow-lg"
          >
            <button
              onClick={() => {
                setOpenFilter(false);
                setOpenSort(false);
              }}
              className="absolute top-3 left-3 text-gray-500 hover:text-black"
            >
              ✕
            </button>

            {/* محتوای فیلتر */}
            {openFilter && (
              <div>
                <h2 className="text-mainbg mb-4 text-lg font-bold">
                  فیلتر اقامتگاه‌ها
                </h2>
                <div className="space-y-3 text-sm text-gray-600">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" /> دارای صبحانه
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" /> حیوان خانگی مجاز
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" /> استخر دارد
                  </label>

                  <button className="bg-mainbg mt-4 w-full rounded-lg py-2 font-bold text-white">
                    اعمال فیلتر
                  </button>
                </div>
              </div>
            )}

            {/* محتوای مرتب‌سازی */}
            {openSort && (
              <div>
                <h2 className="text-mainbg mb-4 text-lg font-bold">
                  مرتب‌سازی بر اساس
                </h2>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="hover:text-mainbg cursor-pointer">
                    قیمت (کم به زیاد)
                  </li>
                  <li className="hover:text-mainbg cursor-pointer">
                    قیمت (زیاد به کم)
                  </li>
                  <li className="hover:text-mainbg cursor-pointer">
                    امتیاز کاربران
                  </li>
                  <li className="hover:text-mainbg cursor-pointer">
                    محبوب‌ترین‌ها
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default FilterPage;
