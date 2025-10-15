"use client";
import { IFilter } from "@/types/props";
import React, { FC, useEffect } from "react";
import { FaAnglesRight, FaFilter } from "react-icons/fa6";
import { GrSort } from "react-icons/gr";
import FilterOptionPage from "./FilterOptionPage";
import SortPageOption from "./SortPageOption";

const FilterPage: FC<IFilter> = ({
  openFilter,
  openSort,
  setOpenFilter,
  setOpenSort,
  setLocationInfo,
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
      <div
        className={`${openFilter || openSort ? 'backdrop-blur-[6px]" inset-0 bg-black/20' : null} border-mainbg text-titleColor bg-mainbg mx-auto mt-6 flex w-max items-center justify-around gap-28 rounded-2xl border-1 px-2 py-3 text-sm font-bold`}
      >
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
        <div className="fixed inset-0 z-13 flex items-start justify-center">
          {/* محتوای مودال */}
          <div
            id="modal-container"
            className="animate-fadeIn relative z-20 mx-3 mt-10 max-h-[80vh] w-[90%] max-w-md overflow-y-auto rounded-2xl bg-white p-6 shadow-lg"
          >
            {/* محتوای فیلتر */}
            {openFilter && (
              <div className="relative">
                <FilterOptionPage
                  setLocationInfo={setLocationInfo}
                  setOpenFilter={setOpenFilter}
                />
              </div>
            )}

            {/* محتوای مرتب‌سازی */}
            {openSort && (
              <div className="relative">
                <SortPageOption
                  setLocationInfo={setLocationInfo}
                  setOpenSort={setOpenSort}
                />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default FilterPage;
