// Функция для получения текущей даты в формате "3rd of November 2026"
export const getFormattedDate = () => {
  const date = new Date();
  const day = date.getDate();

  // Получаем полное название месяца на английском
  const month = date.toLocaleDateString("en-US", { month: "long" });
  const year = date.getFullYear();

  // Функция для определения правильного суффикса (st, nd, rd, th)
  const getOrdinalSuffix = (num: number) => {
    if (num > 3 && num < 21) return "th";
    switch (num % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  return `${day}${getOrdinalSuffix(day)} of ${month} ${year}`;
};
