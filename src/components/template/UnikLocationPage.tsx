"use client";
import React, { useEffect, useState } from "react";
import ComponentHeader from "../layout/ComponentHeader";
import LocationCard from "../element/LocationCard";
import { SyncLoader } from "react-spinners";
import { colors, detailOfCategory } from "@/constant/other";
import { ILocationInfo } from "@/types/props";

function UnikLocationPage() {
  const [locationInfo, setLocationInfo] = useState<ILocationInfo[]>([]);
  // console.log(locationInfo);
  useEffect(() => {
    setLocationInfo(detailOfCategory);
  }, []);

  return (
    <div className="relative">
      <ComponentHeader />
      <div className="shadow-titleColor bg-mainbg absolute top-[250px] z-30 mx-auto h-10 w-full shadow-xl"></div>
      <div className="mt-20 flex flex-col gap-20 pb-28">
        {!locationInfo.length ? (
          <div className="mx-auto mt-24 w-max">
            <SyncLoader color="#fa5a2a" />
          </div>
        ) : (
          locationInfo.map((item, index) => {
            const randomColor =
              colors[Math.floor(Math.random() * colors.length)];
            return (
              <div
                className={`backdrop-blur-3xs relative mx-3 rounded-lg pb-1 shadow-xl`}
                key={index}
              >
                {/* گرادیانت بالایی */}
                <div className="from-titleColor/65 absolute top-0 right-0 left-0 h-36 rounded-lg bg-gradient-to-b to-white"></div>
                {/* گرادیانت پایینی */}
                <div className="from-titleColor absolute right-0 -bottom-4 left-0 h-24 rotate-180 rounded-lg bg-gradient-to-b to-transparent"></div>
                {/* لایه نیمه شفاف شیشه‌ای روی عکس */}
                <div className="backdrop-blur-3xs bg-titleColor/5 absolute inset-0 z-0"></div>

                <LocationCard {...item} randomColor={randomColor} />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default UnikLocationPage;
