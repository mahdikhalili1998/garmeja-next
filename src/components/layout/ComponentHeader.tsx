"use client";
import Lottie from "react-lottie-player";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";
import menu from "@/lottie/menu.json";
import close from "@/lottie/close.json";
import Link from "next/link";
import { menuOptionList } from "@/constant/header";
import styles from "@/styles/header.module.css";
import { IoIosPerson } from "react-icons/io";
import { MdHome, MdFilterAlt } from "react-icons/md";
import { GrSort } from "react-icons/gr";
import { BsChevronDoubleDown } from "react-icons/bs";

function ComponentHeader() {
  const [searchValue, setSearchValue] = useState<string>("");
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [openFilter, setOpenFilter] = useState<boolean>(false); // 👈 کنترل باز بودن فیلتر
  const menuRef = useRef<HTMLDivElement>(null);

  // بستن کشو با کلیک بیرون
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenMenu(false);
      }
    }
    if (openMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openMenu]);

  // جلوگیری از اسکرول هنگام باز بودن کشو
  useEffect(() => {
    document.body.style.overflow = openMenu || openFilter ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openMenu, openFilter]);

  return (
    <div className="mt-4 mb-8">
      <div className="flex w-full items-center justify-between">
        {/* منو */}
        <div onClick={() => setOpenMenu(true)} className="-mx-3">
          <Lottie
            animationData={menu}
            loop
            play
            style={{
              width: 70,
              height: 40,
              cursor: "pointer",
            }}
          />
        </div>

        {/* سرچ */}
        <div className="backdrop-blur-2xs bg-titleColor/30 flex w-2/3 items-center gap-1 rounded-lg p-2">
          <input
            type="text"
            value={searchValue}
            placeholder="کجا میخای بری ؟"
            onChange={(e) => setSearchValue(e.target.value)}
            className="text-bold bg-titleColor/30 w-full rounded-lg py-1 pr-2 text-sm backdrop-blur-sm placeholder:pr-2 placeholder:text-sm placeholder:font-bold placeholder:text-white focus:outline-none"
          />
          <span className="bg-iconColor -scale-x-100 transform rounded-full p-2 text-lg font-bold text-white">
            <BsSearch />
          </span>
        </div>

        {/* لوگو */}
        <div className="">
          <Image
            src={"/image/logo.png"}
            alt="logo"
            width={300}
            height={300}
            priority
            className="size-[4rem]"
          />
        </div>
      </div>

      {/* Overlay منو */}
      {openMenu && (
        <div
          className="fixed inset-0 z-20 bg-black/20 backdrop-blur-sm"
          onClick={() => setOpenMenu(false)}
        ></div>
      )}

      {/* کشوی منو */}
      <div
        ref={menuRef}
        className={`900:w-72 fixed top-0 right-0 z-30 h-full w-52 transform bg-white/60 shadow-lg backdrop-blur-lg transition-transform duration-300 ${
          openMenu ? "translate-x-0" : "translate-x-full"
        } `}
      >
        <div onClick={() => setOpenMenu(false)} className="">
          <Lottie
            animationData={close}
            loop
            play
            style={{
              width: 70,
              height: 40,
              cursor: "pointer",
              marginRight: "auto",
              marginTop: "5px",
            }}
          />
        </div>
        <div className="-mt-1 flex h-full flex-col">
          <Link
            onClick={() => setOpenMenu(false)}
            href={"/"}
            className="border-mainbg my-5 border-b-1 pb-4"
          >
            <div className="flex items-center justify-center gap-2">
              <span className="border-mainbg rounded-full border-2 p-2">
                <IoIosPerson className="text-mainbg text-2xl" />
              </span>
              <span className="text-titleColor font-medium">
                ورود / ثبت نام
              </span>
            </div>
          </Link>
          <div
            className={`${styles.scrollbarHide} flex-1 space-y-3 overflow-y-auto p-4`}
          >
            {menuOptionList.map((item, index) => (
              <Link
                className="flex items-center gap-2 space-y-3"
                href={"/"}
                key={index}
              >
                <span className="text-mainbg text-xl">{item.icon}</span>
                <span className="text-titleColor -mt-2 text-sm font-semibold">
                  {item.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/*  بخش پایین (فوتر فیکس‌شده) */}
      <div className="bg-mainbg fixed right-0 bottom-0 w-full">
        <div className="relative flex items-center justify-around gap-24 py-1 text-xs font-semibold text-white">
          {/* فقط وقتی فیلتر بسته است */}
          {!openFilter && (
            <>
              <span className="flex flex-col items-center justify-center gap-2">
                <GrSort className="text-2xl" />
                مرتب سازی
              </span>

              <span
                onClick={() => setOpenFilter(true)}
                className="bg-mainbg absolute -bottom-5 flex cursor-pointer flex-col items-center justify-center rounded-full p-7 transition-all duration-300"
              >
                <div className="flex -translate-y-4 flex-col items-center justify-center gap-2">
                  <MdFilterAlt className="text-2xl" />
                  فیلتر
                </div>
              </span>

              <span className="flex flex-col items-center justify-center gap-2">
                <MdHome className="text-2xl" />
                صفحه اصلی
              </span>
            </>
          )}
        </div>
      </div>

      {/*  محتوای فیلتر (Drawer از پایین) */}
      <div
        className={`fixed right-0 bottom-0 left-0 z-20 h-[70%] rounded-t-2xl bg-white shadow-lg transition-transform duration-500 ease-in-out ${
          openFilter ? "translate-y-0" : "translate-y-full"
        }`}
      >
        {/* دکمه بستن فیلتر */}
        <div
          className={`absolute left-1/2 -translate-x-1/2 transform transition-all duration-500 ${
            openFilter ? "-top-6 opacity-100" : "top-20 opacity-0"
          }`}
        >
          <span
            onClick={() => setOpenFilter(false)}
            className="bg-mainbg flex cursor-pointer flex-col items-center justify-center gap-1 rounded-full p-4 text-white transition-all duration-300"
          >
            <BsChevronDoubleDown className="-translate-y-2 transform text-2xl" />
          </span>
        </div>

        {/* اینجا محتوای فیلترت */}
        <div className="bg-mainbg h-full overflow-y-auto p-6 text-center text-gray-600">
          محتوای فیلتر اینجاست...
        </div>
      </div>
    </div>
  );
}

export default ComponentHeader;
