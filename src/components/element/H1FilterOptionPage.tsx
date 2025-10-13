import { IH1 } from "@/types/props";
import React, { FC } from "react";
import { FaAngleDown } from "react-icons/fa6";

const H1FilterOptionPage: FC<IH1> = ({
  setOpenOption,
  openOption,
  id,
  title,
}) => {
  const toggleOption = (value: string) => {
    setOpenOption((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value],
    );
  };

  return (
    <h1
      onClick={() => toggleOption(id)}
      className="text-mainbg mb-4 flex cursor-pointer items-center gap-1 font-semibold"
    >
      {title}
      <FaAngleDown
        className={`${
          openOption.includes(id) ? "rotate-180" : "rotate-0"
        } text-mainbg transition-transform duration-200`}
      />
    </h1>
  );
};

export default H1FilterOptionPage;
