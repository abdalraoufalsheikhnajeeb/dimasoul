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

// Define the type for your events
interface CalendarEvent {
  title: string;
  start: Date;
  end: Date;
  id: number; // Adding an ID to uniquely identify each event
}

// Function to generate dynamic events
const generateDynamicEvents = (): CalendarEvent[] => {
  const events: CalendarEvent[] = [];
  const today = new Date();

  for (let i = 0; i < 5; i++) {
    const start = new Date(today);
    start.setDate(today.getDate() + i * 2); // Example: Every 2 days
    const end = new Date(start);
    end.setHours(start.getHours() + 1); // Example: Event lasts 1 hour

    events.push({
      title: `Event ${i + 1}`,
      start,
      end,
      id: i + 1, // Assign a unique ID to each event
    });
  }

  return events;
};

export default function ProgramCalendar() {
  const [calendarEvents, setCalendarEvents] = useState<CalendarEvent[]>([]);
  const router = useRouter(); // Initialize useRouter

  useEffect(() => {
    const events = generateDynamicEvents();
    setCalendarEvents(events);
  }, []);

  // Function to handle event click
  const handleSelectEvent = (event: CalendarEvent) => {
    // Navigate to a dynamic route based on the event ID or pass event details in query parameters
    router.push(`/calendar/${event.id}`);
    // Or use query params:
    // router.push(`/event-details?title=${event.title}&id=${event.id}`);
  };

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
        <div className="rounded-xl bg-primaryBG p-6 shadow-lg">
          <Calendar
            localizer={localizer}
            events={calendarEvents} // Dynamic events from state
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
            views={["month", "week", "day"]}
            defaultView="month"
            step={60}
            showMultiDayTimes
            onSelectEvent={handleSelectEvent} // Add the onSelectEvent handler
            components={{
              toolbar: ({ date, label, onNavigate, onView }) => (
                <div className="mb-4 flex items-center justify-between">
                  <button
                    onClick={() => onNavigate("PREV")}
                    className="rounded-xl bg-gray-200 px-4 py-2"
                  >
                    &#8249;
                  </button>
                  <span className="text-lg font-bold">{label}</span>
                  <button
                    onClick={() => onNavigate("NEXT")}
                    className="rounded-xl bg-gray-200 px-4 py-2"
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
          <Button
            title="Program List"
            extraClassName="w-full xl:w-[20rem] 2xl:w-[30rem]"
          />
        </div>
      </div>
    </section>
  );
}
