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

export const imageSrc = [
  "/image/bg-1.jpg",
  "/image/bg-3.png",
  "/image/bg-4.jpg",
  "/image/bg-4.jpg",
  "/image/bg-3.png",
  "/image/bg-1.jpg",
];

export const fakeLocation = [
  { img: "/image/chaboksar.jpg", location: "رشت" },
  { img: "/image/gardaneHeyran.jpg", location: "لاهیجان" },
  { img: "/image/savadKoh.jpg", location: "لندن" },
  { img: "/image/chaboksar.jpg", location: "سوییس" },
  { img: "/image/gardaneHeyran.jpg", location: "تگزاس" },
  { img: "/image/savadKoh.jpg", location: "دوبی" },
  { img: "/image/chaboksar.jpg", location: "آنکارا" },
  { img: "/image/gardaneHeyran.jpg", location: "آنتالیا" },
  { img: "/image/chaboksar.jpg", location: "مشهد" },
  { img: "/image/savadKoh.jpg", location: "بیرجند" },
  { img: "/image/gardaneHeyran.jpg", location: "بجنورد" },
  { img: "/image/chaboksar.jpg", location: "بروجرد" },
];

export const fakeLocations = [
  { img: "/image/chaboksar.jpg", location: "جنگلی" },
  { img: "/image/gardaneHeyran.jpg", location: "کلبه سوییسی" },
  { img: "/image/savadKoh.jpg", location: "ویو جهنمی" },
  { img: "/image/chaboksar.jpg", location: "ویو بهشتی" },
  { img: "/image/gardaneHeyran.jpg", location: "ویو ابدی" },
  { img: "/image/savadKoh.jpg", location: "ویو عشق ابدی" },
  { img: "/image/chaboksar.jpg", location: "یه ویو دیگ" },
  { img: "/image/gardaneHeyran.jpg", location: "ویو مشهدی" },
  { img: "/image/chaboksar.jpg", location: "ویو یزدی" },
  { img: "/image/savadKoh.jpg", location: "ویو خامه ای" },
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
