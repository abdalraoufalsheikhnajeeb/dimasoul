"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import enUS from "date-fns/locale/en-US";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Button from "./Button";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Added icons for navigation

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

interface CalendarEvent {
  title: string;
  start: Date;
  end: Date;
  id: number;
}

const generateDynamicEvents = (): CalendarEvent[] => {
  const events: CalendarEvent[] = [];
  const today = new Date();

  for (let i = 0; i < 5; i++) {
    const start = new Date(today);
    start.setDate(today.getDate() + i * 2);
    const end = new Date(start);
    end.setHours(start.getHours() + 1);

    events.push({
      title: `Event ${i + 1}`,
      start,
      end,
      id: i + 1,
    });
  }

  return events;
};

export default function ProgramCalendar() {
  const [calendarEvents, setCalendarEvents] = useState<CalendarEvent[]>([]);
  const router = useRouter();

  useEffect(() => {
    const events = generateDynamicEvents();
    setCalendarEvents(events);
  }, []);

  const handleSelectEvent = (event: CalendarEvent) => {
    router.push(`/calendar/${event.id}`);
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Calendar Header */}
        <h2 className="mb-4 text-center text-4xl font-bold text-gray-800">
          Program Calendar
        </h2>
        <p className="mb-8 text-center text-gray-500">
          Hover over an event or click to learn more
        </p>

        {/* Big Calendar Component */}
        <div className="rounded-2xl bg-white p-8 shadow-xl">
          <Calendar
            localizer={localizer}
            events={calendarEvents}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 600, background: "#E0EAE2" }}
            views={["month", "week", "day"]}
            defaultView="month"
            step={60}
            showMultiDayTimes
            onSelectEvent={handleSelectEvent}
            components={{
              toolbar: ({ label, onNavigate }) => (
                <div className="mb-6 flex items-center justify-between">
                  <button
                    onClick={() => onNavigate("PREV")}
                    className="flex items-center gap-2 rounded-full bg-gray-200 px-4 py-2 text-gray-700 transition-all hover:bg-gray-300"
                  >
                    <FaChevronLeft />
                    <span>Previous</span>
                  </button>
                  <span className="text-2xl font-semibold text-gray-800">
                    {label}
                  </span>
                  <button
                    onClick={() => onNavigate("NEXT")}
                    className="flex items-center gap-2 rounded-full bg-gray-200 px-4 py-2 text-gray-700 transition-all hover:bg-gray-300"
                  >
                    <span>Next</span>
                    <FaChevronRight />
                  </button>
                </div>
              ),
            }}
            eventPropGetter={() => ({
              style: {
                backgroundColor: "#FFDDC1",
                color: "#333",
                borderRadius: "8px",
                border: "1px solid #F8B400",
                padding: "5px",
              },
            })}
            dayPropGetter={() => ({
              style: {
                borderRadius: "10px",
                border: "1px solid #f1f1f1",
              },
            })}
          />
        </div>

        {/* Program List Button */}
        <div className="mt-12 text-center">
          <Button
            title="View Program List"
            extraClassName="w-full max-w-sm mx-auto text-lg py-4 bg-green-700 text-white rounded-lg shadow-md hover:bg-green-600 transition-all"
          />
        </div>
      </div>
    </section>
  );
}
