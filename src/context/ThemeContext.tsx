import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

import { useAppContext } from "./AppContext";

const ThemeContext = () => {
  const { isDarkTheme, toggleTheme } = useAppContext();

  return (
    <section className="toggle-container">
      <button className="dark-toggle" onClick={toggleTheme}>
        {isDarkTheme ? (
          <BsFillMoonFill className="toggle-icon" />
        ) : (
          <BsFillSunFill className="toggle-icon" />
        )}
      </button>
    </section>
  );
};

export { ThemeContext };
