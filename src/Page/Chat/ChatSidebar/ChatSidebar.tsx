import React, { useState, useEffect, useRef, type ChangeEvent, } from "react";

interface Story {
  id: string;
  imageUrl: string;
  timestamp: number;
  type?: "image" | "video";
}

interface User {
  id: string;
  name: string;
  profilePic?: string;
  lastMessage?: string;
  hasStory?: boolean;
  stories?: Story[];
}

interface ChatSidebarProps {
  users: User[];
  onUserSelect: (user: User) => void;
  currentUser: User;
}

const STORY_EXPIRATION_TIME = 24 * 60 * 60 * 1000; // 24 hours in ms
const STORY_DISPLAY_DURATION = 5000; // 5 seconds per story

const ChatSidebar: React.FC<ChatSidebarProps> = ({
  users,
  onUserSelect,
  currentUser,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [storyModalUser, setStoryModalUser] = useState<User | null>(null);
  const [storyViewerIndex, setStoryViewerIndex] = useState(0);
  const [storiesByUser, setStoriesByUser] = useState<Record<string, Story[]>>(() => {
    const map: Record<string, Story[]> = {};
    users.forEach((user) => {
      if (user.stories) {
        // Filter expired stories
        map[user.id] = user.stories.filter(
          (story) => Date.now() - story.timestamp < STORY_EXPIRATION_TIME
        );
      } else {
        map[user.id] = [];
      }
    });
    return map;
  });

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  // Filter users based on search term
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Users with stories (non-expired only)
  const usersWithStories = users.filter(
    (user) => (storiesByUser[user.id]?.length ?? 0) > 0
  );

  // Handle story upload (image or video)
  const handleStoryUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const newStory: Story = {
        id: Math.random().toString(36).slice(2, 9),
        imageUrl: reader.result as string,
        timestamp: Date.now(),
        type: file.type.startsWith("video") ? "video" : "image",
      };
      setStoriesByUser((prev) => ({
        ...prev,
        [currentUser.id]: [...(prev[currentUser.id] || []), newStory],
      }));
    };

    reader.readAsDataURL(file);
  };

  // Auto-advance stories
  useEffect(() => {
    if (!storyModalUser) {
      setProgress(0);
      if (timerRef.current) clearTimeout(timerRef.current);
      return;
    }
    setProgress(0);

    const increment = 100 / (STORY_DISPLAY_DURATION / 100);
    let localProgress = 0;

    timerRef.current = setInterval(() => {
      localProgress += increment;
      setProgress(localProgress);
      if (localProgress >= 100) {
        setStoryViewerIndex((prev) => {
          const next = prev + 1;
          if (next >= (storiesByUser[storyModalUser.id]?.length ?? 0)) {
            setStoryModalUser(null);
            return 0;
          }
          return next;
        });
        setProgress(0);
      }
    }, 100);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [storyViewerIndex, storyModalUser, storiesByUser]);

  // Manual navigation resets progress
  const goToNextStory = () => {
    setStoryViewerIndex((prev) => {
      const next = prev + 1;
      if (storyModalUser && next >= (storiesByUser[storyModalUser.id]?.length ?? 0)) {
        setStoryModalUser(null);
        return 0;
      }
      return next;
    });
    setProgress(0);
  };

  const goToPrevStory = () => {
    setStoryViewerIndex((prev) => (prev === 0 ? 0 : prev - 1));
    setProgress(0);
  };

  return (
    <div className="w-full max-w-sm bg-white h-full p-4 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Active Conversations</h2>
        <span className="bg-gray-100 text-sm px-2 py-1 rounded-full">
          {filteredUsers.length}
        </span>
      </div>

      {/* Story Mode */}
      <div className="mb-4 overflow-x-auto no-scrollbar flex space-x-4 px-1">
        {/* Story upload button for current user */}
        <div className="flex flex-col items-center cursor-pointer">
          <label
            htmlFor="storyUpload"
            className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center text-2xl font-bold text-gray-600 border-2 border-dashed border-gray-400 hover:border-blue-500"
          >
            +
          </label>
          <p className="text-xs text-gray-700 mt-1 max-w-[60px] truncate text-center">
            Your Story
          </p>
          <input
            id="storyUpload"
            type="file"
            accept="image/*,video/*"
            className="hidden"
            onChange={handleStoryUpload}
          />
        </div>

        {/* Other users' stories */}
        {usersWithStories.map((user) => (
          <div
            key={user.id}
            onClick={() => {
              setStoryModalUser(user);
              setStoryViewerIndex(0);
            }}
            className="flex flex-col items-center cursor-pointer"
          >
            <div className="w-14 h-14 rounded-full p-[2px] border-2 border-gradient-to-tr from-pink-500 via-red-500 to-yellow-500">
              {user.profilePic ? (
                <img
                  src={user.profilePic}
                  alt={user.name}
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                <div className="w-full h-full rounded-full bg-gray-300 flex items-center justify-center text-xs font-bold text-white uppercase">
                  {user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)
                    .toUpperCase()}
                </div>
              )}
            </div>
            <p className="text-xs text-gray-700 mt-1 max-w-[60px] truncate text-center">
              {user.name}
            </p>
          </div>
        ))}
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
                    .slice(0, 2)
                    .toUpperCase()}
                </div>
              )}
              {user && (
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
              )}
            </div>

            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">{user.name}</p>
              <p className="text-xs text-gray-500 truncate w-48">{user.lastMessage}</p>
            </div>
          </div>
        ))}

        {filteredUsers.length === 0 && (
          <p className="text-sm text-gray-500 text-center mt-4">No users found.</p>
        )}
      </div>

      {/* Story Viewer Modal */}
      {storyModalUser && storiesByUser[storyModalUser.id]?.length ? (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={() => setStoryModalUser(null)}
        >
          <div
            className="max-w-lg w-full bg-black rounded-lg relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Progress Bar Container */}
            <div className="absolute top-2 left-2 right-2 flex space-x-1">
              {storiesByUser[storyModalUser.id].map((_, idx) => (
                <div
                  key={idx}
                  className={`h-1 rounded bg-white bg-opacity-40`}
                  style={{
                    flex: 1,
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {idx === storyViewerIndex && (
                    <div
                      className="h-1 bg-white absolute top-0 left-0"
                      style={{ width: `${progress}%`, transition: "width 0.1s linear" }}
                    />
                  )}
                  {idx < storyViewerIndex && (
                    <div className="h-1 bg-white absolute top-0 left-0 w-full" />
                  )}
                </div>
              ))}
            </div>

            {/* Story content (image or video) */}
            {storiesByUser[storyModalUser.id][storyViewerIndex].type ===
            "video" ? (
              <video
                src={storiesByUser[storyModalUser.id][storyViewerIndex].imageUrl}
                autoPlay
                muted
                playsInline
                controls={false}
                className="w-full max-h-[80vh] rounded-lg object-contain"
                onEnded={goToNextStory}
              />
            ) : (
              <img
                src={storiesByUser[storyModalUser.id][storyViewerIndex].imageUrl}
                alt={`Story ${storyViewerIndex + 1}`}
                className="w-full max-h-[80vh] object-contain rounded-lg"
              />
            )}

            {/* Navigation buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevStory();
              }}
              className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-60 text-white rounded-full p-2"
            >
              ‹
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNextStory();
              }}
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-60 text-white rounded-full p-2"
            >
              ›
            </button>

            {/* Close button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setStoryModalUser(null);
              }}
              className="absolute top-2 right-2 text-white text-xl font-bold"
            >
              ×
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ChatSidebar;
