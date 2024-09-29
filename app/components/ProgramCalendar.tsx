"use client"
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import enUS from "date-fns/locale/en-US";
import "react-big-calendar/lib/css/react-big-calendar.css"; // Big Calendar CSS
import { calendarEvents } from "../data";

// Set up the localizer with date-fns
const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

export default function ProgramCalendar() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        {/* Calendar Header */}
        <h2 className="mb-4 text-center text-3xl font-bold">
          Program Calendar
        </h2>
        <p className="mb-8 text-center text-gray-600">
          Hover over an entry or click to learn more
        </p>

        {/* Big Calendar Component */}
        <div className="rounded-lg bg-primaryBG p-6 shadow-lg">
          <Calendar
            localizer={localizer}
            events={calendarEvents} // Dynamic events
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
            views={["month", "week", "day"]}
            defaultView="month"
            step={60}
            showMultiDayTimes
            components={{
              toolbar: ({ date, label, onNavigate, onView }) => (
                <div className="mb-4 flex items-center justify-between">
                  <button
                    onClick={() => onNavigate("PREV")}
                    className="rounded-lg bg-gray-200 px-4 py-2"
                  >
                    &#8249;
                  </button>
                  <span className="text-lg font-bold">{label}</span>
                  <button
                    onClick={() => onNavigate("NEXT")}
                    className="rounded-lg bg-gray-200 px-4 py-2"
                  >
                    &#8250;
                  </button>
                </div>
              ),
            }}
            eventPropGetter={(event) => ({
              style: {
                backgroundColor: "#F9E09D",
                borderRadius: "5px",
                padding: "5px",
                border: "none",
              },
            })}
          />
        </div>

        {/* Program List Button */}
        <div className="mt-8 text-center">
          <button className="hover:bg-primary-dark rounded-lg bg-primary px-6 py-3 text-white">
            Program List
          </button>
        </div>
      </div>
    </section>
  );
}
