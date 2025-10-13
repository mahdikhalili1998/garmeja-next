import {
  MdAcUnit,
  MdOutlinePets,
  MdOutlineWc,
  MdWbSunny,
  MdWeekend,
} from "react-icons/md";
import {
  GiCigarette,
  GiCookingPot,
  GiFriedEggs,
  GiIronCross,
  GiMeat,
  GiShower,
  GiVacuumCleaner,
} from "react-icons/gi";
import { LuPartyPopper } from "react-icons/lu";
import { AiFillTruck } from "react-icons/ai";
import {
  FaBolt,
  FaBroom,
  FaClock,
  FaGem,
  FaMapMarkedAlt,
  FaMoneyBillWave,
  FaMountain,
  FaPaw,
  FaRegLightbulb,
  FaStar,
  FaSun,
  FaSwimmingPool,
  FaUtensils,
  FaVideo,
  FaWater,
  FaWheelchair,
} from "react-icons/fa";
import { RiBilliardsFill } from "react-icons/ri";
import { BiCloset } from "react-icons/bi";

const info = [
  {
    rules: [
      {
        id: "pet",
        title: "همراه داشتن حیوان خانگی مجاز باشد.",
        icon: <MdOutlinePets />,
      },
      {
        id: "sigaret",
        title: "استعمال دخانیات در داخل اقامتگاه مجاز باشد.",
        icon: <GiCigarette />,
      },
      {
        id: "party",
        title: "برگزاری جشن کوچک با هماهنگی میزبان امکانپذیر باشد.",
        icon: <LuPartyPopper />,
      },
    ],
    type: [
      { id: "villa", title: "ویلایی" },
      { id: "cottage", title: "کلبه" },
      { id: "Eco-lodge", title: "اقامتگاه بومگردی" },
      { id: "village", title: "خانه روستایی" },
    ],
    rentalType: [
      { id: "entirePlace", title: "دربست" },
      { id: "semiPrivate", title: "نیمه دربست" },
      { id: "privateRoom", title: "اتاق خصوصی" },
      { id: "shared_Room", title: "اتاق مشترک" },
    ],
    location: [
      { id: "beach", title: "ساحلی" },
      { id: "forest", title: "جنگلی" },
      { id: "desert", title: "بیابانی" },
      { id: "highland", title: "ییلاقی" },
      { id: "urban", title: "شهری" },
      { id: "suburban", title: "حومه شهر" },
      { id: "rural", title: "روستایی" },
    ],
    features: [
      { id: "parking", title: "پارکینگ", icon: <AiFillTruck /> },
      { id: "coolingSystem", title: "سیستم سرمایشی", icon: <MdAcUnit /> },
      { id: "westernToilet", title: "توالت فرنگی", icon: <MdOutlineWc /> },
      { id: "refrigerator", title: "یخچال", icon: <GiFriedEggs /> },
      { id: "bathroom", title: "حمام", icon: <GiShower /> },
      { id: "heatingSystem", title: "سیستم گرمایشی", icon: <MdWbSunny /> },
      { id: "vacuumCleaner", title: "جاروبرقی", icon: <GiVacuumCleaner /> },
      { id: "stove", title: "اجاق گاز", icon: <GiCookingPot /> },
      { id: "iron", title: "اتو", icon: <GiIronCross /> },
      { id: "grillMeat", title: "کباب‌ پز", icon: <GiMeat /> },
      { id: "furniture", title: "مبلمان", icon: <MdWeekend /> },
      { id: "swimmingPool", title: "استخر", icon: <FaSwimmingPool /> },
      { id: "billiardTable", title: "میز بیلیارد", icon: <RiBilliardsFill /> },
      {
        id: "electricityLighting",
        title: "برق و روشنایی",
        icon: <FaRegLightbulb />,
      },
      { id: "closet", title: "کمد", icon: <BiCloset /> },
    ],
    attribute: [
      { id: "swissCottage", title: "کلبه سوئیسی", icon: <FaMountain /> },
      {
        id: "northernLocation",
        title: "اقامتگاه در شمال",
        icon: <FaMapMarkedAlt />,
      },
      { id: "waterfront", title: "لب آب", icon: <FaWater /> },
      { id: "scenicView", title: "چشم‌انداز", icon: <FaSun /> },
      { id: "luxury", title: "لوکس", icon: <FaGem /> },
      { id: "economic", title: "اقتصادی", icon: <FaMoneyBillWave /> },
      { id: "lastMinute", title: "لحظه آخری", icon: <FaClock /> },
      { id: "sanitized", title: "ضدعفونی شده", icon: <FaBroom /> },
      { id: "petFriendly", title: "پت نواز", icon: <FaPaw /> },
      { id: "deliciousFood", title: "خوش‌غذا", icon: <FaUtensils /> },
      { id: "accessible", title: "مناسب معلولین", icon: <FaWheelchair /> },
      { id: "featured", title: "شاخص", icon: <FaStar /> },
      { id: "video", title: "دارای ویدیو", icon: <FaVideo /> },
      { id: "instantBooking", title: "رزرو فوری", icon: <FaBolt /> },
    ],
  },
];

export { info };
