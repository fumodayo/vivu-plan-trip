import React from "react";
import { EventApi, EventClickArg, EventContentArg } from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { INITIAL_EVENTS } from "./event-utils";

interface BookingProps {
  weekendsVisible: boolean;
  currentEvents: EventApi[];
}

const renderEventContent = (eventContent: EventContentArg) => {
  return (
    <>
      <b>{eventContent.timeText}</b>
      <i>{eventContent.event.title}</i>
    </>
  );
};

const Booking: React.FC<BookingProps> = () => {
  const handleEventClick = (clickInfo: EventClickArg) => {
    console.log(clickInfo);
  };

  return (
    <div className="demo-app">
      <div className="h-[400px] w-[300px]">
        <div className="demo-app-main">
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay",
            }}
            initialView="timeGridWeek"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            initialEvents={INITIAL_EVENTS}
            eventContent={renderEventContent}
            eventClick={handleEventClick}
            locale={"vi"}
          />
        </div>
      </div>
    </div>
  );
};

export default Booking;
