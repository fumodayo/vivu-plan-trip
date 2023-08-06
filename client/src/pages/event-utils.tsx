import { EventInput } from "@fullcalendar/core";

const todayStr = new Date().toISOString().replace(/T.*$/, ""); // YYYY-MM-DD of today

export const INITIAL_EVENTS: EventInput[] = [
  {
    id: Math.floor(Math.random() * 1000).toString(),
    title: "Timed event",
    start: todayStr + "T12:00:00",
  },
  {
    id: Math.floor(Math.random() * 1000).toString(),
    title: "Timed event",
    start: todayStr + "T13:00:00",
  },
];
