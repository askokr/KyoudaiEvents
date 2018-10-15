function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
function datetimeStringFunction(eventDate) {
  const rawDate = new Date(eventDate);
  const months = [
    "jaanuar",
    "veebruar",
    "märts",
    "aprill",
    "mai",
    "juuni",
    "juuli",
    "august",
    "september",
    "oktoober",
    "november",
    "detember"
  ];
  const days = [
    "Pühapäev",
    "Esmaspäev",
    "Teisipäev",
    "Kolmapäev",
    "Neljapäev",
    "Reede",
    "Laupäev"
  ];
  const dateString =
    days[rawDate.getDay()] +
    ", " +
    months[rawDate.getMonth()] +
    " " +
    rawDate.getDate() +
    ", " +
    rawDate.getFullYear() +
    " " +
    addZero(rawDate.getHours()) +
    ":" +
    addZero(rawDate.getMinutes());

  return dateString;
}

export default datetimeStringFunction;
