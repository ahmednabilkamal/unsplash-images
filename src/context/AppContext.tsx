import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

interface AppContextType {
  isDarkTheme: boolean;
  toggleTheme: () => void;
  search: string;
  setSearch: (val: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const getInitialDarkTheme = () => {
  const savedTheme = localStorage.getItem("darkTheme");
  if (savedTheme !== null) return savedTheme === "true";
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
};

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkTheme());
  const [search, setSearch] = useState("cat");

  useEffect(() => {
    const body = document.querySelector("body");
    if (isDarkTheme) {
      body?.classList.add("dark-theme");
    } else {
      body?.classList.remove("dark-theme");
    }
  }, [isDarkTheme]);

  const toggleTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    localStorage.setItem("darkTheme", String(newDarkTheme));
  };

  return (
    <AppContext.Provider
      value={{ isDarkTheme, toggleTheme, search, setSearch }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
