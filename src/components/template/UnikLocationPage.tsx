"use client";
import React, { useEffect, useRef, useState } from "react";
import ComponentHeader from "../layout/ComponentHeader";
import LocationCard from "../element/LocationCard";
import { SyncLoader } from "react-spinners";
import { detailOfCategory } from "@/constant/other";
import { ILocationInfo } from "@/types/props";
import FilterPage from "../module/filter/FilterPage";
import Footer from "../layout/Footer";
import Pagination from "../module/Pagination";

function UnikLocationPage() {
  const [locationInfo, setLocationInfo] = useState<ILocationInfo[]>([]);

  const [openFilter, setOpenFilter] = useState<boolean>(false);
  const [openSort, setOpenSort] = useState<boolean>(false);

  const [hideFilterBar, setHideFilterBar] = useState<boolean>(false);
  const footerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!footerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setHideFilterBar(entry.isIntersecting); // اگه فوتر دیده شد، فیلتر مخفی میشه
      },
      { threshold: 0.1 },
    );

    observer.observe(footerRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setLocationInfo(detailOfCategory);
  }, []);

  return (
    <div className="relative">
      <ComponentHeader />

      {/* فید سفید-سفید */}
      <div className="1140:top-[10.1%] 1340:top-[9.9%] 900:top-[10.5%] 740:top-[7.9%] 440:top-[3.5%] absolute top-[3.8%] right-0 left-0 h-[16rem] bg-gradient-to-b from-white/[4px] via-white/100 to-white/[4px]"></div>

      {/* پس زمینه تار برای وقتی فیلتر یا سرت باز میشود  */}
      <div
        className={`${openFilter || openSort ? "absolute inset-0 z-11 h-full w-full bg-black/20 backdrop-blur-[6px]" : null}`}
        onClick={() => {
          setOpenFilter(false);
          setOpenSort(false);
        }}
      />

      {/* کامپوننت فیلتر و مرتب سازی   */}
      <div
        className={`transition-all duration-300 ${
          hideFilterBar ? "pointer-events-none opacity-0" : "opacity-100"
        } ${openFilter || openSort ? "" : "sticky top-0 z-40 bg-white/80 backdrop-blur-sm"}`}
      >
        <FilterPage
          openFilter={openFilter}
          setOpenFilter={setOpenFilter}
          openSort={openSort}
          setOpenSort={setOpenSort}
          setLocationInfo={setLocationInfo}
        />
      </div>

      {/* مربوط به کارت اقامت گاهاه  */}
      <div className="740:grid 900:grid-cols-3 740:grid-cols-2 740:gap-x-8 mx-2 mt-10 flex flex-col gap-20 pb-28">
        {!locationInfo.length ? (
          <div className="mx-auto mt-24 w-max">
            <SyncLoader color="#fa5a2a" />
          </div>
        ) : (
          locationInfo.map((item, index) => {
            return (
              <div
                className={`shadow-titleColor/85 mx-3 rounded-lg shadow-xl`}
                key={index}
              >
                <LocationCard {...item} />
              </div>
            );
          })
        )}
      </div>
      <Pagination />

      <div ref={footerRef}>
        <Footer />
      </div>
    </div>
  );
}

export default UnikLocationPage;
