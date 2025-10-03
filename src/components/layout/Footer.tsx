import React from "react";
import FirstSection from "@/components/module/footer/FirstSection";
import SecondSection from "../module/footer/SecondSection";
import ThirdSection from "../module/footer/ThirdSection";
import ForthSection from "../module/footer/ForthSection";

function Footer() {
  return (
    <div className="mb-10 space-y-4">
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <ForthSection />
    </div>
  );
}

export default Footer;
