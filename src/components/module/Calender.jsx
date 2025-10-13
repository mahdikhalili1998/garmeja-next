import { useState } from "react";
import { motion } from "framer-motion";

// توابع دقیق تبدیل تاریخ میلادی ↔ شمسی
function toJalali(gy, gm, gd) {
  const g_d_m = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
  let jy = gy - 621;
  let gy2 = gm > 2 ? gy + 1 : gy;
  let days =
    355666 +
    365 * gy +
    Math.floor((gy2 + 3) / 4) -
    Math.floor((gy2 + 99) / 100) +
    Math.floor((gy2 + 399) / 400) +
    gd +
    g_d_m[gm - 1];
  jy += 33 * Math.floor(days / 12053);
  days %= 12053;
  jy += 4 * Math.floor(days / 1461);
  days %= 1461;
  if (days > 365) {
    jy += Math.floor((days - 1) / 365);
    days = (days - 1) % 365;
  }
  const jm =
    days < 186 ? 1 + Math.floor(days / 31) : 7 + Math.floor((days - 186) / 30);
  const jd = 1 + (days < 186 ? days % 31 : (days - 186) % 30);
  return [jy, jm, jd];
}

// گرفتن روزهای ماه شمسی (واقعی و درست)
function getJalaliMonthDays(year, month) {
  const jDaysInMonth = [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29];
  const days = [];
  for (let i = 1; i <= jDaysInMonth[month - 1]; i++) {
    // تاریخ شمسی به میلادی برای Date واقعی
    const g = toGregorian(year, month, i);
    const gDate = new Date(g[0], g[1] - 1, g[2]);
    const weekDay = gDate.getDay(); // 0:یکشنبه → 6:شنبه
    days.push({
      id: `${year}-${month}-${i}`,
      year,
      month,
      day: i,
      weekDay,
      date: gDate,
    });
  }
  return days;
}

// تبدیل شمسی به میلادی (برای ساختن Date)
function toGregorian(jy, jm, jd) {
  jy += 1595;
  let days =
    -355668 +
    365 * jy +
    Math.floor(jy / 33) * 8 +
    Math.floor(((jy % 33) + 3) / 4) +
    jd +
    (jm < 7 ? (jm - 1) * 31 : (jm - 7) * 30 + 186);
  let gy = 400 * Math.floor(days / 146097);
  days %= 146097;
  if (days > 36524) {
    gy += 100 * Math.floor(--days / 36524);
    days %= 36524;
    if (days >= 365) days++;
  }
  gy += 4 * Math.floor(days / 1461);
  days %= 1461;
  if (days > 365) {
    gy += Math.floor((days - 1) / 365);
    days = (days - 1) % 365;
  }
  const gd = days + 1;
  const sal_a = [
    0,
    31,
    (gy % 4 === 0 && gy % 100 !== 0) || gy % 400 === 0 ? 29 : 28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];
  let gm = 0;
  for (gm = 0; gm < 13 && gd > sal_a[gm]; gm++) {
    days -= sal_a[gm];
  }
  return [gy, gm, gd - sal_a[gm - 1]];
}

export default function DatePicker() {
  const [month, setMonth] = useState({ year: 1404, month: 7 });
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);
  const days = getJalaliMonthDays(month.year, month.month);

  const handleClick = (day) => {
    const selected = day.date.getTime();
    if (!start || (start && end)) {
      setStart(selected);
      setEnd(null);
    } else if (selected < start) {
      setStart(selected);
      setEnd(null);
    } else {
      setEnd(selected);
    }
  };

  const isSelected = (day) => {
    const time = day.date.getTime();
    return (
      (start && time === start) ||
      (end && time === end) ||
      (start && end && time > start && time < end)
    );
  };

  const isPast = (day) => {
    const now = new Date();
    return day.date < now.setHours(0, 0, 0, 0);
  };

  const today = new Date();
  const todayJ = toJalali(
    today.getFullYear(),
    today.getMonth() + 1,
    today.getDate(),
  );
  const [ty, tm, td] = todayJ;

  const weekDays = ["ش", "ی", "د", "س", "چ", "پ", "ج"]; // شنبه تا جمعه
  const shiftedDays = days.map((d) => ({
    ...d,
    persianWeekDay: (d.weekDay + 1) % 7, // اصلاح جهت چینش شمسی
  }));

  return (
    <div className="mx-auto w-full max-w-sm rounded-2xl bg-white p-4 shadow">
      {/* header */}
      <div className="mb-4 flex items-center justify-between">
        <button
          onClick={() =>
            setMonth((m) =>
              m.month === 1
                ? { year: m.year - 1, month: 12 }
                : { ...m, month: m.month - 1 },
            )
          }
          className="p-2"
        >
          ❮
        </button>
        <h2 className="text-lg font-bold">
          {month.year} / {month.month}
        </h2>
        <button
          onClick={() =>
            setMonth((m) =>
              m.month === 12
                ? { year: m.year + 1, month: 1 }
                : { ...m, month: m.month + 1 },
            )
          }
          className="p-2"
        >
          ❯
        </button>
      </div>

      {/* week names */}
      <div className="mb-2 grid grid-cols-7 text-center text-sm text-gray-500">
        {weekDays.map((w) => (
          <div key={w}>{w}</div>
        ))}
      </div>

      {/* days */}
      <div className="grid grid-cols-7 gap-1">
        {shiftedDays.map((d) => {
          const isToday = d.year === ty && d.month === tm && d.day === td;

          return (
            <motion.div
              key={d.id}
              whileTap={{ scale: 0.9 }}
              onClick={() => !isPast(d) && handleClick(d)}
              className={`grid aspect-square place-content-center rounded-lg border transition ${
                isPast(d)
                  ? "border-gray-200 bg-gray-200 text-gray-400"
                  : isSelected(d)
                    ? "border-blue-400 bg-blue-300 text-gray-900"
                    : "border-gray-200 bg-white text-gray-800 hover:bg-blue-50"
              } ${d.persianWeekDay === 6 ? "text-red-500" : ""} ${isToday ? "font-bold ring-2 ring-blue-500" : ""} `}
            >
              {d.day}
            </motion.div>
          );
        })}
      </div>

      <div className="mt-4 text-center text-sm text-gray-600">
        {start && !end && "تاریخ ورود انتخاب شد"}
        {start && end && "بازه انتخاب شد ✅"}
      </div>
    </div>
  );
}
