import AddZero from "./addZero";
import Days from "./days";
import Months from "./months";

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
