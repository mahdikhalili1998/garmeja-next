import { sort } from "@/constant/FilterOptionInfo";
import { detailOfCategory } from "@/constant/other";
import { ISortOptionPage } from "@/types/props";
import { useRouter, useSearchParams } from "next/navigation";
import React, { FC, useEffect, useState } from "react";
import { IoCloseCircle } from "react-icons/io5";

const SortPageOption: FC<ISortOptionPage> = ({
  setLocationInfo,
  setOpenSort,
}) => {
  const [sortValue, setSortValue] = useState<string | null>(null);
  const [discountOnly, setDiscountOnly] = useState<boolean>(false);

  const router = useRouter();
  const searchParams = useSearchParams();

  // 🔹 خواندن از URL در بار اول
  useEffect(() => {
    const sortParam = searchParams.get("sort");
    const discountParam = searchParams.get("discount");
    if (sortParam) setSortValue(sortParam);
    if (discountParam === "true") setDiscountOnly(true);
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let filteredData = [...detailOfCategory];

    if (discountOnly) {
      filteredData = filteredData.filter((item) => item.discount > 0);
    }

    if (sortValue === "mtl") {
      filteredData.sort((a, b) => b.price - a.price);
    } else if (sortValue === "ltm") {
      filteredData.sort((a, b) => a.price - b.price);
    }

    setLocationInfo(filteredData);

    // 🔹 ست کردن query در URL
    const params = new URLSearchParams();
    if (sortValue) params.set("sort", sortValue);
    if (discountOnly) params.set("discount", "true");

    router.replace(`?${params.toString()}`);
  };

  const deleteFilter = () => {
    setSortValue(null);
    setDiscountOnly(false);
    setLocationInfo(detailOfCategory);
    router.replace("?");
  };
  return (
    <form onSubmit={handleSubmit} className="mr-2 space-y-4 font-bold">
      {/* دکمه‌های بالا */}
      <div className="fixed top-10 right-6 mx-4 flex w-[80%] items-center justify-between rounded-lg bg-white py-4">
        <div className="flex items-center gap-1 text-sm">
          <button
            type="submit"
            className="bg-mainbg rounded-lg px-2 py-1 font-bold text-white"
          >
            اعمال
          </button>
          <button
            type="button"
            className="bg-titleColor rounded-lg px-2 py-1 font-bold text-white"
            onClick={deleteFilter}
          >
            حذف
          </button>
        </div>
        <button
          onClick={() => setOpenSort(false)}
          type="button"
          className="left-3 text-red-500 hover:text-black"
        >
          <IoCloseCircle className="text-4xl text-red-500" />
        </button>
      </div>
      {/* گزینه‌های مرتب‌سازی */}
      <div className="text-titleColor mt-12 space-y-2 text-sm">
        {sort.map((item, index) => {
          const isSelected =
            item.id === "dis" ? discountOnly : sortValue === item.id;

          return (
            <div
              key={index}
              onClick={() => {
                if (item.id === "dis") {
                  setDiscountOnly((prev) => !prev);
                } else {
                  setSortValue((prev) => (prev === item.id ? null : item.id));
                }
              }}
              className="flex cursor-pointer items-center gap-2 font-bold select-none"
            >
              <span className="text-lg"> {item.icon}</span>
              <div
                className={`flex h-[20px] w-[20px] flex-shrink-0 items-center justify-center rounded-md border-2 transition-all duration-200 ${
                  isSelected
                    ? "bg-mainbg border-orange-500 shadow-[0_0_0_3px_rgba(255,165,0,0.3)]"
                    : "border-titleColor bg-transparent"
                }`}
              >
                {isSelected && (
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

              <span>{item.title}</span>
            </div>
          );
        })}
      </div>
    </form>
  );
};

export default SortPageOption;
