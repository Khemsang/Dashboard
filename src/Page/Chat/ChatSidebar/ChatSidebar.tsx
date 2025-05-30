import React, { useState } from "react";
import type { User } from "../../../Constants/Chat";
import { Search } from "lucide-react";

interface ChatSidebarProps {
  users: User[];
  onUserSelect: (user: User) => void;
}

const ChatSidebar: React.FC<ChatSidebarProps> = ({ users, onUserSelect }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter users based on search term
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full max-w-sm bg-white border-r h-full p-4 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Active Conversations</h2>
        <span className="bg-gray-100 text-sm px-2 py-1 rounded-full">
          {filteredUsers.length}
        </span>
      </div>

      {/* Search Input */}
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border rounded-md text-sm focus:outline-none focus:ring focus:border-blue-300"
        />
        <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
      </div>

      {/* List of Conversations */}
      <div className="space-y-4 overflow-y-auto pr-2 flex-1">
        {filteredUsers.map((user) => (
          <div
            key={user.id}
            onClick={() => onUserSelect(user)}
            className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 px-2 py-1 rounded-md"
          >
            <div className="relative">
              {user.profilePic ? (
                <img
                  src={user.profilePic}
                  alt={user.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-xs font-bold text-white uppercase">
                  {user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)}
                </div>
              )}
              {user && (
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
              )}
            </div>

            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">{user.name}</p>
              <p className="text-xs text-gray-500 truncate w-48">
                {user.lastMessage}
              </p>
            </div>
          </div>
        ))}

        {filteredUsers.length === 0 && (
          <p className="text-sm text-gray-500 text-center mt-4">No users found.</p>
        )}
      </div>
    </div>
  );
};

export default ChatSidebar;
