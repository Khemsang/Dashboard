import React, { useState, useEffect } from 'react';
import ChatSidebar from './ChatSidebar/ChatSidebar';
import ChatWindow from './ChatWindow/ChatWindow';
import ProfileSidebar from './ProfileSidebar/ProfileSidebar'; 
import { type User, type ChatMessage, chatMessages, activeConversations } from '../../Constants/Chat';

type View = 'sidebar' | 'chat' | 'profile';

const Chat: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [profileUser, setProfileUser] = useState<User | null>(null); 
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState<ChatMessage[]>([]);
  const [view, setView] = useState<View>('sidebar');  // ✅ Mobile starts on sidebar

  // On mount, preload first user data but stay in sidebar view on mobile
  useEffect(() => {
    if (activeConversations.length > 0 && !selectedUser) {
      const firstUser = activeConversations[0];
      setSelectedUser(firstUser);
      setProfileUser(firstUser); // set for mobile profile toggle
      setChat(chatMessages[firstUser.id] || []);
      setView('sidebar');  // ✅ Keep on sidebar view for mobile
    }
  }, [selectedUser]);

  const handleUserSelect = (user: User) => {
    setSelectedUser(user);
    setProfileUser(user);  // sync profile user for mobile view toggle
    const messages = chatMessages[user.id] || [];
    setChat(messages);
    setView('chat');
  };

  const handleSend = () => {
    if (!message.trim() || !selectedUser) return;
    const newMsg: ChatMessage = {
      text: message,
      sender: 'You',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    const updatedChat = [...chat, newMsg];
    setChat(updatedChat);
    setMessage('');
    chatMessages[selectedUser.id] = updatedChat;
  };

  const handleProfileClick = () => {
    if (selectedUser) {
      setProfileUser(selectedUser);
      setView('profile');  // switch to profile view on mobile
    }
  };

  const handleBack = () => {
    if (view === 'profile') {
      setView('chat');
    } else if (view === 'chat') {
      setView('sidebar');
      setSelectedUser(null);
      setProfileUser(null);
    }
  };

  return (
    <div className="flex h-full w-full">
      {/* Desktop Layout */}
      <div className="hidden md:flex flex-grow h-full">
        <div className="flex flex-grow">
          <div className="flex-[1]">
            <ChatSidebar users={activeConversations} onUserSelect={handleUserSelect} />
          </div>
          <div className="flex-[2] ">
            {selectedUser ? (
              <ChatWindow
                chat={chat}
                newMessage={message}
                onChange={setMessage}
                onSend={handleSend}
                user={selectedUser}
                onProfileClick={handleProfileClick}
              />
            ) : (
              <div className="h-full flex items-center justify-center text-gray-400">
                Select a user to start chatting
              </div>
            )}
          </div>
          <div className="flex-[1]">
            {/* On desktop, always show profile of selected user */}
            {selectedUser ? (
              <ProfileSidebar user={selectedUser} />
            ) : (
              <div className="h-full flex items-center justify-center text-gray-400">
                Select a user to view profile
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="flex flex-col w-full md:hidden h-full">
        {view === 'sidebar' && (
          <>
            <div className="flex items-center p-4 border-b">
              <h2 className="text-lg font-semibold">Chats</h2>
            </div>
            <ChatSidebar users={activeConversations} onUserSelect={handleUserSelect} />
          </>
        )}

        {view === 'chat' && selectedUser && (
          <>
            <div className="flex items-center p-4 border-b">
              <button
                onClick={handleBack}
                className="mr-4 px-2 py-1 rounded bg-gray-200 hover:bg-gray-300"
              >
                Back
              </button>
              <h2 className="text-lg font-semibold">{selectedUser.name}</h2>
            </div>
            <ChatWindow
              chat={chat}
              newMessage={message}
              onChange={setMessage}
              onSend={handleSend}
              user={selectedUser}
              onProfileClick={handleProfileClick}
            />
          </>
        )}

        {view === 'profile' && profileUser && (
          <>
            <div className="flex items-center p-4 border-b">
              <button
                onClick={handleBack}
                className="mr-4 px-2 py-1 rounded bg-gray-200 hover:bg-gray-300"
              >
                Back
              </button>
              <h2 className="text-lg font-semibold">Profile</h2>
            </div>
            <ProfileSidebar user={profileUser} />
          </>
        )}
      </div>
    </div>
  );
};

export default Chat;
