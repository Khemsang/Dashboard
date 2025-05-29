import { useState } from "react";

const Theme = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  };

  return (
    <div
      className={`min-h-screen ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      } transition-all`}
    >
      <div className="flex justify-between items-center p-6">
        <h1 className="text-2xl font-semibold">Theme Toggle Game</h1>

        <button
          onClick={toggleTheme}
          className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
        >
          {isDarkMode ? (
            <span role="img" aria-label="light mode">
              🌞
            </span>
          ) : (
            <span role="img" aria-label="dark mode">
              🌙
            </span>
          )}
        </button>
      </div>
      <div className="p-6">
        <p>
          {isDarkMode
            ? "Dark mode is active. Switch to light mode."
            : "Light mode is active. Switch to dark mode."}
        </p>
      </div>
    </div>
  );
};

export default Theme;
