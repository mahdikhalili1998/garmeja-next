"use client";
import React, { useEffect, useState } from "react";
import ComponentHeader from "../layout/ComponentHeader";
import LocationCard from "../element/LocationCard";
import { SyncLoader } from "react-spinners";
import { detailOfCategory } from "@/constant/other";
import { ILocationInfo } from "@/types/props";
import FilterPage from "../module/FilterPage";

function UnikLocationPage() {
  const [locationInfo, setLocationInfo] = useState<ILocationInfo[]>([]);

  const [openFilter, setOpenFilter] = useState<boolean>(false);
  const [openSort, setOpenSort] = useState<boolean>(false);

  useEffect(() => {
    setLocationInfo(detailOfCategory);
  }, []);

  return (
    <div className="relative">
      {/* پس زمینه تار برای وقتی فیلتر یا سرت باز میشود  */}
      <div
        className={`${openFilter || openSort ? "absolute inset-0 z-30 h-full w-full bg-black/20 backdrop-blur-[6px]" : null}`}
        onClick={() => {
          setOpenFilter(false);
          setOpenSort(false);
        }}
      />
      <ComponentHeader />
      {/* فید سفید-سفید */}
      <div className="absolute top-[6%] right-0 left-0 h-28 rotate-180 bg-gradient-to-b from-white/100 to-transparent"></div>
      {/* کامپوننت فیلتر و مرتب سازی   */}
      <div
        className={`${openFilter || openSort ? 'backdrop-blur-[6px]" absolute inset-0 h-full w-full bg-black/20' : "sticky top-0 z-50 bg-white/80 backdrop-blur-sm"}`}
      >
        <FilterPage
          openFilter={openFilter}
          setOpenFilter={setOpenFilter}
          openSort={openSort}
          setOpenSort={setOpenSort}
        />
      </div>
      {/* مربوط به کارت اقامت گاهاه  */}
      <div className="mt-10 flex flex-col gap-20 pb-28">
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
    </div>
  );
}

export default UnikLocationPage;
