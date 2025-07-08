import "./App.css";
import { SearchInput } from "./components";
import { ThemeContext } from "./context";
import { Gallery } from "./screens";

function App() {
  return (
    <>
      <ThemeContext />
      <SearchInput />
      <Gallery />
    </>
  );
}

export default App;
