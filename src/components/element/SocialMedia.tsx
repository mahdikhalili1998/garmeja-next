import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoCallSharp } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";

function SocialMedia() {
  return (
    <div className="flex items-center justify-between gap-3">
      <a
        className="bg-mainbg rounded-lg p-2 text-white"
        href="https://wa.me/989389668917"
      >
        <IoLogoWhatsapp />
      </a>
      <a
        className="bg-mainbg rounded-lg p-2 text-white"
        href="https://instagram.com/mahdi_lhj"
      >
        <RiInstagramFill />
      </a>
      <a
        className="bg-mainbg rounded-lg p-2 text-white"
        href="https://t.me/mahdi_lhjj"
      >
        <FaTelegramPlane />
      </a>
      <a
        className="bg-mainbg rounded-lg p-2 text-white"
        href="tel:+91391009113"
      >
        <IoCallSharp />
      </a>
    </div>
  );
}

export default SocialMedia;
