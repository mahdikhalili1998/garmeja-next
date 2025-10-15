"use client";
import React, { useEffect, useState } from "react";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";

interface FetchResult<T> {
  data: T[];
  totalPages: number;
}

interface PaginationProps<T> {
  initialPage?: number;
  pageSize?: number;
  fetchPage?: (page: number, pageSize: number) => Promise<FetchResult<T>>;
  onChange?: (page: number, data: T[]) => void;
}

export default function Pagination<T>({
  initialPage = 1,
  pageSize = 5,
  fetchPage,
  onChange,
}: PaginationProps<T>) {
  const [page, setPage] = useState<number>(initialPage);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [items, setItems] = useState<T[]>([]);

  // ======= Fake Fetch برای تست =======
  const fakeFetch = async (p: number, ps: number): Promise<FetchResult<T>> => {
    const totalItems = 37;
    const computedTotalPages = Math.max(1, Math.ceil(totalItems / ps));

    const data: T[] = Array.from({ length: ps }, (_, i) => {
      const globalIndex = (p - 1) * ps + i + 1;
      if (globalIndex > totalItems) return undefined as unknown as T;
      return {
        id: globalIndex,
        title: `Fake Item #${globalIndex}`,
        price: Math.floor(1000000 + Math.random() * 5000000),
      } as unknown as T;
    }).filter(Boolean);

    await new Promise((res) => setTimeout(res, 300));
    return { data, totalPages: computedTotalPages };
  };
  // ====================================

  const doFetch = async (p: number): Promise<void> => {
    setLoading(true);
    try {
      const fetchFn = fetchPage ?? fakeFetch;
      const result = await fetchFn(p, pageSize);
      setItems(result.data);
      setTotalPages(Math.max(1, result.totalPages));
      onChange?.(p, result.data);
    } catch (error) {
      console.error("Pagination fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void doFetch(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, pageSize]);

  // ======= محاسبه ۳ شماره صفحه =======
  const getPageNumbers = (): number[] => {
    const nums: number[] = [];
    if (totalPages <= 3) {
      for (let i = 1; i <= totalPages; i++) nums.push(i);
    } else {
      if (page === 1) nums.push(1, 2, 3);
      else if (page === totalPages)
        nums.push(totalPages - 2, totalPages - 1, totalPages);
      else nums.push(page - 1, page, page + 1);
    }
    return nums;
  };
  const pageNumbers = getPageNumbers();
  // ==================================

  return (
    <div className="text-titleColor 900:flex-row 900:justify-around flex w-full flex-col items-center gap-3 pb-5">
      <div className="900:flex 900:items-center 900:gap-2">
        {/* توضیح متنی  */}
        <div className="text-sm">
          {loading ? "در حال بارگذاری..." : `صفحه ${page} از ${totalPages}`}
        </div>
        {/* دکمه کم و زیاد */}
        <div className="900:flex hidden items-center gap-2">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page <= 1 || loading}
            className={`rounded-md border px-3 py-1 text-sm shadow-sm ${
              page <= 1 || loading ? "cursor-not-allowed opacity-50" : ""
            }`}
          >
            −
          </button>
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page >= totalPages || loading}
            className={`rounded-md border px-3 py-1 text-sm shadow-sm ${
              page >= totalPages || loading
                ? "cursor-not-allowed opacity-50"
                : ""
            }`}
          >
            +
          </button>
        </div>
      </div>

      {/* اعداد و فلش ها  */}
      <div className="flex items-center justify-between gap-3">
        {/* شماره صفحات */}
        <nav className="flex items-center gap-2" aria-label="Pagination">
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page >= totalPages || loading}
            className={`text-mainbg rotate-180 rounded-md px-3 py-1 ${
              page >= totalPages || loading
                ? "cursor-not-allowed opacity-50"
                : "animate-move-left"
            }`}
            title="بعدی"
          >
            <FaAnglesLeft />
          </button>

          <div className="flex flex-row-reverse items-center gap-1">
            {pageNumbers.map((num) => (
              <button
                key={num}
                onClick={() => setPage(num)}
                disabled={loading}
                className={`flex h-9 min-w-[36px] items-center justify-center rounded-md border px-2 text-sm ${
                  num === page ? "bg-mainbg font-bold text-white" : "bg-white"
                } ${loading ? "opacity-70" : "hover:shadow-md"}`}
              >
                {num}
              </button>
            ))}
          </div>

          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page <= 1 || loading}
            className={`text-mainbg rounded-md px-3 py-1 ${
              page <= 1 || loading
                ? "cursor-not-allowed opacity-50"
                : "animate-move-left"
            }`}
            title="قبلی"
          >
            <FaAnglesLeft />
          </button>
        </nav>
      </div>
    </div>
  );
}
