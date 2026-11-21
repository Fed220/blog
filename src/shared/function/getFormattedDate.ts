// Функция для получения текущей даты в формате "3 de noviembre de 2026"
export const getFormattedDate = () => {
  const date = new Date();
  const day = date.getDate();

  // Получаем полное название месяца на испанском (в нижнем регистре)
  const month = date.toLocaleDateString("es-ES", { month: "long" });
  const year = date.getFullYear();

  return `${day} de ${month} de ${year}`;
};
