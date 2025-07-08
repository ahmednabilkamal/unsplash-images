import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

import { useAppContext } from "../../context";

const Home = () => {
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

export { Home };
