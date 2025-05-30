import React, { type JSX } from "react";
import CalendarDayBox from "../CalendarDayBox/CalendarDayBox";

interface EventType {
  date?: string; // for week view
  start?: number; // for month view
  end?: number; // for month view
  // Add any other event fields you have
}

interface CalendarGridProps {
  view: "Month" | "Week";
  currentPage: number;
  events: EventType[];
}

const CalendarGrid: React.FC<CalendarGridProps> = ({ view, currentPage, events }) => {
  const todayDate = new Date();

  let baseDate = new Date(todayDate);
  if (view === "Month") {
    baseDate.setMonth(baseDate.getMonth() + currentPage);
  } else {
    baseDate.setDate(baseDate.getDate() + currentPage * 7);
  }

  const currentYear = baseDate.getFullYear();
  const currentMonth = baseDate.getMonth();
  const today = todayDate.getDate();

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  let cells: JSX.Element[] = [];

  if (view === "Month") {
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const startDay = firstDayOfMonth.getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const totalCells = Math.ceil((startDay + daysInMonth) / 7) * 7;

    cells = Array.from({ length: totalCells }, (_, index) => {
      const date = index - startDay + 1;
      const isValidDate = date > 0 && date <= daysInMonth;
      const fullDate = new Date(currentYear, currentMonth, date);
      const formattedDate = fullDate.toISOString().split("T")[0];

      const event = isValidDate
        ? events.find((e) => e.start !== undefined && e.end !== undefined && date >= e.start && date <= e.end)
        : null;

      const isToday =
        isValidDate &&
        date === today &&
        baseDate.getMonth() === todayDate.getMonth() &&
        baseDate.getFullYear() === todayDate.getFullYear();

      const cellKey = isValidDate ? formattedDate : `empty-${index}`;

      return (
        <CalendarDayBox
          key={cellKey}
          date={isValidDate ? date : null}
          event={event}
          isToday={isToday}
        />
      );
    });
  } else if (view === "Week") {
    const startOfWeek = new Date(baseDate);
    startOfWeek.setDate(baseDate.getDate() - baseDate.getDay()); // Sunday

    cells = Array.from({ length: 7 }, (_, index) => {
      const dayDate = new Date(startOfWeek);
      dayDate.setDate(startOfWeek.getDate() + index);

      const formattedDate = dayDate.toISOString().split("T")[0];
      const isToday = dayDate.toDateString() === todayDate.toDateString();
      const event = events.find(
        (e) => e.date === formattedDate
      );

      return (
        <CalendarDayBox
          key={formattedDate}
          date={dayDate.getDate()}
          event={event}
          isToday={isToday}
        />
      );
    });
  }

  return (
    <div className=" sm:p-6 bg-[#f4f7fb] min-h-[60vh] sm:min-h-screen">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
          {monthNames[currentMonth]} {currentYear}
        </h2>
      </div>

      <div className="overflow-x-auto rounded-t-md">
        <div className="min-w-[350px] grid grid-cols-7 bg-blue-600 text-white text-center font-semibold overflow-hidden text-xs sm:text-sm">
          {dayNames.map((day) => (
            <div key={day} className="py-2 border-r last:border-r-0 select-none">
              {day}
            </div>
          ))}
        </div>

        <div className="min-w-[350px] grid grid-cols-7 border border-t-0">
          {cells}
        </div>
      </div>
    </div>
  );
};

export default CalendarGrid;
