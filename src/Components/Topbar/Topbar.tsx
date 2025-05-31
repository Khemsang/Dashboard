import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ChevronDown,
  Bell,
  MessageCircle,
  Sun,
  Calendar,
} from "lucide-react";
import { motion } from "framer-motion";
import { useUser } from "../../Page/ProfilePage/ProfileContext/ProfileContext";
import { activeConversations } from "../../Constants/Chat";

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

const animationVariants = {
  hidden: { y: -30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 60, damping: 14 },
  },
};

const Topbar: React.FC = () => {
  const { currentUser } = useUser();
  const location = useLocation();

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [messageOpen, setMessageOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);

  const selectedConversation = activeConversations.find(
    (user) => user.id === selectedUserId
  );

  const closeDropdowns = () => {
    setProfileOpen(false);
    setMessageOpen(false);
    setNotificationOpen(false);
  };

  const toggleDropdown = (
    current: boolean,
    setState: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    if (!current) closeDropdowns();
    setState(!current);
  };

  useEffect(() => {
    closeDropdowns();
    setMobileMenuOpen(false);

    const savedTheme = localStorage.getItem("theme");
    const dark = savedTheme === "dark";
    setIsDarkMode(dark);
    document.body.classList.toggle("dark", dark);
  }, [location]);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    document.body.classList.toggle("dark", newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={animationVariants}
      className="w-full bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 md:px-6 py-3 flex items-center justify-between shadow-sm relative"
    >
      <input
        type="text"
        placeholder="Search..."
        className="hidden md:block w-1/3 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
      />

      {/* Updated this div to be justify-end on mobile and justify-start on md+ */}
      <div className="flex items-center space-x-4 relative justify-end w-full md:justify-start md:w-auto">
        <Sun
          onClick={toggleTheme}
          className={`cursor-pointer ${
            isDarkMode ? "text-yellow-400" : "text-gray-600"
          }`}
          aria-label="Toggle theme"
        />

        {location.pathname !== "/calendar" && (
          <Link to="/calendar">
            <Calendar className="text-gray-600 dark:text-gray-300 cursor-pointer" />
          </Link>
        )}

        {/* Notifications */}
        <div className="relative">
          <Bell
            onClick={() => toggleDropdown(notificationOpen, setNotificationOpen)}
            className="text-gray-600 dark:text-gray-300 cursor-pointer"
          />
          {notificationOpen && (
            <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50 p-4 max-h-64 overflow-auto">
              <h3 className="font-semibold text-gray-800 dark:text-white mb-3">
                Notifications
              </h3>
              <ul>{/* Add notification items here */}</ul>
            </div>
          )}
        </div>

        {/* Messages */}
        <div className="relative">
          <MessageCircle
            onClick={() => toggleDropdown(messageOpen, setMessageOpen)}
            className="text-gray-600 dark:text-gray-300 cursor-pointer"
          />
          {messageOpen && (
            <div className="absolute right-0 mt-2 w-96 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50 p-4 max-h-96 overflow-auto">
              <h3 className="font-semibold text-gray-800 dark:text-white mb-3">
                Messages
              </h3>

              {!selectedUserId ? (
                <ul>
                  {activeConversations.map((user) => (
                    <li
                      key={user.id}
                      onClick={() => setSelectedUserId(user.id)}
                      className="flex items-center space-x-3 p-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 hover:scale-105 transition-transform duration-200 rounded"
                    >
                      <img
                        src={user.profilePic}
                        alt={user.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <p className="font-semibold text-gray-800 dark:text-white truncate">
                          {user.name}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-300 truncate">
                          {user.lastMessage}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <div>
                  <button
                    onClick={() => setSelectedUserId(null)}
                    className="text-blue-600 dark:text-blue-400 text-sm mb-2"
                  >
                    ← Back to messages
                  </button>
                  <ul className="max-h-64 overflow-auto space-y-2">
                    {selectedConversation?.messages.map((msg, idx) => (
                      <li
                        key={idx}
                        className={`p-2 rounded ${
                          msg.sender === "You"
                            ? "bg-blue-100 dark:bg-blue-900 text-right"
                            : "bg-gray-200 dark:bg-gray-700 text-left"
                        }`}
                      >
                        <p className="text-sm font-semibold">{msg.sender}</p>
                        <p className="text-sm">{msg.text}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {msg.time}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <Link
                to="/chat"
                className="block text-center mt-2 text-blue-600 dark:text-blue-400 text-sm font-medium"
                onClick={() => setMessageOpen(false)}
              >
                View all messages
              </Link>
            </div>
          )}
        </div>

        {/* Profile */}
        <div className="relative">
          <button
            onClick={() => toggleDropdown(profileOpen, setProfileOpen)}
            className="flex items-center space-x-2"
          >
            {currentUser.profileImage ? (
              <img
                src={currentUser.profileImage}
                alt={currentUser.name}
                className="w-10 h-10 rounded-full object-cover border border-gray-300"
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-semibold text-sm">
                {getInitials(currentUser.name)}
              </div>
            )}
            <div className="hidden md:block text-gray-800 dark:text-white">
              <p>{currentUser.name}</p>
              <p className="text-xs">{currentUser.role}</p>
            </div>
            <ChevronDown
              className={`ml-1 transition-transform ${
                profileOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>
          {profileOpen && (
            <div className="absolute right-0 mt-2 w-44 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50">
              <Link
                to="/profile"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Profile
              </Link>
              <Link
                to="/settings"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Settings
              </Link>
              <Link
                to="/logout"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Logout
              </Link>
            </div>
          )}
        </div>
      </div>
    </motion.header>
  );
};

export default Topbar;
