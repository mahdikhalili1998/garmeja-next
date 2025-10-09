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
      {/* فید سفید-سفید */}
      <div className="absolute top-[6%] right-0 left-0 h-28 rotate-180 bg-gradient-to-b from-white/100 to-transparent"></div>
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
                className={`backdrop-blur-3xs relative mx-3 rounded-lg shadow-xl`}
                key={index}
              >
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
