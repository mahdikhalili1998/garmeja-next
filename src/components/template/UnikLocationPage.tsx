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
    <div>
      <ComponentHeader />
      {!locationInfo.length ? (
        <div className="mx-auto mt-24 w-max">
          <SyncLoader color="#fa5a2a" />
        </div>
      ) : (
        locationInfo.map((item, index) => {
          const randomColor = colors[Math.floor(Math.random() * colors.length)];
          return (
            <div
              style={{
                backgroundColor: randomColor, // رنگ بک‌گراند
                boxShadow: `0 10px 15px -3px ${randomColor}80`, // شادو با opacity کمتر (80 در hex ≈ 50%)
              }}
              className={`mx-3 mt-14 rounded-lg px-4 pt-10 opacity-75 shadow-xl`}
              key={index}
            >
              <LocationCard {...item} randomColor={randomColor} />
            </div>
          );
        })
      )}
    </div>
  );
}

export default UnikLocationPage;
