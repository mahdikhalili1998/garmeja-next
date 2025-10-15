"use client";
import React, { FC, useEffect, useState } from "react";
import * as Slider from "@radix-ui/react-slider";
import { info } from "@/constant/FilterOptionInfo";
import { AnimatePresence, motion } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";
import H1FilterOptionPage from "../../element/H1FilterOptionPage";
import { IoCloseCircle } from "react-icons/io5";
import { detailOfCategory } from "@/constant/other";
import { useRouter } from "next/navigation";
import { IFilterOptionPage } from "@/types/props";

const FilterOptionPage: FC<IFilterOptionPage> = ({
  setOpenFilter,
  setLocationInfo,
}) => {
  const [rulesValue, setRulesValue] = useState<string[]>([]); // قوانین
  const [typeValue, setTypeValue] = useState<string[]>([]); // نوع اقامتگاه
  const [rentalType, setRentaltype] = useState<string[]>([]); // نوع اجاره
  const [location, setLocation] = useState<string[]>([]); // منطقه اقامتگاه
  const [features, setFeatures] = useState<string[]>([]); // امکانات اقامتگاه
  const [attribute, setAttribute] = useState<string[]>([]); // ویژگی اقامتگاه
  const [values, setValues] = useState<[number, number]>([0, 10000000]); // بازه قیمت
  const [openOption, setOpenOption] = useState<string[]>([]); // برای باز شدن حالت کشویی
  const [number, setNumber] = useState<number>(1); // برای تعداد نفرات
  const [roomNumber, setRoomNumber] = useState<number>(0);
  const [bedNumber, setBedNumber] = useState<number>(0);

  const router = useRouter();

  // هنگام لود اولیه صفحه
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const rules = params.get("rules")?.split(",") || [];
    const types = params.get("type")?.split(",") || [];
    const rentals = params.get("rental")?.split(",") || [];
    const locations = params.get("location")?.split(",") || [];
    const features = params.get("features")?.split(",") || [];
    const attributes = params.get("attribute")?.split(",") || [];
    const priceFrom = params.get("priceFrom");
    const priceTo = params.get("priceTo");

    setRulesValue(rules);
    setTypeValue(types);
    setRentaltype(rentals);
    setLocation(locations);
    setFeatures(features);
    setAttribute(attributes);
    setValues(
      priceFrom && priceTo
        ? [Number(priceFrom), Number(priceTo)]
        : [0, 10000000],
    );
  }, []);

  // برای بازه قیمت
  const max = 10000000;
  const handleChangePrice = (newValues: number[]) => {
    const inverted: [number, number] = [max - newValues[1], max - newValues[0]];
    setValues(inverted);
  };

  const [filteredHomes, setFilteredHomes] = useState(detailOfCategory);

  // اعمال فیلترها
  const applyFilters = () => {
    const result = detailOfCategory.filter((home) => {
      // فیلتر قیمت
      const priceMatch =
        !values || (home.price >= values[0] && home.price <= values[1]);

      // فیلتر تعداد نفرات، تخت و اتاق
      const numberMatch = !number || home.capicity >= number;
      const bedMatch = !bedNumber || home.bedNumber >= bedNumber;
      const roomMatch = !roomNumber || home.roomNumber >= roomNumber;

      // فیلتر سایر ویژگی‌ها
      const rulesMatch =
        !rulesValue ||
        rulesValue.length === 0 ||
        rulesValue.every((id) => home.info.includes(id));
      const typeMatch =
        !typeValue ||
        typeValue.length === 0 ||
        typeValue.every((id) => home.info.includes(id));
      const rentalMatch =
        !rentalType ||
        rentalType.length === 0 ||
        rentalType.every((id) => home.info.includes(id));
      const locationMatch =
        !location ||
        location.length === 0 ||
        location.every((id) => home.info.includes(id));
      const featuresMatch =
        !features ||
        features.length === 0 ||
        features.every((id) => home.info.includes(id));
      const attributeMatch =
        !attribute ||
        attribute.length === 0 ||
        attribute.every((id) => home.info.includes(id));

      // شرط نهایی
      return (
        priceMatch &&
        numberMatch &&
        bedMatch &&
        roomMatch &&
        rulesMatch &&
        typeMatch &&
        rentalMatch &&
        locationMatch &&
        featuresMatch &&
        attributeMatch
      );
    });

    // بروزرسانی state
    setFilteredHomes(result);
    setLocationInfo(result);

    // بروزرسانی URL
    const params = new URLSearchParams();
    if (rulesValue?.length) params.set("rules", rulesValue.join(","));
    if (typeValue?.length) params.set("type", typeValue.join(","));
    if (rentalType?.length) params.set("rental", rentalType.join(","));
    if (location?.length) params.set("location", location.join(","));
    if (features?.length) params.set("features", features.join(","));
    if (attribute?.length) params.set("attribute", attribute.join(","));
    if (values) {
      params.set("priceFrom", values[0].toString());
      params.set("priceTo", values[1].toString());
    }
    if (number) params.set("number", number.toString());
    if (bedNumber) params.set("bedNumber", bedNumber.toString());
    if (roomNumber) params.set("roomNumber", roomNumber.toString());

    router.push(`?${params.toString()}`);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    applyFilters();
    console.log(filteredHomes);
  };

  const deleteFilter = () => {
    setRulesValue([]);
    setTypeValue([]);
    setRentaltype([]);
    setLocation([]);
    setFeatures([]);
    setAttribute([]);
    setValues([0, 10000000]);
    setNumber(1);
    setRoomNumber(0);
    setBedNumber(0);
    setFilteredHomes(detailOfCategory);
    setLocationInfo(detailOfCategory);
    router.push("?");
  };

  return (
    <form onSubmit={handleSubmit} className="relative mr-2 space-y-4 font-bold">
      <div className="mx-1 flex items-center justify-between rounded-lg bg-white">
        <div className="flex items-center gap-1 text-sm">
          <button
            type="submit"
            className="bg-mainbg rounded-lg px-2 py-1 font-bold text-white"
          >
            اعمال فیلتر
          </button>
          <button
            type="button"
            className="bg-titleColor rounded-lg px-2 py-1 font-bold text-white"
            onClick={() => deleteFilter()}
          >
            حذف فیلترها
          </button>
        </div>
        <button
          onClick={() => {
            setOpenFilter(false);
          }}
          className="left-3 text-red-500 hover:text-black"
        >
          <IoCloseCircle className="text-4xl text-red-500" />
        </button>
      </div>

      {/* بازه ی قیمت */}
      <div className="text-titleColor mx-auto mt-8 w-full max-w-sm rounded-2xl py-4">
        <h3 className="text-mainbg mb-4 font-semibold">محدوده قیمت</h3>
        <div className="mb-3 flex justify-between text-sm">
          <span>
            از {values ? values[0].toLocaleString("fa-IR") : "۰"} تومان
          </span>
          <span>
            تا {values ? values[1].toLocaleString("fa-IR") : "۰"} تومان
          </span>
        </div>

        <Slider.Root
          className="relative flex h-5 w-full touch-none items-center select-none"
          value={values ? [max - values[1], max - values[0]] : [0, max]}
          onValueChange={(v) => handleChangePrice(v as [number, number])}
          min={0}
          max={max}
          step={1000}
        >
          <Slider.Track className="relative h-2 grow rounded-full bg-gray-200">
            <Slider.Range className="bg-mainbg absolute h-full rounded-full" />
          </Slider.Track>
          {[0, 1].map((i) => (
            <Slider.Thumb
              key={i}
              className="bg-mainbg block h-5 w-5 touch-none rounded-full transition-transform hover:scale-110"
            />
          ))}
        </Slider.Root>

        <div className="text-titleColor mt-2 flex justify-between text-xs">
          <span>ارزان‌ترین</span>
          <span>گران‌ترین</span>
        </div>
      </div>
      {/* تعداد نفرات */}
      <div>
        <H1FilterOptionPage
          openOption={openOption}
          id={"number"}
          title="تعداد نفرات"
          setOpenOption={setOpenOption}
        />
        <AnimatePresence>
          {openOption.includes("number") && (
            <motion.ul
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="mx-5 flex items-center justify-around">
                <span
                  onClick={() => setNumber((n) => n + 1)}
                  className="bg-mainbg cursor-pointer rounded-full p-2"
                >
                  <FaPlus className="text-xs text-white" />
                </span>
                <span>{`${number} نفر`}</span>
                <button
                  onClick={() => setNumber((n) => n - 1)}
                  className="bg-mainbg rounded-full p-2 disabled:cursor-not-allowed disabled:opacity-55"
                  disabled={number === 1}
                >
                  <FaMinus className="text-xs text-white" />
                </button>
              </div>
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
      {/* تعداد تخت و اتاق  */}
      <div>
        <H1FilterOptionPage
          openOption={openOption}
          id={"bed"}
          title="تعداد تخت و اتاق"
          setOpenOption={setOpenOption}
        />

        <AnimatePresence>
          {openOption.includes("bed") && (
            <motion.ul
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col items-stretch gap-3"
            >
              {/* تعداد تخت  */}
              <div className="flex items-center justify-around text-sm">
                <h3 className="">تعداد تخت</h3>
                <div className="flex w-1/2 items-center justify-between gap-3">
                  <span
                    onClick={() => setBedNumber((n) => n + 1)}
                    className="bg-mainbg cursor-pointer rounded-full p-2"
                  >
                    <FaPlus className="text-xs text-white" />
                  </span>
                  <span>{`${bedNumber} تخت`}</span>
                  <button
                    onClick={() => setBedNumber((n) => n - 1)}
                    className="bg-mainbg rounded-full p-2 disabled:cursor-not-allowed disabled:opacity-55"
                    disabled={bedNumber === 0}
                  >
                    <FaMinus className="text-xs text-white" />
                  </button>
                </div>
              </div>
              {/* تعداد اتاق  */}
              <div className="flex items-center justify-around text-sm">
                <h3 className="">تعداد اتاق</h3>
                <div className="flex w-1/2 items-center justify-between gap-3">
                  <span
                    onClick={() => setRoomNumber((n) => n + 1)}
                    className="bg-mainbg cursor-pointer rounded-full p-2"
                  >
                    <FaPlus className="text-xs text-white" />
                  </span>
                  <span>{`${roomNumber} اتاق`}</span>
                  <button
                    onClick={() => setRoomNumber((n) => n - 1)}
                    className="bg-mainbg rounded-full p-2 disabled:cursor-not-allowed disabled:opacity-55"
                    disabled={roomNumber === 0}
                  >
                    <FaMinus className="text-xs text-white" />
                  </button>
                </div>
              </div>
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
      {/* قوانین اقامتگاه */}
      <div>
        <H1FilterOptionPage
          openOption={openOption}
          id={"rules"}
          title="قوانین اقامتگاه"
          setOpenOption={setOpenOption}
        />
        <AnimatePresence>
          {openOption.includes("rules") && (
            <motion.ul
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="mt-4"
            >
              {info.map((item, index) => (
                <div className="space-y-2" key={index}>
                  {item.rules.map((rules) => (
                    <div
                      onClick={() =>
                        setRulesValue((prev) =>
                          prev?.includes(rules.id)
                            ? prev.filter((id) => id !== rules.id)
                            : [...prev, rules.id],
                        )
                      }
                      key={rules.id}
                      className="flex cursor-pointer items-center gap-2 font-bold select-none"
                    >
                      <div
                        className={`flex h-[20px] w-[20px] flex-shrink-0 items-center justify-center rounded-md border-2 transition-all duration-200 ${
                          rulesValue?.includes(rules.id)
                            ? "bg-mainbg border-orange-500 shadow-[0_0_0_3px_rgba(255,165,0,0.3)]"
                            : "border-titleColor bg-transparent"
                        }`}
                      >
                        {rulesValue?.includes(rules.id) && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3.5 w-3.5 text-white"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </div>
                      <div className="text-titleColor flex items-center gap-2">
                        <span className="text-xs">{rules.title}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
      {/* نوع اقامتگاه  */}
      <div>
        <H1FilterOptionPage
          openOption={openOption}
          id={"type"}
          title="نوع اقامتگاه"
          setOpenOption={setOpenOption}
        />
        <AnimatePresence>
          {openOption.includes("type") && (
            <motion.ul
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="mt-4"
            >
              {info.map((item, index) => (
                <div className="grid grid-cols-2 gap-3" key={index}>
                  {item.type.map((type) => (
                    <div
                      onClick={() =>
                        setTypeValue((prev) =>
                          prev?.includes(type.id)
                            ? prev.filter((id) => id !== type.id)
                            : [...prev, type.id],
                        )
                      }
                      key={type.id}
                      className="flex cursor-pointer items-center gap-2 select-none"
                    >
                      <div
                        className={`flex h-[20px] w-[20px] flex-shrink-0 items-center justify-center rounded-md border-2 transition-all duration-200 ${
                          typeValue?.includes(type.id)
                            ? "bg-mainbg border-orange-500 shadow-[0_0_0_3px_rgba(255,165,0,0.3)]"
                            : "border-titleColor bg-transparent"
                        }`}
                      >
                        {typeValue?.includes(type.id) && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3.5 w-3.5 text-white"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </div>
                      <div className="text-titleColor flex items-center gap-2">
                        <span className="text-xs font-bold">{type.title}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
      {/* نوع اجاره  */}
      <div>
        <H1FilterOptionPage
          openOption={openOption}
          id={"rental"}
          title="نوع اجاره"
          setOpenOption={setOpenOption}
        />
        <AnimatePresence>
          {openOption.includes("rental") && (
            <motion.ul
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="mt-4"
            >
              {info.map((item, index) => (
                <div className="grid grid-cols-2 gap-3" key={index}>
                  {item.rentalType.map((type) => (
                    <div
                      onClick={() =>
                        setRentaltype((prev) =>
                          prev?.includes(type.id)
                            ? prev.filter((id) => id !== type.id)
                            : [...prev, type.id],
                        )
                      }
                      key={type.id}
                      className="flex cursor-pointer items-center gap-2 select-none"
                    >
                      <div
                        className={`flex h-[20px] w-[20px] flex-shrink-0 items-center justify-center rounded-md border-2 transition-all duration-200 ${
                          rentalType?.includes(type.id)
                            ? "bg-mainbg border-orange-500 shadow-[0_0_0_3px_rgba(255,165,0,0.3)]"
                            : "border-titleColor bg-transparent"
                        }`}
                      >
                        {rentalType?.includes(type.id) && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3.5 w-3.5 text-white"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </div>
                      <div className="text-titleColor flex items-center gap-2">
                        <span className="text-xs font-bold">{type.title}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
      {/* منطقه اقامتگاه  */}
      <div>
        <H1FilterOptionPage
          openOption={openOption}
          id={"location"}
          title="منطقه اقامتگاه"
          setOpenOption={setOpenOption}
        />
        <AnimatePresence>
          {openOption.includes("location") && (
            <motion.ul
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="mt-4"
            >
              {info.map((item, index) => (
                <div className="grid grid-cols-2 gap-3" key={index}>
                  {item.location.map((type) => (
                    <div
                      onClick={() =>
                        setLocation((prev) =>
                          prev?.includes(type.id)
                            ? prev.filter((id) => id !== type.id)
                            : [...prev, type.id],
                        )
                      }
                      key={type.id}
                      className="flex cursor-pointer items-center gap-2 select-none"
                    >
                      <div
                        className={`flex h-[20px] w-[20px] flex-shrink-0 items-center justify-center rounded-md border-2 transition-all duration-200 ${
                          location?.includes(type.id)
                            ? "bg-mainbg border-orange-500 shadow-[0_0_0_3px_rgba(255,165,0,0.3)]"
                            : "border-titleColor bg-transparent"
                        }`}
                      >
                        {location?.includes(type.id) && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3.5 w-3.5 text-white"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </div>
                      <div className="text-titleColor flex items-center gap-2">
                        <span className="text-xs font-bold">{type.title}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
      {/* امکانات اقامتگاه  */}
      <div>
        <H1FilterOptionPage
          openOption={openOption}
          id={"features"}
          title="امکانات اقامتگاه"
          setOpenOption={setOpenOption}
        />
        <AnimatePresence>
          {openOption.includes("features") && (
            <motion.ul
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="mt-4"
            >
              {info.map((item, index) => (
                <div className="grid grid-cols-2 gap-3" key={index}>
                  {item.features.map((type) => (
                    <div
                      onClick={() =>
                        setFeatures((prev) =>
                          prev?.includes(type.id)
                            ? prev.filter((id) => id !== type.id)
                            : [...prev, type.id],
                        )
                      }
                      key={type.id}
                      className="flex cursor-pointer items-center gap-2 select-none"
                    >
                      <span className="text-base">{type.icon}</span>
                      <div
                        className={`flex h-[20px] w-[20px] flex-shrink-0 items-center justify-center rounded-md border-2 transition-all duration-200 ${
                          features?.includes(type.id)
                            ? "bg-mainbg border-orange-500 shadow-[0_0_0_3px_rgba(255,165,0,0.3)]"
                            : "border-titleColor bg-transparent"
                        }`}
                      >
                        {features?.includes(type.id) && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3.5 w-3.5 text-white"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </div>
                      <div className="text-titleColor flex items-center gap-2">
                        <span className="text-xs font-bold">{type.title}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
      {/* ویژگی اقامتگاه */}
      <div>
        <H1FilterOptionPage
          openOption={openOption}
          id={"attribute"}
          title="ویژگی اقامتگاه"
          setOpenOption={setOpenOption}
        />
        <AnimatePresence>
          {openOption.includes("attribute") && (
            <motion.ul
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="mt-4"
            >
              {info.map((item, index) => (
                <div className="grid grid-cols-2 gap-3" key={index}>
                  {item.attribute.map((type) => (
                    <div
                      onClick={() =>
                        setAttribute((prev) =>
                          prev?.includes(type.id)
                            ? prev.filter((id) => id !== type.id)
                            : [...prev, type.id],
                        )
                      }
                      key={type.id}
                      className="flex cursor-pointer items-center gap-2 select-none"
                    >
                      <span className="text-base">{type.icon}</span>
                      <div
                        className={`flex h-[20px] w-[20px] flex-shrink-0 items-center justify-center rounded-md border-2 transition-all duration-200 ${
                          attribute?.includes(type.id)
                            ? "bg-mainbg border-orange-500 shadow-[0_0_0_3px_rgba(255,165,0,0.3)]"
                            : "border-titleColor bg-transparent"
                        }`}
                      >
                        {attribute?.includes(type.id) && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3.5 w-3.5 text-white"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </div>
                      <div className="text-titleColor flex items-center gap-2">
                        <span className="text-xs font-bold">{type.title}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </form>
  );
};

export default FilterOptionPage;
