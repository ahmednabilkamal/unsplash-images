import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

import { useAppContext } from "../../context";

const Gallery = () => {
  const { isDartTheme, toggleTheme } = useAppContext();

  return (
    <section className="toggle-container">
      <button className="dark-toggle" onClick={toggleTheme}>
        {isDartTheme ? (
          <BsFillSunFill className="toggle-icon" />
        ) : (
          <BsFillMoonFill className="toggle-icon" />
        )}
      </button>
    </section>
  );
};

export { Gallery };
