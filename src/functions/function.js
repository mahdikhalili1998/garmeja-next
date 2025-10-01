function shortText(text) {
  const words = text.trim().split(/\s+/); // جدا کردن کلمات با در نظر گرفتن فاصله‌های متعدد
  if (words.length <= 8) {
    return text;
  }
  return words.slice(0, 8).join(" ") + "...";
}

// برای جدا کردن 3 رقم از راست
function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "/");
}

export { shortText, formatNumber };
