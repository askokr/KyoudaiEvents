import Months from "./months";
import Days from "./days";
import AddZero from "./addZero";

function datetimeStringFunction(eventDate) {
  const rawDate = new Date(eventDate);
  const message = ["kell"];
  const dateString =
    Days[rawDate.getDay()] +
    ", " +
    rawDate.getDate() +
    ". " +
    Months[rawDate.getMonth()] +
    " " +
    rawDate.getFullYear() +
    " " +
    "  " +
    message[0] +
    " " +
    AddZero(rawDate.getHours()) +
    ":" +
    AddZero(rawDate.getMinutes());

  return dateString;
}

export default datetimeStringFunction;
