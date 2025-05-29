import { useState, useEffect, useCallback } from "react";
import { activeConversations } from "../../Constants/Chat"; // your data source
import { FaTimes } from "react-icons/fa";
import { MoveLeft } from "lucide-react";
import type { User } from "../../types/user"; // User type with id: string | number
import ChatSidebar from "./ChatSidebar/ChatSidebar";
import ChatWindow from "./ChatWindow/ChatWindow";
import ProfileSidebar from "./ProfileSidebar/ProfileSidebar";

const useIsSmallScreen = () => {
  const [isSmall, setIsSmall] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );

  useEffect(() => {
    const handleResize = () => setIsSmall(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isSmall;
};

const Chat = () => {
  const isSmallScreen = useIsSmallScreen();

  const [conversations, setConversations] = useState<User[]>(activeConversations);
  const [selectedUserId, setSelectedUserId] = useState<string | number | null>(
    activeConversations.length > 0 ? activeConversations[0].id : null
  );
  const [sidebarOpen, setSidebarOpen] = useState(!isSmallScreen);
  const [showProfileSidebar, setShowProfileSidebar] = useState(false);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    setSidebarOpen(!isSmallScreen);
    setShowProfileSidebar(false);
  }, [isSmallScreen]);

  // Find selected user by id (string or number)
  const selectedUser = conversations.find((u) => u.id === selectedUserId) ?? null;
  const selectedMessages = selectedUser?.messages ?? [];

  const handleUserSelect = useCallback(
    (user: User) => {
      setSelectedUserId(user.id);
      if (isSmallScreen) {
        setSidebarOpen(false);
        setShowProfileSidebar(false);
      }
      setNewMessage("");
    },
    [isSmallScreen]
  );

  const handleProfileClick = () => {
    if (isSmallScreen) {
      setShowProfileSidebar((prev) => !prev);
    }
  };

  const handleNewMessageChange = (val: string) => {
    setNewMessage(val);
  };

  const handleSendMessage = () => {
    if (!newMessage.trim() || selectedUserId === null) return;

    setConversations((prevConversations) =>
      prevConversations.map((user) =>
        user.id === selectedUserId
          ? {
              ...user,
              messages: [
                ...user.messages,
                {
                  sender: "You",
                  text: newMessage.trim(),
                  time: new Date().toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  }),
                },
              ],
              lastMessage: newMessage.trim(),
            }
          : user
      )
    );
    setNewMessage("");
  };

  return (
    <div className="flex h-screen w-full overflow-hidden bg-gray-50 relative">
      {!sidebarOpen && isSmallScreen && (
        <button
          onClick={() => setSidebarOpen(true)}
          className="absolute top-4 left-4 z-50 p-2 rounded-md bg-white shadow-md md:hidden"
          aria-label="Open sidebar"
        >
          <MoveLeft className="text-gray-600" size={20} />
        </button>
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 bg-white border-r overflow-y-auto z-40
          w-full max-w-xs transition-transform duration-300 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:relative md:translate-x-0 md:w-80`}
      >
        <ChatSidebar
          users={conversations}
          selectedUserId={selectedUserId}
          onUserSelect={handleUserSelect}
          onClose={() => setSidebarOpen(false)}
        />
      </div>

      {/* Chat Window */}
      <div
        className={`flex-1 flex flex-col h-full bg-white transition-transform duration-300 ease-in-out
          ${isSmallScreen && sidebarOpen ? "translate-x-full" : "translate-x-0"}`}
      >
        {selectedUser ? (
          <ChatWindow
            chat={selectedMessages}
            newMessage={newMessage}
            onChange={handleNewMessageChange}
            onSend={handleSendMessage}
            user={selectedUser}
            onProfileClick={handleProfileClick}
          />
        ) : (
          <div className="flex h-full items-center justify-center text-gray-400">
            <p>Select a conversation to start chatting</p>
          </div>
        )}
      </div>

      {/* Profile Sidebar */}
      <div
        className={`fixed inset-y-0 right-0 bg-white border-l overflow-y-auto z-40
          w-full max-w-xs transition-transform duration-300 ease-in-out
          ${showProfileSidebar ? "translate-x-0" : "translate-x-full"}
          lg:relative lg:translate-x-0 lg:w-80`}
      >
        {selectedUser && (
          <>
            {showProfileSidebar && (
              <button
                onClick={() => setShowProfileSidebar(false)}
                className="absolute top-4 right-4 z-50 p-2 rounded-md bg-white shadow-md lg:hidden"
                aria-label="Close profile"
              >
                <FaTimes className="text-gray-600" size={20} />
              </button>
            )}
            <ProfileSidebar user={selectedUser} />
          </>
        )}
      </div>
    </div>
  );
};

export default Chat;
