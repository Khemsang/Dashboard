
import React, { createContext, useState, useContext, type ReactNode } from "react";

interface User {
  id: string;
  name: string;
  role: string;
  profileImage: string;
}

interface UserContextType {
  currentUser: User;
  setCurrentUser: React.Dispatch<React.SetStateAction<User>>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User>({
    id: "1",
    name: "Thomas Anree",
    role: "UX Designer",
    profileImage: "https://i.pravatar.cc/150?img=5",
  });

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser must be used within a UserProvider");
  return context;
};


