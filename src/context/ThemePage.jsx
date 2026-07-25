import { createContext, useState, useContext } from "react";

const ThemePage = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light"); // Boshlang'ich rejim: light

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemePage.Provider value={{ theme, toggleTheme }}>
      <div className={`app-container ${theme}`}>{children}</div>
    </ThemePage.Provider>
  );
};

export const useTheme = () => useContext(ThemePage);
