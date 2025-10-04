import Image from "next/image";
import React from "react";

import SocialMedia from "@/components/element/SocialMedia";

function SecondSection() {
  return (
    <div>
      {/* لوگو و راه های ارتباطی */}
      <div className="900:hidden flex flex-col items-center justify-center gap-2">
        <div>
          <Image
            src={"/image/logo.png"}
            alt="logo"
            width={300}
            height={300}
            priority
            className="size-[3rem]"
          />
        </div>
        <p className="text-sm font-medium">شرکت امی کوچ گیل ( گرمه جا )</p>
        <SocialMedia />
      </div>
    </div>
  );
}

export default SecondSection;
