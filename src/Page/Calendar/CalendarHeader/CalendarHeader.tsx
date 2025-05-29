import { useState } from "react";

interface CalendarHeaderProps {
  view: string;
  setView: (view: string) => void;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  onAddEvent: (event: { title: string }) => void;
}

const CalendarHeader: React.FC<CalendarHeaderProps> = ({
  view,
  setView,
 
  setCurrentPage,
  onAddEvent,
}) => {
  const [showAddEvent, setShowAddEvent] = useState(false);
  const [newEventTitle, setNewEventTitle] = useState("");

  const handlePrevious = () => setCurrentPage((prev) => prev  -1);
  const handleNext = () => setCurrentPage((prev) => prev + 1);

  const toggleAddEvent = () => setShowAddEvent((prev) => !prev);

  const handleSave = () => {
    if (newEventTitle.trim()) {
      onAddEvent({ title: newEventTitle.trim() });
      setNewEventTitle("");
      setShowAddEvent(false);
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center mb-4 p-2 bg-white dark:bg-slate-700 shadow-sm rounded gap-2">
        {/* Left controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrevious}
            aria-label="Previous"
            className="px-2 py-1 rounded border bg-white hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-600 transition"
          >
            &#8592;
          </button>
          <button
            onClick={handleNext}
            aria-label="Next"
            className="px-2 py-1 rounded border bg-white hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-600 transition"
          >
            &#8594;
          </button>
          <select
            value={view}
            onChange={(e) => setView(e.target.value)}
            className="border px-2 py-1 rounded dark:bg-gray-800 dark:text-gray-100"
          >
            <option value="Week">Week</option>
            <option value="Month">Month</option>
          </select>
        </div>

        {/* Add event button */}
        <button
          onClick={toggleAddEvent}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition whitespace-nowrap"
        >
          + Add Event
        </button>
      </div>

      {/* Add Event Form */}
      {showAddEvent && (
        <div className="mt-4 w-full bg-gray-100 dark:bg-gray-800 p-4 rounded shadow space-y-2">
          <input
            type="text"
            value={newEventTitle}
            onChange={(e) => setNewEventTitle(e.target.value)}
            placeholder="Event Title"
            className="w-full px-3 py-2 rounded border dark:bg-gray-700 dark:text-white"
          />
          <button
            onClick={handleSave}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          >
            Save
          </button>
        </div>
      )}
    </div>
  );
};

export default CalendarHeader;
