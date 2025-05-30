import React from "react";
import CalendarHeader from "./CalendarHeader/CalendarHeader";
import CalendarGrid from "./CalendarGrid/CalendarGrid";

const Calendar = () => {
  const [view, setView] = React.useState<"Month" | "Week">("Month");
  const [currentPage, setCurrentPage] = React.useState(0);
  const [events, setEvents] = React.useState([
    { id: 1, title: "Redesign Website", start: 1, end: 2 },
  ]);

  const handleAddEvent = (newEvent: { title: string }) => {
    setEvents((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        title: newEvent.title,
        start: 10, // TODO: Make dynamic later
        end: 11,
      },
    ]);
  };

  return (
    <div className="opacity-100 transition-opacity duration-700 ease-in-out gap-0">
      <CalendarHeader
        view={view}
        setView={setView}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        onAddEvent={handleAddEvent}
      />
      <CalendarGrid
        view={view}
        currentPage={currentPage}
        events={events}
      />
    </div>
  );
};

export default Calendar;
