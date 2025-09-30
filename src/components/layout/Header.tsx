"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { getRandomImage } from "@/functions/Header";
import { imageSrc, headerShortcut } from "@/constant/header";
import { BsSearch } from "react-icons/bs";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";

function Header() {
  const [backgroundImg] = useState(getRandomImage(imageSrc)); //تصویر تصادفی بک گراند
  const [searchValue, setSearchValue] = useState<string>(""); //مخصوص مقدار سرچ شده
  const [openMenu, setOpenMenu] = useState<boolean>(false); // مخصوص کشوی منو
  const menuRef = useRef<HTMLDivElement>(null);

  // بسته شدن کشو با کلیک خارج
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

  // جلو گیری از اسکرول زمان باز بودن کشو
  useEffect(() => {
    if (openMenu) {
      // وقتی کشو باز است
      document.body.style.overflow = "hidden";
    } else {
      // وقتی کشو بسته شد
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openMenu]);

  return (
    <div
      className="relative h-[32rem] bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      {/* گرادیانت بالایی */}
      <div className="absolute top-0 right-0 left-0 h-32 bg-gradient-to-b from-blue-700/90 to-transparent"></div>

      {/* لوگو */}
      <div className="relative z-10">
        <Image
          src="/image/logo.png"
          width={300}
          height={300}
          alt="logoGarmeja"
          priority
          className="mx-auto size-[5rem]"
        />
      </div>

      {/* منوی کشویی */}
      {openMenu ? (
        <span
          onClick={() => setOpenMenu(false)}
          className={`absolute z-40 mt-14 -ml-1 flex h-10 w-8 cursor-pointer items-center justify-center rounded-l-full bg-white/60 pl-1 text-orange-600 transition-transform duration-300 ${openMenu ? "-translate-x-52" : "translate-x-0"} `}
        >
          <FaAnglesRight className="animate-move-left" />
        </span>
      ) : (
        <span
          onClick={() => setOpenMenu(true)}
          className={`absolute z-40 mt-14 -mr-1 flex h-10 w-8 cursor-pointer items-center justify-center rounded-l-full bg-white/60 text-orange-600 transition-transform duration-300 ${openMenu ? "-translate-x-52" : "translate-x-0"} `}
        >
          <FaAnglesLeft className="animate-move-left" />
        </span>
      )}
      {/* Overlay */}
      {openMenu && (
        <div
          className="fixed inset-0 z-20 bg-black/20 backdrop-blur-sm"
          onClick={() => setOpenMenu(false)}
        ></div>
      )}
      {/* کشو */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 z-30 h-full w-52 transform bg-white/60 shadow-lg backdrop-blur-lg transition-transform duration-300 ${openMenu ? "translate-x-0" : "translate-x-full"} `}
      >
        <div className="p-4">
          <h2 className="mb-4 text-xl font-bold text-gray-800">منو</h2>
          <ul className="space-y-3">
            <li>خانه</li>
            <li>درباره ما</li>
            <li>خدمات</li>
            <li>تماس با ما</li>
          </ul>
        </div>
      </div>

      {/* میانبرها و سرچ بار */}
      <div className="relative z-10 mt-44">
        {/* میانبرها */}
        <div className="backdrop-blur-2xs mx-4 flex items-center justify-between rounded-lg border-[1px] border-solid border-white bg-white/30 px-2 py-2">
          {headerShortcut.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-2"
            >
              <span className="text-2xl text-orange-500">{item.icon}</span>
              <span className="text-xs font-bold text-white">{item.title}</span>
            </div>
          ))}
        </div>
        {/* سرچ بار */}
        <div className="backdrop-blur-2xs mx-4 mt-4 flex items-center gap-1 rounded-lg border-[1px] border-solid border-white bg-white/30 px-3 py-2">
          <input
            type="text"
            value={searchValue}
            placeholder="کجا میخای بری ؟"
            onChange={(e) => setSearchValue(e.target.value)}
            className="text-bold w-full rounded-lg bg-slate-800/10 py-2 pr-2 text-sm backdrop-blur-sm placeholder:pr-2 placeholder:text-sm placeholder:font-bold placeholder:text-white focus:outline-none"
          />
          <span className="-scale-x-100 transform rounded-full bg-orange-500 p-3 text-xl font-bold text-white">
            <BsSearch />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
