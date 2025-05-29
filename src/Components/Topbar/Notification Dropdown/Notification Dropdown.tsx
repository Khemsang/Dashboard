import React, { useState } from "react";

interface Notification {
  id: number;
  message: string;
  time: string;
}

const notifications: Notification[] = []; // Empty to reflect "no notifications"

const NotificationDropdown: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 rounded-full hover:bg-gray-200 focus:outline-none"
      >
        🔔
      </button>

      {open && (
        <div className="origin-top-right absolute right-0 mt-2 w-[90vw] sm:w-96 rounded-xl shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
          <div className="px-4 py-3 border-b">
            <h3 className="text-base font-semibold text-gray-800">Notifications</h3>
          </div>

          <div className="px-4 py-4 text-center text-sm text-gray-500">
            {notifications.length === 0 ? (
              <p>You have no new notifications.</p>
            ) : (
              <div className="max-h-80 overflow-y-auto divide-y divide-gray-100">
                {notifications.map((notification) => (
                  <div key={notification.id} className="px-4 py-3 hover:bg-gray-100">
                    <p className="text-gray-700">{notification.message}</p>
                    <span className="text-xs text-gray-400">{notification.time}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {notifications.length > 0 && (
            <div className="px-4 py-2 border-t text-center">
              <button className="text-blue-600 text-sm hover:underline">
                View All Notifications
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default NotificationDropdown;
