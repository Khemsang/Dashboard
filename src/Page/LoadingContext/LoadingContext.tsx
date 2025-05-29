import React, { createContext, useContext, useState, useRef } from "react";

type LoadingContextType = {
  showSpinner: boolean;
  startDelayedSpinner: () => void;
  stopSpinner: () => void;
};

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const LoadingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [showSpinner, setShowSpinner] = useState(false);

  // ✅ Better type for browser compatibility
  const timeoutId = useRef<ReturnType<typeof setTimeout> | null>(null);

  const startDelayedSpinner = () => {
    if (timeoutId.current) clearTimeout(timeoutId.current);
    timeoutId.current = setTimeout(() => setShowSpinner(true), 500);
  };

  const stopSpinner = () => {
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
      timeoutId.current = null;
    }
    setShowSpinner(false);
  };

  return (
    <LoadingContext.Provider value={{ showSpinner, startDelayedSpinner, stopSpinner }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) throw new Error("useLoading must be used within a LoadingProvider");
  return context;
};
