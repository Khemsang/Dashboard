import React, { useEffect, useRef } from "react";
import type { ChatMessage, User } from "../../../Constants/Chat";

interface Props {
  chat: ChatMessage[];
  newMessage: string;
  onChange: (val: string) => void;
  onSend: () => void;
  user: User;
  onProfileClick: () => void;
}

const ChatWindow: React.FC<Props> = ({
  chat,
  newMessage,
  onChange,
  onSend,
  user,
  onProfileClick,
}) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);


  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") onSend();
  };

  return (
    <div className="flex flex-col h-full bg-white">

      <div className="flex items-center gap-3 p-4 border-b">
        <button onClick={onProfileClick} aria-label="View profile">
          {user.profilePic ? (
            <img
              src={user.profilePic}
              alt={user.name}
              className="w-10 h-10 rounded-full object-cover"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold">
              {user.name
                .split(" ")
                .map((n) => n[0])
                .join("")
                .toUpperCase()
                .slice(0, 2)}
            </div>
          )}
        </button>
        <div>
          <h2 className="text-lg font-semibold text-gray-900">{user.name}</h2>
          <p className="text-sm text-gray-500">Active now</p>
        </div>
      </div>

  
      <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-3">
        {chat.map((msg, index) => (
          <div
            key={index}
            className={`flex ${msg.sender === "You" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] rounded-xl p-3 ${
                msg.sender === "You"
                  ? "bg-blue-500 text-white rounded-br-none"
                  : "bg-white text-gray-800 rounded-bl-none shadow"
              }`}
            >
              <p className="text-sm">{msg.text}</p>
              <p className={`text-xs mt-1 ${msg.sender === "You" ? "text-blue-100" : "text-gray-400"}`}>
                {msg.time}
              </p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

  
      <div className="p-3 border-t bg-white">
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => onChange(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Type your message..."
            className="flex-1 border rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <button
            onClick={onSend}
            className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600 focus:outline-none"
            aria-label="Send message"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
