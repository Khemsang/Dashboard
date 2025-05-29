type Props = {
  date: number | null;
  event?: { id: number; title: string; start: number; end: number };
  isToday?: boolean;
};

const CalendarDayBox = ({ date, event, isToday }: Props) => {
  return (
    <div
      className={`
        min-h-[80px] sm:min-h-[100px] md:min-h-[120px]
        p-2
        text-xs sm:text-sm
        border border-gray-200 dark:border-gray-600
        rounded-md
        shadow-sm
        transition-all
        cursor-default
        dark:bg-gray-700
        ${
          isToday
            ? "bg-yellow-300 font-bold dark:bg-yellow-200 dark:text-gray-900"
            : "bg-white dark:bg-gray-800 dark:text-gray-100"
        }
        hover:bg-gray-100 dark:hover:bg-gray-600
        flex flex-col
      `}
    >
      {date && <div className="mb-1 text-gray-700 dark:text-gray-300">{date}</div>}

      {event && (
        <>
        =
          <div className="mt-auto p-1 bg-blue-200 border-l-4 border-blue-500 rounded-md dark:bg-blue-900 dark:text-blue-200 sm:hidden">
            <div className="font-semibold truncate">{event.title}</div>
          </div>

         
          <div className="mt-auto p-2 bg-gradient-to-r from-blue-100 to-blue-200 border-l-4 border-blue-500 rounded-md dark:from-blue-900 dark:to-blue-800 dark:text-blue-200 hidden sm:block">
            <div className="font-semibold truncate">{event.title}</div>
            <div className="opacity-80">
              {event.start} Dec - {event.end} Dec
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CalendarDayBox;
