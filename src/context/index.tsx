import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

interface AppContextType {
  isDarkTheme: boolean;
  toggleTheme: () => void;
}

const AppContext = createContext<AppContextType>({
  isDarkTheme: false,
  toggleTheme: () => {},
});

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
    const body = document.querySelector("body");
    body?.classList.toggle("dark-theme");
  };

  return (
    <AppContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
