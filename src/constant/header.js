import { IoIosPerson } from "react-icons/io";
import { MdHolidayVillage } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";
import { MdFavorite } from "react-icons/md";
import { BsFillSuitcase2Fill } from "react-icons/bs";
import { RiReservedFill } from "react-icons/ri";
import { GiWallet } from "react-icons/gi";
import { IoIosHome } from "react-icons/io";
import { RiHomeHeartFill } from "react-icons/ri";
import { LuMailQuestion } from "react-icons/lu";
import { FaInfoCircle } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FaFileSignature } from "react-icons/fa";
import { ImExit } from "react-icons/im";

export const headerShortcut = [
  { icon: <IoIosPerson />, title: "ثبت نام | ورود" },
  { icon: <MdHolidayVillage />, title: "میزبان شو" },
  { icon: <MdHolidayVillage />, title: "مهمان شو" },
  { icon: <BiSupport />, title: "پشتیبانی" },
];

export const imageSrc = ["/image/h1.jpg", "/image/h1.jpg", "/image/h1.jpg"];

export const fakeLocation = [
  { img: "/image/m2.jpg", location: "رشت" },
  { img: "/image/m2.jpg", location: "لاهیجان" },
  { img: "/image/m2.jpg", location: "لندن" },
  { img: "/image/m2.jpg", location: "سوییس" },
  { img: "/image/m2.jpg", location: "تگزاس" },
  { img: "/image/m2.jpg", location: "دوبی" },
  { img: "/image/m2.jpg", location: "آنکارا" },
  { img: "/image/m2.jpg", location: "آنتالیا" },
  { img: "/image/m2.jpg", location: "مشهد" },
  { img: "/image/m2.jpg", location: "بیرجند" },
  { img: "/image/m2.jpg", location: "بجنورد" },
  { img: "/image/m2.jpg", location: "بروجرد" },
];

export const ctabutton = [
  { img: "/image/sea.jpg", title: "دریا", id: "sea" },
  { img: "/image/shakhes.jpg", title: "شاخص", id: "shakhes" },
  { img: "/image/forest.jpg", title: "جنگل", id: "forest" },
];

// آپشن های منو
export const menuOptionList = [
  { title: "صفحه اصلی", icon: <AiFillHome /> },
  { title: "علاقه مندی ها", icon: <MdFavorite /> },
  { title: "حساب کاربری", icon: <IoIosPerson /> },
  { title: "سفر ها ", icon: <BsFillSuitcase2Fill /> },
  { title: "رزرو ها ", icon: <RiReservedFill /> },
  { title: "کیف پول", icon: <GiWallet /> },
  { title: "ثبت اقامتگاه", icon: <IoIosHome /> },
  { title: "اقامتگاهای من", icon: <RiHomeHeartFill /> },
  { title: "پشتیبانی", icon: <BiSupport /> },
  { title: "سوالات متداول", icon: <LuMailQuestion /> },
  { title: "راهنما", icon: <FaInfoCircle /> },
  { title: "ضمانت تحویل", icon: <FaCheckCircle /> },
  { title: "قوانین وبسایت", icon: <FaFileSignature /> },
  { title: "درباره ی ما", icon: <FaInfoCircle /> },
  { title: "خروج", icon: <ImExit /> },
];
