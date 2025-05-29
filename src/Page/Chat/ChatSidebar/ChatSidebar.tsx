import React from "react";

export type Message = {
  sender: string;
  text: string;
  time: string;
};

export type ChatUser = {
  id: number | string;
  name: string;
  profilePic?: string;
  messages: Message[];
};

interface Props {
  users: ChatUser[];
  selectedUserId: number | string | null;
  onUserSelect: (user: ChatUser) => void;
  onClose: () => void;
}

const ChatSidebar: React.FC<Props> = ({ users, selectedUserId, onUserSelect, onClose }) => {
  return (
    <div className="h-full flex flex-col w-full">
      <div className="p-4 border-b sticky top-0 bg-white z-10">
        <div className="flex justify-between items-center mb-4 ">
          <h2 className="text-xl font-semibold text-gray-800 mt-10">Active Conversations</h2>
          <button
            onClick={onClose}
            className="md:hidden text-gray-500 hover:text-gray-700"
            aria-label="Close sidebar"
          >
            ✕
          </button>
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <svg
            className="absolute right-3 top-2.5 h-4 w-4 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-2">
        {users.map((user) => {
          const lastMessage = user.messages[user.messages.length - 1];
          const isActive = selectedUserId === user.id;

          return (
            <div
              key={user.id}
              onClick={() => onUserSelect(user)}
              className={`p-3 rounded-lg cursor-pointer transition-colors ${
                isActive ? "bg-blue-50" : "hover:bg-gray-50"
              }`}
            >
              <div className="flex items-center gap-3">
                {user.profilePic ? (
                  <img
                    src={user.profilePic}
                    alt={user.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold">
                    {user.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .toUpperCase()
                      .slice(0, 2)}
                  </div>
                )}

                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium text-gray-900 truncate">{user.name}</h3>
                    {lastMessage?.time && (
                      <span className="text-xs text-gray-400 whitespace-nowrap ml-2">{lastMessage.time}</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-500 truncate">{lastMessage?.text || "No messages yet"}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChatSidebar;
