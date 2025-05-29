// types/user.ts
export interface ChatMessage {
  sender: string;
  text: string;
  time: string;
}

// types/user.ts
export interface User {
  id: string | number; 
  name: string;
  profilePic?: string;
  lastMessage?: string;
  messages: ChatMessage[];
  bio?: string;
  website?: string;
}
