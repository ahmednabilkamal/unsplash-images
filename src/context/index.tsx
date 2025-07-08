import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

interface AppContextType {
  isDartTheme: boolean;
  toggleTheme: () => void;
}

const AppContext = createContext<AppContextType>({
  isDartTheme: false,
  toggleTheme: () => {},
});

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [isDartTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
    const body = document.querySelector("body");
    body?.classList.toggle("dark-theme");
  };

  return (
    <AppContext.Provider value={{ isDartTheme, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
